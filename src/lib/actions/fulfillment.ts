"use server";

import { prisma } from "@/lib/prisma";
import { getAuthSession } from "@/lib/auth-session";
import { releaseProjectFunds } from "@/lib/actions/economy";
import { logProjectEvent } from "@/lib/projects/events";
import { getProjectAccess } from "@/lib/projects/access";
import { maybeAutoReleaseProject } from "@/lib/projects/auto-release";
import { AUTO_RELEASE_DAYS } from "@/lib/projects/constants";

function getAutoReleaseDate() {
  const date = new Date();
  date.setDate(date.getDate() + AUTO_RELEASE_DAYS);
  return date;
}

export async function addDeliverable(
  projectId: string,
  platform: string,
  url: string,
  notes?: string,
) {
  const session = await getAuthSession();
  const authUserId = session?.user.id;

  if (!authUserId) {
    throw new Error("Unauthorized");
  }

  const user = await prisma.user.findUnique({
    where: { authUserId },
    select: { id: true, role: true },
  });

  if (!user || user.role !== "CREATOR") {
    throw new Error("Unauthorized");
  }

  const access = await getProjectAccess(projectId, user.id);
  if (!access || access.role !== "CREATOR") {
    throw new Error("Unauthorized");
  }

  if (!["ACTIVE", "REVISION_REQUESTED"].includes(access.status)) {
    throw new Error("Cannot add deliverables in the current project state");
  }

  const count = await prisma.projectDeliverable.count({
    where: { projectId },
  });

  const deliverable = await prisma.projectDeliverable.create({
    data: {
      projectId,
      platform: platform.trim(),
      url: url.trim(),
      notes: notes?.trim() || null,
      sortOrder: count,
    },
  });

  await logProjectEvent({
    projectId,
    type: "DELIVERABLE_ADDED",
    actorId: user.id,
    note: platform,
  });

  return deliverable;
}

export async function removeDeliverable(deliverableId: string) {
  const session = await getAuthSession();
  const authUserId = session?.user.id;

  if (!authUserId) {
    throw new Error("Unauthorized");
  }

  const user = await prisma.user.findUnique({
    where: { authUserId },
    select: { id: true, role: true },
  });

  if (!user || user.role !== "CREATOR") {
    throw new Error("Unauthorized");
  }

  const deliverable = await prisma.projectDeliverable.findUnique({
    where: { id: deliverableId },
    include: { project: { select: { id: true, creatorId: true, status: true } } },
  });

  if (!deliverable || deliverable.project.creatorId !== user.id) {
    throw new Error("Unauthorized");
  }

  if (!["ACTIVE", "REVISION_REQUESTED"].includes(deliverable.project.status)) {
    throw new Error("Cannot remove deliverables in the current project state");
  }

  await prisma.projectDeliverable.delete({
    where: { id: deliverableId },
  });

  await logProjectEvent({
    projectId: deliverable.project.id,
    type: "DELIVERABLE_REMOVED",
    actorId: user.id,
  });
}

export async function submitProjectForReview(
  projectId: string,
  submissionNote?: string,
) {
  const session = await getAuthSession();
  const authUserId = session?.user.id;

  if (!authUserId) {
    throw new Error("Unauthorized");
  }

  const user = await prisma.user.findUnique({
    where: { authUserId },
    select: { id: true, role: true },
  });

  if (!user || user.role !== "CREATOR") {
    throw new Error("Unauthorized");
  }

  const access = await getProjectAccess(projectId, user.id);
  if (!access || access.role !== "CREATOR") {
    throw new Error("Unauthorized");
  }

  if (!["ACTIVE", "REVISION_REQUESTED"].includes(access.status)) {
    throw new Error("Cannot submit in the current project state");
  }

  const deliverableCount = await prisma.projectDeliverable.count({
    where: { projectId },
  });

  if (deliverableCount === 0) {
    throw new Error("Add at least one deliverable before submitting");
  }

  const autoReleaseAt = getAutoReleaseDate();

  await prisma.$transaction(async (tx) => {
    await tx.project.update({
      where: { id: projectId },
      data: {
        status: "SUBMITTED",
        creatorSubmittedAt: new Date(),
        creatorSubmissionNote: submissionNote?.trim() || null,
      },
    });

    await tx.projectEscrow.updateMany({
      where: { projectId, status: "HELD" },
      data: { autoReleaseAt },
    });

    await tx.projectEvent.create({
      data: {
        projectId,
        type: "CREATOR_SUBMITTED",
        actorId: user.id,
        note: submissionNote?.trim() || undefined,
      },
    });
  });
}

export async function requestProjectRevision(projectId: string, note?: string) {
  const session = await getAuthSession();
  const authUserId = session?.user.id;

  if (!authUserId) {
    throw new Error("Unauthorized");
  }

  const user = await prisma.user.findUnique({
    where: { authUserId },
    select: { id: true, role: true },
  });

  if (!user || user.role !== "BRAND") {
    throw new Error("Unauthorized");
  }

  const access = await getProjectAccess(projectId, user.id);
  if (!access || access.role !== "BRAND") {
    throw new Error("Unauthorized");
  }

  if (access.status !== "SUBMITTED") {
    throw new Error("Can only request revision on submitted work");
  }

  await prisma.$transaction(async (tx) => {
    await tx.project.update({
      where: { id: projectId },
      data: { status: "REVISION_REQUESTED" },
    });

    await tx.projectEscrow.updateMany({
      where: { projectId, status: "HELD" },
      data: { autoReleaseAt: null },
    });

    await tx.projectEvent.create({
      data: {
        projectId,
        type: "REVISION_REQUESTED",
        actorId: user.id,
        note: note?.trim() || undefined,
      },
    });
  });
}

export async function approveProjectSubmission(projectId: string) {
  const session = await getAuthSession();
  const authUserId = session?.user.id;

  if (!authUserId) {
    throw new Error("Unauthorized");
  }

  const user = await prisma.user.findUnique({
    where: { authUserId },
    select: { id: true, role: true },
  });

  if (!user || user.role !== "BRAND") {
    throw new Error("Unauthorized");
  }

  const access = await getProjectAccess(projectId, user.id);
  if (!access || access.role !== "BRAND") {
    throw new Error("Unauthorized");
  }

  if (access.status !== "SUBMITTED") {
    throw new Error("Can only approve submitted work");
  }

  await prisma.project.update({
    where: { id: projectId },
    data: { approvedById: user.id },
  });

  await releaseProjectFunds(projectId, "BRAND_APPROVAL");
}

/** Check and process auto-release before loading project data */
export async function ensureProjectAutoRelease(projectId: string) {
  await maybeAutoReleaseProject(projectId);
}

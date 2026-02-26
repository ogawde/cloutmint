"use server";

import { prisma } from "@/lib/prisma";
import { handleProjectPayment } from "@/lib/actions/economy";
import { getAuthSession } from "@/lib/auth-session";

export async function submitWork(projectId: string, videoUrl: string) {
  const session = await getAuthSession();
  const authUserId = session?.user.id;

  if (!authUserId) {
    throw new Error("Unauthorized");
  }

  const user = await prisma.user.findUnique({
    where: {
      authUserId,
    },
    select: {
      id: true,
      role: true,
    },
  });

  if (!user || user.role !== "CREATOR") {
    throw new Error("Unauthorized");
  }

  const project = await prisma.project.findUnique({
    where: {
      id: projectId,
    },
    select: {
      creatorId: true,
    },
  });

  if (!project || project.creatorId !== user.id) {
    throw new Error("Unauthorized");
  }

  await prisma.project.update({
    where: {
      id: projectId,
    },
    data: {
      videoUrl,
      submissionStatus: "PENDING",
    },
  });
}

export async function approveWork(projectId: string) {
  const session = await getAuthSession();
  const authUserId = session?.user.id;

  if (!authUserId) {
    throw new Error("Unauthorized");
  }

  const user = await prisma.user.findUnique({
    where: {
      authUserId,
    },
    select: {
      id: true,
      role: true,
    },
  });

  if (!user || user.role !== "BRAND") {
    throw new Error("Unauthorized");
  }

  const project = await prisma.project.findUnique({
    where: {
      id: projectId,
    },
    select: {
      id: true,
      briefId: true,
      brandId: true,
    },
  });

  if (!project || project.brandId !== user.id) {
    throw new Error("Unauthorized");
  }

  await prisma.$transaction(async (tx) => {
    await tx.project.update({
      where: {
        id: projectId,
      },
      data: {
        submissionStatus: "APPROVED",
      },
    });

    await tx.brief.update({
      where: {
        id: project.briefId,
      },
      data: {
        status: "COMPLETED",
      },
    });
  });

  await handleProjectPayment(projectId);
}


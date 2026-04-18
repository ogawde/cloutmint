"use server";

import { prisma } from "@/lib/prisma";
import { logProjectEvent } from "@/lib/projects/events";
import type { EscrowReleaseReason } from "@/generated/prisma";

/** Hold brand credits in escrow when funding a project */
export async function holdProjectFunds(projectId: string) {
  const project = await prisma.project.findUnique({
    where: { id: projectId },
    include: {
      escrow: true,
      brand: { select: { id: true, credits: true } },
    },
  });

  if (!project) {
    throw new Error("Project not found");
  }

  if (project.status !== "AWAITING_FUNDING") {
    throw new Error("Project is not awaiting funding");
  }

  if (project.escrow) {
    throw new Error("Project is already funded");
  }

  if (project.brand.credits < project.agreedAmount) {
    throw new Error("Insufficient credits");
  }

  await prisma.$transaction(async (tx) => {
    await tx.user.update({
      where: { id: project.brandId },
      data: {
        credits: { decrement: project.agreedAmount },
      },
    });

    await tx.projectEscrow.create({
      data: {
        projectId: project.id,
        brandId: project.brandId,
        creatorId: project.creatorId,
        amount: project.agreedAmount,
        status: "HELD",
      },
    });

    await tx.project.update({
      where: { id: project.id },
      data: { status: "ACTIVE" },
    });

    await tx.projectEvent.create({
      data: {
        projectId: project.id,
        type: "ESCROW_HELD",
        actorId: project.brandId,
        note: `Held ${project.agreedAmount} credits`,
      },
    });
  });
}

/** Release held credits to the creator */
export async function releaseProjectFunds(
  projectId: string,
  reason: EscrowReleaseReason,
) {
  const project = await prisma.project.findUnique({
    where: { id: projectId },
    include: {
      escrow: true,
      brief: { select: { id: true } },
    },
  });

  if (!project?.escrow || project.escrow.status !== "HELD") {
    throw new Error("No held funds for this project");
  }

  const isAuto = reason === "AUTO_TIMEOUT";
  const nextStatus = isAuto ? "AUTO_RELEASED" : "APPROVED";
  const eventType = isAuto ? "AUTO_RELEASED" : "BRAND_APPROVED";

  await prisma.$transaction(async (tx) => {
    await tx.user.update({
      where: { id: project.creatorId },
      data: {
        earnings: { increment: project.escrow!.amount },
      },
    });

    await tx.projectEscrow.update({
      where: { id: project.escrow!.id },
      data: {
        status: "RELEASED",
        releasedAt: new Date(),
        releaseReason: reason,
        autoReleaseAt: null,
      },
    });

    await tx.project.update({
      where: { id: project.id },
      data: {
        status: nextStatus,
        brandApprovedAt: isAuto ? undefined : new Date(),
      },
    });

    await tx.brief.update({
      where: { id: project.briefId },
      data: { status: "COMPLETED" },
    });

    await tx.projectEvent.create({
      data: {
        projectId: project.id,
        type: eventType,
        note: `Released ${project.escrow!.amount} credits to creator`,
        metadata: { reason },
      },
    });
  });
}

/** Refund held credits back to the brand */
export async function refundProjectFunds(projectId: string, actorId: string) {
  const project = await prisma.project.findUnique({
    where: { id: projectId },
    include: { escrow: true },
  });

  if (!project?.escrow || project.escrow.status !== "HELD") {
    throw new Error("No held funds to refund");
  }

  await prisma.$transaction(async (tx) => {
    await tx.user.update({
      where: { id: project.brandId },
      data: {
        credits: { increment: project.escrow!.amount },
      },
    });

    await tx.projectEscrow.update({
      where: { id: project.escrow!.id },
      data: {
        status: "REFUNDED",
        releasedAt: new Date(),
        releaseReason: "MANUAL_REFUND",
      },
    });

    await tx.project.update({
      where: { id: project.id },
      data: { status: "CANCELED" },
    });

    await tx.projectEvent.create({
      data: {
        projectId: project.id,
        type: "ESCROW_REFUNDED",
        actorId,
        note: `Refunded ${project.escrow!.amount} credits to brand`,
      },
    });
  });
}

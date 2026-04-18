"use server";

import { prisma } from "@/lib/prisma";
import { getAuthSession } from "@/lib/auth-session";
import { holdProjectFunds } from "@/lib/actions/economy";

export async function acceptBid(bidId: string) {
  const session = await getAuthSession();
  const authUserId = session?.user.id;

  if (!authUserId) {
    throw new Error("Unauthorized");
  }

  const brandUser = await prisma.user.findUnique({
    where: { authUserId },
    select: { id: true, role: true },
  });

  if (!brandUser || brandUser.role !== "BRAND") {
    throw new Error("Unauthorized");
  }

  const bid = await prisma.bid.findUnique({
    where: { id: bidId },
    select: {
      id: true,
      amount: true,
      status: true,
      briefId: true,
      creatorId: true,
      brief: { select: { brandId: true } },
    },
  });

  if (!bid || bid.brief.brandId !== brandUser.id) {
    throw new Error("Unauthorized");
  }

  if (bid.status !== "PENDING") {
    throw new Error("Only pending bids can be accepted");
  }

  let projectId: string;

  await prisma.$transaction(async (tx) => {
    await tx.bid.updateMany({
      where: {
        briefId: bid.briefId,
        id: { not: bid.id },
      },
      data: { status: "REJECTED" },
    });

    await tx.bid.update({
      where: { id: bid.id },
      data: { status: "ACCEPTED" },
    });

    await tx.brief.update({
      where: { id: bid.briefId },
      data: { status: "IN_PROGRESS" },
    });

    const existingProject = await tx.project.findFirst({
      where: { briefId: bid.briefId },
    });

    if (existingProject) {
      const updated = await tx.project.update({
        where: { id: existingProject.id },
        data: {
          bidId: bid.id,
          creatorId: bid.creatorId,
          agreedAmount: bid.amount,
          status: "AWAITING_FUNDING",
        },
      });
      projectId = updated.id;
      return;
    }

    const created = await tx.project.create({
      data: {
        bidId: bid.id,
        briefId: bid.briefId,
        brandId: bid.brief.brandId,
        creatorId: bid.creatorId,
        agreedAmount: bid.amount,
        status: "AWAITING_FUNDING",
      },
    });
    projectId = created.id;
  });

  return { projectId: projectId! };
}

export async function fundProject(projectId: string) {
  const session = await getAuthSession();
  const authUserId = session?.user.id;

  if (!authUserId) {
    throw new Error("Unauthorized");
  }

  const brandUser = await prisma.user.findUnique({
    where: { authUserId },
    select: { id: true, role: true },
  });

  if (!brandUser || brandUser.role !== "BRAND") {
    throw new Error("Unauthorized");
  }

  const project = await prisma.project.findUnique({
    where: { id: projectId },
    select: { brandId: true },
  });

  if (!project || project.brandId !== brandUser.id) {
    throw new Error("Unauthorized");
  }

  await holdProjectFunds(projectId);
}

export async function rejectBid(bidId: string) {
  const session = await getAuthSession();
  const authUserId = session?.user.id;

  if (!authUserId) {
    throw new Error("Unauthorized");
  }

  const brandUser = await prisma.user.findUnique({
    where: { authUserId },
    select: { id: true },
  });

  if (!brandUser) {
    throw new Error("Unauthorized");
  }

  const bid = await prisma.bid.findUnique({
    where: { id: bidId },
    select: {
      id: true,
      status: true,
      brief: { select: { brandId: true } },
    },
  });

  if (!bid || bid.brief.brandId !== brandUser.id) {
    throw new Error("Unauthorized");
  }

  if (bid.status !== "PENDING") {
    throw new Error("Only pending bids can be rejected");
  }

  await prisma.bid.update({
    where: { id: bid.id },
    data: { status: "REJECTED" },
  });
}

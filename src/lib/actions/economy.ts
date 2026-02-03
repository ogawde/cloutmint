"use server";

import { prisma } from "@/lib/prisma";

export async function handleProjectPayment(projectId: string) {
  const project = await prisma.project.findUnique({
    where: {
      id: projectId,
    },
    select: {
      id: true,
      brandId: true,
      creatorId: true,
      briefId: true,
    },
  });

  if (!project) {
    throw new Error("Project not found");
  }

  const bid = await prisma.bid.findFirst({
    where: {
      briefId: project.briefId,
      creatorId: project.creatorId,
      status: "ACCEPTED",
    },
    select: {
      amount: true,
    },
  });

  if (!bid) {
    throw new Error("Accepted bid not found for project");
  }

  const brand = await prisma.user.findUnique({
    where: {
      id: project.brandId,
    },
    select: {
      id: true,
      credits: true,
    },
  });

  if (!brand) {
    throw new Error("Brand not found");
  }

  if (brand.credits < bid.amount) {
    throw new Error("Insufficient credits");
  }

  await prisma.$transaction(async (tx) => {
    await tx.user.update({
      where: {
        id: project.brandId,
      },
      data: {
        credits: {
          decrement: bid.amount,
        },
      },
    });

    await tx.user.update({
      where: {
        id: project.creatorId,
      },
      data: {
        earnings: {
          increment: bid.amount,
        },
      },
    });
  });
}


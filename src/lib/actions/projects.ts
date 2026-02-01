"use server";

import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export async function acceptBid(bidId: string) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const brandUser = await prisma.user.findUnique({
    where: {
      clerkId: userId,
    },
    select: {
      id: true,
    },
  });

  if (!brandUser) {
    throw new Error("Unauthorized");
  }

  const bid = await prisma.bid.findUnique({
    where: {
      id: bidId,
    },
    select: {
      id: true,
      briefId: true,
      creatorId: true,
      brief: {
        select: {
          brandId: true,
        },
      },
    },
  });

  if (!bid || bid.brief.brandId !== brandUser.id) {
    throw new Error("Unauthorized");
  }

  await prisma.$transaction(async (tx) => {
    await tx.bid.update({
      where: {
        id: bid.id,
      },
      data: {
        status: "ACCEPTED",
      },
    });

    await tx.brief.update({
      where: {
        id: bid.briefId,
      },
      data: {
        status: "IN_PROGRESS",
      },
    });

    await tx.project.create({
      data: {
        briefId: bid.briefId,
        brandId: bid.brief.brandId,
        creatorId: bid.creatorId,
      },
    });
  });
}


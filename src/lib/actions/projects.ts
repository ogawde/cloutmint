"use server";

import { prisma } from "@/lib/prisma";
import { getAuthSession } from "@/lib/auth-session";

export async function acceptBid(bidId: string) {
  const session = await getAuthSession();
  const authUserId = session?.user.id;

  if (!authUserId) {
    throw new Error("Unauthorized");
  }

  const brandUser = await prisma.user.findUnique({
    where: {
      authUserId,
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


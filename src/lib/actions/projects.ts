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
    await tx.bid.updateMany({
      where: {
        briefId: bid.briefId,
        id: {
          not: bid.id,
        },
      },
      data: {
        status: "REJECTED",
      },
    });

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

    const existingProject = await tx.project.findFirst({
      where: {
        briefId: bid.briefId,
      },
      select: {
        id: true,
      },
    });

    if (!existingProject) {
      await tx.project.create({
        data: {
          briefId: bid.briefId,
          brandId: bid.brief.brandId,
          creatorId: bid.creatorId,
        },
      });
      return;
    }

    await tx.project.update({
      where: {
        id: existingProject.id,
      },
      data: {
        creatorId: bid.creatorId,
      },
    });
  });
}

export async function rejectBid(bidId: string) {
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
      status: true,
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

  if (bid.status !== "PENDING") {
    throw new Error("Only pending bids can be rejected");
  }

  await prisma.bid.update({
    where: {
      id: bid.id,
    },
    data: {
      status: "REJECTED",
    },
  });
}


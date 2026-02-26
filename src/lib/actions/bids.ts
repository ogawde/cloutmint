"use server";

import { prisma } from "@/lib/prisma";
import { getAuthSession } from "@/lib/auth-session";

type CreateBidInput = {
  briefId: string;
  amount: number;
  pitchText: string;
};

export async function createBid(input: CreateBidInput) {
  const { briefId, amount, pitchText } = input;

  const session = await getAuthSession();
  const authUserId = session?.user.id;

  if (!authUserId) {
    throw new Error("Unauthorized");
  }

  const creator = await prisma.user.findUnique({
    where: {
      authUserId,
    },
    select: {
      id: true,
      role: true,
    },
  });

  if (!creator || creator.role !== "CREATOR") {
    throw new Error("Only creators can submit bids.");
  }

  await prisma.bid.create({
    data: {
      briefId,
      amount,
      pitchText,
      creatorId: creator.id,
    },
  });
}


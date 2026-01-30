"use server";

import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

type CreateBidInput = {
  briefId: string;
  amount: number;
  pitchText: string;
};

export async function createBid(input: CreateBidInput) {
  const { briefId, amount, pitchText } = input;

  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const creator = await prisma.user.findUnique({
    where: {
      clerkId: userId,
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


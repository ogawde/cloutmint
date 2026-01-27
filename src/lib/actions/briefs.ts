"use server";

import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { generateHooks } from "@/lib/ai";
import { auth } from "@clerk/nextjs/server";

type CreateBriefInput = Pick<
  Prisma.Args<typeof prisma.brief, "create">["data"],
  "title" | "productDescription"
>;

export async function createBrief(input: CreateBriefInput) {
  const { title, productDescription } = input;

  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }

  const brandUser = await prisma.user.findUnique({
    where: { clerkId: userId },
    select: { id: true, role: true },
  });

  if (!brandUser || brandUser.role !== "BRAND") {
    throw new Error("Only authorized brands can create briefs.");
  }

  const { hook1, hook2, hook3, reelScript } = await generateHooks(productDescription);

  const brief = await prisma.brief.create({
    data: {
      title,
      productDescription,
      hook1,
      hook2,
      hook3,
      reelScript,
      brand: { connect: { id: brandUser.id } },
    },
  });

  return brief;
}


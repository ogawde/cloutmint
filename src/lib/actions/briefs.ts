"use server";

import { prisma } from "@/lib/prisma";
import { generateHooks } from "@/lib/ai";
import { getAuthSession } from "@/lib/auth-session";

type CreateBriefInput = {
  title: string;
  productDescription: string;
};

export async function createBrief(input: CreateBriefInput) {
  const { title, productDescription } = input;

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


"use server";

import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { generateHooks } from "@/lib/ai";

type CreateBriefInput = Pick<
  Prisma.Args<typeof prisma.brief, "create">["data"],
  "title" | "productDescription"
> & {
  brandId: string;
};

export async function createBrief(input: CreateBriefInput) {
  const { title, productDescription, brandId } = input;

  try {
    const brandUser = await prisma.user.findUnique({
      where: {
        id: brandId,
      },
      select: {
        id: true,
        role: true,
      },
    });

    if (!brandUser || brandUser.role !== "BRAND") {
      throw new Error("Only authorized brands can create briefs.");
    }

    const { hook1, hook2, hook3, reelScript } =
      await generateHooks(productDescription);

    const brief = await prisma.brief.create({
      data: {
        title,
        productDescription,
        hook1,
        hook2,
        hook3,
        reelScript,
        brand: {
          connect: {
            id: brandId,
          },
        },
      },
    });

    return brief;
  } catch (error) {
    throw error;
  }
}


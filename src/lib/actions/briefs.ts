import { Prisma } from "@prisma/client";
import prisma from "@/lib/prisma";

type CreateBriefInput = Pick<
  Prisma.Args<typeof prisma.brief, "create">["data"],
  "title" | "productDescription" | "hook1" | "hook2" | "hook3"
> & {
  brandId: string;
};

export async function createBrief(input: CreateBriefInput) {
  const { title, productDescription, hook1, hook2, hook3, brandId } = input;

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

    const brief = await prisma.brief.create({
      data: {
        title,
        productDescription,
        hook1,
        hook2,
        hook3,
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


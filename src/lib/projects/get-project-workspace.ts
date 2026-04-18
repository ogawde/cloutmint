import { prisma } from "@/lib/prisma";
import { ensureProjectAutoRelease } from "@/lib/actions/fulfillment";

export async function getProjectWorkspace(projectId: string) {
  await ensureProjectAutoRelease(projectId);

  return prisma.project.findUnique({
    where: { id: projectId },
    include: {
      brief: {
        select: {
          id: true,
          title: true,
          productDescription: true,
          reelScript: true,
          status: true,
          targetPlatforms: true,
        },
      },
      brand: {
        select: {
          id: true,
          email: true,
          displayName: true,
        },
      },
      creator: {
        select: {
          id: true,
          email: true,
          displayName: true,
        },
      },
      escrow: true,
      deliverables: {
        orderBy: { sortOrder: "asc" },
      },
      messages: {
        orderBy: { createdAt: "asc" },
        take: 100,
        include: {
          sender: {
            select: {
              id: true,
              displayName: true,
              email: true,
              role: true,
            },
          },
        },
      },
      events: {
        orderBy: { createdAt: "desc" },
        take: 20,
      },
    },
  });
}

export type ProjectWorkspace = NonNullable<Awaited<ReturnType<typeof getProjectWorkspace>>>;

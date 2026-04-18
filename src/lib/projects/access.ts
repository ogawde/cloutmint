import { prisma } from "@/lib/prisma";

export type ProjectMemberRole = "BRAND" | "CREATOR";

export type ProjectAccess = {
  projectId: string;
  role: ProjectMemberRole;
  brandId: string;
  creatorId: string;
  status: string;
};

/** Load project and verify the user is brand or creator on it */
export async function getProjectAccess(
  projectId: string,
  userId: string,
): Promise<ProjectAccess | null> {
  const project = await prisma.project.findUnique({
    where: { id: projectId },
    select: {
      id: true,
      brandId: true,
      creatorId: true,
      status: true,
    },
  });

  if (!project) {
    return null;
  }

  if (project.brandId === userId) {
    return {
      projectId: project.id,
      role: "BRAND",
      brandId: project.brandId,
      creatorId: project.creatorId,
      status: project.status,
    };
  }

  if (project.creatorId === userId) {
    return {
      projectId: project.id,
      role: "CREATOR",
      brandId: project.brandId,
      creatorId: project.creatorId,
      status: project.status,
    };
  }

  return null;
}

/** Chat is only available after escrow is funded */
export function canUseProjectChat(status: string): boolean {
  return status !== "AWAITING_FUNDING" && status !== "CANCELED";
}

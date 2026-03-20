import { unstable_cache } from "next/cache";
import { prisma } from "@/lib/prisma";

type ViewerMeta = {
  role: "BRAND" | "CREATOR" | null;
  credits: number;
  earnings: number;
};

const getViewerMetaCached = unstable_cache(
  async (authUserId: string): Promise<ViewerMeta> => {
    const user = await prisma.user.findUnique({
      where: { authUserId },
      select: {
        role: true,
        credits: true,
        earnings: true,
      },
    });

    if (!user) {
      return {
        role: null,
        credits: 0,
        earnings: 0,
      };
    }

    return {
      role: user.role,
      credits: user.credits,
      earnings: user.earnings,
    };
  },
  ["viewer-meta"],
  { revalidate: 30 },
);

export async function getViewerMeta(authUserId: string | null | undefined) {
  if (!authUserId) {
    return {
      role: null,
      credits: 0,
      earnings: 0,
    } as ViewerMeta;
  }

  return getViewerMetaCached(authUserId);
}


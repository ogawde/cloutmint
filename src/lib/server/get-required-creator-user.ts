import { cache } from "react";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getAuthSession } from "@/lib/auth-session";

type RequiredCreatorUser = {
  id: string;
  authUserId: string;
  email: string;
};

export const getRequiredCreatorUser = cache(async (): Promise<RequiredCreatorUser> => {
  const session = await getAuthSession();
  const authUserId = session?.user.id;

  if (!authUserId) {
    redirect("/auth/sign-in");
  }

  const user = await prisma.user.findUnique({
    where: { authUserId },
    select: {
      id: true,
      authUserId: true,
      email: true,
      role: true,
    },
  });

  if (!user || user.role !== "CREATOR") {
    redirect("/");
  }

  return {
    id: user.id,
    authUserId: user.authUserId,
    email: user.email,
  };
});

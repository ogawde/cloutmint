import { prisma } from "@/lib/prisma";
import { RoleSelection } from "@/components/auth/RoleSelection";
import { getAuthSession } from "@/lib/auth-session";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getAuthSession();
  const authUserId = session?.user.id;

  if (!authUserId) {
    redirect("/sign-in");
  }

  const user = await prisma.user.findUnique({
    where: { authUserId },
    select: {
      id: true,
      role: true,
    },
  });

  if (!user || !user.role) {
    return <RoleSelection />;
  }

  if (user.role === "BRAND") {
    redirect("/brand/projects");
  }

  if (user.role === "CREATOR") {
    redirect("/creator/explore");
  }

  return <RoleSelection />;
}

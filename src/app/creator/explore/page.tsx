import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { BriefList } from "@/components/brand/BriefList";
import { getAuthSession } from "@/lib/auth-session";

export default async function CreatorExplorePage() {
  const session = await getAuthSession();
  const authUserId = session?.user.id;

  if (!authUserId) {
    redirect("/auth/sign-in");
  }

  const user = await prisma.user.findUnique({
    where: { authUserId },
    select: {
      role: true,
    },
  });

  if (!user) {
    redirect("/");
  }

  if (user.role !== "CREATOR") {
    redirect("/");
  }

  const briefs = await prisma.brief.findMany({
    where: {
      status: "OPEN",
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      <div className="mx-auto max-w-5xl space-y-8 px-4 py-12">
        {briefs.length === 0 ? (
            <p className="text-lg font-medium text-zinc-400">No brand proposals as of now</p>
        ) : (
          <BriefList briefs={briefs} userRole="CREATOR" />
        )}
      </div>
    </main>
  );
}


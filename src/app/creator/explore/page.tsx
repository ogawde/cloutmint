import { redirect } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { BriefList } from "@/components/brand/BriefList";
import { getAuthSession } from "@/lib/auth-session";
import { Button } from "@/components/ui/button";
import { RoleNav } from "@/components/navigation/RoleNav";

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
        <RoleNav role="CREATOR" activeHref="/creator/explore" />
        <section className="rounded-xl border border-zinc-800 bg-zinc-900/70 px-6 py-5">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-100">Creator Explore</h1>
          <p className="mt-2 text-sm leading-6 text-zinc-400">
            Browse open briefs, review scripts, and submit your pitches.
          </p>
          <div className="mt-4 flex justify-end">
            <Button asChild variant="outline" size="sm">
              <Link href="/creator/dashboard">Go to Dashboard</Link>
            </Button>
          </div>
        </section>
        <BriefList briefs={briefs} userRole="CREATOR" />
      </div>
    </main>
  );
}


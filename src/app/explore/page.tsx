import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { BriefList } from "@/components/brand/BriefList";
import { getAuthSession } from "@/lib/auth-session";

export default async function ExplorePage() {
  const session = await getAuthSession();
  const authUserId = session?.user.id;

  let userRole: string | undefined;

  if (authUserId) {
    const user = await prisma.user.findUnique({
      where: {
        authUserId,
      },
      select: {
        role: true,
      },
    });

    if (user?.role === "BRAND") {
      redirect("/brand/projects");
    }

    userRole = user?.role ?? undefined;
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
        <section className="rounded-xl border border-zinc-800 bg-zinc-900/70 px-6 py-5">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-100">Marketplace</h1>
          <p className="mt-2 text-sm leading-6 text-zinc-400">
            Browse open briefs, review generated scripts, and submit your best pitch.
          </p>
        </section>
        <BriefList briefs={briefs} userRole={userRole} />
      </div>
    </main>
  );
}


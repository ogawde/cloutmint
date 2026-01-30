import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { BriefList } from "@/components/brand/BriefList";

export default async function ExplorePage() {
  const { userId } = await auth();

  let userRole: string | undefined;

  if (userId) {
    const user = await prisma.user.findUnique({
      where: {
        clerkId: userId,
      },
      select: {
        role: true,
      },
    });

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
      <div className="max-w-5xl mx-auto px-4 py-12 space-y-8">
        <h1 className="text-3xl font-semibold tracking-tight text-emerald-400">
          Marketplace
        </h1>
        <BriefList briefs={briefs} userRole={userRole} />
      </div>
    </main>
  );
}


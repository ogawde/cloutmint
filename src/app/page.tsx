import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { CreateBriefForm } from "@/components/brand/CreateBriefForm";
import { BriefList } from "@/components/brand/BriefList";
import { RoleSelection } from "@/components/auth/RoleSelection";

export default async function Home() {
  const { userId } = await auth();

  if (!userId) {
    return (
      <main className="min-h-screen bg-zinc-950 text-zinc-50">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <RoleSelection />
        </div>
      </main>
    );
  }

  const user = await prisma.user.findUnique({
    where: { clerkId: userId },
    select: {
      id: true,
      role: true,
    },
  });

  if (!user || !user.role) {
    return <RoleSelection />;
  }

  if (user.role === "BRAND") {
    const briefs = await prisma.brief.findMany({
      where: { brandId: user.id },
      include: { bids: true },
      orderBy: { createdAt: "desc" },
    });

    return (
      <main className="min-h-screen bg-zinc-950 text-zinc-50">
        <div className="max-w-5xl mx-auto px-4 py-12 space-y-10">
          <CreateBriefForm />
          <BriefList briefs={briefs} userRole={user.role} />
        </div>
      </main>
    );
  }

  if (user.role === "CREATOR") {
    return (
      <main className="min-h-screen bg-zinc-950 text-zinc-50">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <h1 className="text-2xl font-semibold mb-4">Creator Feed</h1>
          <p className="text-zinc-400">
            Your personalized creator feed will appear here soon.
          </p>
        </div>
      </main>
    );
  }

  return <RoleSelection />;
}

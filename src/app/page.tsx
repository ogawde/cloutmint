import { prisma } from "@/lib/prisma";
import { CreateBriefForm } from "@/components/brand/CreateBriefForm";
import { BriefList } from "@/components/brand/BriefList";
import { RoleSelection } from "@/components/auth/RoleSelection";
import { getAuthSession } from "@/lib/auth-session";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const session = await getAuthSession();
  const authUserId = session?.user.id;

  if (!authUserId) {
    return (
      <main className="min-h-screen bg-zinc-950 text-zinc-50">
        <div className="mx-auto max-w-5xl px-4 py-20">
          <div className="mx-auto max-w-lg rounded-lg border border-zinc-800 bg-zinc-900/60 p-8 text-center">
            <h1 className="text-3xl font-semibold tracking-tight">Welcome to CloutMint</h1>
            <p className="mt-3 text-sm text-zinc-400">
              Sign in or create an account to start posting briefs and collaborating.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Button asChild variant="outline" className="border-zinc-700">
                <Link href="/sign-in">Sign in</Link>
              </Button>
              <Button asChild className="bg-emerald-500 text-black hover:bg-emerald-400">
                <Link href="/sign-up">Sign up</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    );
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

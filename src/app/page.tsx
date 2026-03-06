import { prisma } from "@/lib/prisma";
import { RoleSelection } from "@/components/auth/RoleSelection";
import { getAuthSession } from "@/lib/auth-session";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const session = await getAuthSession();
  const authUserId = session?.user.id;

  if (!authUserId) {
    return (
      <main className="min-h-screen bg-zinc-950 text-zinc-50">
        <div className="mx-auto max-w-5xl px-4 py-20">
          <div className="mx-auto max-w-lg rounded-xl border border-zinc-800 bg-zinc-900/80 p-8 text-center shadow-sm">
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-100">Welcome to CloutMint</h1>
            <p className="mt-4 text-sm leading-6 text-zinc-400">
              Sign in or create an account to start posting briefs and collaborating.
            </p>
            <div className="mt-7 flex items-center justify-center gap-3">
              <Button asChild variant="outline">
                <Link href="/sign-in">Sign in</Link>
              </Button>
              <Button asChild>
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
    redirect("/brand/projects");
  }

  if (user.role === "CREATOR") {
    return (
      <main className="min-h-screen bg-zinc-950 text-zinc-50">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <h1 className="mb-3 text-2xl font-semibold tracking-tight text-zinc-100">Creator Feed</h1>
          <p className="text-sm leading-6 text-zinc-400">
            Your personalized creator feed will appear here soon.
          </p>
        </div>
      </main>
    );
  }

  return <RoleSelection />;
}

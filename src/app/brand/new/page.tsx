import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { CreateBriefForm } from "@/components/brand/CreateBriefForm";
import { getAuthSession } from "@/lib/auth-session";

export default async function BrandNewBriefPage() {
  const session = await getAuthSession();
  const authUserId = session?.user.id;

  if (!authUserId) {
    redirect("/auth/sign-in");
  }

  const user = await prisma.user.findUnique({
    where: {
      authUserId,
    },
    select: {
      role: true,
    },
  });

  if (!user) {
    redirect("/");
  }

  if (user.role !== "BRAND") {
    redirect("/");
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      <div className="mx-auto max-w-5xl space-y-8 px-4 py-12">
        <section className="rounded-xl border border-zinc-800 bg-zinc-900/70 px-6 py-5">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-100">Create Brief</h1>
          <p className="mt-2 text-sm leading-6 text-zinc-400">
            Share your campaign idea and get creator bids.
          </p>
        </section>
        <CreateBriefForm />
      </div>
    </main>
  );
}

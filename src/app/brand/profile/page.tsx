import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { BrandProfileForm } from "@/components/brand/BrandProfileForm";
import { getRequiredBrandUser } from "@/lib/server/get-required-brand-user";

export default async function BrandProfilePage() {
  const brandUser = await getRequiredBrandUser();

  const user = await prisma.user.findUnique({
    where: {
      authUserId: brandUser.authUserId,
    },
    select: {
      email: true,
      displayName: true,
      bio: true,
      logoUrl: true,
    },
  });

  if (!user) {
    redirect("/");
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      <div className="mx-auto max-w-5xl space-y-8 px-4 py-12">
        <section className="space-y-1 border-b border-zinc-800 pb-3">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-100">Brand Profile</h1>
          <p className="text-sm leading-6 text-zinc-400">
            Update your brand details so creators can identify your campaigns clearly.
          </p>
        </section>

        <section className="rounded-xl border border-zinc-800 bg-zinc-900/70 px-6 py-5">
          <BrandProfileForm
            email={user.email}
            displayName={user.displayName}
            bio={user.bio}
            logoUrl={user.logoUrl}
          />
        </section>
      </div>
    </main>
  );
}


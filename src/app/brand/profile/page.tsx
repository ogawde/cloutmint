import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { updateBrandProfile } from "@/lib/actions/user";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
        <section className="rounded-xl border border-zinc-800 bg-zinc-900/70 px-6 py-5">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-100">Brand Profile</h1>
          <p className="mt-2 text-sm leading-6 text-zinc-400">
            Update your brand details so creators can identify your campaigns clearly.
          </p>
        </section>

        <section className="rounded-xl border border-zinc-800 bg-zinc-900/70 px-6 py-5">
          <form action={updateBrandProfile} className="space-y-5">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-wide text-zinc-500">Email</p>
              <Input value={user.email} disabled className="bg-zinc-900" />
            </div>
            <div className="space-y-2">
              <label htmlFor="displayName" className="text-xs uppercase tracking-wide text-zinc-500">
                Brand Name
              </label>
              <Input
                id="displayName"
                name="displayName"
                defaultValue={user.displayName ?? ""}
                placeholder="Acme Labs"
                className="bg-zinc-900"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="logoUrl" className="text-xs uppercase tracking-wide text-zinc-500">
                Logo URL
              </label>
              <Input
                id="logoUrl"
                name="logoUrl"
                defaultValue={user.logoUrl ?? ""}
                placeholder="https://example.com/logo.png"
                className="bg-zinc-900"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="bio" className="text-xs uppercase tracking-wide text-zinc-500">
                Brand Details
              </label>
              <Textarea
                id="bio"
                name="bio"
                defaultValue={user.bio ?? ""}
                placeholder="Share your brand voice, category, and campaign style."
                className="min-h-[120px] bg-zinc-900"
              />
            </div>
            <Button type="submit">Save Profile</Button>
          </form>
        </section>
      </div>
    </main>
  );
}


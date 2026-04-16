import { CreateBriefForm } from "@/components/brand/CreateBriefForm";
import { getRequiredBrandUser } from "@/lib/server/get-required-brand-user";

export default async function BrandNewBriefPage() {
  await getRequiredBrandUser();

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      <div className="mx-auto max-w-5xl space-y-8 px-4 py-12">
        <CreateBriefForm />
      </div>
    </main>
  );
}

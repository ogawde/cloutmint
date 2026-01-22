import { prisma } from "@/lib/prisma";
import { CreateBriefForm } from "@/components/brand/CreateBriefForm";
import { BriefList } from "@/components/brand/BriefList";

export default async function Home() {
  const briefs = await prisma.brief.findMany({
    where: {
      brandId: "placeholder-id",
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      <div className="max-w-5xl mx-auto px-4 py-12 space-y-10">
        <CreateBriefForm />
        <BriefList briefs={briefs} />
      </div>
    </main>
  );
}

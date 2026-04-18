import { Suspense } from "react";
import { prisma } from "@/lib/prisma";
import { BrandProjectsView } from "@/components/brand/BrandProjectsView";
import { getRequiredBrandUser } from "@/lib/server/get-required-brand-user";

const INITIAL_BRIEF_LIMIT = 8;

async function BrandProjectsSection({ brandId }: { brandId: string }) {
  const briefs = await prisma.brief.findMany({
    where: {
      brandId,
    },
    select: {
      id: true,
      createdAt: true,
      title: true,
      reelScript: true,
      status: true,
      _count: {
        select: {
          bids: true,
        },
      },
      projects: {
        select: {
          id: true,
          status: true,
          createdAt: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    take: INITIAL_BRIEF_LIMIT,
  });

  return <BrandProjectsView briefs={briefs} />;
}

function BrandProjectsSkeleton() {
  return (
    <div className="space-y-8">
      <div className="h-48 animate-pulse rounded-xl border border-zinc-800 bg-zinc-900/70" />
      <div className="h-48 animate-pulse rounded-xl border border-zinc-800 bg-zinc-900/70" />
      <div className="h-48 animate-pulse rounded-xl border border-zinc-800 bg-zinc-900/70" />
    </div>
  );
}

export default async function BrandProjectsPage() {
  const brandUser = await getRequiredBrandUser();

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      <div className="mx-auto max-w-5xl space-y-8 px-4 py-12">
        <section className="space-y-1 border-b border-zinc-800 pb-3">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-100">Brand Projects</h1> 
        </section>
        <Suspense fallback={<BrandProjectsSkeleton />}>
          <BrandProjectsSection brandId={brandUser.id} />
        </Suspense>
      </div>
    </main>
  );
}

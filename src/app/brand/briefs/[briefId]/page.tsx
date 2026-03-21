import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import { getRequiredBrandUser } from "@/lib/server/get-required-brand-user";

type PageProps = {
  params: Promise<{ briefId: string }>;
};

function getBriefState(status: "OPEN" | "IN_PROGRESS" | "COMPLETED") {
  if (status === "COMPLETED") {
    return "Completed";
  }

  return "Active";
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export default async function BrandBriefDetailPage({ params }: PageProps) {
  const { briefId } = await params;
  const brandUser = await getRequiredBrandUser();

  const brief = await prisma.brief.findFirst({
    where: {
      id: briefId,
      brandId: brandUser.id,
    },
    include: {
      bids: {
        include: {
          creator: {
            select: {
              email: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      },
      projects: {
        select: {
          id: true,
          submissionStatus: true,
        },
      },
    },
  });

  if (!brief) {
    notFound();
  }

  const briefState = getBriefState(brief.status);
  const linkedProject = brief.projects[0] ?? null;

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      <div className="mx-auto max-w-5xl space-y-8 px-4 py-12">
        <section className="space-y-4 rounded-xl border border-zinc-800 bg-zinc-900/70 px-6 py-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-100">{brief.title}</h1>
            <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs uppercase tracking-wide text-zinc-300">
              {briefState}
            </span>
          </div>
          <p className="text-sm leading-6 text-zinc-400">{brief.productDescription}</p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-md border border-zinc-800 bg-zinc-900 px-4 py-3">
              <p className="text-xs uppercase tracking-wide text-zinc-500">Brief status</p>
              <p className="mt-1 text-sm text-zinc-100">{brief.status}</p>
            </div>
            <div className="rounded-md border border-zinc-800 bg-zinc-900 px-4 py-3">
              <p className="text-xs uppercase tracking-wide text-zinc-500">Created</p>
              <p className="mt-1 text-sm text-zinc-100">{formatDate(brief.createdAt)}</p>
            </div>
            <div className="rounded-md border border-zinc-800 bg-zinc-900 px-4 py-3">
              <p className="text-xs uppercase tracking-wide text-zinc-500">Total bids</p>
              <p className="mt-1 text-sm text-zinc-100">{brief.bids.length}</p>
            </div>
            <div className="rounded-md border border-zinc-800 bg-zinc-900 px-4 py-3">
              <p className="text-xs uppercase tracking-wide text-zinc-500">Linked project</p>
              <p className="mt-1 text-sm text-zinc-100">
                {linkedProject ? linkedProject.submissionStatus : "Not created yet"}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {linkedProject && (
              <Button asChild variant="outline" size="sm">
                <Link href={`/brand/projects/${linkedProject.id}`}>Open linked project</Link>
              </Button>
            )}
            <Button asChild variant="outline" size="sm">
              <Link href="/brand/projects">Back to briefs</Link>
            </Button>
          </div>
        </section>

        <section className="space-y-2 rounded-xl border border-zinc-800 bg-zinc-900/70 px-6 py-5">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-100">Script</h2>
          <p className="whitespace-pre-wrap text-sm leading-6 text-zinc-300">{brief.reelScript}</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-100">Bids</h2>
          {brief.bids.length === 0 ? (
            <p className="text-sm leading-6 text-zinc-400">No bids submitted for this brief yet.</p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              {brief.bids.map((bid) => (
                <article
                  key={bid.id}
                  className="rounded-xl border border-zinc-800 bg-zinc-900/70 px-5 py-4"
                >
                  <div className="space-y-1">
                    <p className="text-base font-semibold text-zinc-100">{bid.creator.email}</p>
                    <p className="text-xs uppercase tracking-wide text-zinc-500">
                      Status: {bid.status}
                    </p>
                    <p className="text-sm text-zinc-300">Amount: ${bid.amount}</p>
                  </div>
                  <div className="mt-4 border-t border-zinc-800 pt-3">
                    <p className="text-xs uppercase tracking-wide text-zinc-500">Pitch</p>
                    <p className="mt-1 whitespace-pre-wrap text-sm text-zinc-200">{bid.pitchText}</p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}


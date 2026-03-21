import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import { getRequiredBrandUser } from "@/lib/server/get-required-brand-user";

type PageProps = {
  params: Promise<{ projectId: string }>;
};

function getProjectState(status: "PENDING" | "APPROVED" | "REVISIONS") {
  if (status === "APPROVED") {
    return "Completed";
  }

  return "Active";
}

export default async function BrandProjectDetailPage({ params }: PageProps) {
  const { projectId } = await params;
  const brandUser = await getRequiredBrandUser();

  const project = await prisma.project.findFirst({
    where: {
      id: projectId,
      brandId: brandUser.id,
    },
    include: {
      brief: {
        select: {
          id: true,
          title: true,
          productDescription: true,
          status: true,
          reelScript: true,
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
        },
      },
      creator: {
        select: {
          email: true,
        },
      },
    },
  });

  if (!project) {
    notFound();
  }

  const projectState = getProjectState(project.submissionStatus);

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      <div className="mx-auto max-w-5xl space-y-8 px-4 py-12">
        <section className="space-y-4 rounded-xl border border-zinc-800 bg-zinc-900/70 px-6 py-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-100">
              {project.brief.title}
            </h1>
            <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs uppercase tracking-wide text-zinc-300">
              {projectState}
            </span>
          </div>
          <p className="text-sm leading-6 text-zinc-400">{project.brief.productDescription}</p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-md border border-zinc-800 bg-zinc-900 px-4 py-3">
              <p className="text-xs uppercase tracking-wide text-zinc-500">Submission status</p>
              <p className="mt-1 text-sm text-zinc-100">{project.submissionStatus}</p>
            </div>
            <div className="rounded-md border border-zinc-800 bg-zinc-900 px-4 py-3">
              <p className="text-xs uppercase tracking-wide text-zinc-500">Assigned creator</p>
              <p className="mt-1 text-sm text-zinc-100">{project.creator.email}</p>
            </div>
            <div className="rounded-md border border-zinc-800 bg-zinc-900 px-4 py-3 sm:col-span-2">
              <p className="text-xs uppercase tracking-wide text-zinc-500">Submitted video</p>
              {project.videoUrl ? (
                <a
                  href={project.videoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-block text-sm text-zinc-100 underline underline-offset-4"
                >
                  Open submission
                </a>
              ) : (
                <p className="mt-1 text-sm text-zinc-400">No submission URL yet.</p>
              )}
            </div>
          </div>
          <Button asChild variant="outline" size="sm">
            <Link href="/brand/projects">Back to projects</Link>
          </Button>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-100">Bids</h2>
          {project.brief.bids.length === 0 ? (
            <p className="text-sm leading-6 text-zinc-400">No bids submitted for this brief yet.</p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              {project.brief.bids.map((bid) => (
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

        <section className="space-y-2 rounded-xl border border-zinc-800 bg-zinc-900/70 px-6 py-5">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-100">Brief Script</h2>
          <p className="whitespace-pre-wrap text-sm leading-6 text-zinc-300">{project.brief.reelScript}</p>
        </section>
      </div>
    </main>
  );
}


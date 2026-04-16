import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import { getRequiredBrandUser } from "@/lib/server/get-required-brand-user";

type PageProps = {
  params: Promise<{ projectId: string }>;
};

function getProjectState(
  briefStatus: "OPEN" | "IN_PROGRESS" | "COMPLETED" | "ARCHIVED",
  submissionStatus: "PENDING" | "APPROVED" | "REVISIONS" | null,
) {
  if (briefStatus === "ARCHIVED") {
    return "Archived";
  }

  if (briefStatus === "COMPLETED" || submissionStatus === "APPROVED") {
    return "Completed";
  }

  return "Active";
}

function getProjectStateClass(projectState: "Active" | "Completed" | "Archived") {
  if (projectState === "Active") {
    return "border-emerald-600/50 bg-emerald-500/10 text-emerald-300";
  }

  if (projectState === "Archived") {
    return "border-zinc-700 bg-zinc-800/60 text-zinc-300";
  }

  return "border-zinc-700 text-zinc-300";
}

function getBidStatusClass(status: "PENDING" | "ACCEPTED" | "REJECTED") {
  if (status === "ACCEPTED") {
    return "border-emerald-600/50 bg-emerald-500/10 text-emerald-300";
  }

  if (status === "REJECTED") {
    return "border-rose-600/50 bg-rose-500/10 text-rose-300";
  }

  return "border-amber-600/50 bg-amber-500/10 text-amber-300";
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

  const brief = project?.brief
    ? project.brief
    : await prisma.brief.findFirst({
        where: {
          id: projectId,
          brandId: brandUser.id,
        },
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
      });

  if (!brief) {
    notFound();
  }

  const projectState = getProjectState(brief.status, project?.submissionStatus ?? null);
  const assignedCreatorEmail = project?.creator.email ?? "No creator assigned yet.";
  const submittedVideoUrl = project?.videoUrl ?? null;

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      <div className="mx-auto max-w-5xl space-y-8 px-4 py-12">
        <section className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-800 pb-3">
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-100">Brand Brief</h1>
            <span
              className={`rounded-full border px-3 py-1 text-xs uppercase tracking-wide ${getProjectStateClass(
                projectState,
              )}`}
            >
              {projectState}
            </span>
          </div>
          <div className="space-y-3 divide-y divide-zinc-800">
            <div className="space-y-1 pb-3">
              <p className="text-xl font-semibold text-zinc-100">{brief.title}</p>
              <p className="text-sm leading-6 text-zinc-400">{brief.productDescription}</p>
            </div>
            <div className="space-y-1 py-3">
              <p className="text-xs uppercase tracking-wide text-zinc-500">Project status</p>
              <p className="text-sm text-zinc-100">{projectState}</p>
            </div>
            <div className="space-y-1 py-3">
              <p className="text-xs uppercase tracking-wide text-zinc-500">Assigned creator</p>
              <p className="text-sm text-zinc-100">{assignedCreatorEmail}</p>
            </div>
            <div className="space-y-1 pt-3">
              <p className="text-xs uppercase tracking-wide text-zinc-500">Submitted video</p>
              {submittedVideoUrl ? (
                <a
                  href={submittedVideoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-sm text-zinc-100 underline underline-offset-4"
                >
                  Open submission
                </a>
              ) : (
                <p className="text-sm text-zinc-400">No submission URL yet.</p>
              )}
            </div>
          </div>
          <Link
            href="/brand/projects"
            className={`${buttonVariants({ variant: "outline", size: "sm" })} mt-2`}
          >
            Back to projects
          </Link>
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
                  <div className="space-y-2">
                    <p className="text-base font-semibold text-zinc-100">{bid.creator.email}</p>
                    <span
                      className={`inline-flex rounded-full border px-2 py-0.5 text-xs uppercase tracking-wide ${getBidStatusClass(
                        bid.status,
                      )}`}
                    >
                      {bid.status}
                    </span>
                    <p className="text-sm text-zinc-300">Amount: ${bid.amount}</p>
                  </div>
                  <div className="mt-4 border-t border-zinc-800 pt-3">
                    <p className="text-xs uppercase tracking-wide text-zinc-500">Pitch</p>
                    <p className="mt-1 whitespace-pre-wrap text-sm text-zinc-200">{bid.pitchText}</p>
                  </div>
                  {bid.status === "ACCEPTED" && (
                    <div className="mt-4 flex justify-end">
                      <Button type="button" size="sm" disabled>
                        Contact
                      </Button>
                    </div>
                  )}
                </article>
              ))}
            </div>
          )}
        </section>

        <section className="space-y-2 border-t border-zinc-800 pt-4">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-100">Brief Script</h2>
          <p className="whitespace-pre-wrap text-sm leading-6 text-zinc-300">{brief.reelScript}</p>
        </section>
      </div>
    </main>
  );
}


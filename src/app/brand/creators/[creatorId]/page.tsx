import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getRequiredBrandUser } from "@/lib/server/get-required-brand-user";
import { buttonVariants } from "@/components/ui/button-variants";

type PageProps = {
  params: Promise<{ creatorId: string }>;
};

function normalizeExternalUrl(url: string) {
  if (/^https?:\/\//i.test(url)) {
    return url;
  }

  return `https://${url}`;
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export default async function BrandCreatorProfilePage({ params }: PageProps) {
  const { creatorId } = await params;
  await getRequiredBrandUser();

  const creator = await prisma.user.findFirst({
    where: {
      id: creatorId,
      role: "CREATOR",
    },
    select: {
      id: true,
      email: true,
      displayName: true,
      bio: true,
      instagramUrl: true,
      youtubeUrl: true,
      tiktokUrl: true,
      snapchatUrl: true,
      twitterUrl: true,
      bidsAsCreator: {
        select: {
          id: true,
          status: true,
          amount: true,
          createdAt: true,
          brief: {
            select: {
              title: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
        take: 20,
      },
      projectsAsCreator: {
        select: {
          id: true,
          submissionStatus: true,
          videoUrl: true,
          createdAt: true,
          brief: {
            select: {
              title: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
        take: 20,
      },
    },
  });

  if (!creator) {
    notFound();
  }

  const socialTags = [
    creator.instagramUrl ? { label: "Instagram", href: creator.instagramUrl } : null,
    creator.youtubeUrl ? { label: "YouTube", href: creator.youtubeUrl } : null,
    creator.tiktokUrl ? { label: "TikTok", href: creator.tiktokUrl } : null,
    creator.snapchatUrl ? { label: "Snapchat", href: creator.snapchatUrl } : null,
    creator.twitterUrl ? { label: "Twitter/X", href: creator.twitterUrl } : null,
  ].filter((value): value is { label: string; href: string } => Boolean(value));

  const acceptedBidCount = creator.bidsAsCreator.filter((bid) => bid.status === "ACCEPTED").length;
  const approvedSubmissionCount = creator.projectsAsCreator.filter(
    (project) => project.submissionStatus === "APPROVED",
  ).length;

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      <div className="mx-auto max-w-5xl space-y-8 px-4 py-12">
        <section className="space-y-4 border-b border-zinc-800 pb-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-100">
              {creator.displayName || creator.email}
            </h1>
            <Link
              href="/brand/projects"
              className={buttonVariants({ variant: "outline", size: "sm" })}
            >
              Back to Projects
            </Link>
          </div>
          <p className="text-sm text-zinc-400">{creator.email}</p>
          <p className="text-sm leading-6 text-zinc-300">
            {creator.bio || "No creator bio shared yet."}
          </p>
          {socialTags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {socialTags.map((tag) => (
                <Link
                  key={tag.label}
                  href={normalizeExternalUrl(tag.href)}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-zinc-800 px-2.5 py-1 text-xs text-zinc-100 transition hover:bg-zinc-700"
                >
                  {tag.label}
                </Link>
              ))}
            </div>
          )}
        </section>

        <section className="grid gap-3 border-b border-zinc-800 pb-4 sm:grid-cols-3">
          <article>
            <p className="text-xs uppercase tracking-wide text-zinc-500">Total bids</p>
            <p className="mt-1 text-xl font-semibold text-zinc-100">{creator.bidsAsCreator.length}</p>
          </article>
          <article>
            <p className="text-xs uppercase tracking-wide text-zinc-500">Accepted bids</p>
            <p className="mt-1 text-xl font-semibold text-zinc-100">{acceptedBidCount}</p>
          </article>
          <article>
            <p className="text-xs uppercase tracking-wide text-zinc-500">Approved work</p>
            <p className="mt-1 text-xl font-semibold text-zinc-100">{approvedSubmissionCount}</p>
          </article>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-100">Recent Bids</h2>
          {creator.bidsAsCreator.length === 0 ? (
            <p className="text-sm text-zinc-400">No bids available yet.</p>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2">
              {creator.bidsAsCreator.map((bid) => (
                <article key={bid.id} className="border-b border-zinc-800 px-1 py-3">
                  <p className="text-sm font-semibold text-zinc-100">{bid.brief.title}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-zinc-500">{bid.status}</p>
                  <p className="mt-1 text-sm text-zinc-300">Amount: ${bid.amount}</p>
                  <p className="mt-1 text-xs text-zinc-500">{formatDate(bid.createdAt)}</p>
                </article>
              ))}
            </div>
          )}
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-100">Completed/Active Work</h2>
          {creator.projectsAsCreator.length === 0 ? (
            <p className="text-sm text-zinc-400">No project history yet.</p>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2">
              {creator.projectsAsCreator.map((project) => (
                <article
                  key={project.id}
                  className="border-b border-zinc-800 px-1 py-3"
                >
                  <p className="text-sm font-semibold text-zinc-100">{project.brief.title}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-zinc-500">
                    Submission: {project.submissionStatus}
                  </p>
                  {project.videoUrl ? (
                    <a
                      href={project.videoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-block text-sm text-zinc-100 underline underline-offset-4"
                    >
                      View final video
                    </a>
                  ) : (
                    <p className="mt-1 text-sm text-zinc-400">No video URL submitted yet.</p>
                  )}
                  <p className="mt-1 text-xs text-zinc-500">{formatDate(project.createdAt)}</p>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

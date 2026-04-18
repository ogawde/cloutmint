import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { buttonVariants } from "@/components/ui/button-variants";
import { getRequiredBrandUser } from "@/lib/server/get-required-brand-user";
import { getProjectWorkspace } from "@/lib/projects/get-project-workspace";
import { canUseProjectChat } from "@/lib/projects/access";
import { ProjectStatusCard } from "@/components/projects/project-status-card";
import { ProjectFundButton } from "@/components/projects/project-fund-button";
import { ProjectChatPanel } from "@/components/projects/project-chat-panel";
import { ProjectDeliverablesPanel } from "@/components/projects/project-deliverables-panel";
import { ProjectReviewPanel } from "@/components/projects/project-review-panel";
import { BrandBidReviewCard } from "@/components/brand/BrandBidReviewCard";

type PageProps = {
  params: Promise<{ projectId: string }>;
};

export default async function BrandProjectDetailPage({ params }: PageProps) {
  const { projectId } = await params;
  const brandUser = await getRequiredBrandUser();

  const brandWithCredits = await prisma.user.findUnique({
    where: { id: brandUser.id },
    select: { credits: true },
  });

  const project = await getProjectWorkspace(projectId);

  if (project && project.brandId === brandUser.id) {
    const creatorLabel =
      project.creator.displayName?.trim() || project.creator.email;
    const chatLocked = !canUseProjectChat(project.status);

    return (
      <main className="min-h-screen bg-zinc-950 text-zinc-50">
        <div className="mx-auto max-w-5xl space-y-6 px-4 py-12">
          <section className="space-y-2 border-b border-zinc-800 pb-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h1 className="text-3xl font-semibold tracking-tight text-zinc-100">
                {project.brief.title}
              </h1>
              <Link
                href="/brand/projects"
                className={buttonVariants({ variant: "outline", size: "sm" })}
              >
                Back to projects
              </Link>
            </div>
            <p className="text-sm text-zinc-400">{project.brief.productDescription}</p>
            <p className="text-sm text-zinc-300">
              Creator:{" "}
              <Link
                href={`/brand/creators/${project.creator.id}`}
                className="underline underline-offset-4"
              >
                {creatorLabel}
              </Link>
            </p>
          </section>

          <ProjectStatusCard
            status={project.status}
            agreedAmount={project.agreedAmount}
            escrowStatus={project.escrow?.status ?? null}
            autoReleaseAt={project.escrow?.autoReleaseAt ?? null}
            creatorSubmittedAt={project.creatorSubmittedAt}
          />

          {project.status === "AWAITING_FUNDING" && (
            <ProjectFundButton
              projectId={project.id}
              agreedAmount={project.agreedAmount}
              brandCredits={brandWithCredits?.credits ?? 0}
            />
          )}

          <div className="grid gap-6 lg:grid-cols-2">
            <ProjectDeliverablesPanel
              projectId={project.id}
              deliverables={project.deliverables}
              userRole="BRAND"
              projectStatus={project.status}
              targetPlatforms={project.brief.targetPlatforms}
              submissionNote={project.creatorSubmissionNote}
            />
            <ProjectChatPanel
              projectId={project.id}
              currentUserId={brandUser.id}
              messages={project.messages}
              isLocked={chatLocked}
            />
          </div>

          <ProjectReviewPanel projectId={project.id} projectStatus={project.status} />

          <section className="space-y-2 border-t border-zinc-800 pt-4">
            <h2 className="text-xl font-semibold text-zinc-100">Brief script</h2>
            <p className="whitespace-pre-wrap text-sm leading-6 text-zinc-300">
              {project.brief.reelScript}
            </p>
          </section>
        </div>
      </main>
    );
  }

  const brief = await prisma.brief.findFirst({
    where: {
      id: projectId,
      brandId: brandUser.id,
    },
    include: {
      bids: {
        include: {
          creator: {
            select: {
              id: true,
              email: true,
              displayName: true,
              bio: true,
              instagramUrl: true,
              youtubeUrl: true,
              tiktokUrl: true,
              twitterUrl: true,
              snapchatUrl: true,
            },
          },
        },
        orderBy: { createdAt: "desc" },
      },
    },
  });

  if (!brief) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      <div className="mx-auto max-w-5xl space-y-8 px-4 py-12">
        <section className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-800 pb-3">
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-100">
              {brief.title}
            </h1>
            <Link
              href="/brand/projects"
              className={buttonVariants({ variant: "outline", size: "sm" })}
            >
              Back to projects
            </Link>
          </div>
          <p className="text-sm leading-6 text-zinc-400">{brief.productDescription}</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-100">Bids</h2>
          {brief.bids.length === 0 ? (
            <p className="text-sm text-zinc-400">No bids submitted yet.</p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              {brief.bids.map((bid) => {
                const socialLinks = [
                  bid.creator.instagramUrl && { label: "Instagram", href: bid.creator.instagramUrl },
                  bid.creator.youtubeUrl && { label: "YouTube", href: bid.creator.youtubeUrl },
                  bid.creator.tiktokUrl && { label: "TikTok", href: bid.creator.tiktokUrl },
                  bid.creator.twitterUrl && { label: "Twitter", href: bid.creator.twitterUrl },
                  bid.creator.snapchatUrl && { label: "Snapchat", href: bid.creator.snapchatUrl },
                ].filter(Boolean) as { label: string; href: string }[];

                return (
                  <BrandBidReviewCard
                    key={bid.id}
                    bidId={bid.id}
                    creatorId={bid.creator.id}
                    bidStatus={bid.status}
                    creatorEmail={bid.creator.email}
                    creatorDisplayName={bid.creator.displayName}
                    creatorBio={bid.creator.bio}
                    creatorSocialLinks={socialLinks}
                    amount={bid.amount}
                    pitchText={bid.pitchText}
                  />
                );
              })}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import { buttonVariants } from "@/components/ui/button-variants";
import { getRequiredCreatorUser } from "@/lib/server/get-required-creator-user";
import { getProjectWorkspace } from "@/lib/projects/get-project-workspace";
import { canUseProjectChat } from "@/lib/projects/access";
import { ProjectStatusCard } from "@/components/projects/project-status-card";
import { ProjectChatPanel } from "@/components/projects/project-chat-panel";
import { ProjectDeliverablesPanel } from "@/components/projects/project-deliverables-panel";

type PageProps = {
  params: Promise<{ projectId: string }>;
};

export default async function CreatorProjectPage({ params }: PageProps) {
  const { projectId } = await params;
  const creatorUser = await getRequiredCreatorUser();

  const project = await getProjectWorkspace(projectId);

  if (!project || project.creatorId !== creatorUser.id) {
    notFound();
  }

  const brandLabel = project.brand.displayName?.trim() || project.brand.email;
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
              href="/creator/dashboard"
              className={buttonVariants({ variant: "outline", size: "sm" })}
            >
              Back to dashboard
            </Link>
          </div>
          <p className="text-sm text-zinc-400">{project.brief.productDescription}</p>
          <p className="text-sm text-zinc-300">
            Brand:{" "}
            <Link
              href={`/creator/brands/${project.brand.id}`}
              className="underline underline-offset-4"
            >
              {brandLabel}
            </Link>
          </p>
        </section>

        {project.status === "AWAITING_FUNDING" && (
          <p className="rounded-xl border border-amber-600/40 bg-amber-500/10 px-5 py-4 text-sm text-amber-200">
            Waiting for the brand to fund this project. Chat unlocks after funding.
          </p>
        )}

        <ProjectStatusCard
          status={project.status}
          agreedAmount={project.agreedAmount}
          escrowStatus={project.escrow?.status ?? null}
          autoReleaseAt={project.escrow?.autoReleaseAt ?? null}
          creatorSubmittedAt={project.creatorSubmittedAt}
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <ProjectDeliverablesPanel
            projectId={project.id}
            deliverables={project.deliverables}
            userRole="CREATOR"
            projectStatus={project.status}
            targetPlatforms={project.brief.targetPlatforms}
            submissionNote={project.creatorSubmissionNote}
          />
          <ProjectChatPanel
            projectId={project.id}
            currentUserId={creatorUser.id}
            messages={project.messages}
            isLocked={chatLocked}
          />
        </div>

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

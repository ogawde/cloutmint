import type { EscrowStatus, ProjectStatus } from "@/generated/prisma";
import { AUTO_RELEASE_DAYS } from "@/lib/projects/constants";

type ProjectStatusCardProps = {
  status: ProjectStatus;
  agreedAmount: number;
  escrowStatus: EscrowStatus | null;
  autoReleaseAt: Date | null;
  creatorSubmittedAt: Date | null;
};

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

function getStatusLabel(status: ProjectStatus) {
  const labels: Record<ProjectStatus, string> = {
    AWAITING_FUNDING: "Awaiting funding",
    ACTIVE: "In progress",
    SUBMITTED: "Awaiting brand review",
    REVISION_REQUESTED: "Revision requested",
    APPROVED: "Completed",
    AUTO_RELEASED: "Auto-released",
    CANCELED: "Canceled",
  };
  return labels[status];
}

export function ProjectStatusCard({
  status,
  agreedAmount,
  escrowStatus,
  autoReleaseAt,
  creatorSubmittedAt,
}: ProjectStatusCardProps) {
  return (
    <section className="rounded-xl border border-zinc-800 bg-zinc-900/70 px-5 py-4 space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-400">
          Project status
        </h2>
        <span className="rounded-full border border-emerald-600/50 bg-emerald-500/10 px-3 py-1 text-xs uppercase tracking-wide text-emerald-300">
          {getStatusLabel(status)}
        </span>
      </div>
      <div className="grid gap-2 text-sm sm:grid-cols-2">
        <p className="text-zinc-300">
          <span className="text-zinc-500">Agreed amount: </span>${agreedAmount}
        </p>
        <p className="text-zinc-300">
          <span className="text-zinc-500">Escrow: </span>
          {escrowStatus ?? "Not funded"}
        </p>
        {creatorSubmittedAt && (
          <p className="text-zinc-300">
            <span className="text-zinc-500">Submitted: </span>
            {formatDate(creatorSubmittedAt)}
          </p>
        )}
        {autoReleaseAt && status === "SUBMITTED" && (
          <p className="text-zinc-300">
            <span className="text-zinc-500">Auto-release: </span>
            {formatDate(autoReleaseAt)} ({AUTO_RELEASE_DAYS} days)
          </p>
        )}
      </div>
    </section>
  );
}

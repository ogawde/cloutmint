import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArchiveBriefButton } from "@/components/brand/ArchiveBriefButton";

type BrandBrief = {
  id: string;
  createdAt: Date;
  title: string;
  reelScript: string;
  status: "OPEN" | "IN_PROGRESS" | "COMPLETED" | "ARCHIVED";
  _count: {
    bids: number;
  };
  projects: {
    id: string;
    status:
      | "AWAITING_FUNDING"
      | "ACTIVE"
      | "SUBMITTED"
      | "REVISION_REQUESTED"
      | "APPROVED"
      | "AUTO_RELEASED"
      | "CANCELED";
    createdAt: Date;
  }[];
};

type BrandProjectsViewProps = {
  briefs: BrandBrief[];
};

function getBriefBucket(brief: BrandBrief) {
  if (brief.status === "ARCHIVED") {
    return "archived";
  }

  const project = brief.projects[0];
  const isComplete =
    brief.status === "COMPLETED" ||
    project?.status === "APPROVED" ||
    project?.status === "AUTO_RELEASED";

  if (isComplete) {
    return "completed";
  }

  return "active";
}

function getSectionBadgeClass(sectionTitle: string) {
  if (sectionTitle === "Active") {
    return "border-emerald-600/50 bg-emerald-500/10 text-emerald-300";
  }

  if (sectionTitle === "Archived") {
    return "border-zinc-700 bg-zinc-800/60 text-zinc-300";
  }

  return "border-zinc-700 text-zinc-300";
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function ProjectSection({
  title,
  description,
  showArchiveAction = false,
  briefs,
}: {
  title: string;
  description: string;
  showArchiveAction?: boolean;
  briefs: BrandBrief[];
}) {
  return (
    <section className="space-y-4">
      <div className="space-y-1 border-b border-zinc-800 pb-3">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-100">{title}</h2>
        <p className="text-sm leading-6 text-zinc-400">{description}</p>
      </div>
      {briefs.length === 0 ? (
        <p className="text-sm leading-6 text-zinc-400">No briefs in this section yet.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {briefs.map((brief) => (
            <Card
              key={brief.id}
              className="relative h-full border-zinc-800 bg-zinc-900/70 transition hover:border-zinc-600"
            >
              {showArchiveAction && (
                <ArchiveBriefButton briefId={brief.id} briefTitle={brief.title} />
              )}
              <Link
                href={
                  brief.projects[0]
                    ? `/brand/projects/${brief.projects[0].id}`
                    : `/brand/projects/${brief.id}`
                }
                className="block h-full"
              >
                <CardHeader className="space-y-2 pr-14">
                  <CardTitle className="text-lg font-semibold tracking-tight text-zinc-100">
                    {brief.title}
                  </CardTitle>
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`rounded-full border px-3 py-1 text-xs uppercase tracking-wide ${getSectionBadgeClass(
                        title,
                      )}`}
                    >
                      {title.toLowerCase()}
                    </span>
                    <span className="text-xs text-zinc-500">{formatDate(brief.createdAt)}</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="line-clamp-3 text-sm text-zinc-400">
                    {brief.reelScript || "No script generated yet."}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-wide text-zinc-500">
                    Bids: {brief._count.bids}
                    {brief.projects[0] && ` · ${brief.projects[0].status.replace(/_/g, " ")}`}
                  </p>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
}

export function BrandProjectsView({ briefs }: BrandProjectsViewProps) {
  const activeBriefs = briefs.filter((brief) => getBriefBucket(brief) === "active");
  const completedBriefs = briefs.filter((brief) => getBriefBucket(brief) === "completed");
  const archivedBriefs = briefs.filter((brief) => getBriefBucket(brief) === "archived");

  return (
    <div className="space-y-8">
      <ProjectSection
        title="Active"
        description="Briefs with open bids or funded projects in progress."
        showArchiveAction
        briefs={activeBriefs}
      />
      <ProjectSection
        title="Completed"
        description="Briefs with approved or auto-released project outcomes."
        briefs={completedBriefs}
      />
      <ProjectSection
        title="Archived"
        description="Soft-deleted briefs appear here."
        briefs={archivedBriefs}
      />
    </div>
  );
}

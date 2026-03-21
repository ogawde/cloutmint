import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type BrandBrief = {
  id: string;
  createdAt: Date;
  title: string;
  reelScript: string;
  status: "OPEN" | "IN_PROGRESS" | "COMPLETED";
  _count: {
    bids: number;
  };
  projects: {
    id: string;
    submissionStatus: "PENDING" | "APPROVED" | "REVISIONS";
    createdAt: Date;
  }[];
};

type BrandProjectsViewProps = {
  briefs: BrandBrief[];
};

function getBriefBucket(brief: BrandBrief) {
  const hasApprovedProject = brief.projects.some(
    (project) => project.submissionStatus === "APPROVED",
  );

  if (brief.status === "COMPLETED" || hasApprovedProject) {
    return "completed";
  }

  return "active";
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
  briefs,
}: {
  title: string;
  description: string;
  briefs: BrandBrief[];
}) {
  return (
    <section className="space-y-4">
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/70 px-6 py-5">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-100">{title}</h2>
        <p className="mt-2 text-sm leading-6 text-zinc-400">{description}</p>
      </div>
      {briefs.length === 0 ? (
        <p className="text-sm leading-6 text-zinc-400">No briefs in this section yet.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {briefs.map((brief) => (
            <Link
              key={brief.id}
              href={
                brief.projects[0]
                  ? `/brand/projects/${brief.projects[0].id}`
                  : `/brand/briefs/${brief.id}`
              }
            >
              <Card className="h-full border-zinc-800 bg-zinc-900/70 transition hover:border-zinc-600">
                <CardHeader className="space-y-2">
                  <CardTitle className="text-lg font-semibold tracking-tight text-zinc-100">
                    {brief.title}
                  </CardTitle>
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs uppercase tracking-wide text-zinc-300">
                      {brief.status.toLowerCase()}
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
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}

export function BrandProjectsView({ briefs }: BrandProjectsViewProps) {
  const activeBriefs = briefs.filter(
    (brief) => getBriefBucket(brief) === "active",
  );
  const completedBriefs = briefs.filter(
    (brief) => getBriefBucket(brief) === "completed",
  );
  const archivedBriefs: BrandBrief[] = [];

  return (
    <div className="space-y-8">
      <ProjectSection
        title="Active"
        description="New briefs and ongoing bidding activity appear here."
        briefs={activeBriefs}
      />
      <ProjectSection
        title="Completed"
        description="Briefs that have finished with approved project outcomes."
        briefs={completedBriefs}
      />
      <ProjectSection
        title="Archived"
        description="Deleted projects will appear here in a future update."
        briefs={archivedBriefs}
      />
    </div>
  );
}


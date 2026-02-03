"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { submitWork, approveWork } from "@/lib/actions/fulfillment";

type Project = {
  id: string;
  videoUrl: string | null;
  submissionStatus: "PENDING" | "APPROVED" | "REVISIONS";
  brief: {
    title: string;
    reelScript: string;
  };
};

type ProjectCardProps = {
  project: Project;
  userRole: "BRAND" | "CREATOR";
};

export function ProjectCard({ project, userRole }: ProjectCardProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [videoUrl, setVideoUrl] = useState(project.videoUrl ?? "");

  const handleCopyScript = () => {
    navigator.clipboard.writeText(project.brief.reelScript);
  };

  const handleSubmitWork = () => {
    if (!videoUrl.trim()) {
      return;
    }

    startTransition(async () => {
      await submitWork(project.id, videoUrl);
      router.refresh();
    });
  };

  const handleApprove = () => {
    startTransition(async () => {
      await approveWork(project.id);
      router.refresh();
    });
  };

  return (
    <Card className="bg-zinc-900/60 border-zinc-800 text-zinc-50">
      <CardHeader className="space-y-2">
        <CardTitle className="flex items-center justify-between gap-4">
          <span className="text-lg font-semibold text-emerald-400">
            {project.brief.title}
          </span>
          <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs uppercase tracking-wide text-zinc-300">
            {project.submissionStatus.toLowerCase()}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-wide text-zinc-500">
            AI Reel Script
          </p>
          <div className="rounded-md bg-zinc-950/70 border border-zinc-800 px-3 py-2 max-h-48 overflow-y-auto">
            <p className="text-sm text-zinc-100 whitespace-pre-wrap">
              {project.brief.reelScript}
            </p>
          </div>
          {userRole === "CREATOR" && (
            <Button
              type="button"
              size="sm"
              className="mt-2 bg-emerald-600 hover:bg-emerald-500 text-xs"
              onClick={handleCopyScript}
            >
              Copy Script
            </Button>
          )}
        </div>
        {userRole === "CREATOR" && (
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-wide text-zinc-500">
              Submit Deliverable
            </p>
            <Input
              placeholder="Paste your video URL"
              value={videoUrl}
              onChange={(event) => setVideoUrl(event.target.value)}
              className="bg-zinc-950 border-zinc-800 text-zinc-50"
            />
            <Button
              type="button"
              className="mt-2 bg-emerald-600 hover:bg-emerald-500 text-white"
              disabled={isPending}
              onClick={handleSubmitWork}
            >
              {isPending ? "Submitting..." : "Submit Work"}
            </Button>
          </div>
        )}
        {userRole === "BRAND" && (
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-wide text-zinc-500">
              Submission
            </p>
            {project.videoUrl ? (
              <a
                href={project.videoUrl}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-emerald-400 underline underline-offset-4"
              >
                View submitted video
              </a>
            ) : (
              <p className="text-sm text-zinc-400">
                No video submitted yet.
              </p>
            )}
            <Button
              type="button"
              className="mt-2 bg-emerald-600 hover:bg-emerald-500 text-white"
              disabled={isPending}
              onClick={handleApprove}
            >
              {isPending ? "Approving..." : "Approve"}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}


"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  approveProjectSubmission,
  requestProjectRevision,
} from "@/lib/actions/fulfillment";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type ProjectReviewPanelProps = {
  projectId: string;
  projectStatus: string;
};

export function ProjectReviewPanel({ projectId, projectStatus }: ProjectReviewPanelProps) {
  const [revisionNote, setRevisionNote] = useState("");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  if (projectStatus !== "SUBMITTED") {
    return null;
  }

  const handleApprove = () => {
    startTransition(async () => {
      try {
        await approveProjectSubmission(projectId);
        toast.success("Approved", {
          description: "Funds released to the creator.",
        });
        router.refresh();
      } catch (error) {
        const message = error instanceof Error ? error.message : "Could not approve";
        toast.error("Approval failed", { description: message });
      }
    });
  };

  const handleRevision = () => {
    startTransition(async () => {
      try {
        await requestProjectRevision(projectId, revisionNote);
        toast.success("Revision requested");
        setRevisionNote("");
        router.refresh();
      } catch (error) {
        const message = error instanceof Error ? error.message : "Could not request revision";
        toast.error("Failed", { description: message });
      }
    });
  };

  return (
    <section className="rounded-xl border border-zinc-800 bg-zinc-900/70 px-5 py-4 space-y-3">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-400">
        Brand review
      </h2>
      <p className="text-sm text-zinc-400">
        Review the creator&apos;s deliverables. Approve to release escrow, or request a
        revision.
      </p>
      <Input
        placeholder="Revision notes (optional)"
        value={revisionNote}
        onChange={(e) => setRevisionNote(e.target.value)}
        className="bg-zinc-950"
      />
      <div className="flex flex-wrap gap-2">
        <Button type="button" disabled={isPending} onClick={handleApprove}>
          {isPending ? "Approving..." : "Approve & release funds"}
        </Button>
        <Button
          type="button"
          variant="outline"
          disabled={isPending}
          onClick={handleRevision}
        >
          Request revision
        </Button>
      </div>
    </section>
  );
}

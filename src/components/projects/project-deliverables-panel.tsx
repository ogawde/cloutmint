"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  addDeliverable,
  removeDeliverable,
  submitProjectForReview,
} from "@/lib/actions/fulfillment";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Deliverable = {
  id: string;
  platform: string;
  url: string;
  notes: string | null;
};

type ProjectDeliverablesPanelProps = {
  projectId: string;
  deliverables: Deliverable[];
  userRole: "BRAND" | "CREATOR";
  projectStatus: string;
  targetPlatforms: string[];
  submissionNote: string | null;
};

export function ProjectDeliverablesPanel({
  projectId,
  deliverables,
  userRole,
  projectStatus,
  targetPlatforms,
  submissionNote,
}: ProjectDeliverablesPanelProps) {
  const [platform, setPlatform] = useState(targetPlatforms[0] ?? "");
  const [url, setUrl] = useState("");
  const [note, setNote] = useState("");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const canEditDeliverables =
    userRole === "CREATOR" &&
    ["ACTIVE", "REVISION_REQUESTED"].includes(projectStatus);

  const canSubmit =
    userRole === "CREATOR" &&
    ["ACTIVE", "REVISION_REQUESTED"].includes(projectStatus) &&
    deliverables.length > 0;

  const handleAdd = () => {
    if (!platform.trim() || !url.trim()) {
      return;
    }

    startTransition(async () => {
      try {
        await addDeliverable(projectId, platform, url, note);
        setUrl("");
        setNote("");
        router.refresh();
      } catch (error) {
        const message = error instanceof Error ? error.message : "Could not add deliverable";
        toast.error("Failed", { description: message });
      }
    });
  };

  const handleRemove = (deliverableId: string) => {
    startTransition(async () => {
      try {
        await removeDeliverable(deliverableId);
        router.refresh();
      } catch {
        toast.error("Could not remove deliverable");
      }
    });
  };

  const handleSubmit = () => {
    startTransition(async () => {
      try {
        await submitProjectForReview(projectId, note);
        toast.success("Submitted for review", {
          description: "The brand has been notified to review your deliverables.",
        });
        router.refresh();
      } catch (error) {
        const message = error instanceof Error ? error.message : "Could not submit";
        toast.error("Submission failed", { description: message });
      }
    });
  };

  return (
    <section className="rounded-xl border border-zinc-800 bg-zinc-900/70 px-5 py-4 space-y-4">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-400">
        Deliverables
      </h2>

      {deliverables.length === 0 ? (
        <p className="text-sm text-zinc-500">No deliverables submitted yet.</p>
      ) : (
        <ul className="space-y-2">
          {deliverables.map((item) => (
            <li
              key={item.id}
              className="flex flex-wrap items-start justify-between gap-2 rounded-lg border border-zinc-800 bg-zinc-950/50 px-3 py-2"
            >
              <div>
                <p className="text-xs uppercase tracking-wide text-zinc-500">
                  {item.platform}
                </p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-zinc-100 underline underline-offset-4"
                >
                  {item.url}
                </a>
                {item.notes && (
                  <p className="mt-1 text-xs text-zinc-400">{item.notes}</p>
                )}
              </div>
              {canEditDeliverables && (
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  disabled={isPending}
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </Button>
              )}
            </li>
          ))}
        </ul>
      )}

      {submissionNote && (
        <p className="text-sm text-zinc-400">
          <span className="text-zinc-500">Creator note: </span>
          {submissionNote}
        </p>
      )}

      {canEditDeliverables && (
        <div className="space-y-2 border-t border-zinc-800 pt-4">
          <p className="text-xs uppercase tracking-wide text-zinc-500">Add post link</p>
          <Input
            placeholder="Platform (e.g. Instagram)"
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            list="platform-options"
            className="bg-zinc-950"
          />
          <datalist id="platform-options">
            {targetPlatforms.map((p) => (
              <option key={p} value={p} />
            ))}
          </datalist>
          <Input
            placeholder="Post URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="bg-zinc-950"
          />
          <Input
            placeholder="Notes (optional)"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="bg-zinc-950"
          />
          <Button type="button" disabled={isPending} onClick={handleAdd}>
            Add deliverable
          </Button>
        </div>
      )}

      {canSubmit && (
        <Button type="button" className="w-full sm:w-auto" disabled={isPending} onClick={handleSubmit}>
          {isPending ? "Submitting..." : "Mark deliverables complete"}
        </Button>
      )}
    </section>
  );
}

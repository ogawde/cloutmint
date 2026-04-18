"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { rejectBid, acceptBid } from "@/lib/actions/projects";

type BrandBidReviewCardProps = {
  bidId: string;
  creatorId: string;
  bidStatus: "PENDING" | "ACCEPTED" | "REJECTED";
  creatorEmail: string;
  creatorDisplayName: string | null;
  creatorBio: string | null;
  creatorSocialLinks: {
    label: string;
    href: string;
  }[];
  amount: number;
  pitchText: string;
};

export function BrandBidReviewCard({
  bidId,
  creatorId,
  bidStatus,
  creatorEmail,
  creatorDisplayName,
  creatorBio,
  creatorSocialLinks,
  amount,
  pitchText,
}: BrandBidReviewCardProps) {
  const [pendingAction, setPendingAction] = useState<"accept" | "reject" | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const router = useRouter();
  const canReview = bidStatus === "PENDING";
  const creatorLabel = creatorDisplayName?.trim() || creatorEmail;
  const pitchPreview =
    pitchText.length > 110 ? `${pitchText.slice(0, 110)}...` : pitchText;

  const handleAccept = async () => {
    setPendingAction("accept");
    try {
      const result = await acceptBid(bidId);
      toast.success("Bid accepted", {
        description: "Fund the project to hold credits in escrow and unlock chat.",
      });
      if (result?.projectId) {
        router.push(`/brand/projects/${result.projectId}`);
        return;
      }
      router.refresh();
    } catch {
      toast.error("Could not accept bid", {
        description: "Please try again.",
      });
    } finally {
      setPendingAction(null);
    }
  };

  const handleReject = async () => {
    setPendingAction("reject");
    try {
      await rejectBid(bidId);
      toast.success("Bid rejected");
      router.refresh();
    } catch {
      toast.error("Could not reject bid", {
        description: "Please try again.",
      });
    } finally {
      setPendingAction(null);
    }
  };

  return (
    <article className="rounded-xl border border-zinc-800 bg-zinc-900/70 px-5 py-4">
      <button
        type="button"
        onClick={() => setIsExpanded((value) => !value)}
        className="w-full text-left"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1">
            <Link
              href={`/brand/creators/${creatorId}`}
              onClick={(event) => event.stopPropagation()}
              className="text-base font-semibold text-zinc-100 underline-offset-4 hover:underline"
            >
              {creatorLabel}
            </Link>
            <p className="text-sm text-zinc-300">Amount: ${amount}</p>
          </div>
          <Badge variant="outline" className="border-zinc-700 text-xs">
            {bidStatus}
          </Badge>
        </div>
        <p className="mt-2 text-sm text-zinc-400">{pitchPreview}</p>
        <p className="mt-2 text-xs text-zinc-500">
          {isExpanded ? "Click to collapse details" : "Click to expand details"}
        </p>
      </button>
      {isExpanded && (
        <div className="mt-4 space-y-4 border-t border-zinc-800 pt-4">
          {creatorBio && <p className="text-sm text-zinc-400">{creatorBio}</p>}
          {creatorSocialLinks.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {creatorSocialLinks.map((link) => (
                <span
                  key={`${bidId}-${link.label}`}
                  className="rounded-full border border-zinc-700 px-2.5 py-1 text-xs text-zinc-300"
                >
                  {link.label}
                </span>
              ))}
            </div>
          )}
          <div className="border-t border-zinc-800 pt-3">
            <p className="text-xs uppercase tracking-wide text-zinc-500">Pitch</p>
            <p className="mt-1 whitespace-pre-wrap text-sm text-zinc-200">{pitchText}</p>
          </div>
          {canReview && (
            <div className="flex flex-wrap gap-2">
              <Button type="button" onClick={handleAccept} disabled={pendingAction !== null}>
                {pendingAction === "accept" ? "Accepting..." : "Accept Proposal"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={handleReject}
                disabled={pendingAction !== null}
              >
                {pendingAction === "reject" ? "Rejecting..." : "Reject Proposal"}
              </Button>
            </div>
          )}
        </div>
      )}
    </article>
  );
}

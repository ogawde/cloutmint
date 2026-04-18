"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { acceptBid } from "@/lib/actions/projects";

type Bid = {
  id: string;
  pitchText: string;
  amount: number;
};

type BriefBidsProps = {
  bids: Bid[];
};

export function BriefBids({ bids }: BriefBidsProps) {
  const router = useRouter();
  const [pendingId, setPendingId] = useState<string | null>(null);

  if (!bids.length) {
    return null;
  }

  const handleAccept = async (bidId: string) => {
    setPendingId(bidId);

    try {
      const result = await acceptBid(bidId);
      if (result?.projectId) {
        router.push(`/brand/projects/${result.projectId}`);
        return;
      }
      router.refresh();
    } finally {
      setPendingId(null);
    }
  };

  return (
    <div className="mt-4 max-h-48 space-y-3 overflow-y-auto rounded-lg border border-zinc-800 bg-zinc-950/60 p-3">
      {bids.map((bid) => (
        <Card
          key={bid.id}
          className="border-zinc-800 bg-zinc-900/80 px-3 py-2 text-sm text-zinc-100"
        >
          <p className="mb-2 text-zinc-300">{bid.pitchText}</p>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-zinc-100">
              ${bid.amount}
            </span>
            <Button
              type="button"
              size="sm"
              className="text-xs"
              disabled={pendingId === bid.id}
              onClick={() => handleAccept(bid.id)}
            >
              {pendingId === bid.id ? "Accepting..." : "Accept Bid"}
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}


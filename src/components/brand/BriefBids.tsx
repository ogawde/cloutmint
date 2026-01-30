"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Bid = {
  id: string;
  pitchText: string;
  amount: number;
};

type BriefBidsProps = {
  bids: Bid[];
};

export function BriefBids({ bids }: BriefBidsProps) {
  if (!bids.length) {
    return null;
  }

  return (
    <div className="mt-4 max-h-48 space-y-3 overflow-y-auto rounded-md border border-zinc-800 bg-zinc-950/60 p-3">
      {bids.map((bid) => (
        <Card
          key={bid.id}
          className="border-zinc-800 bg-zinc-900/80 px-3 py-2 text-sm text-zinc-100"
        >
          <p className="mb-2 text-zinc-300">{bid.pitchText}</p>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-emerald-400">
              ${bid.amount}
            </span>
            <Button
              type="button"
              size="sm"
              className="bg-emerald-600 text-xs text-white hover:bg-emerald-500"
            >
              Accept Bid
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}


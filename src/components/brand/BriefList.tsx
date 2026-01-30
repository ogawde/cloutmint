 "use client";

import { useState, FormEvent } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { createBid } from "@/lib/actions/bids";
import { BriefBids } from "@/components/brand/BriefBids";

type Brief = {
  id: string;
  title: string;
  productDescription: string;
  hook1: string;
  hook2: string;
  hook3: string;
  reelScript: string;
  status: string;
  bids?: {
    id: string;
    pitchText: string;
    amount: number;
  }[];
};

type BriefListProps = {
  briefs: Brief[];
  userRole?: string;
};

export function BriefList({ briefs, userRole }: BriefListProps) {
  if (!briefs.length) {
    return null;
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {briefs.map((brief) => (
        <BriefCard key={brief.id} brief={brief} userRole={userRole} />
      ))}
    </div>
  );
}

type BriefCardProps = {
  brief: Brief;
  userRole?: string;
};

function BriefCard({ brief, userRole }: BriefCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [pitchText, setPitchText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const preview =
    brief.reelScript.length > 100
      ? `${brief.reelScript.slice(0, 100)}...`
      : brief.reelScript;

  const handleSubmitPitch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!amount.trim() || !pitchText.trim()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await createBid({
        briefId: brief.id,
        amount: Number(amount),
        pitchText,
      });

      setIsDialogOpen(false);
      setAmount("");
      setPitchText("");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="bg-zinc-900/50 border-zinc-800 text-zinc-50 flex flex-col">
      <CardHeader className="space-y-2">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-emerald-400 font-semibold text-lg">
            {brief.title}
          </CardTitle>
          <Badge variant="outline" className="border-zinc-700 text-xs">
            {brief.status}
          </Badge>
        </div>
        <p className="text-sm text-zinc-400">{brief.productDescription}</p>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 pt-0">
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-wide text-zinc-500">
            Hook 1 · Curiosity
          </p>
          <p className="text-sm text-zinc-100">{brief.hook1}</p>
        </div>
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-wide text-zinc-500">
            Hook 2 · Bold Claim
          </p>
          <p className="text-sm text-zinc-100">{brief.hook2}</p>
        </div>
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-wide text-zinc-500">
            Hook 3 · PAS
          </p>
          <p className="text-sm text-zinc-100">{brief.hook3}</p>
        </div>
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-wide text-zinc-500">
            Reel Script
          </p>
          <div className="rounded-md bg-zinc-900/80 border border-zinc-800 px-3 py-2 max-h-40 overflow-y-auto">
            <p className="text-sm text-zinc-100 whitespace-pre-wrap">
              {isExpanded ? brief.reelScript : preview}
            </p>
          </div>
          <div className="flex items-center gap-3">
            {brief.reelScript.length > 100 && (
              <button
                type="button"
                onClick={() => setIsExpanded((value) => !value)}
                className="text-xs font-medium text-emerald-400 hover:text-emerald-300"
              >
                {isExpanded ? "See Less" : "See More"}
              </button>
            )}
            <button
              type="button"
              onClick={() => navigator.clipboard.writeText(brief.reelScript)}
              className="text-xs font-medium text-emerald-400 hover:text-emerald-300"
            >
              Copy Script
            </button>
            {userRole === "CREATOR" && (
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <Button
                  type="button"
                  size="sm"
                  className="ml-auto bg-emerald-600 hover:bg-emerald-500 text-xs"
                  onClick={() => setIsDialogOpen(true)}
                >
                  Submit Pitch
                </Button>
                <DialogContent className="bg-zinc-950 border-zinc-800 text-zinc-50">
                  <DialogHeader>
                    <DialogTitle className="text-lg">
                      Submit Pitch
                    </DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSubmitPitch} className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="amount"
                        className="text-xs font-medium text-zinc-400"
                      >
                        Amount
                      </label>
                      <Input
                        id="amount"
                        type="number"
                        min={0}
                        value={amount}
                        onChange={(event) => setAmount(event.target.value)}
                        className="bg-zinc-900 border-zinc-700 text-zinc-50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="pitchText"
                        className="text-xs font-medium text-zinc-400"
                      >
                        Pitch
                      </label>
                      <Textarea
                        id="pitchText"
                        value={pitchText}
                        onChange={(event) => setPitchText(event.target.value)}
                        className="bg-zinc-900 border-zinc-700 text-zinc-50 min-h-[120px]"
                      />
                    </div>
                    <div className="flex justify-end gap-3 pt-2">
                      <Button
                        type="button"
                        variant="outline"
                        className="border-zinc-700 text-zinc-200 hover:bg-zinc-900"
                        onClick={() => setIsDialogOpen(false)}
                        disabled={isSubmitting}
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        className="bg-emerald-600 hover:bg-emerald-500 text-white"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Submit Pitch"}
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            )}
          </div>
        </div>
        {userRole === "BRAND" && brief.bids && brief.bids.length > 0 && (
          <BriefBids bids={brief.bids} />
        )}
      </CardContent>
    </Card>
  );
}


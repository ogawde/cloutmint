 "use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Brief = {
  id: string;
  title: string;
  productDescription: string;
  hook1: string;
  hook2: string;
  hook3: string;
  reelScript: string;
  status: string;
};

type BriefListProps = {
  briefs: Brief[];
};

export function BriefList({ briefs }: BriefListProps) {
  if (!briefs.length) {
    return null;
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {briefs.map((brief) => (
        <BriefCard key={brief.id} brief={brief} />
      ))}
    </div>
  );
}

type BriefCardProps = {
  brief: Brief;
};

function BriefCard({ brief }: BriefCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const preview =
    brief.reelScript.length > 100
      ? `${brief.reelScript.slice(0, 100)}...`
      : brief.reelScript;

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
          <p className="text-sm text-zinc-100 whitespace-pre-wrap">
            {isExpanded ? brief.reelScript : preview}
          </p>
          {brief.reelScript.length > 100 && (
            <button
              type="button"
              onClick={() => setIsExpanded((value) => !value)}
              className="self-start text-xs font-medium text-emerald-400 hover:text-emerald-300"
            >
              {isExpanded ? "See Less" : "See More"}
            </button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}



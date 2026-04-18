"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { fundProject } from "@/lib/actions/projects";
import { Button } from "@/components/ui/button";

type ProjectFundButtonProps = {
  projectId: string;
  agreedAmount: number;
  brandCredits: number;
};

export function ProjectFundButton({
  projectId,
  agreedAmount,
  brandCredits,
}: ProjectFundButtonProps) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const hasEnoughCredits = brandCredits >= agreedAmount;

  const handleFund = () => {
    startTransition(async () => {
      try {
        await fundProject(projectId);
        toast.success("Project funded", {
          description: `${agreedAmount} credits held in escrow. Chat is now unlocked.`,
        });
        router.refresh();
      } catch (error) {
        const message = error instanceof Error ? error.message : "Could not fund project";
        toast.error("Funding failed", { description: message });
      }
    });
  };

  return (
    <div className="rounded-xl border border-amber-600/40 bg-amber-500/10 px-5 py-4 space-y-3">
      <p className="text-sm text-amber-200">
        Fund this project to hold {agreedAmount} credits in escrow and unlock chat with the
        creator.
      </p>
      <p className="text-xs text-zinc-400">
        Your available credits: {brandCredits}
      </p>
      <Button
        type="button"
        disabled={isPending || !hasEnoughCredits}
        onClick={handleFund}
      >
        {isPending
          ? "Funding..."
          : hasEnoughCredits
            ? `Fund project ($${agreedAmount})`
            : "Insufficient credits"}
      </Button>
    </div>
  );
}

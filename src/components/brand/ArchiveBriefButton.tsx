"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import { archiveBrief } from "@/lib/actions/briefs";
import { Button } from "@/components/ui/button";

type ArchiveBriefButtonProps = {
  briefId: string;
  briefTitle: string;
};

export function ArchiveBriefButton({
  briefId,
  briefTitle,
}: ArchiveBriefButtonProps) {
  const [isArchiving, startArchivingTransition] = useTransition();
  const router = useRouter();

  const handleArchive = () => {
    startArchivingTransition(async () => {
      try {
        await archiveBrief(briefId);
        toast.success("Brief archived", {
          description: `"${briefTitle}" moved to archived.`,
        });
        router.refresh();
      } catch {
        toast.error("Could not archive brief", {
          description: "Please try again.",
        });
      }
    });
  };

  return (
    <Button
      type="button"
      size="icon-sm"
      variant="outline"
      aria-label={`Archive ${briefTitle}`}
      disabled={isArchiving}
      onClick={handleArchive}
      className="absolute right-4 top-4 z-10 border-zinc-700 bg-zinc-950/80 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-50"
    >
      <Trash2 />
    </Button>
  );
}

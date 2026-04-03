"use client";

import { useState, useTransition, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { createBrief, generateBriefScript } from "@/lib/actions/briefs";

const TARGET_PLATFORM_OPTIONS = [
  "YouTube",
  "Instagram",
  "TikTok",
  "Snapchat",
  "YouTube Shorts",
] as const;

function normalizeScriptFormatting(script: string) {
  return script
    .replace(/\]\s*(?=\[)/g, "]\n")
    .replace(/\s*\[(Audio|Visual):/g, "\n[$1:")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export function CreateBriefForm() {
  const [title, setTitle] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productUrl, setProductUrl] = useState("");
  const [minBidAmount, setMinBidAmount] = useState("");
  const [maxBidAmount, setMaxBidAmount] = useState("");
  const [script, setScript] = useState("");
  const [hook1, setHook1] = useState("");
  const [hook2, setHook2] = useState("");
  const [hook3, setHook3] = useState("");
  const [targetPlatforms, setTargetPlatforms] = useState<string[]>([]);
  const [generationCount, setGenerationCount] = useState(0);
  const [isGenerating, startGeneratingTransition] = useTransition();
  const [isCreating, startCreatingTransition] = useTransition();
  const router = useRouter();

  const handleGenerateScript = () => {
    if (!productDescription.trim() || generationCount >= 3) {
      return;
    }

    startGeneratingTransition(async () => {
      try {
        const result = await generateBriefScript({
          productDescription,
          previousScript: generationCount > 0 ? script : undefined,
          regenAttempt: generationCount + 1,
        });

        setHook1(result.hook1);
        setHook2(result.hook2);
        setHook3(result.hook3);
        setScript(normalizeScriptFormatting(result.reelScript));
        setGenerationCount((count) => count + 1);
      } catch {
        toast.error("Script generation failed", {
          description: "Please try again.",
        });
      }
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !title.trim() ||
      !productDescription.trim() ||
      !productUrl.trim() ||
      !script.trim() ||
      targetPlatforms.length === 0 ||
      !minBidAmount.trim() ||
      !maxBidAmount.trim()
    ) {
      toast.error("Missing required fields", {
        description: "Fill every field before creating the brief.",
      });
      return;
    }

    const minAmount = Number(minBidAmount);
    const maxAmount = Number(maxBidAmount);

    if (!Number.isFinite(minAmount) || !Number.isFinite(maxAmount) || minAmount > maxAmount) {
      toast.error("Invalid bid range", {
        description: "Minimum bid should be less than or equal to maximum bid.",
      });
      return;
    }

    startCreatingTransition(async () => {
      try {
        await createBrief({
          title,
          productDescription,
          productUrl,
          targetPlatforms,
          minBidAmount: minAmount,
          maxBidAmount: maxAmount,
          reelScript: script,
          hook1,
          hook2,
          hook3,
        });

        setTitle("");
        setProductDescription("");
        setProductUrl("");
        setMinBidAmount("");
        setMaxBidAmount("");
        setScript("");
        setHook1("");
        setHook2("");
        setHook3("");
        setTargetPlatforms([]);
        setGenerationCount(0);
        toast.success("Brief created", {
          description: "Your brief is live and creators can now bid on it.",
        });
        router.push("/brand/briefs");
        router.refresh();
      } catch {
        toast.error("Could not create brief", {
          description: "Please review the fields and try again.",
        });
      }
    });
  };

  const togglePlatform = (platform: string) => {
    setTargetPlatforms((previousValue) =>
      previousValue.includes(platform)
        ? previousValue.filter((item) => item !== platform)
        : [...previousValue, platform],
    );
  };

  const isAllPlatformsSelected = targetPlatforms.length === TARGET_PLATFORM_OPTIONS.length;

  return (
    <div className="relative">
      <Card className="mx-auto max-w-xl border-zinc-800 bg-zinc-900/80 text-zinc-50">
        <CardHeader>
          <CardTitle className="text-xl font-semibold tracking-tight text-zinc-100">
            Create a New Brief
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="Give your brief a title"
                className="bg-zinc-950/70"
                disabled={isGenerating || isCreating}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="productDescription">Product Description</Label>
              <Textarea
                id="productDescription"
                value={productDescription}
                onChange={(event) => setProductDescription(event.target.value)}
                placeholder="Describe your product so we can mint compelling hooks"
                className="min-h-[140px] bg-zinc-950/70"
                disabled={isGenerating || isCreating}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="productUrl">Product Live URL</Label>
              <Input
                id="productUrl"
                type="url"
                value={productUrl}
                onChange={(event) => setProductUrl(event.target.value)}
                placeholder="https://example.com/product"
                className="bg-zinc-950/70"
                disabled={isGenerating || isCreating}
              />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="minBidAmount">Minimum Bid (credits)</Label>
                <Input
                  id="minBidAmount"
                  type="number"
                  min={0}
                  value={minBidAmount}
                  onChange={(event) => setMinBidAmount(event.target.value)}
                  placeholder="500"
                  className="bg-zinc-950/70"
                  disabled={isGenerating || isCreating}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="maxBidAmount">Maximum Bid (credits)</Label>
                <Input
                  id="maxBidAmount"
                  type="number"
                  min={0}
                  value={maxBidAmount}
                  onChange={(event) => setMaxBidAmount(event.target.value)}
                  placeholder="5000"
                  className="bg-zinc-950/70"
                  disabled={isGenerating || isCreating}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="script">Video Script</Label>
              <Textarea
                id="script"
                value={script}
                onChange={(event) => setScript(event.target.value)}
                placeholder="Generate a video script and edit it before creating your brief"
                className="min-h-[180px] bg-zinc-950/70"
                disabled={isCreating}
              />
              <p className="text-xs text-zinc-400">
                Script generations used: {generationCount}/3
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <Label>Target Platforms</Label>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  disabled={isGenerating || isCreating}
                  onClick={() =>
                    setTargetPlatforms(isAllPlatformsSelected ? [] : [...TARGET_PLATFORM_OPTIONS])
                  }
                >
                  {isAllPlatformsSelected ? "Clear All" : "Select All"}
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {TARGET_PLATFORM_OPTIONS.map((platform) => {
                  const isSelected = targetPlatforms.includes(platform);
                  return (
                    <Button
                      key={platform}
                      type="button"
                      variant={isSelected ? "default" : "outline"}
                      size="sm"
                      disabled={isGenerating || isCreating}
                      onClick={() => togglePlatform(platform)}
                    >
                      {platform}
                    </Button>
                  );
                })}
              </div>
              <div className="rounded-md border border-zinc-800 bg-zinc-950/60 px-3 py-2">
                <p className="text-xs uppercase tracking-wide text-zinc-500">Creator preview</p>
                <div className="mt-2 flex min-h-7 flex-wrap gap-2">
                  {targetPlatforms.length === 0 ? (
                    <p className="text-xs text-zinc-400">Selected platforms will show here as bubbles.</p>
                  ) : (
                    targetPlatforms.map((platform) => (
                      <Badge key={platform} variant="secondary" className="bg-zinc-800 text-zinc-100">
                        {platform}
                      </Badge>
                    ))
                  )}
                </div>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <Button
                type="button"
                variant="outline"
                disabled={isGenerating || isCreating || generationCount >= 3 || !productDescription.trim()}
                onClick={handleGenerateScript}
              >
                {isGenerating ? "Generating..." : "Generate Script"}
              </Button>
            <Button
              type="submit"
                disabled={
                  isGenerating ||
                  isCreating ||
                  !script.trim() ||
                  targetPlatforms.length === 0 ||
                  !productUrl.trim() ||
                  !minBidAmount.trim() ||
                  !maxBidAmount.trim() ||
                  Number(minBidAmount) > Number(maxBidAmount)
                }
              className="w-full sm:w-auto disabled:opacity-70"
            >
                {isCreating ? "Creating Brief..." : "Create Brief"}
            </Button>
            </div>
          </form>
        </CardContent>
      </Card>
      {(isGenerating || isCreating) && (
        <div className="absolute inset-0 z-10 flex items-center justify-center rounded-xl bg-zinc-950/80">
          <div className="flex flex-col items-center gap-3">
            <div className="h-10 w-10 animate-spin rounded-full border-2 border-zinc-600 border-t-zinc-200" />
            <p className="text-sm font-medium text-zinc-200 animate-pulse">
              {isGenerating ? "Generating your script..." : "Saving your brief..."}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}


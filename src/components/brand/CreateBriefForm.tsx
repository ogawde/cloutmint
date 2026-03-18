"use client";

import { useState, useTransition, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { createBrief, generateBriefScript } from "@/lib/actions/briefs";

export function CreateBriefForm() {
  const [title, setTitle] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [script, setScript] = useState("");
  const [hook1, setHook1] = useState("");
  const [hook2, setHook2] = useState("");
  const [hook3, setHook3] = useState("");
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
        setScript(result.reelScript);
        setGenerationCount((count) => count + 1);
      } catch {
        alert("Script generation failed. Please try again.");
      }
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!title.trim() || !productDescription.trim() || !script.trim()) {
      return;
    }

    startCreatingTransition(async () => {
      try {
        await createBrief({
          title,
          productDescription,
          reelScript: script,
          hook1,
          hook2,
          hook3,
        });

        setTitle("");
        setProductDescription("");
        setScript("");
        setHook1("");
        setHook2("");
        setHook3("");
        setGenerationCount(0);
        router.push("/brand/projects");
        router.refresh();
        alert("Brief created successfully.");
      } catch {
        alert("Something went wrong while creating the brief.");
      }
    });
  };

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
              <Label htmlFor="script">Script</Label>
              <Textarea
                id="script"
                value={script}
                onChange={(event) => setScript(event.target.value)}
                placeholder="Generate a script and edit it before creating your brief"
                className="min-h-[180px] bg-zinc-950/70"
                disabled={isCreating}
              />
              <p className="text-xs text-zinc-400">
                Script generations used: {generationCount}/3
              </p>
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
                disabled={isGenerating || isCreating || !script.trim()}
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


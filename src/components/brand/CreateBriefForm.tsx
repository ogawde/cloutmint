 "use client";

import { useState, useTransition, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { createBrief } from "@/lib/actions/briefs";

export function CreateBriefForm() {
  const [title, setTitle] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!title.trim() || !productDescription.trim()) {
      return;
    }

    startTransition(async () => {
      try {
        await createBrief({
          title,
          productDescription,
        });

        setTitle("");
        setProductDescription("");
        router.refresh();
        alert("Brief created and hooks minted successfully.");
      } catch (error) {
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
                disabled={isPending}
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
                disabled={isPending}
              />
            </div>
            <Button
              type="submit"
              disabled={isPending}
              className="w-full disabled:opacity-70"
            >
              {isPending ? "Minting Hooks..." : "Create Brief"}
            </Button>
          </form>
        </CardContent>
      </Card>
      {isPending && (
        <div className="absolute inset-0 z-10 flex items-center justify-center rounded-xl bg-zinc-950/80">
          <div className="flex flex-col items-center gap-3">
            <div className="h-10 w-10 animate-spin rounded-full border-2 border-zinc-600 border-t-zinc-200" />
            <p className="text-sm font-medium text-zinc-200 animate-pulse">
              Minting your Strategy...
            </p>
          </div>
        </div>
      )}
    </div>
  );
}


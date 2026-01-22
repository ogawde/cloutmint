"use client";

import { useState, FormEvent } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { createBrief } from "@/lib/actions/briefs";

export function CreateBriefForm() {
  const [title, setTitle] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!title.trim() || !productDescription.trim()) {
      return;
    }

    setIsLoading(true);

    try {
      await createBrief({
        title,
        productDescription,
        brandId: "placeholder-id",
      });

      setTitle("");
      setProductDescription("");
      alert("Brief created and hooks minted successfully.");
    } catch (error) {
      alert("Something went wrong while creating the brief.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="max-w-xl mx-auto bg-zinc-950 border-zinc-800 text-zinc-50">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">
          Create a New Brief
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Give your brief a title"
              className="bg-zinc-900 border-zinc-700 text-zinc-50 placeholder:text-zinc-500"
              disabled={isLoading}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="productDescription">Product Description</Label>
            <Textarea
              id="productDescription"
              value={productDescription}
              onChange={(event) => setProductDescription(event.target.value)}
              placeholder="Describe your product so we can mint compelling hooks"
              className="bg-zinc-900 border-zinc-700 text-zinc-50 placeholder:text-zinc-500 min-h-[140px]"
              disabled={isLoading}
            />
          </div>
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white disabled:opacity-70"
          >
            {isLoading ? "Minting Hooks..." : "Create Brief"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}


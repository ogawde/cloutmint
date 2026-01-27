"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { updateUserRole } from "@/lib/actions/user";

export function RoleSelection() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleSelect = (role: "BRAND" | "CREATOR") => {
    startTransition(async () => {
      await updateUserRole(role);
      router.refresh();
    });
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 flex items-center justify-center">
      <div className="max-w-3xl w-full px-4 space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-semibold tracking-tight">Choose your role</h1>
          <p className="text-zinc-400 text-sm md:text-base">
            Tell us who you are so we can tailor the dashboard to your workflow.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="bg-zinc-900 border-zinc-800 hover:border-emerald-500 transition-colors h-full">
            <CardHeader>
              <CardTitle className="text-xl">I am a Brand</CardTitle>
              <CardDescription>Post briefs, mint hooks, and collaborate with creators.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                type="button"
                variant="outline"
                className="w-full border-zinc-700 hover:border-emerald-500 hover:text-emerald-400 bg-zinc-900"
                disabled={isPending}
                onClick={() => handleSelect("BRAND")}
              >
                {isPending ? "Saving..." : "Continue as Brand"}
              </Button>
            </CardContent>
          </Card>
          <Card className="bg-zinc-900 border-zinc-800 hover:border-emerald-500 transition-colors h-full">
            <CardHeader>
              <CardTitle className="text-xl">I am a Creator</CardTitle>
              <CardDescription>Discover briefs, submit ideas, and grow with brands.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                type="button"
                variant="outline"
                className="w-full border-zinc-700 hover:border-emerald-500 hover:text-emerald-400 bg-zinc-900"
                disabled={isPending}
                onClick={() => handleSelect("CREATOR")}
              >
                {isPending ? "Saving..." : "Continue as Creator"}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}


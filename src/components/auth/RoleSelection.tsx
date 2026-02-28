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
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 text-zinc-50">
      <div className="w-full max-w-3xl space-y-8 px-4">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-100">Choose your role</h1>
          <p className="text-sm leading-6 text-zinc-400 md:text-base">
            Tell us who you are so we can tailor the dashboard to your workflow.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="h-full border-zinc-800 bg-zinc-900 transition-colors hover:border-zinc-600">
            <CardHeader>
              <CardTitle className="text-xl">I am a Brand</CardTitle>
              <CardDescription>Post briefs, mint hooks, and collaborate with creators.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                type="button"
                variant="outline"
                className="w-full bg-zinc-900"
                disabled={isPending}
                onClick={() => handleSelect("BRAND")}
              >
                {isPending ? "Saving..." : "Continue as Brand"}
              </Button>
            </CardContent>
          </Card>
          <Card className="h-full border-zinc-800 bg-zinc-900 transition-colors hover:border-zinc-600">
            <CardHeader>
              <CardTitle className="text-xl">I am a Creator</CardTitle>
              <CardDescription>Discover briefs, submit ideas, and grow with brands.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                type="button"
                variant="outline"
                className="w-full bg-zinc-900"
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


"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";

export function AuthControls() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return <span className="text-xs text-zinc-500">Loading...</span>;
  }

  if (!session?.user) {
    return (
      <div className="flex items-center gap-2">
        <Button asChild size="sm" variant="outline" className="border-zinc-700">
          <Link href="/sign-in">Sign in</Link>
        </Button>
        <Button asChild size="sm" className="bg-emerald-500 text-black hover:bg-emerald-400">
          <Link href="/sign-up">Sign up</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <span className="hidden text-xs text-zinc-400 sm:inline">{session.user.email}</span>
      <Button
        size="sm"
        variant="outline"
        className="border-zinc-700"
        onClick={() => authClient.signOut()}
      >
        Sign out
      </Button>
    </div>
  );
}

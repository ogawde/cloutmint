import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignOutActionButton } from "@/components/auth/SignOutActionButton";

type AuthControlsProps = {
  userEmail?: string | null;
};

export function AuthControls({ userEmail }: AuthControlsProps) {
  if (!userEmail) {
    return (
      <div className="flex items-center gap-2.5">
        <Button asChild size="sm" variant="outline">
          <Link href="/auth/sign-in">Sign in</Link>
        </Button>
        <Button asChild size="sm">
          <Link href="/auth/sign-up">Sign up</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <span className="hidden text-sm text-zinc-400 sm:inline">{userEmail}</span>
      <SignOutActionButton />
    </div>
  );
}

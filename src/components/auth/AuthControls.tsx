import Link from "next/link";
import { buttonVariants } from "@/components/ui/button-variants";
import { SignOutActionButton } from "@/components/auth/SignOutActionButton";

type AuthControlsProps = {
  userEmail?: string | null;
};

export function AuthControls({ userEmail }: AuthControlsProps) {
  if (!userEmail) {
    return (
      <div className="flex items-center gap-2.5">
        <Link
          href="/auth/sign-in"
          className={buttonVariants({ size: "sm", variant: "outline" })}
        >
          Sign in
        </Link>
        <Link href="/auth/sign-up" className={buttonVariants({ size: "sm" })}>
          Sign up
        </Link>
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

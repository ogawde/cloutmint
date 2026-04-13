"use client";

import { usePathname } from "next/navigation";
import { AuthControls } from "@/components/auth/AuthControls";
import { HeaderRoleNav } from "@/components/navigation/HeaderRoleNav";

type Role = "BRAND" | "CREATOR" | null;

type AppHeaderProps = {
  role: Role;
  credits: number;
  earnings: number;
  userEmail: string | null;
};

const AUTH_ROUTES = new Set(["/sign-in", "/sign-up"]);

export function AppHeader({ role, credits, earnings, userEmail }: AppHeaderProps) {
  const pathname = usePathname();

  if (AUTH_ROUTES.has(pathname)) {
    return null;
  }

  return (
    <header className="border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <span className="text-base font-semibold tracking-tight text-zinc-100">
          CloutMint
        </span>
        <div className="flex items-center gap-5">
          {(role === "BRAND" || role === "CREATOR") && <HeaderRoleNav role={role} />}
          {role === "BRAND" && (
            <span className="text-sm font-medium text-zinc-300">
              Credits: <span className="text-zinc-100">{credits}</span>
            </span>
          )}
          {role === "CREATOR" && (
            <span className="text-sm font-medium text-zinc-300">
              Earnings: <span className="text-zinc-100">${earnings}</span>
            </span>
          )}
          <AuthControls userEmail={userEmail} />
        </div>
      </div>
    </header>
  );
}

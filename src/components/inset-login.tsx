import Link from "next/link";
import type { ReactNode } from "react";

type AuthInsetLayoutProps = {
  title: string;
  description: string;
  children: ReactNode;
};

/**
 * Shared split auth layout used by sign-in and sign-up pages.
 */
export function AuthInsetLayout({
  title,
  description,
  children,
}: AuthInsetLayoutProps) {
  return (
    <main className="relative min-h-screen bg-zinc-950 px-4 py-6 text-zinc-50 md:px-8 md:py-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(82,82,91,0.24),transparent_40%),radial-gradient(circle_at_80%_100%,rgba(24,24,27,0.3),transparent_45%)]"
      />

      <div className="relative mx-auto grid min-h-[calc(100vh-3rem)] w-full max-w-6xl overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/85 shadow-2xl shadow-black/30 lg:grid-cols-[1.1fr_0.9fr]">
        <AuthMarketingPanel />

        <section className="flex items-center justify-center bg-zinc-950/85 px-6 py-10 sm:px-10">
          <div className="w-full max-w-md">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
              CloutMint
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100">
              {title}
            </h1>
            <p className="mt-2 text-sm text-zinc-400">{description}</p>

            <div className="mt-8">{children}</div>
          </div>
        </section>
      </div>
    </main>
  );
}

function AuthMarketingPanel() {
  return (
    <aside className="relative hidden overflow-hidden lg:block">
      <div className="absolute inset-0 bg-[linear-gradient(140deg,#18181b_10%,#0f172a_45%,#18181b_90%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(161,161,170,0.18),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(24,24,27,0.38),transparent_40%)]" />

      <div className="relative flex h-full flex-col justify-between p-12">
        <Link
          href="/"
          className="w-fit rounded-md border border-zinc-700/70 bg-zinc-900/45 px-3 py-1.5 text-xs font-medium text-zinc-200 transition hover:border-zinc-500 hover:text-white"
        >
          Back to home
        </Link>

        <div className="max-w-sm">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
            Creator x Brand
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-zinc-100">
            Build campaigns,
            <br />
            close deals faster.
          </h2>
          <p className="mt-4 text-sm leading-6 text-zinc-300">
            Manage briefs, bid workflows, and payouts in one place.
          </p>
        </div>
      </div>
    </aside>
  );
}

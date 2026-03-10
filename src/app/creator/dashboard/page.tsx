import { redirect } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { getAuthSession } from "@/lib/auth-session";
import { Button } from "@/components/ui/button";
import { RoleNav } from "@/components/navigation/RoleNav";

export default async function CreatorDashboardPage() {
  const session = await getAuthSession();
  const authUserId = session?.user.id;

  if (!authUserId) {
    redirect("/auth/sign-in");
  }

  const user = await prisma.user.findUnique({
    where: { authUserId },
    select: {
      id: true,
      email: true,
      role: true,
    },
  });

  if (!user) {
    redirect("/");
  }

  if (user.role !== "CREATOR") {
    redirect("/");
  }

  const bids = await prisma.bid.findMany({
    where: {
      creatorId: user.id,
    },
    include: {
      brief: {
        select: {
          title: true,
          status: true,
          reelScript: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const projects = await prisma.project.findMany({
    where: {
      creatorId: user.id,
    },
    include: {
      brief: {
        select: {
          title: true,
          status: true,
          reelScript: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      <div className="mx-auto max-w-5xl space-y-8 px-4 py-12">
        <RoleNav role="CREATOR" activeHref="/creator/dashboard" />
        <section className="rounded-xl border border-zinc-800 bg-zinc-900/70 px-6 py-5">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-100">Creator Dashboard</h1>
          <p className="mt-2 text-sm leading-6 text-zinc-400">
            Track your profile details, bids, and collaborations in one place.
          </p>
          <div className="mt-4 flex justify-end">
            <Button asChild variant="outline" size="sm">
              <Link href="/creator/explore">Explore Briefs</Link>
            </Button>
          </div>
        </section>

        <section className="rounded-xl border border-zinc-800 bg-zinc-900/70 px-6 py-5">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-100">Profile</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-md border border-zinc-800 bg-zinc-900 px-4 py-3">
              <p className="text-xs uppercase tracking-wide text-zinc-500">Name</p>
              <p className="mt-1 text-sm text-zinc-100">{session?.user.name ?? "Not set"}</p>
            </div>
            <div className="rounded-md border border-zinc-800 bg-zinc-900 px-4 py-3">
              <p className="text-xs uppercase tracking-wide text-zinc-500">Email</p>
              <p className="mt-1 text-sm text-zinc-100">{user.email}</p>
            </div>
            <div className="rounded-md border border-zinc-800 bg-zinc-900 px-4 py-3">
              <p className="text-xs uppercase tracking-wide text-zinc-500">Role</p>
              <p className="mt-1 text-sm text-zinc-100">{user.role}</p>
            </div>
            <div className="rounded-md border border-zinc-800 bg-zinc-900 px-4 py-3">
              <p className="text-xs uppercase tracking-wide text-zinc-500">Creator Bio</p>
              <p className="mt-1 text-sm text-zinc-400">Profile details editing will be added soon.</p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-100">Bid Status</h2>
          {bids.length === 0 ? (
            <p className="text-sm leading-6 text-zinc-400">No bids submitted yet.</p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              {bids.map((bid) => (
                <details
                  key={bid.id}
                  className="rounded-xl border border-zinc-800 bg-zinc-900/70 px-5 py-4"
                >
                  <summary className="cursor-pointer list-none space-y-1">
                    <p className="text-base font-semibold text-zinc-100">{bid.brief.title}</p>
                    <p className="text-xs uppercase tracking-wide text-zinc-500">
                      Bid status: {bid.status}
                    </p>
                    <p className="text-sm text-zinc-300">Offered amount: ${bid.amount}</p>
                  </summary>
                  <div className="mt-4 space-y-3 border-t border-zinc-800 pt-4">
                    <div>
                      <p className="text-xs uppercase tracking-wide text-zinc-500">Pitch submitted</p>
                      <p className="mt-1 text-sm text-zinc-200 whitespace-pre-wrap">{bid.pitchText}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-zinc-500">Brief script snapshot</p>
                      <p className="mt-1 text-sm text-zinc-400 whitespace-pre-wrap">
                        {bid.brief.reelScript || "No script available."}
                      </p>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          )}
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-100">Project Progress</h2>
          {projects.length === 0 ? (
            <p className="text-sm leading-6 text-zinc-400">No active projects yet.</p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              {projects.map((project) => (
                <details
                  key={project.id}
                  className="rounded-xl border border-zinc-800 bg-zinc-900/70 px-5 py-4"
                >
                  <summary className="cursor-pointer list-none space-y-1">
                    <p className="text-base font-semibold text-zinc-100">{project.brief.title}</p>
                    <p className="text-xs uppercase tracking-wide text-zinc-500">
                      Submission: {project.submissionStatus}
                    </p>
                    <p className="text-sm text-zinc-300">
                      {project.videoUrl ? "Submission uploaded" : "Submission not uploaded yet"}
                    </p>
                  </summary>
                  <div className="mt-4 space-y-3 border-t border-zinc-800 pt-4">
                    <div>
                      <p className="text-xs uppercase tracking-wide text-zinc-500">Brief status</p>
                      <p className="mt-1 text-sm text-zinc-200">{project.brief.status}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-zinc-500">Video URL</p>
                      <p className="mt-1 break-all text-sm text-zinc-400">
                        {project.videoUrl ?? "No submission URL yet."}
                      </p>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}


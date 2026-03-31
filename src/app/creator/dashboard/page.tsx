import { redirect } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { getAuthSession } from "@/lib/auth-session";
import { updateCreatorProfile } from "@/lib/actions/user";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const RECENT_BIDS_LIMIT = 20;
const RECENT_PROJECTS_LIMIT = 20;

function getStatusClasses(status: string) {
  if (status === "PENDING") {
    return "border-amber-600/50 bg-amber-500/10 text-amber-300";
  }

  if (status === "ACCEPTED" || status === "APPROVED") {
    return "border-emerald-600/50 bg-emerald-500/10 text-emerald-300";
  }

  if (status === "REJECTED") {
    return "border-rose-600/50 bg-rose-500/10 text-rose-300";
  }

  return "border-zinc-700 text-zinc-300";
}

export default async function CreatorDashboardPage() {
  const session = await getAuthSession();
  const authUserId = session?.user.id;

  if (!authUserId) {
    redirect("/sign-in");
  }

  const user = await prisma.user.findUnique({
    where: { authUserId },
    select: {
      id: true,
      email: true,
      role: true,
      displayName: true,
      bio: true,
      instagramUrl: true,
      youtubeUrl: true,
      tiktokUrl: true,
      twitterUrl: true,
      snapchatUrl: true,
    },
  });

  if (!user) {
    redirect("/");
  }

  if (user.role !== "CREATOR") {
    redirect("/");
  }

  const [bids, projects] = await Promise.all([
    prisma.bid.findMany({
      where: {
        creatorId: user.id,
      },
      include: {
        brief: {
          select: {
            id: true,
            title: true,
            status: true,
            reelScript: true,
            brandId: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      take: RECENT_BIDS_LIMIT,
    }),
    prisma.project.findMany({
      where: {
        creatorId: user.id,
      },
      include: {
        brief: {
          select: {
            id: true,
            title: true,
            status: true,
            reelScript: true,
            brandId: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      take: RECENT_PROJECTS_LIMIT,
    }),
  ]);

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      <div className="mx-auto max-w-5xl space-y-8 px-4 py-12">
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
          <form action={updateCreatorProfile} className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="displayName" className="text-xs uppercase tracking-wide text-zinc-500">
                Name
              </label>
              <Input
                id="displayName"
                name="displayName"
                defaultValue={user.displayName ?? session?.user.name ?? ""}
                placeholder="Your creator name"
                className="bg-zinc-900"
              />
            </div>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-wide text-zinc-500">Email</p>
              <Input value={user.email} disabled className="bg-zinc-900" />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <label htmlFor="bio" className="text-xs uppercase tracking-wide text-zinc-500">
                Bio
              </label>
              <Textarea
                id="bio"
                name="bio"
                defaultValue={user.bio ?? ""}
                placeholder="Tell brands about your niche, style, and audience."
                className="min-h-[120px] bg-zinc-900"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="instagramUrl" className="text-xs uppercase tracking-wide text-zinc-500">
                Instagram URL
              </label>
              <Input id="instagramUrl" name="instagramUrl" defaultValue={user.instagramUrl ?? ""} className="bg-zinc-900" />
            </div>
            <div className="space-y-2">
              <label htmlFor="youtubeUrl" className="text-xs uppercase tracking-wide text-zinc-500">
                YouTube URL
              </label>
              <Input id="youtubeUrl" name="youtubeUrl" defaultValue={user.youtubeUrl ?? ""} className="bg-zinc-900" />
            </div>
            <div className="space-y-2">
              <label htmlFor="tiktokUrl" className="text-xs uppercase tracking-wide text-zinc-500">
                TikTok URL
              </label>
              <Input id="tiktokUrl" name="tiktokUrl" defaultValue={user.tiktokUrl ?? ""} className="bg-zinc-900" />
            </div>
            <div className="space-y-2">
              <label htmlFor="twitterUrl" className="text-xs uppercase tracking-wide text-zinc-500">
                Twitter/X URL
              </label>
              <Input id="twitterUrl" name="twitterUrl" defaultValue={user.twitterUrl ?? ""} className="bg-zinc-900" />
            </div>
            <div className="space-y-2">
              <label htmlFor="snapchatUrl" className="text-xs uppercase tracking-wide text-zinc-500">
                Snapchat URL
              </label>
              <Input id="snapchatUrl" name="snapchatUrl" defaultValue={user.snapchatUrl ?? ""} className="bg-zinc-900" />
            </div>
            <div className="sm:col-span-2">
              <Button type="submit">Save Profile</Button>
            </div>
          </form>
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
                    <p
                      className={cn(
                        "inline-flex w-fit rounded-full border px-2 py-0.5 text-xs uppercase tracking-wide",
                        getStatusClasses(bid.status),
                      )}
                    >
                      Bid status: {bid.status}
                    </p>
                    <p className="text-sm text-zinc-300">Offered amount: ${bid.amount}</p>
                  </summary>
                  <div className="mt-4 space-y-3 border-t border-zinc-800 pt-4">
                    <div className="flex flex-wrap gap-2">
                      <Button asChild size="sm" variant="outline">
                        <Link href={`/creator/brands/${bid.brief.brandId}`}>View Brand Profile</Link>
                      </Button>
                      {bid.status === "ACCEPTED" && (
                        <span className="text-xs text-emerald-300">
                          Accepted bids now move into Project Progress.
                        </span>
                      )}
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-zinc-500">Pitch submitted</p>
                      <p className="mt-1 text-sm text-zinc-200 whitespace-pre-wrap">{bid.pitchText}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-zinc-500">Brief video script snapshot</p>
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
                    <p
                      className={cn(
                        "inline-flex w-fit rounded-full border px-2 py-0.5 text-xs uppercase tracking-wide",
                        getStatusClasses(project.submissionStatus),
                      )}
                    >
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
                    <div>
                      <Button asChild size="sm" variant="outline">
                        <Link href={`/creator/brands/${project.brief.brandId}`}>Visit Brand</Link>
                      </Button>
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


import { redirect } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { getAuthSession } from "@/lib/auth-session";
import { CreatorProfileForm } from "@/components/creator/CreatorProfileForm";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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

type DashboardCardStatus = "SUBMITTED" | "ACCEPTED" | "REJECTED" | "SETTLED";

type BidCard = {
  id: string;
  briefId: string;
  briefTitle: string;
  brandId: string;
  amount: number;
  pitchText: string;
  script: string;
  projectStatus: string | null;
  status: DashboardCardStatus;
};

function extractProposedScript(pitchText: string) {
  const normalized = pitchText.trim();
  const marker = "Proposed Script:";
  const pitchMarker = "\n\nPitch:";

  if (!normalized.startsWith(marker)) {
    return normalized;
  }

  const startIndex = marker.length;
  const endIndex = normalized.indexOf(pitchMarker);

  if (endIndex === -1) {
    return normalized.slice(startIndex).trim();
  }

  return normalized.slice(startIndex, endIndex).trim();
}

function renderBidDetails(card: BidCard) {
  if (card.status === "SUBMITTED") {
    return (
      <div className="border-t border-zinc-800 pb-4 pt-3">
        <p className="text-sm text-zinc-300">Your proposal is waiting for brand review.</p>
      </div>
    );
  }

  if (card.status === "ACCEPTED" || card.status === "SETTLED") {
    return (
      <div className="space-y-3 border-t border-zinc-800 pb-4 pt-3">
        <div>
          <p className="text-xs uppercase tracking-wide text-zinc-500">Proposed script</p>
          <p className="mt-1 whitespace-pre-wrap text-sm text-zinc-200">
            {card.script || "Script not available."}
          </p>
        </div>
        {card.status === "SETTLED" && (
          <p className="text-sm text-emerald-300">
            Settled. Future chat settlement logic will be connected here.
          </p>
        )}
        {card.projectStatus && (
          <p className="text-xs uppercase tracking-wide text-zinc-500">
            Project submission: {card.projectStatus}
          </p>
        )}
        <div className="flex flex-wrap gap-2">
          <Link
            href={`/creator/brands/${card.brandId}`}
            className={buttonVariants({ size: "sm", variant: "outline" })}
          >
            View Brand Profile
          </Link>
          <Button size="sm" type="button" disabled>
            Contact
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3 border-t border-zinc-800 pb-4 pt-3">
      <div>
        <p className="text-xs uppercase tracking-wide text-zinc-500">Proposed script</p>
        <p className="mt-1 whitespace-pre-wrap text-sm text-zinc-200">
          {card.script || "Script not available."}
        </p>
      </div>
      <Button size="sm" type="button" disabled>
        Check Winner
      </Button>
    </div>
  );
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

  const projectByBriefId = new Map(projects.map((project) => [project.brief.id, project]));
  const bidCards: BidCard[] = bids.map((bid) => {
    const project = projectByBriefId.get(bid.brief.id);

    let status: DashboardCardStatus = "SUBMITTED";
    if (bid.status === "REJECTED") {
      status = "REJECTED";
    } else if (project?.submissionStatus === "APPROVED") {
      status = "SETTLED";
    } else if (bid.status === "ACCEPTED") {
      status = "ACCEPTED";
    }

    return {
      id: bid.id,
      briefId: bid.brief.id,
      briefTitle: bid.brief.title,
      brandId: bid.brief.brandId,
      amount: bid.amount,
      pitchText: bid.pitchText,
      script: extractProposedScript(bid.pitchText),
      projectStatus: project?.submissionStatus ?? null,
      status,
    };
  });

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      <div className="mx-auto max-w-5xl space-y-8 px-4 py-12">
        <section className="rounded-xl border border-zinc-800 bg-zinc-900/70 px-6 py-5">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-100">Profile</h2>
          <CreatorProfileForm
            email={user.email}
            displayName={user.displayName ?? session?.user.name ?? ""}
            bio={user.bio ?? ""}
            instagramUrl={user.instagramUrl ?? ""}
            youtubeUrl={user.youtubeUrl ?? ""}
            tiktokUrl={user.tiktokUrl ?? ""}
            twitterUrl={user.twitterUrl ?? ""}
            snapchatUrl={user.snapchatUrl ?? ""}
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-100">Bid Status</h2>
          {bidCards.length === 0 ? (
            <p className="text-sm leading-6 text-zinc-400">No bids submitted yet.</p>
          ) : (
            <Accordion type="single" collapsible className="border-t border-zinc-800">
              {bidCards.map((card) => (
                <AccordionItem key={card.id} value={card.id} className="border-b border-zinc-800">
                  <article>
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex-1 space-y-1">
                        <p className="text-base font-semibold text-zinc-100">{card.briefTitle}</p>
                        <p
                          className={cn(
                            "inline-flex w-fit rounded-full border px-2 py-0.5 text-xs uppercase tracking-wide",
                            getStatusClasses(card.status),
                          )}
                        >
                          Bid status: {card.status}
                        </p>
                        <p className="text-sm text-zinc-300">Offered amount: ${card.amount}</p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>{renderBidDetails(card)}</AccordionContent>
                  </article>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </section>
      </div>
    </main>
  );
}


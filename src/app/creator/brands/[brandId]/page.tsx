import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getAuthSession } from "@/lib/auth-session";
import { buttonVariants } from "@/components/ui/button-variants";

type PageProps = {
  params: Promise<{ brandId: string }>;
};

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export default async function CreatorBrandProfilePage({ params }: PageProps) {
  const { brandId } = await params;
  const session = await getAuthSession();
  const authUserId = session?.user.id;

  if (!authUserId) {
    redirect("/sign-in");
  }

  const currentUser = await prisma.user.findUnique({
    where: { authUserId },
    select: { id: true, role: true },
  });

  if (!currentUser || currentUser.role !== "CREATOR") {
    redirect("/");
  }

  const brand = await prisma.user.findFirst({
    where: {
      id: brandId,
      role: "BRAND",
    },
    select: {
      id: true,
      displayName: true,
      email: true,
      bio: true,
      logoUrl: true,
      briefsAsBrand: {
        where: {
          status: {
            not: "ARCHIVED",
          },
        },
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          title: true,
          status: true,
          createdAt: true,
          _count: {
            select: {
              bids: true,
            },
          },
          projects: {
            select: {
              id: true,
              submissionStatus: true,
              videoUrl: true,
              creator: {
                select: {
                  displayName: true,
                  email: true,
                },
              },
            },
          },
        },
      },
    },
  });

  if (!brand) {
    notFound();
  }

  const openBriefs = brand.briefsAsBrand.filter((brief) => brief.status === "OPEN");
  const completedBriefs = brand.briefsAsBrand.filter((brief) => brief.status === "COMPLETED");
  const finalDeliverables = brand.briefsAsBrand.flatMap((brief) =>
    brief.projects
      .filter((project) => Boolean(project.videoUrl))
      .map((project) => ({
        briefId: brief.id,
        briefTitle: brief.title,
        creatorName: project.creator.displayName || project.creator.email,
        status: project.submissionStatus,
        videoUrl: project.videoUrl as string,
      })),
  );

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      <div className="mx-auto max-w-5xl space-y-8 px-4 py-12">
        <section className="rounded-xl border border-zinc-800 bg-zinc-900/70 px-6 py-5">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-zinc-100">
                {brand.displayName || "Brand Profile"}
              </h1>
              <p className="mt-2 text-sm leading-6 text-zinc-400">{brand.bio || "No brand bio shared yet."}</p>
              <p className="mt-2 text-sm text-zinc-500">{brand.email}</p>
            </div>
            <Link
              href="/creator/explore"
              className={buttonVariants({ variant: "outline", size: "sm" })}
            >
              Back to Explore
            </Link>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-3">
          <article className="rounded-xl border border-zinc-800 bg-zinc-900/70 px-5 py-4">
            <p className="text-xs uppercase tracking-wide text-zinc-500">Open briefs</p>
            <p className="mt-2 text-2xl font-semibold text-zinc-100">{openBriefs.length}</p>
          </article>
          <article className="rounded-xl border border-zinc-800 bg-zinc-900/70 px-5 py-4">
            <p className="text-xs uppercase tracking-wide text-zinc-500">Completed briefs</p>
            <p className="mt-2 text-2xl font-semibold text-zinc-100">{completedBriefs.length}</p>
          </article>
          <article className="rounded-xl border border-zinc-800 bg-zinc-900/70 px-5 py-4">
            <p className="text-xs uppercase tracking-wide text-zinc-500">Delivered projects</p>
            <p className="mt-2 text-2xl font-semibold text-zinc-100">{finalDeliverables.length}</p>
          </article>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-100">All briefs</h2>
          {brand.briefsAsBrand.length === 0 ? (
            <p className="text-sm text-zinc-400">This brand has not created briefs yet.</p>
          ) : (
            <div className="space-y-3">
              {brand.briefsAsBrand.map((brief) => (
                <article key={brief.id} className="rounded-xl border border-zinc-800 bg-zinc-900/70 px-5 py-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-base font-semibold text-zinc-100">{brief.title}</p>
                    <p className="text-xs uppercase tracking-wide text-zinc-500">
                      {brief.status} · {formatDate(brief.createdAt)}
                    </p>
                  </div>
                  <p className="mt-2 text-sm text-zinc-300">Bids received: {brief._count.bids}</p>
                </article>
              ))}
            </div>
          )}
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-100">Past outcomes</h2>
          {finalDeliverables.length === 0 ? (
            <p className="text-sm text-zinc-400">No delivered campaign links yet.</p>
          ) : (
            <div className="space-y-3">
              {finalDeliverables.map((item) => (
                <article key={`${item.briefId}-${item.videoUrl}`} className="rounded-xl border border-zinc-800 bg-zinc-900/70 px-5 py-4">
                  <p className="text-base font-semibold text-zinc-100">{item.briefTitle}</p>
                  <p className="mt-1 text-sm text-zinc-300">Creator: {item.creatorName}</p>
                  <p className="text-sm text-zinc-400">Status: {item.status}</p>
                  <a href={item.videoUrl} target="_blank" rel="noreferrer" className="mt-2 inline-block text-sm text-zinc-100 underline underline-offset-4">
                    View final posted video
                  </a>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

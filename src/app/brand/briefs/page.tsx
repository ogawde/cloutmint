import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getRequiredBrandUser } from "@/lib/server/get-required-brand-user";

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export default async function BrandBriefsPage() {
  const brandUser = await getRequiredBrandUser();

  const briefs = await prisma.brief.findMany({
    where: {
      brandId: brandUser.id,
    },
    select: {
      id: true,
      title: true,
      status: true,
      productDescription: true,
      targetPlatforms: true,
      createdAt: true,
      _count: {
        select: {
          bids: true,
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
        <section className="rounded-xl border border-zinc-800 bg-zinc-900/70 px-6 py-5">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-100">Brand Briefs</h1>
          <p className="mt-2 text-sm leading-6 text-zinc-400">
            Open any brief to review creator proposals and accept or reject bids.
          </p>
        </section>
        {briefs.length === 0 ? (
          <section className="rounded-xl border border-zinc-800 bg-zinc-900/70 px-6 py-5">
            <p className="text-sm text-zinc-400">No briefs found. Create your first brief to get started.</p>
          </section>
        ) : (
          <section className="grid gap-4 sm:grid-cols-2">
            {briefs.map((brief) => (
              <Link key={brief.id} href={`/brand/briefs/${brief.id}`}>
                <Card className="h-full border-zinc-800 bg-zinc-900/70 transition hover:border-zinc-600">
                  <CardHeader className="space-y-2">
                    <CardTitle className="text-lg text-zinc-100">{brief.title}</CardTitle>
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs uppercase tracking-wide text-zinc-300">
                        {brief.status}
                      </span>
                      <span className="text-xs text-zinc-500">{formatDate(brief.createdAt)}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3 pt-0">
                    <p className="line-clamp-3 text-sm text-zinc-400">{brief.productDescription}</p>
                    {brief.targetPlatforms.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {brief.targetPlatforms.map((platform) => (
                          <Badge key={platform} variant="secondary" className="bg-zinc-800 text-zinc-100">
                            {platform}
                          </Badge>
                        ))}
                      </div>
                    )}
                    <p className="text-xs uppercase tracking-wide text-zinc-500">Bids: {brief._count.bids}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </section>
        )}
      </div>
    </main>
  );
}

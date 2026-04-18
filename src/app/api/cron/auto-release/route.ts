import { NextResponse } from "next/server";
import { processDueAutoReleases } from "@/lib/projects/auto-release";

/** Optional cron endpoint to process due auto-releases */
export async function POST(request: Request) {
  const secret = process.env.CRON_SECRET;
  if (secret) {
    const authHeader = request.headers.get("authorization");
    if (authHeader !== `Bearer ${secret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  const results = await processDueAutoReleases();
  return NextResponse.json({ processed: results.length, results });
}

import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { Webhook } from "svix";
import { prisma } from "@/lib/prisma";

const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET ?? "";

export async function POST(req: Request) {
  if (!WEBHOOK_SECRET) {
    return NextResponse.json({ error: "Missing Clerk webhook secret" }, { status: 500 });
  }

  const payload = await req.text();
  const headerPayload = await headers();
  const svixId = headerPayload.get("svix-id");
  const svixTimestamp = headerPayload.get("svix-timestamp");
  const svixSignature = headerPayload.get("svix-signature");

  if (!svixId || !svixTimestamp || !svixSignature) {
    return NextResponse.json({ error: "Missing Svix headers" }, { status: 400 });
  }

  const webhook = new Webhook(WEBHOOK_SECRET);
  let event: { type: string; data: { id: string; primary_email_address_id?: string; email_addresses?: { id: string; email_address: string }[] } };

  try {
    event = webhook.verify(payload, {
      "svix-id": svixId,
      "svix-timestamp": svixTimestamp,
      "svix-signature": svixSignature,
    }) as typeof event;
  } catch {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "user.created") {
    const clerkId = event.data.id;
    const primaryEmail =
      event.data.email_addresses?.find((e) => e.id === event.data.primary_email_address_id)?.email_address ?? "";

    if (!primaryEmail) {
      return NextResponse.json({ error: "No primary email found" }, { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({
      where: { clerkId },
    });

    if (!existingUser) {
      await prisma.user.create({
        data: {
          clerkId,
          email: primaryEmail,
          role: "BRAND",
          credits: 100,
        },
      });
    } else {
      await prisma.user.update({
        where: { clerkId },
        data: {
          email: primaryEmail,
        },
      });
    }
  }

  return NextResponse.json({ received: true }, { status: 200 });
}

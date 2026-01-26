import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { Webhook } from "svix";
import { prisma } from "@/lib/prisma";

const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET || "";

export async function POST(req: Request) {
  if (!WEBHOOK_SECRET) {
    return NextResponse.json({ error: "Missing Clerk webhook secret" }, { status: 500 });
  }

  const payload = await req.text();
  const headerPayload = headers();

  const svixId = (await headerPayload).get("svix-id");
  const svixTimestamp = (await headerPayload).get("svix-timestamp");
  const svixSignature = (await headerPayload).get("svix-signature");

  if (!svixId || !svixTimestamp || !svixSignature) {
    return NextResponse.json({ error: "Missing Svix headers" }, { status: 400 });
  }

  const webhook = new Webhook(WEBHOOK_SECRET);

  let event: any;

  try {
    event = webhook.verify(payload, {
      "svix-id": svixId,
      "svix-timestamp": svixTimestamp,
      "svix-signature": svixSignature,
    });
  } catch (error) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  const { type, data } = event;

  if (type === "user.created") {
    const clerkId = data.id as string;
    const primaryEmail =
      (data.email_addresses?.find((email: any) => email.id === data.primary_email_address_id)
        ?.email_address as string | undefined) ?? "";

    if (!primaryEmail) {
      return NextResponse.json({ error: "No primary email found" }, { status: 400 });
    }

    await prisma.user.upsert({
      where: {
        clerkId,
      },
      create: {
        clerkId,
        email: primaryEmail,
        role: "BRAND",
        credits: 100,
      },
      update: {
        email: primaryEmail,
      },
    });
  }

  return NextResponse.json({ received: true }, { status: 200 });
}


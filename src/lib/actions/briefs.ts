"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { generateHooks } from "@/lib/ai";
import { getAuthSession } from "@/lib/auth-session";

type CreateBriefInput = {
  title: string;
  productDescription: string;
  reelScript: string;
  targetPlatforms: string[];
  productUrl: string;
  minBidAmount: number;
  maxBidAmount: number;
  hook1?: string;
  hook2?: string;
  hook3?: string;
};

type GenerateBriefScriptInput = {
  productDescription: string;
  previousScript?: string;
  regenAttempt?: number;
};

export async function generateBriefScript(input: GenerateBriefScriptInput) {
  const { productDescription, previousScript, regenAttempt } = input;

  const session = await getAuthSession();
  const authUserId = session?.user.id;
  if (!authUserId) {
    throw new Error("Unauthorized");
  }

  const brandUser = await prisma.user.findUnique({
    where: { authUserId },
    select: { role: true },
  });

  if (!brandUser || brandUser.role !== "BRAND") {
    throw new Error("Only authorized brands can generate scripts.");
  }

  return generateHooks(productDescription, {
    previousScript,
    regenAttempt,
  });
}

export async function createBrief(input: CreateBriefInput) {
  const {
    title,
    productDescription,
    reelScript,
    targetPlatforms,
    productUrl,
    minBidAmount,
    maxBidAmount,
    hook1: inputHook1,
    hook2: inputHook2,
    hook3: inputHook3,
  } = input;

  const session = await getAuthSession();
  const authUserId = session?.user.id;
  if (!authUserId) {
    throw new Error("Unauthorized");
  }

  const brandUser = await prisma.user.findUnique({
    where: { authUserId },
    select: { id: true, role: true },
  });

  if (!brandUser || brandUser.role !== "BRAND") {
    throw new Error("Only authorized brands can create briefs.");
  }

  if (!productUrl.trim()) {
    throw new Error("Product URL is required.");
  }

  if (!Number.isFinite(minBidAmount) || !Number.isFinite(maxBidAmount)) {
    throw new Error("Bid range is required.");
  }

  if (!Array.isArray(targetPlatforms) || targetPlatforms.length === 0) {
    throw new Error("Select at least one target platform.");
  }

  if (minBidAmount < 0 || maxBidAmount < 0 || minBidAmount > maxBidAmount) {
    throw new Error("Invalid bid range.");
  }

  let hook1 = inputHook1?.trim() ?? "";
  let hook2 = inputHook2?.trim() ?? "";
  let hook3 = inputHook3?.trim() ?? "";
  let finalScript = reelScript.trim();

  if (!finalScript || !hook1 || !hook2 || !hook3) {
    const generated = await generateHooks(productDescription);
    hook1 = hook1 || generated.hook1;
    hook2 = hook2 || generated.hook2;
    hook3 = hook3 || generated.hook3;
    finalScript = finalScript || generated.reelScript;
  }

  const brief = await prisma.brief.create({
    data: {
      title,
      productDescription,
      hook1,
      hook2,
      hook3,
      productUrl: productUrl.trim(),
      targetPlatforms: targetPlatforms.map((platform) => platform.trim()).filter(Boolean),
      minBidAmount: Math.floor(minBidAmount),
      maxBidAmount: Math.floor(maxBidAmount),
      reelScript: finalScript,
      brand: { connect: { id: brandUser.id } },
    },
  });

  return brief;
}

export async function archiveBrief(briefId: string) {
  const session = await getAuthSession();
  const authUserId = session?.user.id;

  if (!authUserId) {
    throw new Error("Unauthorized");
  }

  const brandUser = await prisma.user.findUnique({
    where: { authUserId },
    select: { id: true, role: true },
  });

  if (!brandUser || brandUser.role !== "BRAND") {
    throw new Error("Only authorized brands can archive briefs.");
  }

  const brief = await prisma.brief.findUnique({
    where: { id: briefId },
    select: {
      id: true,
      brandId: true,
      status: true,
    },
  });

  if (!brief || brief.brandId !== brandUser.id) {
    throw new Error("Brief not found.");
  }

  if (brief.status === "ARCHIVED") {
    return brief;
  }

  const archivedBrief = await prisma.brief.update({
    where: { id: brief.id },
    data: {
      status: "ARCHIVED",
    },
  });

  revalidatePath("/brand/projects");
  revalidatePath("/creator/explore");
  revalidatePath(`/creator/brands/${brandUser.id}`);

  return archivedBrief;
}


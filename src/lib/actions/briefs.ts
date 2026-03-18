"use server";

import { prisma } from "@/lib/prisma";
import { generateHooks } from "@/lib/ai";
import { getAuthSession } from "@/lib/auth-session";

type CreateBriefInput = {
  title: string;
  productDescription: string;
  reelScript: string;
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
      reelScript: finalScript,
      brand: { connect: { id: brandUser.id } },
    },
  });

  return brief;
}


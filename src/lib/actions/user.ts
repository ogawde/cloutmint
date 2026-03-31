"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { getAuthSession } from "@/lib/auth-session";

function getOptionalField(formData: FormData, key: string) {
  const value = String(formData.get(key) ?? "").trim();
  return value || null;
}

export async function updateUserRole(role: "BRAND" | "CREATOR") {
  const session = await getAuthSession();
  const authUserId = session?.user.id;
  const email = session?.user.email;

  if (!authUserId) {
    throw new Error("Unauthorized");
  }

  if (role !== "BRAND" && role !== "CREATOR") {
    throw new Error("Invalid role");
  }

  const existingUser = await prisma.user.findUnique({
    where: { authUserId },
  });

  if (!existingUser) {
    if (!email) {
      throw new Error("Email not found");
    }

    await prisma.user.create({
      data: {
        authUserId,
        email,
        role,
        credits: 100,
      },
    });

    return;
  }

  await prisma.user.update({
    where: { authUserId },
    data: {
      role,
    },
  });
}

export async function updateBrandProfile(formData: FormData) {
  const session = await getAuthSession();
  const authUserId = session?.user.id;

  if (!authUserId) {
    throw new Error("Unauthorized");
  }

  const displayName = getOptionalField(formData, "displayName");
  const bio = getOptionalField(formData, "bio");
  const logoUrl = getOptionalField(formData, "logoUrl");

  const user = await prisma.user.findUnique({
    where: { authUserId },
    select: { role: true },
  });

  if (!user || user.role !== "BRAND") {
    throw new Error("Forbidden");
  }

  await prisma.user.update({
    where: { authUserId },
    data: {
      displayName,
      bio,
      logoUrl,
    },
  });

  revalidatePath("/brand/profile");
}

export async function updateCreatorProfile(formData: FormData) {
  const session = await getAuthSession();
  const authUserId = session?.user.id;

  if (!authUserId) {
    throw new Error("Unauthorized");
  }

  const user = await prisma.user.findUnique({
    where: { authUserId },
    select: { role: true },
  });

  if (!user || user.role !== "CREATOR") {
    throw new Error("Forbidden");
  }

  await prisma.user.update({
    where: { authUserId },
    data: {
      displayName: getOptionalField(formData, "displayName"),
      bio: getOptionalField(formData, "bio"),
      instagramUrl: getOptionalField(formData, "instagramUrl"),
      youtubeUrl: getOptionalField(formData, "youtubeUrl"),
      tiktokUrl: getOptionalField(formData, "tiktokUrl"),
      twitterUrl: getOptionalField(formData, "twitterUrl"),
      snapchatUrl: getOptionalField(formData, "snapchatUrl"),
    },
  });

  revalidatePath("/creator/dashboard");
}


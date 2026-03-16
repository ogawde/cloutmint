"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { getAuthSession } from "@/lib/auth-session";

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

  const displayName = String(formData.get("displayName") ?? "").trim();
  const bio = String(formData.get("bio") ?? "").trim();
  const logoUrl = String(formData.get("logoUrl") ?? "").trim();

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
      displayName: displayName || null,
      bio: bio || null,
      logoUrl: logoUrl || null,
    },
  });

  revalidatePath("/brand/profile");
}


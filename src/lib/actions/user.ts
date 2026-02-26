"use server";

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


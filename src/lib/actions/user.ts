"use server";

import { auth, currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export async function updateUserRole(role: "BRAND" | "CREATOR") {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  if (role !== "BRAND" && role !== "CREATOR") {
    throw new Error("Invalid role");
  }

  const existingUser = await prisma.user.findUnique({
    where: { clerkId: userId },
  });

  if (!existingUser) {
    const user = await currentUser();
    const email = user?.primaryEmailAddress?.emailAddress;

    if (!email) {
      throw new Error("Email not found");
    }

    await prisma.user.create({
      data: {
        clerkId: userId,
        email,
        role,
        credits: 100,
      },
    });

    return;
  }

  await prisma.user.update({
    where: { clerkId: userId },
    data: {
      role,
    },
  });
}


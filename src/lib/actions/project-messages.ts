"use server";

import { prisma } from "@/lib/prisma";
import { getAuthSession } from "@/lib/auth-session";
import { canUseProjectChat, getProjectAccess } from "@/lib/projects/access";
import { logProjectEvent } from "@/lib/projects/events";

export async function sendProjectMessage(projectId: string, body: string) {
  const session = await getAuthSession();
  const authUserId = session?.user.id;

  if (!authUserId) {
    throw new Error("Unauthorized");
  }

  const trimmed = body.trim();
  if (!trimmed) {
    throw new Error("Message cannot be empty");
  }

  const user = await prisma.user.findUnique({
    where: { authUserId },
    select: { id: true },
  });

  if (!user) {
    throw new Error("Unauthorized");
  }

  const access = await getProjectAccess(projectId, user.id);
  if (!access) {
    throw new Error("Unauthorized");
  }

  if (!canUseProjectChat(access.status)) {
    throw new Error("Chat is locked until the project is funded");
  }

  const message = await prisma.projectMessage.create({
    data: {
      projectId,
      senderId: user.id,
      body: trimmed,
    },
  });

  await logProjectEvent({
    projectId,
    type: "MESSAGE_SENT",
    actorId: user.id,
  });

  return message;
}

export async function getProjectMessages(projectId: string, limit = 50) {
  const session = await getAuthSession();
  const authUserId = session?.user.id;

  if (!authUserId) {
    throw new Error("Unauthorized");
  }

  const user = await prisma.user.findUnique({
    where: { authUserId },
    select: { id: true },
  });

  if (!user) {
    throw new Error("Unauthorized");
  }

  const access = await getProjectAccess(projectId, user.id);
  if (!access) {
    throw new Error("Unauthorized");
  }

  return prisma.projectMessage.findMany({
    where: { projectId },
    orderBy: { createdAt: "asc" },
    take: limit,
    include: {
      sender: {
        select: {
          id: true,
          displayName: true,
          email: true,
          role: true,
        },
      },
    },
  });
}

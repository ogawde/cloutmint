import { prisma } from "@/lib/prisma";
import type { Prisma, ProjectEventType } from "@/generated/prisma";

type LogProjectEventInput = {
  projectId: string;
  type: ProjectEventType;
  actorId?: string;
  note?: string;
  metadata?: Prisma.InputJsonValue;
};

/** Append an audit event for a project lifecycle step */
export async function logProjectEvent(input: LogProjectEventInput) {
  await prisma.projectEvent.create({
    data: {
      projectId: input.projectId,
      type: input.type,
      actorId: input.actorId,
      note: input.note,
      metadata: input.metadata,
    },
  });
}

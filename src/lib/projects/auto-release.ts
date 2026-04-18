import { prisma } from "@/lib/prisma";
import { releaseProjectFunds } from "@/lib/actions/economy";

/** Release escrow for projects past their auto-release deadline */
export async function processDueAutoReleases() {
  const now = new Date();

  const dueEscrows = await prisma.projectEscrow.findMany({
    where: {
      status: "HELD",
      autoReleaseAt: {
        lte: now,
      },
      project: {
        status: "SUBMITTED",
      },
    },
    select: {
      projectId: true,
    },
  });

  const results: { projectId: string; ok: boolean }[] = [];

  for (const escrow of dueEscrows) {
    try {
      await releaseProjectFunds(escrow.projectId, "AUTO_TIMEOUT");
      results.push({ projectId: escrow.projectId, ok: true });
    } catch {
      results.push({ projectId: escrow.projectId, ok: false });
    }
  }

  return results;
}

/** Run auto-release check for a single project before reads/writes */
export async function maybeAutoReleaseProject(projectId: string) {
  const escrow = await prisma.projectEscrow.findUnique({
    where: { projectId },
    include: {
      project: {
        select: { status: true },
      },
    },
  });

  if (
    !escrow ||
    escrow.status !== "HELD" ||
    !escrow.autoReleaseAt ||
    escrow.project.status !== "SUBMITTED"
  ) {
    return false;
  }

  if (escrow.autoReleaseAt > new Date()) {
    return false;
  }

  await releaseProjectFunds(projectId, "AUTO_TIMEOUT");
  return true;
}

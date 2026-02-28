import { prisma } from "@/lib/prisma";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { getAuthSession } from "@/lib/auth-session";

export default async function ProjectsPage() {
  const session = await getAuthSession();
  const authUserId = session?.user.id;

  if (!authUserId) {
    return (
      <main className="min-h-screen bg-zinc-950 text-zinc-50">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-100">Live Projects</h1>
          <p className="mt-3 text-sm leading-6 text-zinc-400">
            Please sign in to view your active collaborations.
          </p>
        </div>
      </main>
    );
  }

  const user = await prisma.user.findUnique({
    where: {
      authUserId,
    },
    select: {
      id: true,
      role: true,
    },
  });

  if (!user) {
    return (
      <main className="min-h-screen bg-zinc-950 text-zinc-50">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-100">Live Projects</h1>
          <p className="mt-3 text-sm leading-6 text-zinc-400">
            No user record found for this account.
          </p>
        </div>
      </main>
    );
  }

  const projects = await prisma.project.findMany({
    where: {
      OR: [
        { brandId: user.id },
        { creatorId: user.id },
      ],
    },
    include: {
      brief: {
        select: {
          title: true,
          reelScript: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      <div className="mx-auto max-w-5xl space-y-8 px-4 py-12">
        <section className="rounded-xl border border-zinc-800 bg-zinc-900/70 px-6 py-5">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-100">Live Projects</h1>
          <p className="mt-2 text-sm leading-6 text-zinc-400">
            Track submissions, review deliverables, and move collaborations forward.
          </p>
        </section>
        {projects.length === 0 ? (
          <p className="text-sm leading-6 text-zinc-400">
            You have no active projects yet. Accept a bid or get hired to see projects here.
          </p>
        ) : (
          <div className="space-y-4">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                userRole={user.role}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}


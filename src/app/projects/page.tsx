import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { ProjectCard } from "@/components/projects/ProjectCard";

export default async function ProjectsPage() {
  const { userId } = await auth();

  if (!userId) {
    return (
      <main className="min-h-screen bg-zinc-950 text-zinc-50">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <h1 className="text-2xl font-semibold">Live Projects</h1>
          <p className="mt-2 text-zinc-400">
            Please sign in to view your active collaborations.
          </p>
        </div>
      </main>
    );
  }

  const user = await prisma.user.findUnique({
    where: {
      clerkId: userId,
    },
    select: {
      id: true,
      role: true,
    },
  });

  if (!user) {
    return (
      <main className="min-h-screen bg-zinc-950 text-zinc-50">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <h1 className="text-2xl font-semibold">Live Projects</h1>
          <p className="mt-2 text-zinc-400">
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
      <div className="max-w-5xl mx-auto px-4 py-12 space-y-8">
        <h1 className="text-3xl font-semibold tracking-tight text-emerald-400">
          Live Projects
        </h1>
        {projects.length === 0 ? (
          <p className="text-zinc-400">
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


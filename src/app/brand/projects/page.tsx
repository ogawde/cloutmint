import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { getAuthSession } from "@/lib/auth-session";
import { RoleNav } from "@/components/navigation/RoleNav";

export default async function BrandProjectsPage() {
  const session = await getAuthSession();
  const authUserId = session?.user.id;

  if (!authUserId) {
    redirect("/auth/sign-in");
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
    redirect("/");
  }

  if (user.role !== "BRAND") {
    redirect("/");
  }

  const projects = await prisma.project.findMany({
    where: {
      brandId: user.id,
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
        <RoleNav role="BRAND" activeHref="/brand/projects" />
        <section className="rounded-xl border border-zinc-800 bg-zinc-900/70 px-6 py-5">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-100">Brand Projects</h1>
          <p className="mt-2 text-sm leading-6 text-zinc-400">
            Review active collaborations, track progress, and manage deliverables.
          </p>
        </section>
        {projects.length === 0 ? (
          <p className="text-sm leading-6 text-zinc-400">
            You have no active projects yet. Post a brief and accept a bid to start your first project.
          </p>
        ) : (
          <div className="space-y-4">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                userRole={user.role as "BRAND" | "CREATOR"}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

import { DotmTriangle20 } from "@/components/ui/dotm-triangle-20";

export default function CreatorLoading() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      <div className="mx-auto flex min-h-screen max-w-5xl items-center justify-center px-4 py-12">
        <DotmTriangle20 size={42} dotSize={6.5} ariaLabel="Loading creator area" />
      </div>
    </main>
  );
}

import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SignInForm } from "@/components/auth/SignInForm";
import { getAuthSession } from "@/lib/auth-session";

export default async function SignInPage() {
  const session = await getAuthSession();

  if (session?.user) {
    redirect("/");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-4 text-zinc-50">
      <Card className="w-full max-w-md border-zinc-800 bg-zinc-900/85 shadow-sm">
        <CardHeader>
          <CardTitle className="text-2xl tracking-tight text-zinc-100">Sign in</CardTitle>
        </CardHeader>
        <CardContent>
          <SignInForm />
        </CardContent>
      </Card>
    </main>
  );
}

import { redirect } from "next/navigation";
import { SignInForm } from "@/components/auth/SignInForm";
import { AuthInsetLayout } from "@/components/inset-login";
import { getAuthSession } from "@/lib/auth-session";

export default async function SignInPage() {
  const session = await getAuthSession();

  if (session?.user) {
    redirect("/");
  }

  return (
    <AuthInsetLayout
      title="Welcome back"
      description="Sign in to continue managing campaigns and creator collaborations."
    >
      <SignInForm />
    </AuthInsetLayout>
  );
}

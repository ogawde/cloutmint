import { redirect } from "next/navigation";
import { SignUpForm } from "@/components/auth/SignUpForm";
import { AuthInsetLayout } from "@/components/inset-login";
import { getAuthSession } from "@/lib/auth-session";

export default async function SignUpPage() {
  const session = await getAuthSession();

  if (session?.user) {
    redirect("/");
  }

  return (
    <AuthInsetLayout
      title="Create your account"
      description="Join CloutMint to post briefs, discover creators, and run campaigns."
    >
      <SignUpForm />
    </AuthInsetLayout>
  );
}

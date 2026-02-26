"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SignUpForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    const { error } = await authClient.signUp.email({
      name,
      email,
      password,
      callbackURL: "/",
    });

    setIsLoading(false);

    if (error) {
      setErrorMessage(error.message ?? "Sign up failed.");
      return;
    }

    router.push("/");
    router.refresh();
  };

  const onGoogleSignUp = async () => {
    setErrorMessage(null);
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Your name"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@domain.com"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="••••••••"
          required
        />
      </div>

      {errorMessage && <p className="text-sm text-red-400">{errorMessage}</p>}

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Creating account..." : "Create account"}
      </Button>

      <Button type="button" variant="outline" className="w-full" onClick={onGoogleSignUp}>
        Continue with Google
      </Button>

      <p className="text-center text-sm text-zinc-400">
        Already registered?{" "}
        <Link href="/sign-in" className="text-emerald-400 hover:underline">
          Sign in
        </Link>
      </p>
    </form>
  );
}

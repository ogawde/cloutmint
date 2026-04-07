"use client";

import { useTransition } from "react";
import { toast } from "sonner";
import { updateBrandProfile } from "@/lib/actions/user";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type BrandProfileFormProps = {
  email: string;
  displayName: string | null;
  bio: string | null;
  logoUrl: string | null;
};

export function BrandProfileForm({ email, displayName, bio, logoUrl }: BrandProfileFormProps) {
  const [isSaving, startSavingTransition] = useTransition();

  const handleSubmit = (formData: FormData) => {
    startSavingTransition(async () => {
      try {
        await updateBrandProfile(formData);
        toast.success("Profile saved", {
          description: "Your brand details have been updated.",
        });
      } catch {
        toast.error("Could not save profile", {
          description: "Please try again.",
        });
      }
    });
  };

  return (
    <form action={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-wide text-zinc-500">Email</p>
        <Input value={email} disabled className="bg-zinc-900" />
      </div>
      <div className="space-y-2">
        <label htmlFor="displayName" className="text-xs uppercase tracking-wide text-zinc-500">
          Brand Name
        </label>
        <Input
          id="displayName"
          name="displayName"
          defaultValue={displayName ?? ""}
          placeholder="Acme Labs"
          className="bg-zinc-900"
          disabled={isSaving}
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="logoUrl" className="text-xs uppercase tracking-wide text-zinc-500">
          Logo URL
        </label>
        <Input
          id="logoUrl"
          name="logoUrl"
          defaultValue={logoUrl ?? ""}
          placeholder="https://example.com/logo.png"
          className="bg-zinc-900"
          disabled={isSaving}
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="bio" className="text-xs uppercase tracking-wide text-zinc-500">
          Brand Details
        </label>
        <Textarea
          id="bio"
          name="bio"
          defaultValue={bio ?? ""}
          placeholder="Share your brand voice, category, and campaign style."
          className="min-h-[120px] bg-zinc-900"
          disabled={isSaving}
        />
      </div>
      <Button type="submit" disabled={isSaving}>
        {isSaving ? "Saving..." : "Save Profile"}
      </Button>
    </form>
  );
}

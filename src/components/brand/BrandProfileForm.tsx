"use client";

import { useRef, useState, useTransition } from "react";
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

type BrandProfileValues = {
  displayName: string;
  bio: string;
  logoUrl: string;
};

const editableFieldNames = [
  "displayName",
  "bio",
  "logoUrl",
] as const satisfies ReadonlyArray<keyof BrandProfileValues>;

function getProfileValues(formData: FormData): BrandProfileValues {
  return {
    displayName: String(formData.get("displayName") ?? ""),
    bio: String(formData.get("bio") ?? ""),
    logoUrl: String(formData.get("logoUrl") ?? ""),
  };
}

function hasProfileChanges(
  currentValues: BrandProfileValues,
  savedValues: BrandProfileValues,
) {
  return editableFieldNames.some((fieldName) => currentValues[fieldName] !== savedValues[fieldName]);
}

export function BrandProfileForm({ email, displayName, bio, logoUrl }: BrandProfileFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSaving, startSavingTransition] = useTransition();
  const [savedValues, setSavedValues] = useState<BrandProfileValues>({
    displayName: displayName ?? "",
    bio: bio ?? "",
    logoUrl: logoUrl ?? "",
  });
  const [hasChanges, setHasChanges] = useState(false);

  const syncChangeState = () => {
    const form = formRef.current;

    if (!form) {
      return;
    }

    const currentValues = getProfileValues(new FormData(form));
    setHasChanges(hasProfileChanges(currentValues, savedValues));
  };

  const handleSubmit = (formData: FormData) => {
    if (!hasChanges) {
      return;
    }

    startSavingTransition(async () => {
      try {
        await updateBrandProfile(formData);
        const nextSavedValues = getProfileValues(formData);
        setSavedValues(nextSavedValues);
        setHasChanges(false);
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

  const buttonLabel = isSaving ? "Saving..." : hasChanges ? "Save Profile" : "Saved";

  return (
    <form ref={formRef} action={handleSubmit} onInput={syncChangeState} className="space-y-5">
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
      <Button
        type="submit"
        variant={hasChanges || isSaving ? "default" : "outline"}
        className={hasChanges || isSaving ? undefined : "border-zinc-700 bg-zinc-900 text-zinc-400"}
        disabled={isSaving || !hasChanges}
      >
        {buttonLabel}
      </Button>
    </form>
  );
}

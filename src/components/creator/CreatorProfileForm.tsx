"use client";

import { useRef, useState, useTransition } from "react";
import { toast } from "sonner";
import { updateCreatorProfile } from "@/lib/actions/user";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type CreatorProfileFormProps = {
  email: string;
  displayName: string;
  bio: string;
  instagramUrl: string;
  youtubeUrl: string;
  tiktokUrl: string;
  twitterUrl: string;
  snapchatUrl: string;
};

type CreatorProfileValues = {
  displayName: string;
  bio: string;
  instagramUrl: string;
  youtubeUrl: string;
  tiktokUrl: string;
  twitterUrl: string;
  snapchatUrl: string;
};

const editableFieldNames = [
  "displayName",
  "bio",
  "instagramUrl",
  "youtubeUrl",
  "tiktokUrl",
  "twitterUrl",
  "snapchatUrl",
] as const satisfies ReadonlyArray<keyof CreatorProfileValues>;

function getProfileValues(formData: FormData): CreatorProfileValues {
  return {
    displayName: String(formData.get("displayName") ?? ""),
    bio: String(formData.get("bio") ?? ""),
    instagramUrl: String(formData.get("instagramUrl") ?? ""),
    youtubeUrl: String(formData.get("youtubeUrl") ?? ""),
    tiktokUrl: String(formData.get("tiktokUrl") ?? ""),
    twitterUrl: String(formData.get("twitterUrl") ?? ""),
    snapchatUrl: String(formData.get("snapchatUrl") ?? ""),
  };
}

function hasProfileChanges(
  currentValues: CreatorProfileValues,
  savedValues: CreatorProfileValues,
) {
  return editableFieldNames.some((fieldName) => currentValues[fieldName] !== savedValues[fieldName]);
}

export function CreatorProfileForm({
  email,
  displayName,
  bio,
  instagramUrl,
  youtubeUrl,
  tiktokUrl,
  twitterUrl,
  snapchatUrl,
}: CreatorProfileFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSaving, startSavingTransition] = useTransition();
  const [savedValues, setSavedValues] = useState<CreatorProfileValues>({
    displayName,
    bio,
    instagramUrl,
    youtubeUrl,
    tiktokUrl,
    twitterUrl,
    snapchatUrl,
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
        await updateCreatorProfile(formData);
        const nextSavedValues = getProfileValues(formData);
        setSavedValues(nextSavedValues);
        setHasChanges(false);
        toast.success("Details saved");
      } catch {
        toast.error("Could not save details");
      }
    });
  };

  const buttonLabel = isSaving ? "Saving..." : hasChanges ? "Save Profile" : "Saved";

  return (
    <form
      ref={formRef}
      action={handleSubmit}
      onInput={syncChangeState}
      className="mt-4 grid gap-4 sm:grid-cols-2"
    >
      <div className="space-y-2">
        <label htmlFor="displayName" className="text-xs uppercase tracking-wide text-zinc-500">
          Name
        </label>
        <Input
          id="displayName"
          name="displayName"
          defaultValue={displayName}
          placeholder="Your creator name"
          className="bg-zinc-900"
          disabled={isSaving}
        />
      </div>
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-wide text-zinc-500">Email</p>
        <Input value={email} disabled className="bg-zinc-900" />
      </div>
      <div className="space-y-2 sm:col-span-2">
        <label htmlFor="bio" className="text-xs uppercase tracking-wide text-zinc-500">
          Bio
        </label>
        <Textarea
          id="bio"
          name="bio"
          defaultValue={bio}
          placeholder="Tell brands about your niche, style, and audience."
          className="min-h-[120px] bg-zinc-900"
          disabled={isSaving}
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="instagramUrl" className="text-xs uppercase tracking-wide text-zinc-500">
          Instagram URL
        </label>
        <Input
          id="instagramUrl"
          name="instagramUrl"
          defaultValue={instagramUrl}
          className="bg-zinc-900"
          disabled={isSaving}
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="youtubeUrl" className="text-xs uppercase tracking-wide text-zinc-500">
          YouTube URL
        </label>
        <Input
          id="youtubeUrl"
          name="youtubeUrl"
          defaultValue={youtubeUrl}
          className="bg-zinc-900"
          disabled={isSaving}
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="tiktokUrl" className="text-xs uppercase tracking-wide text-zinc-500">
          TikTok URL
        </label>
        <Input
          id="tiktokUrl"
          name="tiktokUrl"
          defaultValue={tiktokUrl}
          className="bg-zinc-900"
          disabled={isSaving}
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="twitterUrl" className="text-xs uppercase tracking-wide text-zinc-500">
          Twitter/X URL
        </label>
        <Input
          id="twitterUrl"
          name="twitterUrl"
          defaultValue={twitterUrl}
          className="bg-zinc-900"
          disabled={isSaving}
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="snapchatUrl" className="text-xs uppercase tracking-wide text-zinc-500">
          Snapchat URL
        </label>
        <Input
          id="snapchatUrl"
          name="snapchatUrl"
          defaultValue={snapchatUrl}
          className="bg-zinc-900"
          disabled={isSaving}
        />
      </div>
      <div className="sm:col-span-2">
        <Button
          type="submit"
          variant={hasChanges || isSaving ? "default" : "outline"}
          className={
            hasChanges || isSaving ? undefined : "border-zinc-700 bg-zinc-900 text-zinc-400"
          }
          disabled={isSaving || !hasChanges}
        >
          {buttonLabel}
        </Button>
      </div>
    </form>
  );
}

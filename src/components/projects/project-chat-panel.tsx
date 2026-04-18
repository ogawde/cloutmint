"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { sendProjectMessage } from "@/lib/actions/project-messages";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type ChatMessage = {
  id: string;
  body: string;
  createdAt: Date;
  sender: {
    id: string;
    displayName: string | null;
    email: string;
    role: string | null;
  };
};

type ProjectChatPanelProps = {
  projectId: string;
  currentUserId: string;
  messages: ChatMessage[];
  isLocked: boolean;
};

function formatTime(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(date));
}

export function ProjectChatPanel({
  projectId,
  currentUserId,
  messages,
  isLocked,
}: ProjectChatPanelProps) {
  const [body, setBody] = useState("");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleSend = () => {
    if (!body.trim() || isLocked) {
      return;
    }

    startTransition(async () => {
      try {
        await sendProjectMessage(projectId, body);
        setBody("");
        router.refresh();
      } catch (error) {
        const message = error instanceof Error ? error.message : "Could not send message";
        toast.error("Message failed", { description: message });
      }
    });
  };

  return (
    <section className="rounded-xl border border-zinc-800 bg-zinc-900/70 flex flex-col h-72">
      <div className="border-b border-zinc-800 px-4 py-2">
        <h2 className="text-sm font-semibold text-zinc-200">Project chat</h2>
        {isLocked && (
          <p className="text-xs text-zinc-500 mt-0.5">Unlocks after project is funded</p>
        )}
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2">
        {messages.length === 0 ? (
          <p className="text-xs text-zinc-500">No messages yet.</p>
        ) : (
          messages.map((message) => {
            const isOwn = message.sender.id === currentUserId;
            const label =
              message.sender.displayName?.trim() || message.sender.email;

            return (
              <div
                key={message.id}
                className={`max-w-[85%] rounded-lg px-3 py-2 text-sm ${
                  isOwn
                    ? "ml-auto bg-emerald-600/20 text-zinc-100"
                    : "bg-zinc-800 text-zinc-200"
                }`}
              >
                <p className="text-[10px] uppercase tracking-wide text-zinc-500 mb-0.5">
                  {label} · {formatTime(message.createdAt)}
                </p>
                <p className="whitespace-pre-wrap">{message.body}</p>
              </div>
            );
          })
        )}
      </div>
      <div className="border-t border-zinc-800 p-3 flex gap-2">
        <Input
          placeholder={isLocked ? "Fund project to chat" : "Type a message..."}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          disabled={isLocked || isPending}
          className="bg-zinc-950 text-sm h-9"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
        />
        <Button
          type="button"
          size="sm"
          disabled={isLocked || isPending || !body.trim()}
          onClick={handleSend}
        >
          Send
        </Button>
      </div>
    </section>
  );
}

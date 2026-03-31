"use client";

import { Toaster as Sonner, type ToasterProps } from "sonner";

export function Toaster(props: ToasterProps) {
  return (
    <Sonner
      theme="dark"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast border border-zinc-700 bg-zinc-900 text-zinc-100 shadow-lg",
          description: "text-zinc-300",
          actionButton: "bg-zinc-100 text-zinc-900",
          cancelButton: "bg-zinc-800 text-zinc-100",
        },
      }}
      {...props}
    />
  );
}

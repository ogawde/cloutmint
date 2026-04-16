"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";

type HeaderRole = "BRAND" | "CREATOR";

type NavItem = {
  href: string;
  label: string;
};

const BRAND_ITEMS: NavItem[] = [
  { href: "/brand/projects", label: "Projects" },
  { href: "/brand/new", label: "New Brief" },
  { href: "/brand/profile", label: "Profile" },
];

const CREATOR_ITEMS: NavItem[] = [
  { href: "/creator/explore", label: "Explore" },
  { href: "/creator/dashboard", label: "Dashboard" },
];

export function HeaderRoleNav({ role }: { role: HeaderRole }) {
  const pathname = usePathname() ?? "";
  const router = useRouter();
  const items = role === "BRAND" ? BRAND_ITEMS : CREATOR_ITEMS;

  return (
    <nav className="flex items-center gap-2">
      {items.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            prefetch
            onMouseEnter={() => {
              router.prefetch(item.href);
            }}
            className={cn(
              buttonVariants({
                size: "sm",
                variant: isActive ? "default" : "outline",
              }),
              !isActive && "bg-zinc-900",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}


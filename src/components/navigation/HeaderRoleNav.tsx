"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type HeaderRole = "BRAND" | "CREATOR";

type NavItem = {
  href: string;
  label: string;
};

const BRAND_ITEMS: NavItem[] = [
  { href: "/brand/briefs", label: "Briefs" },
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
    <nav className="hidden items-center gap-2 lg:flex">
      {items.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Button
            key={item.href}
            asChild
            size="sm"
            variant={isActive ? "default" : "outline"}
            className={cn(!isActive && "bg-zinc-900")}
          >
            <Link
              href={item.href}
              prefetch
              onMouseEnter={() => {
                router.prefetch(item.href);
              }}
            >
              {item.label}
            </Link>
          </Button>
        );
      })}
    </nav>
  );
}


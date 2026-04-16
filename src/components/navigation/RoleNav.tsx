import Link from "next/link";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";

type RoleNavRole = "BRAND" | "CREATOR";

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

type RoleNavProps = {
  role: RoleNavRole;
  activeHref: string;
};

export function RoleNav({ role, activeHref }: RoleNavProps) {
  const items = role === "BRAND" ? BRAND_ITEMS : CREATOR_ITEMS;

  return (
    <nav className="rounded-xl border border-zinc-800 bg-zinc-900/70 px-4 py-3">
      <div className="flex flex-wrap items-center gap-2">
        {items.map((item) => {
          const isActive = item.href === activeHref;

          return (
            <Link
              key={item.href}
              href={item.href}
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
      </div>
    </nav>
  );
}


"use client";

import { Theme } from "@/types/app";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Tab {
  name: string;
  href: string;
}

interface InlineMenuProps {
  tabs: Tab[];
  theme: Theme;
}

export function InlineMenu({ tabs, theme }: InlineMenuProps) {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="flex overflow-x-auto pb-1 scrollbar-hide gap-8">
      {tabs.map((tab) => (
        <Link
          key={tab.name}
          href={tab.href}
          className={
            "py-1 px-4 rounded-full hover:font-bold font-medium transition-colors whitespace-nowrap"
          }
          style={
            isActive(tab.href)
              ? {
                  backgroundColor: theme.primary,
                  color: theme.primaryText,
                }
              : {
                  backgroundColor: "transparent",
                  color: theme.primary,
                }
          }
        >
          {tab.name}
        </Link>
      ))}
    </nav>
  );
}

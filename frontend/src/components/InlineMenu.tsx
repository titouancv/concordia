"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Tab {
  name: string;
  href: string;
}

interface InlineMenuProps {
  tabs: Tab[];
}

export function InlineMenu({ tabs }: InlineMenuProps) {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="flex overflow-x-auto pb-1 scrollbar-hide gap-4">
      {tabs.map((tab) => (
        <Link
          key={tab.name}
          href={tab.href}
          className={`py-1 px-4 rounded-full font-bold transition-colors whitespace-nowrap
          ${
            isActive(tab.href)
              ? "bg-[var(--primary)] text-[var(--primaryText)]"
              : "bg-transparent text-[var(--secondaryText)] hover:text-[var(--action)]"
          }`}
        >
          {tab.name}
        </Link>
      ))}
    </nav>
  );
}

"use client";

import Link from "next/link";
import { Home, Settings } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header
      className="
    fixed z-50 p-4 flex items-center
    bottom-4 left-1/2 -translate-x-1/2
    md:top-4 md:left-4 md:bottom-auto md:translate-x-0
  "
    >
      <div className="bg-[var(--primary)] border-2 border-[var(--action)] rounded-full">
        <nav className="flex items-center">
          <Link
            href="/"
            className={cn(
              "p-2 rounded-full transition-colors",
              isActive("/")
                ? "bg-[var(--action)] text-[var(--actionText)]"
                : "text-[var(--primaryText)] hover:text-[var(--action)]"
            )}
          >
            <Home className="w-6 h-6" />
          </Link>
          <Link
            href="/settings"
            className={cn(
              "p-2 rounded-full transition-colors",
              isActive("/settings")
                ? "bg-[var(--action)] text-[var(--actionText)]"
                : "text-[var(--primaryText)] hover:text-[var(--action)]"
            )}
          >
            <Settings className="w-6 h-6" />
          </Link>
        </nav>
      </div>
    </header>
  );
}

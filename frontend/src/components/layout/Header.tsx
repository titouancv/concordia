"use client";

import Link from "next/link";
import { Home, Settings } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 flex items-center justify-end px-6 md:px-12">
      <div className="backdrop-blur-sm bg-[var(--background)]/80 rounded-full">
        <nav className="flex items-center px-2">
          <Link
            href="/"
            className={cn(
              "p-2 rounded-full transition-colors",
              isActive("/")
                ? "text-[var(--primary)] hover:text-[var(--muted-foreground)]"
                : "text-[var(--muted-foreground)] hover:text-[var(--primary)]"
            )}
          >
            <Home className="w-6 h-6" />
          </Link>
          <Link
            href="/settings"
            className={cn(
              "p-2 rounded-full transition-colors",
              isActive("/settings")
                ? "text-[var(--primary)] hover:text-[var(--muted-foreground)]"
                : "text-[var(--muted-foreground)] hover:text-[var(--primary)]"
            )}
          >
            <Settings className="w-6 h-6" />
          </Link>
        </nav>
      </div>
    </header>
  );
}

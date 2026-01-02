"use client";

import Link from "next/link";
import { Home, Settings } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="fixed z-50 p-4 flex items-center bottom-4 left-1/2 -translate-x-1/2 md:top-4 md:left-4 md:bottom-auto md:translate-x-0">
      <div className=" flex flex-col bg-[var(--primary)] border-2 border-[var(--action)] rounded-full">
        <nav className="flex md:flex-col items-center transition-all">
          <Link href="/" className="p-2 rounded-full relative">
            {isActive("/") && (
              <motion.div
                layoutId="headerActiveTab"
                className="absolute inset-0 bg-[var(--action)] rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <Home
              className={cn(
                "w-6 h-6 relative z-10 transition-colors",
                isActive("/")
                  ? "text-[var(--actionText)]"
                  : "text-[var(--primaryText)] hover:text-[var(--action)]"
              )}
            />
          </Link>
          <Link href="/settings" className="p-2 rounded-full relative">
            {isActive("/settings") && (
              <motion.div
                layoutId="headerActiveTab"
                className="absolute inset-0 bg-[var(--action)] rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <Settings
              className={cn(
                "w-6 h-6 relative z-10 transition-colors",
                isActive("/settings")
                  ? "text-[var(--actionText)]"
                  : "text-[var(--primaryText)] hover:text-[var(--action)]"
              )}
            />
          </Link>
        </nav>
      </div>
    </div>
  );
}

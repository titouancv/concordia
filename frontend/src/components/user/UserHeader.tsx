"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { MapPin, Briefcase } from "lucide-react";
import { InlineMenu } from "../InlineMenu";
import { DEFAULT_THEME } from "@/app/page";

interface UserHeaderProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any;
}

export function UserHeader({ user }: UserHeaderProps) {
  const pathname = usePathname();
  const baseUrl = `/user/${user.username}`;

  const tabs = [
    { name: "Home", href: baseUrl },
    { name: "Posts", href: `${baseUrl}/posts` },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <div className="bg-[var(--background)] ">
      <div className="px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
          <div className="w-32 h-32 rounded-full border-4 border-[var(--background)] overflow-hidden relative bg-[var(--muted)] shadow-sm">
            <Image
              src={user.avatar}
              alt={`${user.name} avatar`}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1 pt-2">
            <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
            <p className="text-lg text-[var(--muted-foreground)] mb-4">
              {user.bio}
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-[var(--muted-foreground)] mb-6">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {user.location}
              </div>
              {user.experiences[0] && (
                <div className="flex items-center gap-1">
                  <Briefcase className="w-4 h-4" />
                  {user.experiences[0].role} at {user.experiences[0].company}
                </div>
              )}
            </div>

            <div className="flex gap-3">
              <button className="px-6 py-2 rounded-full font-medium bg-[var(--foreground)] text-[var(--background)] hover:opacity-90 transition-opacity">
                Connect
              </button>
              <button className="px-6 py-2 rounded-full font-medium border border-[var(--border)] hover:bg-[var(--muted)] transition-colors">
                Message
              </button>
            </div>
          </div>
        </div>

        <InlineMenu tabs={tabs} theme={DEFAULT_THEME} />
      </div>
    </div>
  );
}

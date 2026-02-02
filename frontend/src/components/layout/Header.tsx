"use client";

import Image from "next/image";
import { Plus } from "lucide-react";
import { InlineMenu, Tab } from "./InlineMenu";

interface HeaderProps {
  fullName: string;
  username: string;
  bio: string;
  avatarUrl: string;
  followersCount: number;
  followingCount: number;
  isCompany: boolean;
  menuTabs: Tab[];
}

export function Header({
  fullName,
  bio,
  avatarUrl,
  followersCount,
  followingCount,
  isCompany,
  menuTabs,
}: HeaderProps) {
  return (
    <div className="">
      <div className="px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-2 md:gap-8 mb-8">
          <div
            className={`w-32 h-32 ${isCompany ? "rounded-sm" : "rounded-full"} border-4 border-[var(--background)] overflow-hidden relative bg-[var(--muted)] shadow-sm`}
          >
            <Image
              src={avatarUrl}
              alt={`${fullName} avatar`}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-2 md:gap-4">
              <h1 className="text-3xl font-bold">{fullName}</h1>
            </div>
            <p className="text-lg text-[var(--muted-foreground)] ">{bio}</p>
            <div className="flex flex-wrap gap-4 text-lg text-[var(--muted-foreground)]">
              <div className="flex items-center gap-1">
                {followersCount} followers
              </div>
              <div className="flex items-center gap-1">
                {followingCount} following
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-end mt-2 md:mt-0">
            <button className="px-4 py-2 flex gap-2 rounded-full font-medium text-white transition-opacity hover:opacity-90 bg-[var(--action)] text-[var(--actionText)]">
              <Plus className="size-6" />
              Follow
            </button>
          </div>
        </div>

        <InlineMenu tabs={menuTabs} />
      </div>
    </div>
  );
}

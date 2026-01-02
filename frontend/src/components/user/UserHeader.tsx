"use client";

import Image from "next/image";
import { MapPin, Briefcase, Plus } from "lucide-react";
import { InlineMenu } from "../InlineMenu";
import { User } from "@/types/user";

interface UserHeaderProps {
  user: User;
}

export function UserHeader({ user }: UserHeaderProps) {
  const baseUrl = `/user/${user.username}`;

  const tabs = [
    { name: "Home", href: baseUrl },
    { name: "Posts", href: `${baseUrl}/posts` },
    { name: "Messages", href: `${baseUrl}/messages` },
  ];

  return (
    <div className="bg-[var(--background)] pt-4 md:pt-24">
      <div className="px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-2 md:gap-8 mb-8">
          <div className="w-32 h-32 rounded-full border-4 border-[var(--background)] overflow-hidden relative bg-[var(--muted)] shadow-sm">
            <Image
              src={user.avatar}
              alt={`${user.name} avatar`}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-2 md:gap-4">
              <h1 className="text-3xl font-bold">{user.name}</h1>
              <button className="py-1 px-4 flex items-center rounded-full font-bold bg-[var(--action)] text-[var(--actionText)] hover:opacity-90 transition-opacity">
                <Plus className="size-6" />
                <p className="pl-2 hidden md:block">Connect</p>
              </button>
            </div>
            <p className="text-lg text-[var(--muted-foreground)] ">
              {user.bio}
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-[var(--muted-foreground)]">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {user.location}
              </div>
              {user.professional.length && (
                <div className="flex items-center gap-1">
                  <Briefcase className="w-4 h-4" />
                  {user.professional[0].institutionName}
                </div>
              )}
            </div>
          </div>
        </div>

        <InlineMenu tabs={tabs} />
      </div>
    </div>
  );
}

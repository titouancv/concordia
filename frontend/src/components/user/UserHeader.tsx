"use client";

import Image from "next/image";
import { MapPin, Briefcase } from "lucide-react";
import { InlineMenu } from "../InlineMenu";

interface UserHeaderProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any;
}

export function UserHeader({ user }: UserHeaderProps) {
  const baseUrl = `/user/${user.username}`;

  const tabs = [
    { name: "Home", href: baseUrl },
    { name: "Posts", href: `${baseUrl}/posts` },
  ];

  return (
    <div className="bg-[var(--background)] pt-16">
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
              <button className="px-6 py-2 rounded-full font-medium bg-[var(--action)] text-[var(--actionText)] hover:opacity-90 transition-opacity">
                Connect
              </button>
              <button className="px-6 py-2 rounded-full font-medium bg-[var(--primary)] hover:bg-[var(--primary)]/80 text-[var(--primaryText)] transition-colors">
                Message
              </button>
            </div>
          </div>
        </div>

        <InlineMenu tabs={tabs} />
      </div>
    </div>
  );
}

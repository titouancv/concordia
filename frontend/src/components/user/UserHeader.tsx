"use client";

import { Tab } from "../layout/InlineMenu";
import { Header } from "./../layout/Header";
import { User, UserHome } from "@/types/user";

interface UserHeaderProps {
  user: User;
  userHome: UserHome;
}

export function UserHeader({ user, userHome }: UserHeaderProps) {
  const baseUrl = `/user/${user.username}`;

  const tabs: Tab[] = [
    { name: "Home", href: baseUrl },
    { name: "Posts", href: `${baseUrl}/posts` },
    { name: "Messages", href: `${baseUrl}/messages` },
  ];

  return (
    <div className="bg-[var(--background)] pt-4 md:pt-8">
      <Header
        fullName={user.name}
        username={user.username}
        bio={userHome.bio}
        avatarUrl={user.avatar}
        followersCount={0}
        followingCount={0}
        isCompany={false}
        menuTabs={tabs}
      />
    </div>
  );
}

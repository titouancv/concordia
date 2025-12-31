/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import { UserRecap } from "@/types/user";
import { Theme } from "@/types/app";

interface UserCardProps {
  user: UserRecap;
  theme: Theme;
}

export function UserCard({ user, theme }: UserCardProps) {
  return (
    <Link
      href={`/user/${user.username}`}
      key={user.id}
      className="group rounded-sm flex flex-col p-2 gap-2 items-center text-center transition-all hover:-translate-y-1"
      style={{ backgroundColor: theme.primary, color: theme.primaryText }}
    >
      <div className="w-full h-28 overflow-hidden relative transition-colors">
        <Image
          src={user.avatar}
          alt={user.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-2 w-full text-left">
        <h3 className="font-bold text-lg mb-1">{user.name}</h3>
        <p className="text-sm ">{user.role}</p>
      </div>
    </Link>
  );
}

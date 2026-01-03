import { notFound } from "next/navigation";
import { api } from "@/services/api";
import { UserHeader } from "@/components/user/UserHeader";

export default async function UserLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const user = await api.user.get(username);
  const userHome = await api.user.getHome(username);

  if (!user || !userHome) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[var(--secondary)]">
      <UserHeader user={user} userHome={userHome} />
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">{children}</div>
    </div>
  );
}

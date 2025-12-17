"use client";

interface CompanyClientProps {
  name: string;
}

export default function CompanyHome({ name }: CompanyClientProps) {
  return (
    <div className="flex h-full items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {name}
    </div>
  );
}

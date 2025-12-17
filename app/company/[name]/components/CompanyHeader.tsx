"use client";

interface CompanyClientProps {
  name: string;
}

export default function CompanyHeader({ name }: CompanyClientProps) {
  return (
    <div className="flex w-full p-4 gap-2 items-center justify-around font-bold">
      <p>{name}</p>
      <p>About us</p>
      <p>Careers</p>
    </div>
  );
}

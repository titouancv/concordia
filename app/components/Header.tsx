"use client";

interface CompanyClientProps {
  name: string;
}

export default function Header({ name }: CompanyClientProps) {
  return (
    <div className="flex w-full p-4 gap-2 items-center justify-around font-bold bg-secondary/70 backdrop-blur-sm rounded-full text-textColor">
      <p>{name}</p>
      <p>About us</p>
      <p>Contacts</p>
      <p>Careers</p>
    </div>
  );
}

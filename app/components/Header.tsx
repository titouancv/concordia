"use client";

interface CompanyClientProps {
  name: string;
}

export default function Header({ name }: CompanyClientProps) {
  return (
    <div className="flex w-full p-4 gap-2 items-center justify-around font-bold bg-white rounded-full text-black">
      <p>{name}</p>
      <p>About us</p>
      <p>Contact</p>
      <p>Careers</p>
    </div>
  );
}

"use client";

import Image from "next/image";
import { Company } from "@/types/company";
import { Header } from "../layout/Header";

interface CompanyHeaderProps {
  company: Company;
}

export function CompanyHeader({ company }: CompanyHeaderProps) {
  const baseUrl = `/company/${company.slug}`;

  const tabs = [
    { name: "Home", href: baseUrl },
    { name: "Posts", href: `${baseUrl}/posts` },
    { name: "About", href: `${baseUrl}/about` },
    { name: "Contact", href: `${baseUrl}/contact` },
    { name: "Career", href: `${baseUrl}/career` },
  ];

  return (
    <div className="bg-[var(--secondary)] text-[var(--secondaryText)] relative">
      <div className="absolute inset-x-0 top-0 h-64 md:h-80 overflow-hidden z-0">
        <Image
          src={company.cover}
          alt={`${company.name} cover`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--secondary)]" />
      </div>

      <div className="relative z-10 pt-32 md:pt-48  max-w-7xl mx-auto">
        <Header
          fullName={company.name}
          username={company.slug}
          bio={company.description}
          avatarUrl={company.logo}
          followersCount={0}
          followingCount={0}
          isCompany={true}
          menuTabs={tabs}
        />
      </div>
    </div>
  );
}

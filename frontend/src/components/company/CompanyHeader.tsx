"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { InlineMenu } from "../InlineMenu";
import { Company } from "@/types/company";

interface CompanyHeaderProps {
  company: Company;
}

export function CompanyHeader({ company }: CompanyHeaderProps) {
  const pathname = usePathname();
  const baseUrl = `/company/${company.slug}`;

  const tabs = [
    { name: "Home", href: baseUrl },
    { name: "Posts", href: `${baseUrl}/posts` },
    { name: "About", href: `${baseUrl}/about` },
    { name: "Contact", href: `${baseUrl}/contact` },
    { name: "Career", href: `${baseUrl}/career` },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <div
      style={{
        backgroundColor: company.theme.secondary,
        color: company.theme.secondaryText,
      }}
    >
      <div className="h-48 md:h-64 relative w-full bg-gray-200">
        <Image
          src={company.cover}
          alt={`${company.name} cover`}
          fill
          className="object-cover"
        />
      </div>

      <div className="px-4 md:px-8 max-w-7xl mx-auto relative">
        <div className="flex flex-col md:flex-row items-start md:items-end -mt-12 mb-6 gap-6">
          <div
            className="w-24 h-24 md:w-32 md:h-32 rounded-sm border-4 border-[var(--secondary)] overflow-hidden relative bg-white shadow-sm"
            style={{ borderColor: "var(--secondary)" }}
          >
            <Image
              src={company.logo}
              alt={`${company.name} logo`}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1 mb-2">
            <h1 className="text-2xl md:text-3xl font-bold">{company.name}</h1>
            <p>{company.description}</p>
          </div>

          <div className="mb-4 md:mb-2">
            <button
              className="px-6 py-2 rounded-full font-medium text-white transition-opacity hover:opacity-90"
              style={{
                backgroundColor: company.theme.action,
                color: company.theme.actionText,
              }}
            >
              Follow
            </button>
          </div>
        </div>

        <InlineMenu tabs={tabs} theme={company.theme} />
      </div>
    </div>
  );
}

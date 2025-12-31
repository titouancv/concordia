"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface CompanyHeaderProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  company: any;
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
    <div className="bg-[var(--company-secondary)]">
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
            className="w-24 h-24 md:w-32 md:h-32 rounded-xl border-4 border-[var(--company-secondary)] overflow-hidden relative bg-white shadow-sm"
            style={{ borderColor: "var(--company-secondary)" }}
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
            <p className="text-[var(--muted-foreground)]">
              {company.description}
            </p>
          </div>

          <div className="mb-4 md:mb-2">
            <button
              className="px-6 py-2 rounded-full font-medium text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: company.theme.action }}
            >
              Follow
            </button>
          </div>
        </div>

        <nav className="flex overflow-x-auto pb-1 scrollbar-hide gap-8">
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              href={tab.href}
              className={cn(
                "pb-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap",
                isActive(tab.href)
                  ? "border-[var(--company-primary)] text-[var(--company-primary)]"
                  : "border-transparent text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
              )}
              style={
                isActive(tab.href)
                  ? {
                      borderColor: company.theme.primary,
                      color: company.theme.primary,
                    }
                  : {}
              }
            >
              {tab.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

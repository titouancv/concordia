import { Experience } from "@/types/user";
import Image from "next/image";
import Link from "next/link";

export default function ExperienceCard({ exp }: { exp: Experience }) {
  const companyName = exp.company?.name || "Education";
  const companySlug = `/company/${exp.company?.slug}` || "";

  return (
    <Link href={companySlug} key={exp.id}>
      <div key={exp.id} className="flex gap-4 group transition-colors">
        {exp.company?.name ? (
          <div className="w-12 h-12 rounded overflow-hidden relative">
            <Image
              src={exp.company.logo}
              alt={exp.company.name}
              className="object-cover w-full h-full"
            />
          </div>
        ) : (
          <div className="w-12 h-12 rounded bg-[var(--primary)] flex items-center justify-center text-xs font-bold">
            {companyName.substring(0, 2).toUpperCase()}
          </div>
        )}
        <div>
          <h3 className="font-semibold group-hover:text-[var(--action)]">
            {exp.role}
          </h3>
          <p className="text-sm group-hover:text-[var(--action)]">
            {companyName}
          </p>
          <p className="text-xs">
            {exp.startDate} - {exp.endDate}
          </p>
        </div>
        {exp.description && (
          <div className="mt-2">
            <p className="text-xs">{exp.description}</p>
          </div>
        )}
      </div>
    </Link>
  );
}

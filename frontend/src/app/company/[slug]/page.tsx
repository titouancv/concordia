import { notFound } from "next/navigation";
import { api } from "@/services/api";
import { HeroWidget } from "@/components/company/widgets/HeroWidget";
import { StatsWidget } from "@/components/company/widgets/StatsWidget";

export default async function CompanyHomePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const company = await api.company.get(slug);

  if (!company) {
    notFound();
  }

  return (
    <div>
      <HeroWidget
        title={`Welcome to ${company.name}`}
        subtitle={company.description}
        ctaText="View Open Positions"
        ctaLink={`/company/${company.slug}/career`}
        theme={company.theme}
      />

      <StatsWidget
        theme={company.theme}
        stats={[
          { label: "Employees", value: company.stats.employees.toString() },
          { label: "Founded", value: company.stats.founded.toString() },
          { label: "Raised", value: company.stats.totalRaised },
          { label: "Funding", value: company.stats.lastFunding },
        ]}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className=" rounded-sm p-8 h-64 flex items-center justify-center bg-[var(--primary)] text-[var(--primaryText)]">
          Video Presentation Widget Placeholder
        </div>
        <div className=" rounded-sm p-8 h-64 flex items-center justify-center bg-[var(--primary)] text-[var(--primaryText)]">
          Testimonials Widget Placeholder
        </div>
      </div>
    </div>
  );
}

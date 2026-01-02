import { notFound } from "next/navigation";
import { api } from "@/services/api";
import { HeroWidget } from "@/components/company/widgets/HeroWidget";
import { StatsWidget } from "@/components/company/widgets/StatsWidget";
import { BenefitsWidget } from "@/components/company/widgets/BenefitsWidget";
import { ProcessWidget } from "@/components/company/widgets/ProcessWidget";
import { FeaturesWidget } from "@/components/company/widgets/FeaturesWidget";
import { PricingWidget } from "@/components/company/widgets/PricingWidget";
import { FAQWidget } from "@/components/company/widgets/FAQWidget";

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

  const widgets = company.widgets ?? {};

  return (
    <div className="flex flex-col gap-16">
      <HeroWidget
        title={`Welcome to ${company.name}`}
        subtitle={company.description}
        ctaText="View Open Positions"
        ctaLink={`/company/${company.slug}/career`}
      />

      {widgets.stats && <StatsWidget stats={widgets.stats} />}

      {widgets.benefits && <BenefitsWidget benefits={widgets.benefits} />}
      {widgets.processSteps && <ProcessWidget steps={widgets.processSteps} />}

      {widgets.features && <FeaturesWidget features={widgets.features} />}
      {widgets.pricingPlans && <PricingWidget plans={widgets.pricingPlans} />}

      {widgets.faqItems && <FAQWidget items={widgets.faqItems} />}
    </div>
  );
}

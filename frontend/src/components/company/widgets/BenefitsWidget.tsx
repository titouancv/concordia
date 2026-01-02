import { Benefit } from "@/types/widget";
import { WidgetCard } from "./WidgetCard";
import { TitleHeader } from "@/components/layout/TitleHeader";

interface BenefitsWidgetProps {
  benefits: Benefit[];
}

export function BenefitsWidget({ benefits }: BenefitsWidgetProps) {
  return (
    <div className="">
      <TitleHeader title="Benefits" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div key={index}>
            <WidgetCard isInverted={true}>
              <div className="w-12 h-12 rounded-sm bg-[var(--primary)]/10 flex items-center justify-center mb-6 text-[var(--primary)]">
                {/* Placeholder Icon */}
                <div className="w-6 h-6 bg-current rounded-sm" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </WidgetCard>
          </div>
        ))}
      </div>
    </div>
  );
}

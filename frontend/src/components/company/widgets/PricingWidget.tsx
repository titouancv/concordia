import { TitleHeader } from "@/components/layout/TitleHeader";
import { PricingPlan } from "@/types/widget";
import { Card, CardStyle } from "../../layout/Card";

interface PricingWidgetProps {
  plans: PricingPlan[];
}

export function PricingWidget({ plans }: PricingWidgetProps) {
  return (
    <div className="">
      <TitleHeader
        title="Pricing Plans"
        subtitle="Choose the plan that fits your needs"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div key={index} className={`relative `}>
            <Card
              isInverted={true}
              style={plan.isPopular ? CardStyle.ACTION : CardStyle.PRIMARY}
            >
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[var(--action)] text-[var(--actionText)] text-xs font-bold rounded-full">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {plan.description}
                </p>
              </div>

              <button
                className={`w-full py-3 rounded-sm font-semibold mb-8 transition-colors ${
                  plan.isPopular
                    ? "bg-[var(--action)] text-[var(--actionText)] hover:opacity-90"
                    : "bg-[var(--primary)] text-[var(--primaryText)] hover:bg-[var(--primary)]/80"
                }`}
              >
                {plan.ctaText}
              </button>

              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <div
                      className={`w-5 h-5 rounded-full ${
                        plan.isPopular
                          ? "bg-[var(--action)]/20 text-[var(--action)]"
                          : "bg-[var(--primary)]/20 text-[var(--primary)]"
                      } flex items-center justify-center text-xs`}
                    >
                      ✓
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

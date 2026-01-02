import { TitleHeader } from "@/components/layout/TitleHeader";
import { Step } from "@/types/widget";
import { WidgetCard, WidgetCardStyle } from "./WidgetCard";

interface ProcessWidgetProps {
  steps: Step[];
}

export function ProcessWidget({ steps }: ProcessWidgetProps) {
  return (
    <div className="">
      <TitleHeader title="Our Process" subtitle="Simple steps to get started" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index}>
            <WidgetCard style={WidgetCardStyle.TRANSPARENT}>
              <div className="text-6xl font-bold text-[var(--primary)]">
                {index + 1}
              </div>
              <div className="pt-2">
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </WidgetCard>
          </div>
        ))}
      </div>
    </div>
  );
}

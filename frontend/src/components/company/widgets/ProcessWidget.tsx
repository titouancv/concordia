import { TitleHeader } from "@/components/layout/TitleHeader";
import { Step } from "@/types/widget";
import { Card, CardStyle } from "../../layout/Card";

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
            <Card style={CardStyle.TRANSPARENT}>
              <div className="text-6xl font-bold text-[var(--primary)]">
                {index + 1}
              </div>
              <div className="pt-2">
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

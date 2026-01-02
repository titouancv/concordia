import { Feature } from "@/types/widget";
import { Card } from "../../layout/Card";
import { TitleHeader } from "@/components/layout/TitleHeader";

interface FeaturesWidgetProps {
  features: Feature[];
}

export function FeaturesWidget({ features }: FeaturesWidgetProps) {
  return (
    <div className="">
      <TitleHeader title="Features" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={` ${
              index === 0 || index === 1 ? "md:col-span-1 lg:col-span-1" : "" // Adjust spanning if needed to match layout
            }`}
          >
            <Card isInverted={true}>
              <div className="aspect-video rounded-sm bg-muted mb-6 w-full object-cover" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

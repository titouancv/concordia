import { TitleHeader } from "@/components/layout/TitleHeader";
import { FAQItem } from "@/types/widget";
import { WidgetCard } from "./WidgetCard";

interface FAQWidgetProps {
  items: FAQItem[];
}

export function FAQWidget({ items }: FAQWidgetProps) {
  return (
    <div className="">
      <TitleHeader title="Frequently Asked Questions" />
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index}>
            <WidgetCard isInverted={true}>
              <h3 className="font-semibold mb-2">{item.question}</h3>
              <p className="text-muted-foreground">{item.answer}</p>
            </WidgetCard>
          </div>
        ))}
      </div>
    </div>
  );
}

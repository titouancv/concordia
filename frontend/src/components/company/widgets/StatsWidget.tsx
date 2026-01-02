import { TitleHeader } from "@/components/layout/TitleHeader";
import { Card } from "../../layout/Card";

interface StatsWidgetProps {
  stats: {
    label: string;
    value: string;
  }[];
}

export function StatsWidget({ stats }: StatsWidgetProps) {
  return (
    <div>
      <TitleHeader title="Stats" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index}>
            <Card>
              <div className="text-3xl font-bold mb-2 text-[var(--primaryText)]">
                {stat.value}
              </div>
              <div className="text-sm text-[var(--primaryText)] uppercase tracking-wider">
                {stat.label}
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

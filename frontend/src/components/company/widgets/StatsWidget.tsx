import { Theme } from "@/app/company/[slug]/page";

interface StatsWidgetProps {
  stats: {
    label: string;
    value: string;
  }[];
  theme: Theme;
}

export function StatsWidget({ stats, theme }: StatsWidgetProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="backdrop-blur-sm rounded-sm p-6 text-center"
          style={{ backgroundColor: theme.primary }}
        >
          <div
            className="text-3xl font-bold mb-2"
            style={{ color: theme.secondary }}
          >
            {stat.value}
          </div>
          <div className="text-sm text-[var(--muted-foreground)] uppercase tracking-wider">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}

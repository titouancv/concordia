import { Theme } from "@/app/company/[slug]/page";

interface HeroWidgetProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  image?: string;
  theme: Theme;
}

export function HeroWidget({
  title,
  subtitle,
  ctaText,
  ctaLink,
  theme,
}: HeroWidgetProps) {
  return (
    <div className="bg-[var(--company-primary)] text-white rounded-sm p-8 md:p-12 mb-8 flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1">
        <h2
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ color: "white" }}
        >
          {title}
        </h2>
        <p className="text-lg mb-8 opacity-90">{subtitle}</p>
        <a
          href={ctaLink}
          className="inline-block px-8 py-3 rounded-full font-semibold transition-transform hover:scale-105"
          style={{ backgroundColor: theme.action, color: theme.actionText }}
        >
          {ctaText}
        </a>
      </div>
    </div>
  );
}

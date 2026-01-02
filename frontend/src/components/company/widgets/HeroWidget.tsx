import { WidgetCard } from "./WidgetCard";

interface HeroWidgetProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  image?: string;
}

export function HeroWidget({
  title,
  subtitle,
  ctaText,
  ctaLink,
}: HeroWidgetProps) {
  return (
    <WidgetCard>
      <div className=" flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
            {title}
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-lg leading-relaxed">
            {subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 rounded-full font-semibold bg-[var(--action)] text-[var(--actionText)] transition-colors">
              View Demo
            </button>
            <a
              href={ctaLink}
              className="inline-block px-8 py-4 rounded-full font-semibold transition-transform hover:scale-105 border border-white/20 hover:bg-white/10"
            >
              {ctaText}
            </a>
          </div>
        </div>
        <div className="flex-1 w-full">
          <div className="aspect-square md:aspect-[4/3] rounded-sm bg-white/10 border border-white/10 backdrop-blur-sm relative overflow-hidden">
            {/* Placeholder for Hero Image */}
            <div className="absolute inset-0 flex items-center justify-center text-white/20 font-bold text-xl">
              Hero Image
            </div>
          </div>
        </div>
      </div>
    </WidgetCard>
  );
}

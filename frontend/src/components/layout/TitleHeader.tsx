"use client";

interface LabelHeaderProps {
  title: string;
  subtitle?: string;
}

export function TitleHeader({ title, subtitle }: LabelHeaderProps) {
  return (
    <div className="text-left mb-8">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

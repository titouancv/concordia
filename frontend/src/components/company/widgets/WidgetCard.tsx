export enum WidgetCardStyle {
  PRIMARY,
  ACTION,
  TRANSPARENT,
}
interface WidgetCardProps {
  style?: WidgetCardStyle;
  isInverted?: boolean;
  children?: React.ReactNode;
}

export function WidgetCard({
  style = WidgetCardStyle.PRIMARY,
  isInverted = false,
  children,
}: WidgetCardProps) {
  let cardStyle = isInverted
    ? style === WidgetCardStyle.ACTION
      ? "border border-[var(--action)] bg-[var(--action)]/5 text-[var(--secondaryText)]"
      : "border border-[var(--primary)] bg-[var(--primary)]/5 text-[var(--secondaryText)]"
    : style === WidgetCardStyle.ACTION
    ? " bg-[var(--action)] text-[var(--actionText)]"
    : " bg-[var(--primary)] text-[var(--primaryText)]";

  if (style === WidgetCardStyle.TRANSPARENT) {
    cardStyle = "text-[var(--secondaryText)]";
  }

  return (
    <div className={`h-full w-full p-4 rounded-sm ${cardStyle}`}>
      {children}
    </div>
  );
}

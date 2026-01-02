export enum CardStyle {
  PRIMARY,
  ACTION,
  TRANSPARENT,
}
interface CardProps {
  style?: CardStyle;
  isInverted?: boolean;
  children?: React.ReactNode;
  isPaddingDisabled?: boolean;
}

export function Card({
  style = CardStyle.PRIMARY,
  isInverted = false,
  isPaddingDisabled = false,
  children,
}: CardProps) {
  let cardStyle = isInverted
    ? style === CardStyle.ACTION
      ? "border border-[var(--action)] bg-[var(--action)]/5 text-[var(--secondaryText)]"
      : "border border-[var(--primary)] bg-[var(--primary)]/5 text-[var(--secondaryText)]"
    : style === CardStyle.ACTION
    ? " bg-[var(--action)] text-[var(--actionText)]"
    : " bg-[var(--primary)] text-[var(--primaryText)]";

  if (style === CardStyle.TRANSPARENT) {
    cardStyle = "text-[var(--secondaryText)]";
  }
  if (isPaddingDisabled) {
    cardStyle += " p-0";
  } else {
    cardStyle += " p-6";
  }

  return (
    <div className={`h-full w-full rounded-sm ${cardStyle}`}>{children}</div>
  );
}

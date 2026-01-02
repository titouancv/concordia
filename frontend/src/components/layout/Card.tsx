export enum CardStyle {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
  ACTION = "ACTION",
  TRANSPARENT = "TRANSPARENT",
}

interface CardProps {
  style?: CardStyle;
  isInverted?: boolean;
  isPaddingDisabled?: boolean;
  isBordered?: boolean;
  children?: React.ReactNode;
}

/**
 * Styles statiques pour Tailwind
 * ⚠️ aucune interpolation dynamique
 */
const CARD_STYLES = {
  [CardStyle.PRIMARY]: {
    normal: "bg-[var(--primary)] text-[var(--primaryText)]",
    inverted:
      "bg-[var(--primary)]/5 text-[var(--secondaryText)] border-[var(--primary)]",
  },
  [CardStyle.SECONDARY]: {
    normal: "bg-[var(--secondary)] text-[var(--secondaryText)]",
    inverted:
      "bg-[var(--secondary)]/5 text-[var(--secondaryText)] border-[var(--secondary)]",
  },
  [CardStyle.ACTION]: {
    normal: "bg-[var(--action)] text-[var(--actionText)]",
    inverted:
      "bg-[var(--action)]/5 text-[var(--secondaryText)] border-[var(--action)]",
  },
};

export function Card({
  style = CardStyle.PRIMARY,
  isInverted = false,
  isPaddingDisabled = false,
  isBordered = true,
  children,
}: CardProps) {
  let className = "h-full w-full rounded-sm";

  if (style === CardStyle.TRANSPARENT) {
    className += " text-[var(--secondaryText)]";
  } else {
    className +=
      " " +
      (isInverted ? CARD_STYLES[style].inverted : CARD_STYLES[style].normal);

    if (isInverted && isBordered) {
      className += " border";
    }
  }

  className += isPaddingDisabled ? " p-0" : " p-6";

  return <div className={className}>{children}</div>;
}

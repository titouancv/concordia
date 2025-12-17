interface CardProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function Card({ children, className, style }: CardProps) {
  const combinedClassName = `flex flex-col bg-secondary rounded-sm shadow-md p-4 gap-4${
    className || ""
  }`;
  return (
    <div className={combinedClassName} style={style}>
      {children}
    </div>
  );
}

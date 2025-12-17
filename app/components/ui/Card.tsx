interface CardProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function Card({ children, className, style }: CardProps) {
  const combinedClassName = `flex flex-col bg-white dark:bg-neutral-800 rounded-sm shadow-md p-4 ${
    className || ""
  }`;
  return (
    <div className={combinedClassName} style={style}>
      {children}
    </div>
  );
}

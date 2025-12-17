interface CardProps {
  size?: "small" | "medium" | "large";
  children?: React.ReactNode;
}

export default function Card({ size, children }: CardProps) {
  const sizeClasses = {
    small: "w-40 h-24",
    medium: "w-60 h-36",
    large: "w-80 h-48",
  };
  const className = `bg-white dark:bg-gray-800 rounded-sm shadow-md p-4 ${
    size ? sizeClasses[size] : sizeClasses.medium
  }`;

  return <div className={className}>{children}</div>;
}

interface CardProps {
  children?: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  const className = `flex flex-col bg-white dark:bg-gray-800 rounded-sm shadow-md p-4`;

  return <div className={className}>{children}</div>;
}

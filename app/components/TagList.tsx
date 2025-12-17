export const TagList = ({
  title,
  items,
}: {
  title: string;
  items?: string[];
}) => {
  if (!items?.length) return null;
  return (
    <div>
      <h3 className="text-xs uppercase tracking-widest text-textColor font-bold mb-3">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-white dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 rounded-full text-sm shadow-sm transition-hover hover:border-blue-400"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

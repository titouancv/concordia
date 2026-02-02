export default function KeyList({ keys }: { keys: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {keys.map((key: string) => (
        <span
          key={key}
          className="px-3 py-1 rounded-sm bg-[var(--secondary)] text-sm text-[var(--secondaryText)]"
        >
          {key}
        </span>
      ))}
    </div>
  );
}

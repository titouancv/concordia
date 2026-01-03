export default async function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[var(--secondary)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">{children}</div>
    </div>
  );
}

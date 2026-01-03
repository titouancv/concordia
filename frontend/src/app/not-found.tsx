import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--secondary)] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[var(--secondaryText)] mb-4">
          404
        </h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-[var(--secondaryText)] mb-8">
          {"The page you're looking for doesn't exist."}
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-[var(--action)] text-[var(--actionText)] rounded-full font-semibold hover:opacity-90 transition-opacity"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

import CompanyHeader from "./components/CompanyHeader";

interface CompanyClientProps {
  children: React.ReactNode;
  params: Promise<{ name: string }>;
}

export default async function CompanyLayout({
  children,
  params,
}: CompanyClientProps) {
  const { name } = await params;
  return (
    <div className="flex h-screen items-center justify-center p-4">
      <div className="flex h-full w-[75%] flex-col items-center">
        <CompanyHeader name={name} />
        {children}
      </div>
    </div>
  );
}

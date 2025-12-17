import Header from "../../components/Header";

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
      <div className="flex h-full w-[80%] flex-col items-center">
        <Header name={name} />
        {children}
      </div>
    </div>
  );
}

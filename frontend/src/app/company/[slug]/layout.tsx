import { notFound } from "next/navigation";
import { api } from "@/services/api";
import { CompanyHeader } from "@/components/company/CompanyHeader";

export default async function CompanyLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const company = await api.company.get(slug);

  if (!company) {
    notFound();
  }

  return (
    <div
      className="min-h-screen"
      style={{
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        "--primary": company.theme.primary,
        "--secondary": company.theme.secondary,
        "--action": company.theme.action,
        "--primaryText": company.theme.primaryText,
        "--secondaryText": company.theme.secondaryText,
        "--actionText": company.theme.actionText,
        backgroundColor: company.theme.secondary,
        color: company.theme.secondaryText,
      }}
    >
      <CompanyHeader company={company} />
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">{children}</div>
    </div>
  );
}

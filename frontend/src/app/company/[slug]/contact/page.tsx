import { api } from "@/services/api";
import { EmployeeList } from "@/components/company/EmployeeList";

export default async function CompanyContactPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const company = await api.company.get(slug);

  if (!company) {
    return <div>Company not found</div>;
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Meet the Team</h1>
        <p>The people behind {company.name}</p>
      </div>

      <EmployeeList employees={company.employees || []} theme={company.theme} />
    </div>
  );
}

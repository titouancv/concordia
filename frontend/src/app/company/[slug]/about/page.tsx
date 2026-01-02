import { api } from "@/services/api";
import { UserRecap } from "@/types/user";
import { UserCard } from "@/components/company/UserCard";
import { Card } from "@/components/layout/Card";
import CompanyKeys from "@/components/company/CompanyKeys";
import MapCard from "@/components/company/MapCard";

export default async function CompanyAboutPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const company = await api.company.get(slug);

  if (!company || !company.about) {
    return <div>Company information not available.</div>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
      {/* Main Content */}
      <div className="lg:col-span-2 space-y-8">
        {/* History */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-lg leading-relaxed ">{company.about.history}</p>
        </section>

        {/* Vision & Mission */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card isInverted={true}>
            <h3 className="text-xl font-bold mb-3">Mission</h3>
            <p>{company.about.mission}</p>
          </Card>
          <Card isInverted={true}>
            <h3 className="text-xl font-bold mb-3">Vision</h3>
            <p>{company.about.vision}</p>
          </Card>
        </section>

        {/* Founders */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Founders</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {company.about.founders.map((founder: UserRecap) => (
              <UserCard key={founder.id} user={founder} />
            ))}
          </div>
        </section>

        {/* Location */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Office</h2>
          <MapCard address={company.about.officeLocation.address} />
        </section>
      </div>

      {/* Sticky Sidebar */}
      <div className="lg:col-span-1">
        <div className="sticky top-24 space-y-6">
          <CompanyKeys company={company} />
        </div>
      </div>
    </div>
  );
}

import { api } from "@/services/api";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Users, Calendar, DollarSign, PieChart } from "lucide-react";

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
      <div className="lg:col-span-2 space-y-12">
        {/* History */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-lg leading-relaxed text-[var(--muted-foreground)]">
            {company.about.history}
          </p>
        </section>

        {/* Vision & Mission */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[var(--background)]/60 backdrop-blur-sm p-6 rounded-xl border border-[var(--border)]">
            <h3 className="text-xl font-bold mb-3">Mission</h3>
            <p className="text-[var(--muted-foreground)]">
              {company.about.mission}
            </p>
          </div>
          <div className="bg-[var(--background)]/60 backdrop-blur-sm p-6 rounded-xl border border-[var(--border)]">
            <h3 className="text-xl font-bold mb-3">Vision</h3>
            <p className="text-[var(--muted-foreground)]">
              {company.about.vision}
            </p>
          </div>
        </section>

        {/* Founders */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Founders</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {company.about.founders.map((founder: any) => (
              <Link
                href={`/user/${founder.username}`}
                key={founder.username}
                className="flex items-center gap-4 p-4 border border-[var(--border)] rounded-xl bg-[var(--background)] hover:border-[var(--company-primary)] transition-colors group"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden relative bg-gray-100">
                  <Image
                    src={founder.avatar}
                    alt={founder.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold group-hover:text-[var(--company-primary)] transition-colors">
                    {founder.name}
                  </h4>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    {founder.role}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Location */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Office</h2>
          <div className="rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--background)]">
            <div className="h-64 relative bg-gray-200">
              <Image
                src={company.about.officeLocation.mapImage}
                alt="Office Map"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 bg-[var(--background)] flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[var(--muted-foreground)]" />
              <span>{company.about.officeLocation.address}</span>
            </div>
          </div>
        </section>
      </div>

      {/* Sticky Sidebar */}
      <div className="lg:col-span-1">
        <div className="sticky top-24 space-y-6">
          <div className="bg-[var(--background)]/80 backdrop-blur-sm border border-[var(--border)] rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-bold mb-6">Key Figures</h3>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-[var(--muted-foreground)]">
                  <Users className="w-5 h-5" />
                  <span>Employees</span>
                </div>
                <span className="font-semibold">{company.stats.employees}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-[var(--muted-foreground)]">
                  <Calendar className="w-5 h-5" />
                  <span>Founded</span>
                </div>
                <span className="font-semibold">{company.stats.founded}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-[var(--muted-foreground)]">
                  <PieChart className="w-5 h-5" />
                  <span>Gender Ratio</span>
                </div>
                <span className="font-semibold">
                  {company.stats.genderRatio}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-[var(--muted-foreground)]">
                  <DollarSign className="w-5 h-5" />
                  <span>Last Funding</span>
                </div>
                <span className="font-semibold">
                  {company.stats.lastFunding}
                </span>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
                <span className="text-[var(--muted-foreground)]">
                  Total Raised
                </span>
                <span
                  className="text-xl font-bold"
                  style={{ color: "var(--company-primary)" }}
                >
                  {company.stats.totalRaised}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

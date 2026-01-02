import { api } from "@/services/api";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Users,
  Calendar,
  DollarSign,
  PieChart,
  User,
} from "lucide-react";
import { UserRecap } from "@/types/user";
import { UserCard } from "@/components/company/UserCard";

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
          <p className="text-lg leading-relaxed ">{company.about.history}</p>
        </section>

        {/* Vision & Mission */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className=" p-6 rounded-sm bg-[var(--primaryText)] text-[var(--primary)]">
            <h3 className="text-xl font-bold mb-3">Mission</h3>
            <p>{company.about.mission}</p>
          </div>
          <div className=" p-6 rounded-sm bg-[var(--primaryText)] text-[var(--primary)]">
            <h3 className="text-xl font-bold mb-3">Vision</h3>
            <p>{company.about.vision}</p>
          </div>
        </section>

        {/* Founders */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Founders</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {company.about.founders.map((founder: UserRecap) => (
              <UserCard key={founder.id} user={founder} theme={company.theme} />
            ))}
          </div>
        </section>

        {/* Location */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Office</h2>
          <div className="rounded-sm overflow-hidden">
            <div className="h-64 relative bg-gray-200">
              <Image
                src={company.about.officeLocation.mapImage}
                alt="Office Map"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 bg-[var(--background)] flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>{company.about.officeLocation.address}</span>
            </div>
          </div>
        </section>
      </div>

      {/* Sticky Sidebar */}
      <div className="lg:col-span-1">
        <div className="sticky top-24 space-y-6">
          <div className=" rounded-sm p-6 shadow-sm bg-[var(--primaryText)] text-[var(--primary)]">
            <h3 className="text-lg font-bold mb-6">Key Figures</h3>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5" />
                  <span>Employees</span>
                </div>
                <span className="font-semibold">{company.stats.employees}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5" />
                  <span>Founded</span>
                </div>
                <span className="font-semibold">{company.stats.founded}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <PieChart className="w-5 h-5" />
                  <span>Gender Ratio</span>
                </div>
                <span className="font-semibold">
                  {company.stats.genderRatio}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <DollarSign className="w-5 h-5" />
                  <span>Last Funding</span>
                </div>
                <span className="font-semibold">
                  {company.stats.lastFunding}
                </span>
              </div>

              <div className="flex items-center justify-between pt-4">
                <span className="">Total Raised</span>
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

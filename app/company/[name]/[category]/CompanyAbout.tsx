"use client";

import MiniMap from "@/app/components/MiniMap";
import Card from "@/app/components/ui/Card";
import {
  CompanyProfile,
  Company,
  Lifecycle,
  Workforce,
  Locations,
  Financials,
  TechStack,
  Identity,
  Media,
} from "@/types/companyTypes";
import { useEffect, useState } from "react";

interface CompanyClientProps {
  name: string;
}

export default function CompanyAbout({ name }: CompanyClientProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [id, setId] = useState<string>("");
  const [company, setCompany] = useState<Company | null>(null);
  const [lifecycle, setLifecycle] = useState<Lifecycle | null>(null);
  const [workforce, setWorkforce] = useState<Workforce | null>(null);
  const [locations, setLocations] = useState<Locations | null>(null);
  const [financials, setFinancials] = useState<Financials | null>(null);
  const [techStack, setTechStack] = useState<TechStack | null>(null);
  const [identity, setIdentity] = useState<Identity | null>(null);
  const [media, setMedia] = useState<Media | null>(null);

  async function loadCompanyInfo() {
    setLoading(true);
    try {
      const res = await fetch(
        `/api/company/${encodeURIComponent(name)}/about`,
        {
          cache: "no-store",
        }
      );
      const result = (await res.json()) as { companyProfile: CompanyProfile };
      const data = result.companyProfile;
      setId(data.id);
      setCompany(data.company);
      setLifecycle(data.lifecycle || null);
      setWorkforce(data.workforce || null);
      setLocations(data.locations || null);
      setFinancials(data.financials || null);
      setTechStack(data.techStack || null);
      setIdentity(data.identity || null);
      setMedia(data.media || null);
    } catch {
      // Handle errors here
      setId("");
      setCompany(null);
      setLifecycle(null);
      setWorkforce(null);
      setLocations(null);
      setFinancials(null);
      setTechStack(null);
      setIdentity(null);
      setMedia(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadCompanyInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  if (loading) {
    return <p>Loading company information...</p>;
  } else if (!company) {
    return <p>No company information found.</p>;
  }

  return (
    <div className="w-full">
      <p>{company.description}</p>
      <div className="flex flex-col gap-4">
        {lifecycle && (
          <Card>
            <h2 className="font-bold text-lg mb-2">Lifecycle</h2>
            <p>Year Founded: {lifecycle.yearFounded}</p>
            <p>Status: {lifecycle.status}</p>
          </Card>
        )}
        {workforce && (
          <Card>
            <h2 className="font-bold text-lg mb-2">Workforce</h2>
            <p>Employee Count: {workforce.employeeCount}</p>
            <p>Employee Range: {workforce.employeeRange}</p>
          </Card>
        )}
        {locations && (
          <Card>
            <div className="flex gap-4">
              <div className="flex flex-col gap-2">
                <h2 className="font-bold">Headquarters</h2>
                <MiniMap address={locations.headquarters!} />
              </div>
              {locations.offices && (
                <div className="flex flex-col w-full gap-2">
                  <h2 className="font-bold">Offices</h2>
                  <div className="flex gap-2">
                    {locations.offices.map((office, index) => (
                      <div key={index} className="">
                        <MiniMap address={office} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Card>
        )}
        {financials && (
          <Card>
            <h2 className="font-bold text-lg mb-2">Financials</h2>
            <p>Annual Revenue: {financials.annualRecurringRevenue}</p>
            <p>Profitability Status: {financials.profitabilityStatus}</p>
          </Card>
        )}
        {techStack && (
          <div className="row-span-3">
            <Card>
              <h2 className="font-bold text-lg mb-2">Tech Stack</h2>
              <p>Frontend: {techStack.frontend?.join(", ")}</p>
              <p>Backend: {techStack.backend?.join(", ")}</p>
              <p>Database: {techStack.database?.join(", ")}</p>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}

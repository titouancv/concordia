"use client";

import { useEffect, useState, useCallback } from "react";
import MiniMap from "@/app/components/MiniMap";
import Card from "@/app/components/ui/Card";
import { CompanyProfile } from "@/types/companyTypes";
import {
  Globe,
  Twitter,
  Linkedin,
  Github,
  Facebook,
  Youtube,
  Instagram,
  Users,
  Rocket,
  DollarSign,
} from "lucide-react"; // Optionnel: icones plus modernes

// --- Sous-composants utilitaires ---

const StatItem = ({
  label,
  value,
  subValue,
}: {
  label: string;
  value: string | number;
  subValue?: string;
}) => (
  <div className="flex flex-col">
    <span className="text-sm text-neutral-500 dark:text-neutral-400">
      {label}
    </span>
    <span className="font-bold text-lg">
      {value}{" "}
      {subValue && (
        <span className="text-xs font-normal opacity-70">{subValue}</span>
      )}
    </span>
  </div>
);

const TechGroup = ({ title, items }: { title: string; items?: string[] }) => {
  if (!items?.length) return null;
  return (
    <div>
      <h3 className="text-xs uppercase tracking-widest text-neutral-500 font-bold mb-3">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-white dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 rounded-full text-sm shadow-sm transition-hover hover:border-blue-400"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

// --- Hook de données ---

function useCompanyProfile(name: string) {
  const [data, setData] = useState<{
    profile: CompanyProfile | null;
    loading: boolean;
    error: boolean;
  }>({
    profile: null,
    loading: true,
    error: false,
  });

  const loadData = useCallback(async () => {
    setData((prev) => ({ ...prev, loading: true, error: false }));
    try {
      const res = await fetch(`/api/company/${encodeURIComponent(name)}/about`);
      if (!res.ok) throw new Error();
      const result = await res.json();
      setData({ profile: result.companyProfile, loading: false, error: false });
    } catch {
      setData({ profile: null, loading: false, error: true });
    }
  }, [name]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return { ...data, retry: loadData };
}

// --- Composant Principal ---

export default function CompanyAbout({ name }: { name: string }) {
  const { profile, loading, error, retry } = useCompanyProfile(name);

  if (loading) return <CompanyAboutSkeleton />;
  if (error)
    return (
      <div className="p-12 text-center space-y-4">
        <p className="text-red-500 font-medium">
          Erreur lors du chargement des données.
        </p>
        <button
          onClick={retry}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Réessayer
        </button>
      </div>
    );
  if (!profile)
    return (
      <div className="p-12 text-center opacity-50">Aucun profil trouvé.</div>
    );

  const {
    company,
    lifecycle,
    workforce,
    locations,
    financials,
    techStack,
    media,
  } = profile;
  const currencyFormatter = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    notation: "compact",
  });

  return (
    <div className="w-full max-w-6xl mx-auto p-4 space-y-8 text-neutral-900 dark:text-neutral-100">
      {/* Hero Section */}
      <header>
        <p className="text-xl text-neutral-600 dark:text-neutral-400 italic mb-4">
          {company.tagline}
        </p>
        <p className="max-w-3xl leading-relaxed opacity-90">
          {company.description}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Infos Clés */}
        <Card className="p-6">
          <h2 className="font-bold text-lg mb-4 flex items-center gap-2  ">
            Vitalité
          </h2>
          <div className="space-y-4">
            <StatItem
              label="Fondation"
              value={lifecycle?.yearFounded || "N/A"}
            />
            <div>
              <span className="text-sm text-neutral-500">Site Web</span>
              <a
                href={company.websiteUrl}
                target="_blank"
                className="block text-blue-500 hover:underline truncate"
              >
                {company.websiteUrl}
              </a>
            </div>
            {/* Social Links simplified rendering */}
            <div className="flex flex-wrap gap-3 pt-2">
              {media?.socialLinks?.linkedin && (
                <a
                  href={media.socialLinks.linkedin}
                  className="hover:text-blue-600"
                >
                  <Linkedin size={20} />
                </a>
              )}
              {media?.socialLinks?.twitter && (
                <a
                  href={media.socialLinks.twitter}
                  className="hover:text-blue-400"
                >
                  <Twitter size={20} />
                </a>
              )}
              {media?.socialLinks?.github && (
                <a
                  href={media.socialLinks.github}
                  className="hover:text-neutral-500"
                >
                  <Github size={20} />
                </a>
              )}
              {media?.socialLinks?.youtube && (
                <a
                  href={media.socialLinks.youtube}
                  className="hover:text-blue-600"
                >
                  <Youtube size={20} />
                </a>
              )}
              {media?.socialLinks?.instagram && (
                <a
                  href={media.socialLinks.instagram}
                  className="hover:text-blue-400"
                >
                  <Instagram size={20} />
                </a>
              )}
              {media?.socialLinks?.facebook && (
                <a
                  href={media.socialLinks.facebook}
                  className="hover:text-neutral-500"
                >
                  <Facebook size={20} />
                </a>
              )}
            </div>
          </div>
        </Card>

        {/* Équipe */}
        <Card className="p-6">
          <h2 className="font-bold text-lg mb-4 flex items-center gap-2 ">
            Équipe
          </h2>
          {workforce && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {workforce.employeeCount && (
                  <StatItem
                    label="Effectif"
                    value={workforce.employeeCount}
                    subValue="pers."
                  />
                )}
                {workforce.averageEmployeeAge && (
                  <StatItem
                    label="Âge moyen"
                    value={workforce.averageEmployeeAge}
                    subValue="ans"
                  />
                )}
              </div>
              <div className="w-full bg-neutral-200 dark:bg-neutral-700 h-2 rounded-full overflow-hidden flex">
                <div
                  style={{ width: `${workforce.demographics?.menPercentage}%` }}
                  className="bg-blue-400 h-full"
                  title="Hommes"
                />
                <div
                  style={{
                    width: `${workforce.demographics?.womenPercentage}%`,
                  }}
                  className="bg-pink-400 h-full"
                  title="Femmes"
                />
              </div>
              {workforce.hiringStatus === "hiring" && (
                <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 p-3 rounded-lg text-center text-sm font-bold">
                  🔥 {workforce.openPositionsCount} postes ouverts
                </div>
              )}
            </div>
          )}
        </Card>

        {/* Finance */}
        <Card className="p-6">
          <h2 className="font-bold text-lg mb-4 flex items-center gap-2 ">
            Finance
          </h2>
          {financials ? (
            <div className="space-y-4">
              <StatItem
                label="Levée totale"
                value={
                  financials.totalFundingAmount
                    ? currencyFormatter.format(financials.totalFundingAmount)
                    : "N/A"
                }
              />
              {financials.lastFundingRound && (
                <div className="text-sm p-3 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                  <p className="font-bold text-blue-500">
                    {financials.lastFundingRound.roundType}
                  </p>
                  <p>
                    {currencyFormatter.format(
                      financials.lastFundingRound.amountRaised || 0
                    )}{" "}
                    • {financials.lastFundingRound.date}
                  </p>
                </div>
              )}
            </div>
          ) : (
            <p className="text-sm opacity-50 italic">Données non disponibles</p>
          )}
        </Card>
      </div>

      {/* Tech Stack */}
      {techStack && (
        <Card className="p-6 border-none bg-neutral-50 dark:bg-neutral-900/50 shadow-inner">
          <h2 className="font-bold text-xl mb-6">🛠 Stack Technique</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <TechGroup title="Frontend" items={techStack.frontend} />
            <TechGroup title="Backend" items={techStack.backend} />
            <TechGroup title="Infrastructure" items={techStack.database} />
          </div>
        </Card>
      )}

      {/* Locations */}
      {locations && (
        <section className="space-y-4">
          <h2 className="font-bold text-2xl flex items-center gap-2">
            📍 Implantations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase text-neutral-500">
                Siège Social
              </p>
              <div>
                <MiniMap address={locations.headquarters!} width={400} />
              </div>
            </div>
            {locations.offices && locations.offices.length > 0 && (
              <div className="space-y-2">
                <p className="text-xs font-bold uppercase text-neutral-500">
                  Bureaux ({locations.offices.length})
                </p>
                <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
                  {locations.offices.map((office, idx) => (
                    <div key={idx}>
                      <MiniMap address={office} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}

function CompanyAboutSkeleton() {
  return (
    <div className="w-full max-w-6xl mx-auto p-4 space-y-8 animate-pulse">
      <div className="h-8 bg-neutral-200 dark:bg-neutral-800 w-1/3 rounded" />
      <div className="h-20 bg-neutral-100 dark:bg-neutral-900 w-full rounded" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-48 bg-neutral-100 dark:bg-neutral-800 rounded-xl"
          />
        ))}
      </div>
    </div>
  );
}

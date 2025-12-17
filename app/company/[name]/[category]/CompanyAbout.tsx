"use client";

import { useEffect, useState, useCallback } from "react";
import MiniMap from "@/app/components/MiniMap";
import Card from "@/app/components/ui/Card";
import { CompanyProfile } from "@/types/companyTypes";
import {
  Twitter,
  Linkedin,
  Github,
  Facebook,
  Youtube,
  Instagram,
} from "lucide-react"; // Optionnel: icones plus modernes
import { TagList } from "@/app/components/TagList";

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
    <span className="text-sm text-textColor">{label}</span>
    <span className="font-bold text-lg">
      {value}{" "}
      {subValue && (
        <span className="text-xs font-normal opacity-70">{subValue}</span>
      )}
    </span>
  </div>
);

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
          className="px-4 py-2 bg-action text-textColor rounded-lg hover:bg-action transition"
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
    <div className="w-full max-w-6xl mx-auto p-4 space-y-4 text-textColor">
      {/* Hero Section */}
      <header>
        {media?.familyPhotoUrls && (
          <img
            src={media?.familyPhotoUrls}
            alt={`${company.name} Team`}
            className="w-full h-48 object-cover rounded-sm mb-4"
          />
        )}
        <p className="max-w-3xl leading-relaxed opacity-90">
          {company.description}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Infos Clés */}
        <Card>
          <div className="space-y-4">
            <h2 className="font-bold text-xl mb-6">🏢 Infos Clés</h2>
            <StatItem
              label="Créer en"
              value={lifecycle?.yearFounded || "N/A"}
            />
            <div>
              <span className="text-sm text-textColor">Site Web</span>
              <a
                href={company.websiteUrl}
                target="_blank"
                className="block text-action hover:underline truncate"
              >
                {company.websiteUrl}
              </a>
            </div>
            {/* Social Links simplified rendering */}
            <div className="flex flex-wrap gap-4 pt-2">
              {media?.socialLinks?.linkedin && (
                <a
                  href={media.socialLinks.linkedin}
                  className="hover:text-action"
                >
                  <Linkedin size={20} />
                </a>
              )}
              {media?.socialLinks?.twitter && (
                <a
                  href={media.socialLinks.twitter}
                  className="hover:text-action"
                >
                  <Twitter size={20} />
                </a>
              )}
              {media?.socialLinks?.github && (
                <a
                  href={media.socialLinks.github}
                  className="hover:text-action"
                >
                  <Github size={20} />
                </a>
              )}
              {media?.socialLinks?.youtube && (
                <a
                  href={media.socialLinks.youtube}
                  className="hover:text-action"
                >
                  <Youtube size={20} />
                </a>
              )}
              {media?.socialLinks?.instagram && (
                <a
                  href={media.socialLinks.instagram}
                  className="hover:text-action"
                >
                  <Instagram size={20} />
                </a>
              )}
              {media?.socialLinks?.facebook && (
                <a
                  href={media.socialLinks.facebook}
                  className="hover:text-action"
                >
                  <Facebook size={20} />
                </a>
              )}
            </div>
          </div>
        </Card>

        {/* Équipe */}
        <Card>
          {workforce && (
            <div className="space-y-4">
              <h2 className="font-bold text-xl mb-6">👥 Équipe</h2>
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
              {workforce.demographics && (
                <TagList
                  title="Répartition"
                  items={[
                    `♂︎ ${workforce.demographics?.menPercentage}%`,
                    `♀︎ ${workforce.demographics?.womenPercentage}%`,
                    workforce.demographics?.otherPercentage
                      ? `⚧ ${workforce.demographics?.otherPercentage}%`
                      : "",
                  ].filter(Boolean)}
                />
              )}
              {workforce.hiringStatus === "hiring" && (
                <div className="bg-action text-textCColor p-3 rounded-lg text-center text-sm font-bold">
                  🔥 {workforce.openPositionsCount} postes ouverts
                </div>
              )}
            </div>
          )}
        </Card>

        {/* Finance */}
        <Card>
          {financials ? (
            <>
              <h2 className="font-bold text-xl ">💰 Finance</h2>
              <StatItem
                label="Levée totale"
                value={
                  financials.totalFundingAmount
                    ? currencyFormatter.format(financials.totalFundingAmount)
                    : "N/A"
                }
              />
              {financials.lastFundingRound && (
                <div className="text-sm">
                  <span className="text-sm text-textColor">Dernière levée</span>
                  <p className="font-bold text-lg text-action">
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
            </>
          ) : (
            <p className="text-sm opacity-50 italic">Données non disponibles</p>
          )}
        </Card>
      </div>

      {/* Tech Stack */}
      {techStack && (
        <Card>
          <h2 className="font-bold text-xl ">🛠 Stack Technique</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <TagList title="Frontend" items={techStack.frontend} />
            <TagList title="Backend" items={techStack.backend} />
            <TagList title="Infrastructure" items={techStack.infrastructure} />
          </div>
        </Card>
      )}

      {/* Locations */}
      {locations && (
        <section className="space-y-4">
          <div className="flex flex-row gap-4">
            <div className="space-y-2">
              <h2 className=" font-bold uppercase text-textColor">
                Siège Social
              </h2>
              <div>
                <MiniMap address={locations.headquarters!} width={400} />
              </div>
            </div>
            {locations.offices && locations.offices.length > 0 && (
              <div className="space-y-2">
                <h2 className=" font-bold uppercase text-textColor">
                  Bureaux ({locations.offices.length})
                </h2>
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

import { api } from "@/services/api";
import { MapPin, Clock, ArrowRight } from "lucide-react";

export default async function CompanyCareerPage({
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
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Join {company.name}
        </h1>
        <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
          We are always looking for talented individuals to join our team. Check
          out our open positions below.
        </p>
      </div>

      <div className="space-y-4">
        {company.jobs && company.jobs.length > 0 ? (
          company.jobs.map((job: any) => (
            <div
              key={job.id}
              className="group bg-[var(--background)]/80 backdrop-blur-sm border border-[var(--border)] rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-[var(--company-primary)] transition-all hover:shadow-sm"
            >
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--company-primary)] transition-colors">
                  {job.title}
                </h3>
                <div className="flex flex-wrap gap-4 text-sm text-[var(--muted-foreground)]">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {job.type}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </div>
                  {job.remote && (
                    <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-medium dark:bg-green-900 dark:text-green-100">
                      Remote Friendly
                    </span>
                  )}
                </div>
              </div>

              <button
                className="px-6 py-3 rounded-full font-semibold text-white flex items-center gap-2 transition-transform group-hover:translate-x-1"
                style={{ backgroundColor: company.theme.action }}
              >
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))
        ) : (
          <div className="text-center py-12 bg-[var(--muted)] rounded-xl">
            <p className="text-[var(--muted-foreground)]">
              No open positions at the moment.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

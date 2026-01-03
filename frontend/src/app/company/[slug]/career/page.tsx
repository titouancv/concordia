import JobsCard from "@/components/company/JobsCard";
import { api } from "@/services/api";
import { Job } from "@/types/company";

export default async function CompanyCareerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const company = await api.company.get(slug);

  if (!company || !company.jobs) {
    return <div>Company not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Join {company.name}
        </h1>
        <p className="text-lg  max-w-2xl mx-auto">
          We are always looking for talented individuals to join our team. Check
          out our open positions below.
        </p>
      </div>

      <div className="space-y-4">
        {company.jobs && company.jobs.length > 0 ? (
          company.jobs.map((job: Job) => <JobsCard key={job.id} job={job} />)
        ) : (
          <div className="text-center py-12">
            <p className="">No open positions at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
}

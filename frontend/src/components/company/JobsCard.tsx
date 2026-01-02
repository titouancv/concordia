import { Job } from "@/types/company";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { Card } from "../layout/Card";

export default async function JobsCard({ job }: { job: Job }) {
  return (
    <Card isInverted={true}>
      <div
        key={job.id}
        className="group rounded-sm flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all hover:shadow-sm"
      >
        <div>
          <h3 className="text-xl font-bold mb-2 transition-colors">
            {job.title}
          </h3>
          <div className="flex flex-wrap gap-4 text-sm ">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {job.type}
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {job.location}
            </div>
            {job.remote && (
              <span className="px-2 py-0.5 rounded-full bg-[var(--primary)] text-[var(--primaryText)] text-xs font-medium">
                Remote Friendly
              </span>
            )}
          </div>
        </div>

        <button className="px-6 py-3 rounded-full font-semibold  flex items-center gap-2 transition-transform group-hover:translate-x-1 bg-[var(--action)] text-[var(--actionText)]">
          Apply Now
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </Card>
  );
}

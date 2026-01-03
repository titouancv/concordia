import { Experience } from "@/types/user";

export default function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <div key={exp.id} className="flex gap-4">
      <div className="w-12 h-12 rounded bg-[var(--primary)] flex items-center justify-center text-xs font-bold">
        {exp.institutionName.substring(0, 2).toUpperCase()}
      </div>
      <div>
        <h3 className="font-semibold">{exp.role}</h3>
        <p className="text-sm ">{exp.institutionName}</p>
        <p className="text-xs mt-1">
          {exp.startDate} - {exp.endDate}
        </p>
      </div>
      {exp.description && (
        <div>
          <p className="text-xs mt-1">{exp.description}</p>
        </div>
      )}
    </div>
  );
}

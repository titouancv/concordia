import { Users, Calendar, DollarSign, PieChart } from "lucide-react";

import { Card } from "@/components/layout/Card";
import { Company } from "@/types/company";

export default function CompanyKeys({ company }: { company: Company }) {
  return (
    <Card isInverted={true}>
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
          <span className="font-semibold">{company.stats.genderRatio}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <DollarSign className="w-5 h-5" />
            <span>Last Funding</span>
          </div>
          <span className="font-semibold">{company.stats.lastFunding}</span>
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
    </Card>
  );
}

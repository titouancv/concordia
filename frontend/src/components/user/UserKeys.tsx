import { Card } from "@/components/layout/Card";
import { UserHome } from "@/types/user";

export default function CompanyKeys({ user }: { user: UserHome }) {
  return (
    <Card>
      <div className="space-y-8">
        {user.skills && (
          <section>
            <h2 className="text-xl font-bold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {user.skills.map((skill: string) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full bg-[var(--secondary)] text-sm text-[var(--secondaryText)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}

        {user.hobbies && (
          <section>
            <h2 className="text-xl font-bold mb-4">Hobbies</h2>
            <div className="flex flex-wrap gap-2">
              {user.hobbies.map((skill: string) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full bg-[var(--secondary)] text-sm text-[var(--secondaryText)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}
      </div>
    </Card>
  );
}

import { Card } from "@/components/layout/Card";
import { UserHome } from "@/types/user";
import KeyList from "../layout/KeyList";

export default function CompanyKeys({ user }: { user: UserHome }) {
  return (
    <Card>
      <div className="space-y-8">
        {user.skills && (
          <section>
            <h2 className="text-xl font-bold mb-4">Skills</h2>
            <KeyList keys={user.skills} />
          </section>
        )}

        {user.hobbies && (
          <section>
            <h2 className="text-xl font-bold mb-4">Hobbies</h2>
            <KeyList keys={user.hobbies} />
          </section>
        )}
      </div>
    </Card>
  );
}

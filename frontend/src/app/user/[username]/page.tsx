import { notFound } from "next/navigation";
import { api } from "@/services/api";
import UserKeys from "@/components/user/UserKeys";

export default async function UserHomePage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const user = await api.user.get(username);

  if (!user) {
    notFound();
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-2 space-y-8">
        <section>
          <h2 className="text-xl font-bold mb-4">About</h2>
          <p className=" leading-relaxed">
            {user.bio}
            {/* Add more dummy text if bio is short */}
            <br />
            <br />
            Passionate about building accessible and performant web
            applications. Always learning new technologies and sharing knowledge
            with the community.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">Experience</h2>
          <div className="space-y-6">
            {user.professional.map((exp) => (
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
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">Education</h2>
          <div className="space-y-6">
            {user.education.map((exp) => (
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
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="lg:col-span-1">
        <div className="sticky top-24 space-y-6">
          <UserKeys user={user} />
        </div>
      </div>
    </div>
  );
}

import CompanyHome from "./[category]/CompanyHome";

export default async function CompanyPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  return <CompanyHome name={name} />;
}

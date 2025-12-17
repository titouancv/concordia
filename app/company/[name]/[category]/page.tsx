import CompanyHome from "./CompanyHome";

export default async function CompanyCategory({
  params,
}: {
  params: Promise<{ category: string; name: string }>;
}) {
  const { category, name } = await params;

  switch (category) {
    case "product":
      return <CompanyHome name={name} />;
    case "aboutUs":
      return <CompanyHome name={name} />;
    case "career":
      return <CompanyHome name={name} />;
    default:
      return <p>Category not found</p>;
  }
}

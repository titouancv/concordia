import { companyProfileMock } from "@/mock/fakeCompany";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ name: string; category: string }> }
) {
  const { name, category } = await params;
  // Here you would typically fetch real data based on the name and category
  // For demonstration, we are returning mock data
  const companyProfile = companyProfileMock;

  return NextResponse.json({ companyProfile });
}

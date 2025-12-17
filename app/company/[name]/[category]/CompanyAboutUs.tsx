"use client";

import { CompanyKnowledgeBase } from "@/types/companyTypes";
import { useState } from "react";

interface CompanyClientProps {
  name: string;
}

export default function CompanyHome({ name }: CompanyClientProps) {
  const [knowledgeBase, setKnowledgeBase] =
    useState<CompanyKnowledgeBase | null>(null);
  return <div className="">{name}</div>;
}

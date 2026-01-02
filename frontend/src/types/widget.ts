import { ReactNode } from "react";

export interface Benefit {
  title: string;
  description: string;
  icon?: ReactNode;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Feature {
  title: string;
  description: string;
  image?: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface Step {
  title: string;
  description: string;
}

export interface Stat {
  label: string;
  value: string;
}

import type { ProjectType } from "@/lib/data/project-types";

export type ServiceIcon =
  | "smartphone"
  | "palette"
  | "globe"
  | "boxes"
  | "database"
  | "brain"
  | "workflow"
  | "cloud";

export type Service = {
  title: string;
  description: string;
  icon: ServiceIcon;
  projectType: ProjectType;
};

export const services: Service[] = [
  {
    title: "Android & iOS App Development",
    description:
      "Native and cross-platform mobile apps built with Flutter, Kotlin, and Swift for scale and speed.",
    icon: "smartphone",
    projectType: "Android & iOS App",
  },
  {
    title: "Website & Next.js Development",
    description:
      "High-performance marketing sites, dashboards, and web apps built on Next.js and React.",
    icon: "globe",
    projectType: "Website / Web App",
  },
  {
    title: "Custom Software & SaaS Products",
    description:
      "From MVP to enterprise-grade SaaS platforms, engineered for reliability and growth.",
    icon: "boxes",
    projectType: "Custom Software / SaaS",
  },
  {
    title: "ERP & CRM Solutions",
    description:
      "Tailored ERP and CRM systems that streamline operations and customer relationships.",
    icon: "database",
    projectType: "ERP / CRM",
  },
  {
    title: "AI Solutions & Automation",
    description:
      "Practical AI integrations and workflow automation that save hours of manual work.",
    icon: "brain",
    projectType: "AI Solutions & Automation",
  },
  {
    title: "API Development & Integration",
    description:
      "Secure, well-documented APIs that connect your product to the tools your business relies on.",
    icon: "workflow",
    projectType: "Custom Software / SaaS",
  },
  {
    title: "Cloud Solutions & DevOps",
    description:
      "Cloud architecture, CI/CD, and infrastructure on Firebase, Vercel, and major cloud providers.",
    icon: "cloud",
    projectType: "Other",
  },
  {
    title: "UI/UX Design",
    description:
      "Product design that balances premium visual polish with measurable conversion outcomes.",
    icon: "palette",
    projectType: "Other",
  },
];

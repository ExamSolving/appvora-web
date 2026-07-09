export const projectTypes = [
  "Website / Web App",
  "Android & iOS App",
  "Custom Software / SaaS",
  "ERP / CRM",
  "AI Solutions & Automation",
  "Other",
] as const;

export type ProjectType = (typeof projectTypes)[number];

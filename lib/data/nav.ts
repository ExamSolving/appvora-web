export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Training", href: "#training" },
  { label: "Software Services", href: "#software-services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Success Stories", href: "#testimonials" },
  { label: "Contact", href: "#contact-cta" },
];

export const footerLinkGroups: { title: string; links: NavLink[] }[] = [
  {
    title: "Training Institute",
    links: [
      { label: "Flutter Development", href: "#training" },
      { label: "Full Stack Development", href: "#training" },
      { label: "AI & Machine Learning", href: "#training" },
      { label: "UI/UX Design", href: "#training" },
      { label: "DCA, ADCA & Tally", href: "#foundational-courses" },
      { label: "Placement Assistance", href: "#training" },
    ],
  },
  {
    title: "Software Services",
    links: [
      { label: "Web & Next.js Development", href: "#software-services" },
      { label: "Android & iOS Apps", href: "#software-services" },
      { label: "SaaS Product Development", href: "#software-services" },
      { label: "ERP & CRM Solutions", href: "#software-services" },
      { label: "AI Solutions & Automation", href: "#software-services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Why Appvora", href: "#why-us" },
      { label: "Our Projects", href: "#projects" },
      { label: "Our Process", href: "#process" },
      { label: "Success Stories", href: "#testimonials" },
      { label: "Book Free Consultation", href: "#contact-cta" },
    ],
  },
];

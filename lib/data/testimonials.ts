export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  type: "student" | "client";
};

export const testimonials: Testimonial[] = [
  {
    name: "Ananya Sharma",
    role: "Flutter Developer at a Bengaluru startup",
    quote:
      "The Flutter program at Appvora took me from zero to shipping my first client app in three months. The live industry projects made all the difference in interviews.",
    type: "student",
  },
  {
    name: "Rohit Verma",
    role: "Full Stack Development Graduate",
    quote:
      "Mentors here don't just teach syntax, they teach how real products get built. Placement support helped me land my first developer role within weeks of finishing the course.",
    type: "student",
  },
  {
    name: "Priya Nair",
    role: "Founder, a D2C retail brand",
    quote:
      "Appvora built our e-commerce platform end-to-end and it has held up beautifully under real traffic. Communication throughout the project was clear and consistent.",
    type: "client",
  },
  {
    name: "Karthik Iyer",
    role: "CTO, a fintech startup",
    quote:
      "We brought Appvora in to build our core API layer and admin dashboard. Their engineering discipline and code quality matched what we'd expect from an in-house senior team.",
    type: "client",
  },
  {
    name: "Sneha Patil",
    role: "UI/UX Design Graduate",
    quote:
      "The design course balanced theory with real client-style briefs. I built a portfolio during the course that got me interviews before I'd even graduated.",
    type: "student",
  },
  {
    name: "Vikram Desai",
    role: "Operations Head, a logistics enterprise",
    quote:
      "Our custom ERP system replaced three separate spreadsheet workflows. Appvora's team understood our operations well enough to suggest improvements we hadn't thought of.",
    type: "client",
  },
];

export type FoundationalCourseIcon =
  | "monitor"
  | "file-badge"
  | "award"
  | "calculator"
  | "rupee"
  | "file-text"
  | "keyboard"
  | "clipboard-list";

export type FoundationalCourse = {
  title: string;
  description: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  icon: FoundationalCourseIcon;
};

export const foundationalCourses: FoundationalCourse[] = [
  {
    title: "Basic Computer Course (CCC)",
    description:
      "Computer fundamentals, internet, and digital literacy for absolute beginners.",
    duration: "1.5 Months",
    level: "Beginner",
    icon: "monitor",
  },
  {
    title: "DCA — Diploma in Computer Applications",
    description:
      "A well-rounded diploma covering office tools, internet, and basic programming concepts.",
    duration: "6 Months",
    level: "Beginner",
    icon: "file-badge",
  },
  {
    title: "ADCA — Advanced DCA",
    description:
      "Builds on DCA with advanced office automation, accounting basics, and web fundamentals.",
    duration: "1 Year",
    level: "Intermediate",
    icon: "award",
  },
  {
    title: "Tally Prime with GST",
    description:
      "Practical accounting on Tally Prime, including GST billing, returns, and inventory.",
    duration: "2 Months",
    level: "Beginner",
    icon: "calculator",
  },
  {
    title: "Financial Accounting",
    description:
      "Core bookkeeping and accounting principles for small business and office roles.",
    duration: "2 Months",
    level: "Beginner",
    icon: "rupee",
  },
  {
    title: "MS Office (Word, Excel, PowerPoint)",
    description:
      "Job-ready proficiency in the office suite used across every industry.",
    duration: "1.5 Months",
    level: "Beginner",
    icon: "file-text",
  },
  {
    title: "English & Hindi Typing",
    description:
      "Speed and accuracy training for government and private-sector typing tests.",
    duration: "2 Months",
    level: "Beginner",
    icon: "keyboard",
  },
  {
    title: "Data Entry Operator (DEO)",
    description:
      "Data entry, spreadsheet handling, and office software skills for entry-level office jobs.",
    duration: "2 Months",
    level: "Beginner",
    icon: "clipboard-list",
  },
];

export type CourseIcon =
  | "smartphone"
  | "android"
  | "globe"
  | "atom"
  | "layers"
  | "stack"
  | "brain"
  | "pen-tool";

export type Course = {
  title: string;
  description: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  icon: CourseIcon;
};

export const courses: Course[] = [
  {
    title: "Flutter Development",
    description:
      "Build beautiful, natively-compiled apps for Android and iOS from a single Dart codebase.",
    duration: "3 Months",
    level: "Beginner",
    icon: "smartphone",
  },
  {
    title: "Android Development",
    description:
      "Native Android development with Kotlin, Jetpack libraries, and modern app architecture.",
    duration: "3 Months",
    level: "Intermediate",
    icon: "android",
  },
  {
    title: "React.js & Next.js",
    description:
      "Master component-driven UI with React, then ship production apps with the Next.js App Router.",
    duration: "3 Months",
    level: "Intermediate",
    icon: "atom",
  },
  {
    title: "Full Stack Development",
    description:
      "End-to-end web development covering frontend, backend, databases, and deployment.",
    duration: "6 Months",
    level: "Advanced",
    icon: "layers",
  },
  {
    title: "Java & DSA",
    description:
      "Strong programming fundamentals with Java and Data Structures & Algorithms for interviews.",
    duration: "4 Months",
    level: "Beginner",
    icon: "stack",
  },
  {
    title: "AI & Machine Learning",
    description:
      "Python-based ML fundamentals, model building, and applied AI project work.",
    duration: "4 Months",
    level: "Advanced",
    icon: "brain",
  },
  {
    title: "UI/UX Design",
    description:
      "Design systems, prototyping, and user research for digital products that convert.",
    duration: "2 Months",
    level: "Beginner",
    icon: "pen-tool",
  },
  {
    title: "Firebase Development",
    description:
      "Auth, Firestore, Storage, and Cloud Functions to power modern serverless apps.",
    duration: "1 Month",
    level: "Intermediate",
    icon: "globe",
  },
];

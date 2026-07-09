export type Stat = {
  value: number;
  suffix: string;
  label: string;
};

export const stats: Stat[] = [
  { value: 2500, suffix: "+", label: "Students Trained" },
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 92, suffix: "%", label: "Placement Rate" },
  { value: 40, suffix: "+", label: "Corporate & Startup Clients" },
];

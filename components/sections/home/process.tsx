import {
  Compass,
  PenTool,
  Code2,
  Rocket,
  LifeBuoy,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";

const steps = [
  {
    icon: Compass,
    title: "Discover",
    description: "Understanding your goals, users, and technical constraints.",
  },
  {
    icon: PenTool,
    title: "Design",
    description: "Wireframes and UI systems built for clarity and conversion.",
  },
  {
    icon: Code2,
    title: "Develop",
    description: "Clean, scalable engineering with regular progress check-ins.",
  },
  {
    icon: Rocket,
    title: "Deploy",
    description: "Production rollout with performance and security in mind.",
  },
  {
    icon: LifeBuoy,
    title: "Support",
    description: "Ongoing maintenance, monitoring, and feature iteration.",
  },
];

export function Process() {
  return (
    <section id="process" className="scroll-mt-16 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="How we deliver"
          title="A disciplined process behind every project"
          description="The same process that keeps our software engagements predictable also shapes how we run training cohorts and live projects."
          className="mb-16"
        />

        <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div className="absolute inset-x-0 top-6 hidden h-px bg-border lg:block" />
          {steps.map((step, index) => (
            <div key={step.title} className="relative flex flex-col items-start gap-3">
              <div className="relative z-10 flex size-12 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-sm">
                <step.icon className="size-5" />
              </div>
              <span className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                Step {index + 1}
              </span>
              <h3 className="font-heading text-lg font-semibold">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

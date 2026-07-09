import {
  Award,
  Handshake,
  ShieldCheck,
  Sparkles,
  Timer,
  Users,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";

const reasons = [
  {
    icon: Users,
    title: "Mentors who also ship software",
    description:
      "Our trainers are practicing engineers, so course content reflects how teams actually build products today.",
  },
  {
    icon: ShieldCheck,
    title: "Engineering discipline, applied twice",
    description:
      "The same code quality bar we hold for client projects is what students are trained to meet.",
  },
  {
    icon: Timer,
    title: "Predictable timelines",
    description:
      "Clear milestones for both training cohorts and software delivery, communicated up front.",
  },
  {
    icon: Award,
    title: "Outcomes we track",
    description:
      "Placement rates and project delivery metrics are things we measure, not just claim.",
  },
  {
    icon: Handshake,
    title: "Long-term relationships",
    description:
      "Alumni support after placement, and client support long after go-live.",
  },
  {
    icon: Sparkles,
    title: "Premium by default",
    description:
      "From course material to production code, nothing ships at 'good enough'.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="scroll-mt-16 border-t border-border py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Why Appvora"
          title="One team, held to one premium standard"
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex flex-col gap-3">
              <div className="flex size-11 items-center justify-center rounded-xl bg-muted text-foreground">
                <reason.icon className="size-5" />
              </div>
              <h3 className="font-heading text-lg font-semibold">{reason.title}</h3>
              <p className="text-sm text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

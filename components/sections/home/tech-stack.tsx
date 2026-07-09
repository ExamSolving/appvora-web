import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Marquee } from "@/components/shared/marquee";
import { TechBadge } from "@/components/shared/tech-badge";
import { techStack } from "@/lib/data/tech-stack";

export function TechStack() {
  return (
    <section className="border-t border-border bg-muted/30 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Technologies"
          title="What we teach is what we build with"
          description="A single, current technology stack across training and client delivery."
          className="mb-14"
        />
      </Container>

      <Marquee>
        {techStack.map((tech) => (
          <TechBadge key={tech} label={tech} />
        ))}
      </Marquee>
    </section>
  );
}

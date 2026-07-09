import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { projects } from "@/lib/data/projects";

export function ProjectsShowcase() {
  return (
    <section id="projects" className="scroll-mt-16 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Our Work"
          title="Live products we've built and shipped"
          description="A look at real apps in production, built end-to-end by our software team — not concepts, live on the Play Store today."
          className="mb-14"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const visibleTech = project.tech.slice(0, 5);
            const extraTech = project.tech.length - visibleTech.length;

            return (
              <Card
                key={project.name}
                className="flex flex-col transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <CardHeader className="gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-software text-lg font-extrabold text-white">
                      {project.name.charAt(0)}
                    </div>
                    <Badge variant="outline">{project.platform}</Badge>
                  </div>
                  <CardTitle className="text-base">{project.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col gap-4">
                  <p className="line-clamp-4 text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {visibleTech.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                    {extraTech > 0 && <Badge variant="secondary">+{extraTech} more</Badge>}
                  </div>
                </CardContent>
                <CardFooter className="border-none bg-transparent pt-0">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full gap-2 border-brand-software/30 hover:bg-brand-software/10"
                    asChild
                  >
                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                      View Live
                      <ExternalLink className="size-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

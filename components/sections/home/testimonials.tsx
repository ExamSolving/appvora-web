import { Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { testimonials } from "@/lib/data/testimonials";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-16 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Success stories"
          title="From student placements to client outcomes"
          description="A sample of the people we've trained and the businesses we've built software for."
          className="mb-14"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="p-2">
              <CardContent className="flex flex-col gap-4 pt-2">
                <div className="flex items-center justify-between">
                  <Quote className="size-6 text-muted-foreground/40" />
                  <Badge
                    variant={testimonial.type === "student" ? "secondary" : "outline"}
                    className={
                      testimonial.type === "student"
                        ? "bg-brand-training/15 text-brand-training-foreground"
                        : "border-brand-software/30 text-brand-software"
                    }
                  >
                    {testimonial.type === "student" ? "Student" : "Client"}
                  </Badge>
                </div>
                <p className="text-sm text-foreground/90">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-auto flex items-center gap-3 pt-2">
                  <Avatar>
                    <AvatarFallback>{initials(testimonial.name)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-semibold">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

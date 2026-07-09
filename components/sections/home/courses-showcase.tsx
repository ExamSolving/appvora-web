import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { courseIconMap } from "@/components/shared/icon-map";
import { courses } from "@/lib/data/courses";
import { EnrollDialog } from "@/components/enrollment/enroll-dialog";

export function CoursesShowcase() {
  return (
    <section id="training" className="scroll-mt-16 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Computer Training Institute"
          title="Training programs built around real careers"
          description="Structured curriculum, live industry projects, and placement assistance across the most in-demand technology tracks."
          className="mb-14"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => {
            const Icon = courseIconMap[course.icon];
            return (
              <Card
                key={course.title}
                className="flex flex-col transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <CardHeader className="gap-3">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-brand-training/15 text-brand-training-foreground">
                    <Icon className="size-5" />
                  </div>
                  <CardTitle className="text-base">{course.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col gap-4">
                  <p className="text-sm text-muted-foreground">
                    {course.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{course.duration}</Badge>
                    <Badge variant="secondary">{course.level}</Badge>
                  </div>
                </CardContent>
                <CardFooter className="border-none bg-transparent pt-0">
                  <EnrollDialog
                    courseName={course.title}
                    triggerLabel="Enroll Now"
                    variant="outline"
                    size="sm"
                    triggerClassName="w-full border-brand-training/30 hover:bg-brand-training/10"
                  />
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

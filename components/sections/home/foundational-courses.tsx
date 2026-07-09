import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { foundationalCourseIconMap } from "@/components/shared/icon-map";
import { foundationalCourses } from "@/lib/data/foundational-courses";
import { EnrollDialog } from "@/components/enrollment/enroll-dialog";

export function FoundationalCourses() {
  return (
    <section
      id="foundational-courses"
      className="scroll-mt-16 border-t border-border py-24 sm:py-32"
    >
      <Container>
        <SectionHeading
          eyebrow="Computer Institute Courses"
          title="Practical courses for every learner, every town"
          description="DCA, ADCA, Tally, accounting, and office skills — the foundational courses that build careers, city or small town."
          className="mb-14"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {foundationalCourses.map((course) => {
            const Icon = foundationalCourseIconMap[course.icon];
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

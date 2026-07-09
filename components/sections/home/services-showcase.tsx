import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { serviceIconMap } from "@/components/shared/icon-map";
import { services } from "@/lib/data/services";
import { RequestQuoteDialog } from "@/components/enrollment/request-quote-dialog";

export function ServicesShowcase() {
  return (
    <section
      id="software-services"
      className="scroll-mt-16 border-t border-border bg-muted/30 py-24 sm:py-32"
    >
      <Container>
        <SectionHeading
          eyebrow="Software Development Services"
          title="Software built for real businesses"
          description="From MVPs to enterprise platforms, we design, build, and support software that holds up under real-world usage."
          className="mb-14"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = serviceIconMap[service.icon];
            return (
              <Card
                key={service.title}
                className="flex flex-col bg-card transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <CardHeader className="gap-3">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-brand-software/15 text-brand-software">
                    <Icon className="size-5" />
                  </div>
                  <CardTitle className="text-base">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
                <CardFooter className="border-none bg-transparent pt-0">
                  <RequestQuoteDialog
                    projectType={service.projectType}
                    triggerLabel="Request Quote"
                    variant="outline"
                    size="sm"
                    triggerClassName="w-full border-brand-software/30 hover:bg-brand-software/10"
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

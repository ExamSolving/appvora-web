import { Container } from "@/components/layout/container";
import { EnrollDialog } from "@/components/enrollment/enroll-dialog";
import { RequestQuoteDialog } from "@/components/enrollment/request-quote-dialog";

export function CtaBand() {
  return (
    <section id="contact-cta" className="scroll-mt-16 py-24 sm:py-32">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-brand-training/10 via-card to-brand-software/10 px-6 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute -top-24 -left-24 size-72 rounded-full bg-brand-training/20 blur-[100px]" />
          <div className="pointer-events-none absolute -right-24 -bottom-24 size-72 rounded-full bg-brand-software/20 blur-[100px]" />

          <div className="relative flex flex-col items-center gap-6">
            <h2 className="font-heading max-w-2xl text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              Ready to start learning, or ready to start building?
            </h2>
            <p className="max-w-xl text-muted-foreground sm:text-lg">
              Enroll in a training program to launch your career, or book a
              free consultation to scope your next software project.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <EnrollDialog
                triggerLabel="Enroll Now"
                size="lg"
                triggerClassName="h-11 rounded-full bg-gradient-training px-6 text-base text-brand-training-foreground hover:opacity-90"
              />
              <RequestQuoteDialog
                triggerLabel="Book Free Consultation"
                variant="outline"
                size="lg"
                triggerClassName="h-11 rounded-full px-6 text-base"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

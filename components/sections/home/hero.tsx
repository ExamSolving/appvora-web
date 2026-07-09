import Link from "next/link";
import { ArrowRight, Award, CheckCircle2, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-32 -right-32 size-96 rounded-full bg-brand-software/25 blur-[100px]" />
      <div className="pointer-events-none absolute top-40 -left-32 size-96 rounded-full bg-brand-training/25 blur-[100px]" />

      <Container className="relative grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-wide text-muted-foreground uppercase shadow-sm">
            Computer Training Institute &amp; Software Development Company
          </span>

          <h1 className="font-heading text-4xl leading-[1.1] font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-training bg-clip-text text-transparent">
              Future-ready careers.
            </span>
            <br />
            <span className="bg-gradient-software bg-clip-text text-transparent">
              Production-ready software.
            </span>
          </h1>

          <p className="max-w-xl text-lg text-muted-foreground text-balance">
            Appvora Technologies trains students for real careers in tech and
            builds real software for real businesses — one experienced team,
            two premium outcomes.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-11 gap-2 rounded-full bg-gradient-training px-6 text-base text-brand-training-foreground hover:opacity-90"
              asChild
            >
              <Link href="#training">
                <GraduationCap className="size-4" />
                Explore Training Programs
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-11 gap-2 rounded-full px-6 text-base"
              asChild
            >
              <Link href="#software-services">
                Discuss Your Project
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="size-4 text-brand-training" />
              2,500+ students trained
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="size-4 text-brand-software" />
              150+ projects delivered
            </span>
          </div>
        </div>

        <div className="relative hidden h-[420px] lg:block animate-in fade-in slide-in-from-bottom-6 duration-700">
          <div className="absolute top-6 right-4 w-80 rounded-2xl border border-border bg-card p-5 shadow-xl ring-1 ring-foreground/5">
            <div className="mb-4 flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-destructive/60" />
              <span className="size-2.5 rounded-full bg-brand-training/70" />
              <span className="size-2.5 rounded-full bg-emerald-500/60" />
              <span className="ml-2 text-xs font-medium text-muted-foreground">
                app/page.tsx
              </span>
            </div>
            <div className="space-y-2 font-mono text-xs text-muted-foreground">
              <p><span className="text-brand-software">export default function</span> Home() {"{"}</p>
              <p className="pl-4"><span className="text-brand-software">return</span> &lt;Hero /&gt;</p>
              <p>{"}"}</p>
            </div>
          </div>

          <div className="absolute bottom-6 left-0 w-72 rounded-2xl border border-border bg-card p-5 shadow-xl ring-1 ring-foreground/5">
            <div className="mb-3 flex items-center justify-between">
              <Award className="size-6 text-brand-training" />
              <span className="rounded-full bg-brand-training/15 px-2.5 py-0.5 text-xs font-semibold text-brand-training-foreground">
                Certified
              </span>
            </div>
            <p className="font-heading text-sm font-semibold">
              Full Stack Development
            </p>
            <p className="text-xs text-muted-foreground">
              Certificate of Completion
            </p>
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted">
              <div className="h-full w-[92%] rounded-full bg-gradient-training" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

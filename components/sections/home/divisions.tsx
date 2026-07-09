import Link from "next/link";
import { ArrowRight, Briefcase, GraduationCap, Rocket, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";

export function Divisions() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Two divisions, one standard of excellence"
          title="Everything you need to learn tech, or ship it"
          description="Whether you're starting a career in technology or scaling a business with software, Appvora brings the same premium standard to both."
          className="mb-14"
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Card className="group/division relative overflow-hidden p-2 ring-brand-training/20 transition-shadow hover:shadow-xl">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-training" />
            <div className="flex flex-col gap-6 p-6 sm:p-8">
              <div className="flex size-12 items-center justify-center rounded-xl bg-brand-training/15 text-brand-training-foreground">
                <GraduationCap className="size-6" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-heading text-2xl font-bold">
                  Computer Training Institute
                </h3>
                <p className="text-muted-foreground">
                  Career-focused IT training in Flutter, Web Development,
                  React, Next.js, Java, Python, AI &amp; Machine Learning and
                  more — with mentorship, live projects, and placement
                  assistance.
                </p>
              </div>
              <ul className="flex flex-col gap-2.5 text-sm">
                {[
                  "Industry mentors and live client-style projects",
                  "Interview preparation and placement assistance",
                  "Internship programs and corporate training",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Users className="mt-0.5 size-4 shrink-0 text-brand-training" />
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                className="mt-2 w-fit gap-2 rounded-full bg-gradient-training text-brand-training-foreground hover:opacity-90"
                asChild
              >
                <Link href="#training">
                  Explore Training Programs
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </Card>

          <Card className="group/division relative overflow-hidden p-2 ring-brand-software/20 transition-shadow hover:shadow-xl">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-software" />
            <div className="flex flex-col gap-6 p-6 sm:p-8">
              <div className="flex size-12 items-center justify-center rounded-xl bg-brand-software/15 text-brand-software">
                <Rocket className="size-6" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-heading text-2xl font-bold">
                  Software Development Services
                </h3>
                <p className="text-muted-foreground">
                  Premium web, mobile, and AI software for startups, SMEs, and
                  enterprises — from custom builds to SaaS products, ERP/CRM
                  systems, and cloud infrastructure.
                </p>
              </div>
              <ul className="flex flex-col gap-2.5 text-sm">
                {[
                  "Senior engineers, not a rotating freelancer pool",
                  "Transparent process from discovery to deployment",
                  "Ongoing maintenance and support after launch",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Briefcase className="mt-0.5 size-4 shrink-0 text-brand-software" />
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                className="mt-2 w-fit gap-2 rounded-full border-brand-software/30 hover:bg-brand-software/10"
                asChild
              >
                <Link href="#software-services">
                  Explore Software Services
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}

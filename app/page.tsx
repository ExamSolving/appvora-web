import { Hero } from "@/components/sections/home/hero";
import { Stats } from "@/components/sections/home/stats";
import { Divisions } from "@/components/sections/home/divisions";
import { CoursesShowcase } from "@/components/sections/home/courses-showcase";
import { FoundationalCourses } from "@/components/sections/home/foundational-courses";
import { ServicesShowcase } from "@/components/sections/home/services-showcase";
import { ProjectsShowcase } from "@/components/sections/home/projects-showcase";
import { Process } from "@/components/sections/home/process";
import { WhyChooseUs } from "@/components/sections/home/why-choose-us";
import { TechStack } from "@/components/sections/home/tech-stack";
import { Testimonials } from "@/components/sections/home/testimonials";
import { CtaBand } from "@/components/sections/home/cta-band";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Divisions />
      <CoursesShowcase />
      <FoundationalCourses />
      <ServicesShowcase />
      <ProjectsShowcase />
      <Process />
      <WhyChooseUs />
      <TechStack />
      <Testimonials />
      <CtaBand />
    </>
  );
}

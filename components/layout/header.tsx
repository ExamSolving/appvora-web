"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/layout/logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { MobileNav } from "@/components/layout/mobile-nav";
import { EnrollDialog } from "@/components/enrollment/enroll-dialog";
import { RequestQuoteDialog } from "@/components/enrollment/request-quote-dialog";
import { navLinks } from "@/lib/data/nav";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-colors",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md supports-backdrop-filter:bg-background/60"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Button key={link.href} variant="ghost" size="sm" asChild>
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="hidden items-center gap-2 md:flex">
            <RequestQuoteDialog
              triggerLabel="Book Free Consultation"
              variant="outline"
              size="sm"
            />
            <EnrollDialog
              triggerLabel="Enroll Now"
              size="sm"
              triggerClassName="bg-gradient-training text-brand-training-foreground hover:opacity-90"
            />
          </div>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/lib/data/nav";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Open menu" className="lg:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-xs">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>
            Explore Appvora Technologies training and software services.
          </SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col gap-1 px-4" aria-label="Mobile">
          {navLinks.map((link) => (
            <SheetClose asChild key={link.href}>
              <Link
                href={link.href}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
              >
                {link.label}
              </Link>
            </SheetClose>
          ))}
        </nav>
        <div className="mt-auto flex flex-col gap-2 p-4">
          <SheetClose asChild>
            <Button variant="outline" asChild>
              <Link href="#contact-cta">Book Free Consultation</Link>
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button
              className="bg-gradient-training text-brand-training-foreground hover:opacity-90"
              asChild
            >
              <Link href="#contact-cta">Enroll Now</Link>
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}

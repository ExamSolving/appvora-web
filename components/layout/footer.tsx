import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Container } from "@/components/layout/container";
import { Logo } from "@/components/layout/logo";
import { WhatsappIcon } from "@/components/shared/social-icons";
import { footerLinkGroups } from "@/lib/data/nav";
import { siteConfig } from "@/lib/seo/site-config";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[2fr_3fr_2fr]">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="max-w-xs text-sm text-muted-foreground">
              A premium Computer Training Institute and Software Development
              company, helping students launch careers and businesses ship
              great software.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="size-4" />
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-foreground">
                {siteConfig.contact.email}
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="size-4" />
              <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-foreground">
                {siteConfig.contact.phone}
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <WhatsappIcon className="size-4" />
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerLinkGroups.map((group) => (
              <div key={group.title} className="flex flex-col gap-3">
                <h3 className="font-heading text-sm font-semibold text-foreground">
                  {group.title}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-sm font-semibold text-foreground">
              Stay in the loop
            </h3>
            <p className="text-sm text-muted-foreground">
              Course launches, placement drives, and case studies — no spam.
            </p>
            <div className="flex gap-2">
              <Input type="email" placeholder="you@email.com" aria-label="Email address" />
              <Button variant="secondary">Subscribe</Button>
            </div>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

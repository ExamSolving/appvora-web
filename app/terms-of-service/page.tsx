import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/lib/seo/site-config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern use of the Appvora Technologies website, training programs, and software development services.",
  alternates: { canonical: "/terms-of-service" },
};

const EFFECTIVE_DATE = "July 8, 2026";

export default function TermsOfServicePage() {
  return (
    <div className="py-16 sm:py-24">
      <Container>
        <div className="prose-legal">
          <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-2 mb-10 text-sm text-muted-foreground">
            Effective date: {EFFECTIVE_DATE}
          </p>

          <p>
            These Terms of Service (&quot;Terms&quot;) govern your use of{" "}
            <strong>{siteConfig.url}</strong> and the training and software
            development services offered by {siteConfig.name}{" "}
            (&quot;Appvora&quot;, &quot;we&quot;, &quot;us&quot;). By using
            our website or enrolling in a program or engaging our services,
            you agree to these Terms.
          </p>

          <h2>1. Our Services</h2>
          <p>
            Appvora operates two divisions: a Computer Training Institute
            offering IT training programs, and a Software Development
            practice offering custom web, mobile, and AI software services
            for startups, SMEs, and enterprises.
          </p>

          <h2>2. Training Program Enrollment</h2>
          <ul>
            <li>
              Submitting an enrollment form is an expression of interest, not
              a confirmed seat. Enrollment is confirmed once our admissions
              team contacts you and any applicable fees are received.
            </li>
            <li>
              Course fees, batch schedules, and duration are communicated at
              the time of admission and may vary by cohort.
            </li>
            <li>
              Refund and rescheduling requests are handled on a case-by-case
              basis — contact us as soon as possible if your plans change.
            </li>
            <li>
              Certificates of completion are issued at Appvora&apos;s
              discretion, based on attendance and satisfactory completion of
              coursework.
            </li>
            <li>
              Placement assistance is best-effort support (interview
              preparation, referrals, industry connections) and does not
              guarantee a job offer.
            </li>
          </ul>

          <h2>3. Software Development Services</h2>
          <ul>
            <li>
              Submitting a quote request is a non-binding inquiry. Project
              scope, timelines, pricing, and deliverables are agreed in a
              separate proposal or contract before work begins.
            </li>
            <li>
              Unless otherwise agreed in writing, ownership of
              client-specific deliverables (source code, designs) transfers
              to the client upon full payment, as detailed in the applicable
              project agreement.
            </li>
            <li>
              Appvora may retain the right to showcase completed projects in
              its portfolio unless the client requests confidentiality in
              writing.
            </li>
          </ul>

          <h2>4. Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use our website for any unlawful purpose</li>
            <li>
              Submit false, misleading, or fraudulent information through our
              forms
            </li>
            <li>
              Attempt to gain unauthorized access to our systems, admin
              dashboard, or data
            </li>
            <li>Interfere with the normal operation of our website</li>
          </ul>

          <h2>5. Intellectual Property</h2>
          <p>
            All content on this website — including text, graphics, logos,
            and course materials — is the property of Appvora Technologies
            unless otherwise noted, and may not be reproduced without
            permission.
          </p>

          <h2>6. Third-Party Links</h2>
          <p>
            Our website may link to third-party sites (such as our project
            portfolio or social platforms). We are not responsible for the
            content or practices of those sites.
          </p>

          <h2>7. Disclaimer &amp; Limitation of Liability</h2>
          <p>
            Our website and services are provided on an &quot;as is&quot;
            basis. While we strive for accuracy and reliability, Appvora
            makes no warranties regarding uninterrupted or error-free
            service. To the fullest extent permitted by law, Appvora is not
            liable for indirect, incidental, or consequential damages arising
            from use of our website or services.
          </p>

          <h2>8. Governing Law</h2>
          <p>
            These Terms are governed by the laws of India. Any disputes
            arising from these Terms or our services will be subject to the
            exclusive jurisdiction of the applicable courts in India.
          </p>

          <h2>9. Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. Continued use of our
            website or services after changes are posted constitutes
            acceptance of the updated Terms.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            Questions about these Terms can be sent to{" "}
            <a href={`mailto:${siteConfig.contact.email}`}>
              {siteConfig.contact.email}
            </a>{" "}
            or{" "}
            <a href={`tel:${siteConfig.contact.phone}`}>
              {siteConfig.contact.phone}
            </a>
            .
          </p>
        </div>
      </Container>
    </div>
  );
}

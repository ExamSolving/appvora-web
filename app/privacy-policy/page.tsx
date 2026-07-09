import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/lib/seo/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Appvora Technologies collects, uses, and protects your information across our training and software development services.",
  alternates: { canonical: "/privacy-policy" },
};

const EFFECTIVE_DATE = "July 8, 2026";

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container>
        <div className="prose-legal">
          <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 mb-10 text-sm text-muted-foreground">
            Effective date: {EFFECTIVE_DATE}
          </p>

          <p>
            {siteConfig.name} (&quot;Appvora&quot;, &quot;we&quot;,
            &quot;us&quot;, or &quot;our&quot;) operates as both a Computer
            Training Institute and a Software Development company. This
            Privacy Policy explains what information we collect through{" "}
            <strong>{siteConfig.url}</strong>, how we use it, and the choices
            you have.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us, primarily
            through our enrollment and quote request forms:
          </p>
          <ul>
            <li>Full name, phone number, and email address</li>
            <li>
              Course of interest (for training enrollments) or company name,
              project type, budget range, and project details (for quote
              requests)
            </li>
            <li>
              Any additional information you choose to share when contacting
              us via email or WhatsApp
            </li>
          </ul>
          <p>
            We also automatically store a light-weight preference (light or
            dark theme) in your browser&apos;s local storage to remember your
            display setting. This is not used to identify you and is not
            shared with us.
          </p>

          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>To respond to enrollment and consultation requests</li>
            <li>
              To communicate course details, admissions information, project
              scoping, and proposals
            </li>
            <li>To provide training programs and software development services</li>
            <li>
              To send occasional updates about new courses, placement drives,
              or case studies, if you subscribe to our newsletter
            </li>
            <li>To improve our website and services</li>
          </ul>
          <p>We do not sell your personal information to third parties.</p>

          <h2>3. Where Your Information Is Stored</h2>
          <p>
            Form submissions are stored using Google Firebase (Firestore), a
            cloud database service. Access to this data is restricted to
            authorized Appvora staff through an authenticated admin
            dashboard. We take reasonable technical and organizational
            measures to protect your information, but no method of
            electronic storage is 100% secure.
          </p>

          <h2>4. Sharing of Information</h2>
          <p>
            We do not share your personal information with third parties,
            except:
          </p>
          <ul>
            <li>
              With service providers who help us operate our website and
              deliver services (such as Firebase/Google Cloud), under
              obligations consistent with this policy
            </li>
            <li>If required by law, regulation, or legal process</li>
            <li>With your consent</li>
          </ul>

          <h2>5. Your Rights</h2>
          <p>
            You may ask us to access, correct, or delete the personal
            information we hold about you, or to unsubscribe from
            communications, at any time by emailing{" "}
            <a href={`mailto:${siteConfig.contact.email}`}>
              {siteConfig.contact.email}
            </a>
            . We will respond within a reasonable timeframe.
          </p>

          <h2>6. Children&apos;s Privacy</h2>
          <p>
            Our services are intended for students, professionals, and
            businesses. If you are enrolling a minor in a training program,
            we ask that a parent or guardian complete the enrollment on their
            behalf.
          </p>

          <h2>7. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will
            be posted on this page with an updated effective date.
          </p>

          <h2>8. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, contact us at{" "}
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

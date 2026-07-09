import Link from "next/link";
import { WhatsappIcon } from "@/components/shared/social-icons";
import { siteConfig } from "@/lib/seo/site-config";

const message = encodeURIComponent(
  "Hi Appvora Technologies! I'd like to know more."
);

export function WhatsappButton() {
  return (
    <Link
      href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed right-4 bottom-4 z-40 flex size-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 sm:right-6 sm:bottom-6"
    >
      <WhatsappIcon className="size-7" />
    </Link>
  );
}

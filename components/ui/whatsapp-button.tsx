import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

export function WhatsAppButton() {
  if (!siteConfig.contact.whatsappNumber) return null;

  const href = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.contact.whatsappMessage,
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with UPSDE on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-13 w-13 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-colors hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </a>
  );
}

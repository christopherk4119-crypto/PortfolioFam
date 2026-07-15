import type { Metadata } from "next";

import { BackgroundGlow } from "@/components/site/background-glow";
import { SiteHeader } from "@/components/site/site-header";
import { ContactSection } from "@/components/site/contact-section";
import { SiteFooter } from "@/components/site/site-footer";

export const metadata: Metadata = {
  title: "Contact — Get a Free Demo",
  description:
    "Ready to grow your business online? Contact CDigitalStudios for a free demo — no payment until you approve it.",
};

export default function ContactPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-1 flex-col overflow-x-hidden">
      <div className="relative">
        <BackgroundGlow />
        <SiteHeader />
      </div>
      <ContactSection />
      <SiteFooter />
    </div>
  );
}

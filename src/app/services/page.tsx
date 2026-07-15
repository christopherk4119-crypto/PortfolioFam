import type { Metadata } from "next";

import { BackgroundGlow } from "@/components/site/background-glow";
import { SiteHeader } from "@/components/site/site-header";
import { ServicesSection } from "@/components/site/services-section";
import { SiteFooter } from "@/components/site/site-footer";

export const metadata: Metadata = {
  title: "Services — Websites, SEO & Automation",
  description:
    "Custom websites, local SEO and business automation for Alberta businesses. See how CDigitalStudios can grow your business online.",
};

export default function ServicesPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-1 flex-col overflow-x-hidden">
      <div className="relative">
        <BackgroundGlow />
        <SiteHeader />
      </div>
      <ServicesSection />
      <SiteFooter />
    </div>
  );
}

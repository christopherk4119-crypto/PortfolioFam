import type { Metadata } from "next";

import { BackgroundGlow } from "@/components/site/background-glow";
import { SiteHeader } from "@/components/site/site-header";
import { ProcessSection } from "@/components/site/process-section";
import { SiteFooter } from "@/components/site/site-footer";

export const metadata: Metadata = {
  title: "How It Works — Our Process",
  description:
    "From free consultation to going live — see exactly how CDigitalStudios builds your website, step by step, with no payment until you approve the demo.",
};

export default function ProcessPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-1 flex-col overflow-x-hidden">
      <div className="relative">
        <BackgroundGlow />
        <SiteHeader />
      </div>
      <ProcessSection />
      <SiteFooter />
    </div>
  );
}

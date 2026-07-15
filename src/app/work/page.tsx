import type { Metadata } from "next";

import { BackgroundGlow } from "@/components/site/background-glow";
import { SiteHeader } from "@/components/site/site-header";
import { WorkSection } from "@/components/site/work-section";
import { SiteFooter } from "@/components/site/site-footer";

export const metadata: Metadata = {
  title: "Portfolio — Real Websites for Alberta Businesses",
  description:
    "See live websites CDigitalStudios has built for real Calgary and Alberta businesses — LED installation, electrical, auto repair and more.",
};

export default function WorkPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-1 flex-col overflow-x-hidden">
      <div className="relative">
        <BackgroundGlow />
        <SiteHeader />
      </div>
      <WorkSection />
      <SiteFooter />
    </div>
  );
}

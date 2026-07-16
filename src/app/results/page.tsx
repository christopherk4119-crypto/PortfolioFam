import type { Metadata } from "next";

import { BackgroundGlow } from "@/components/site/background-glow";
import { SiteHeader } from "@/components/site/site-header";
import { ReviewsSection } from "@/components/site/reviews-section";
import { SiteFooter } from "@/components/site/site-footer";

export const metadata: Metadata = {
  title: "Results — Real Client Reviews",
  description:
    "See real Google reviews from CDigitalStudios clients — straight from Google Maps, no cherry-picking.",
};

export default function ResultsPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-1 flex-col overflow-x-hidden">
      <div className="relative">
        <BackgroundGlow />
        <SiteHeader />
      </div>
      <ReviewsSection />
      <SiteFooter />
    </div>
  );
}

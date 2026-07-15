import { SiteHeader } from "@/components/site/site-header";
import { HeroSection } from "@/components/site/hero-section";
import { ServicesSection } from "@/components/site/services-section";
import { WorkSection } from "@/components/site/work-section";
import { ContactSection } from "@/components/site/contact-section";
import { SiteFooter } from "@/components/site/site-footer";
import { BackgroundGlow } from "@/components/site/background-glow";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-1 flex-col overflow-x-hidden">
      <div id="top" className="relative">
        <BackgroundGlow />
        <SiteHeader />
        <HeroSection />
      </div>
      <ServicesSection />
      <WorkSection />
      <ContactSection />
      <SiteFooter />
    </div>
  );
}

import Link from "next/link";
import { Check, ChevronRight, Play } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PulseDot } from "@/components/ui/pulse-dot";
import { StatsCard } from "@/components/site/stats-card";
import { TestimonialCard } from "@/components/site/testimonial-card";
import { SHOW_TESTIMONIALS, ctaHref } from "@/lib/site-config";

const trustPoints = [
  "No payment until you approve the demo",
  "Live within days",
  "100% custom — no templates",
];

function HeroSection() {
  return (
    <section className="relative">
      <main className="relative z-10 mx-auto max-w-7xl px-4 pt-16 pb-16 sm:px-6 md:pt-24 md:pb-24 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col justify-center space-y-8 lg:col-span-7 lg:pt-6">
            <div className="animate-fade-in delay-100">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-500/10 px-3.5 py-1.5 backdrop-blur-md transition-colors hover:bg-blue-500/20">
                <PulseDot className="bg-blue-400" />
                <span className="font-ui text-[10px] font-semibold tracking-[0.18em] text-blue-100 uppercase sm:text-xs">
                  Calgary &amp; Alberta&apos;s Digital Growth Partner 🇨🇦
                </span>
              </div>
            </div>

            <h1 className="animate-fade-in delay-200 text-5xl leading-[0.92] font-medium tracking-tighter sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
              We Build.
              <span className="text-gradient-blue"> We Rank.</span> We
              Automate.
            </h1>

            <p className="animate-fade-in delay-300 max-w-xl font-ui text-lg leading-relaxed text-zinc-400">
              Custom websites, local SEO and AI automation for Alberta
              businesses ready to dominate online. Your competitors
              aren&apos;t waiting — neither should you.
            </p>

            <div className="animate-fade-in delay-400 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button asChild className="group">
                <Link href={ctaHref}>
                  Get a Free Demo
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button variant="outline" asChild>
                <a href="#work">
                  <Play className="h-4 w-4 fill-white text-white" />
                  See Our Work
                </a>
              </Button>
            </div>

            <div className="animate-fade-in delay-500 flex flex-col gap-2.5 pt-2 font-ui text-sm text-zinc-300 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2.5">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-2">
                  <Check className="h-4 w-4 shrink-0 text-emerald-400" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5 lg:col-span-5 lg:mt-10">
            <StatsCard />

            {SHOW_TESTIMONIALS && (
              <TestimonialCard
                quote="They rebuilt our platform in eight weeks. Conversion jumped 41% in the first month."
                name="Sofia Reyes"
                role="VP Product, Northwind"
                avatarSrc="https://picsum.photos/seed/lumen-avatar/80/80.jpg"
              />
            )}
          </div>
        </div>
      </main>
    </section>
  );
}

export { HeroSection };

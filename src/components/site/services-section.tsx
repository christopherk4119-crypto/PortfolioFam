import { ArrowRight } from "lucide-react";

import { ServiceCard } from "@/components/site/service-card";
import { services, toolsUsed } from "@/lib/site-config";

const PROFICIENCY = 88;

function ServicesSection() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="animate-fade-in inline-flex flex-col items-center gap-3">
            <span className="font-ui text-xs font-semibold tracking-[0.18em] text-blue-300 uppercase">
              Services
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 font-ui text-xs text-zinc-500">
              {toolsUsed.map((tool, i) => (
                <span key={tool} className="flex items-center gap-2">
                  {tool}
                  {i < toolsUsed.length - 1 && (
                    <span className="text-blue-400/50">•</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          <div className="animate-fade-in delay-100 mt-8">
            <span className="font-ui text-sm font-medium text-zinc-400">
              What I Do
            </span>
            <h2 className="mt-3 text-4xl font-medium tracking-tighter sm:text-5xl">
              Three ways I grow
              <span className="text-gradient-blue"> your business</span>
            </h2>
          </div>

          <p className="animate-fade-in delay-200 mt-6 font-ui text-lg leading-relaxed text-zinc-400">
            From building your online presence to automating your customer
            follow-ups — I handle the digital side so you can focus on what
            you do best. Serving businesses across Alberta and beyond.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="animate-fade-in"
              style={{ animationDelay: `${0.1 * i + 0.3}s` }}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>

        <div className="animate-fade-in delay-600 mt-14 flex flex-col items-center justify-between gap-8 rounded-3xl border border-white/10 card-glass px-8 py-8 sm:flex-row">
          <div className="flex items-center gap-6">
            <span className="text-gradient-blue text-5xl font-bold tracking-tight sm:text-6xl">
              {PROFICIENCY}%
            </span>
            <div className="max-w-xs">
              <p className="font-ui text-sm text-zinc-300">
                Average proficiency across all core disciplines
              </p>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-300"
                  style={{ width: `${PROFICIENCY}%` }}
                />
              </div>
            </div>
          </div>

          <a
            href="#work"
            className="group inline-flex items-center gap-2 font-ui text-sm font-semibold text-blue-300 transition-colors hover:text-blue-200"
          >
            View full portfolio
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

export { ServicesSection };

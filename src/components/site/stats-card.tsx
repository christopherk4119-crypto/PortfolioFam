import { Building2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { PulseDot } from "@/components/ui/pulse-dot";

const stats = [
  { value: "4", suffix: "+", label: "Websites Built" },
  { value: "3", suffix: "", label: "Core Services" },
  { value: "100", suffix: "%", label: "Custom Built" },
  { value: "YYC", suffix: "", label: "Calgary Based" },
];

function StatsCard() {
  return (
    <div className="animate-fade-in delay-500 relative overflow-hidden rounded-3xl border border-white/10 card-glass p-7 shadow-2xl shadow-blue-950/40">
      <div className="pointer-events-none absolute -top-20 -right-16 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-blue-700/15 blur-3xl" />

      <div className="relative z-10">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/30 to-blue-700/20 ring-1 ring-blue-400/30">
            <Building2 className="h-5 w-5 text-blue-300" />
          </div>
          <div>
            <div className="text-base font-semibold tracking-tight text-white">
              By the numbers
            </div>
            <div className="font-ui text-xs text-zinc-400">
              Built for Alberta businesses
            </div>
          </div>
        </div>

        <div className="hairline mb-5 h-px w-full" />

        <div className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group flex cursor-default flex-col items-start transition-transform hover:-translate-y-1"
            >
              <span className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {stat.value}
                <span className="text-blue-400">{stat.suffix}</span>
              </span>
              <span className="mt-1 font-ui text-[11px] font-medium uppercase tracking-wider text-zinc-500">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          <Badge variant="emerald">
            <PulseDot className="bg-emerald-400" />
            BOOKING Q3
          </Badge>
          <Badge variant="blue">LOCAL SEO</Badge>
          <Badge variant="neutral">AI AUTOMATION</Badge>
        </div>
      </div>
    </div>
  );
}

export { StatsCard };

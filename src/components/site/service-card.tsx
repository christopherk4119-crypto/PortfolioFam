import { Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import type { Service } from "@/lib/site-config";

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 card-glass p-7">
      <div className="pointer-events-none absolute -top-16 -right-10 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10 flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/30 to-blue-700/20 text-2xl ring-1 ring-blue-400/30">
            {service.icon}
          </div>
          <Badge variant={service.badgeVariant}>{service.badge}</Badge>
        </div>

        <div>
          <h3 className="text-xl font-semibold tracking-tight text-white">
            {service.title}
          </h3>
          <p className="mt-2 font-ui text-sm leading-relaxed text-zinc-400">
            {service.description}
          </p>
        </div>

        <div className="hairline h-px w-full" />

        <ul className="space-y-2.5">
          {service.points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-2 font-ui text-sm text-zinc-300"
            >
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export { ServiceCard };

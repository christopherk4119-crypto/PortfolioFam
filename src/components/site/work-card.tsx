import Image from "next/image";
import { ArrowUpRight, Clock } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { PulseDot } from "@/components/ui/pulse-dot";
import { cn } from "@/lib/utils";
import type { WorkItem } from "@/lib/site-config";

function WorkCard({ item }: { item: WorkItem }) {
  const isLive = item.status === "Live";
  const Wrapper = item.href ? "a" : "div";
  const wrapperProps = item.href
    ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border p-7 transition-all duration-300",
        item.featured
          ? "border-blue-400/25 card-glass"
          : "border-white/10 card-glass",
        item.href &&
          "hover:-translate-y-1.5 hover:border-blue-400/30 hover:shadow-2xl hover:shadow-blue-950/40",
      )}
    >
      {item.featured && (
        <div className="pointer-events-none absolute -top-16 -right-10 h-48 w-48 rounded-full bg-blue-500/15 blur-3xl" />
      )}

      {item.screenshotSrc ? (
        <Image
          src={item.screenshotSrc}
          alt=""
          aria-hidden="true"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="pointer-events-none absolute inset-0 object-cover object-top opacity-[0.14] transition-opacity duration-300 group-hover:opacity-[0.22]"
        />
      ) : (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-4 -bottom-8 text-[9rem] leading-none opacity-[0.07] transition-opacity duration-300 select-none group-hover:opacity-[0.11]"
        >
          {item.icon}
        </span>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />

      <div className="relative z-10 flex flex-1 flex-col gap-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/30 to-blue-700/20 text-2xl ring-1 ring-blue-400/30">
            {item.icon}
          </div>
          <div className="flex flex-wrap items-center justify-end gap-2">
            {item.featured && <Badge variant="blue">Newest Client</Badge>}
            {isLive ? (
              <Badge variant="emerald">
                <PulseDot className="bg-emerald-400" />
                Live
              </Badge>
            ) : (
              <Badge variant="neutral">
                <Clock className="h-3 w-3" />
                Coming Soon
              </Badge>
            )}
          </div>
        </div>

        <div>
          <span className="font-ui text-xs font-medium tracking-wide text-blue-300 uppercase">
            {item.category}
          </span>
          <h3 className="mt-1 text-xl font-semibold tracking-tight text-white">
            {item.name}
          </h3>
          <p className="mt-2 font-ui text-sm leading-relaxed text-zinc-400">
            {item.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <Badge key={tag} variant="neutral">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="mt-auto pt-2">
          {item.href ? (
            <span className="inline-flex items-center gap-1.5 font-ui text-sm font-semibold text-blue-300 transition-colors group-hover:text-blue-200">
              View Live Site
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          ) : (
            <span className="font-ui text-sm font-medium text-zinc-500">
              Live site coming soon
            </span>
          )}
        </div>
      </div>
    </Wrapper>
  );
}

export { WorkCard };

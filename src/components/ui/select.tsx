import * as React from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

function Select({
  className,
  children,
  ...props
}: React.ComponentProps<"select">) {
  return (
    <div className="relative">
      <select
        data-slot="select"
        style={{ colorScheme: "dark" }}
        className={cn(
          "flex h-11 w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-2 pr-10 font-ui text-sm text-white transition-colors outline-none",
          "focus-visible:border-blue-400/40 focus-visible:bg-blue-500/5 focus-visible:ring-2 focus-visible:ring-blue-400/20",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...props}
      >
        {children}
      </select>
      <ChevronDown className="pointer-events-none absolute top-1/2 right-3.5 h-4 w-4 -translate-y-1/2 text-zinc-500" />
    </div>
  );
}

export { Select };

import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-32 w-full resize-y rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-ui text-sm text-white placeholder:text-zinc-500 transition-colors outline-none",
        "focus-visible:border-blue-400/40 focus-visible:bg-blue-500/5 focus-visible:ring-2 focus-visible:ring-blue-400/20",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };

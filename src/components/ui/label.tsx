import * as React from "react";

import { cn } from "@/lib/utils";

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      data-slot="label"
      className={cn(
        "font-ui text-xs font-medium tracking-wide text-zinc-400 uppercase",
        className,
      )}
      {...props}
    />
  );
}

export { Label };

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-medium tracking-wide font-ui",
  {
    variants: {
      variant: {
        blue: "border-blue-400/25 bg-blue-500/10 text-blue-200",
        emerald: "border-emerald-400/20 bg-emerald-400/10 text-emerald-200",
        amber: "border-amber-400/20 bg-amber-400/10 text-amber-200",
        neutral: "border-white/10 bg-white/5 text-zinc-300",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  },
);

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant, className }))}
      {...props}
    />
  );
}

export { Badge, badgeVariants };

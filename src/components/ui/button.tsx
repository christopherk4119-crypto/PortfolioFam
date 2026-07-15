import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold font-ui transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        default:
          "bg-blue-600 text-white shadow-lg shadow-blue-600/30 hover:scale-[1.02] hover:bg-blue-500 hover:shadow-blue-500/40 active:scale-[0.98]",
        outline:
          "border border-white/10 bg-white/5 text-white backdrop-blur-sm hover:border-blue-400/30 hover:bg-blue-500/10",
        ghost:
          "border border-white/10 bg-white/5 text-white backdrop-blur-md hover:border-blue-400/40 hover:bg-blue-500/10",
        link: "text-blue-300 underline-offset-4 hover:text-blue-200 hover:underline",
      },
      size: {
        default: "px-7 py-3.5",
        sm: "px-4 py-2 text-xs",
        lg: "px-8 py-4 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };

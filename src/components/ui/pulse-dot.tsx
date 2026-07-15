import { cn } from "@/lib/utils";

function PulseDot({ className }: { className?: string }) {
  return (
    <span className="relative flex h-2 w-2">
      <span
        className={cn(
          "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
          className,
        )}
      />
      <span
        className={cn("relative inline-flex h-2 w-2 rounded-full", className)}
      />
    </span>
  );
}

export { PulseDot };

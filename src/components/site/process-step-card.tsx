import type { ProcessStep } from "@/lib/site-config";

function ProcessStepCard({ step }: { step: ProcessStep }) {
  return (
    <div className="relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-white/10 card-glass p-6">
      <div className="pointer-events-none absolute -top-10 -right-6 h-28 w-28 rounded-full bg-blue-500/10 blur-2xl" />
      <span className="text-gradient-blue relative z-10 text-4xl font-bold tracking-tight">
        {step.number}
      </span>
      <div className="relative z-10">
        <h3 className="text-lg font-semibold tracking-tight text-white">
          {step.title}
        </h3>
        <p className="mt-2 font-ui text-sm leading-relaxed text-zinc-400">
          {step.description}
        </p>
      </div>
    </div>
  );
}

export { ProcessStepCard };

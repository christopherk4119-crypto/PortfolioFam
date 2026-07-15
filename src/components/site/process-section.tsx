import { Fragment } from "react";
import { ChevronRight } from "lucide-react";

import { ProcessStepCard } from "@/components/site/process-step-card";
import { processSteps } from "@/lib/site-config";

function ProcessSection() {
  return (
    <section id="process" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="animate-fade-in font-ui text-xs font-semibold tracking-[0.18em] text-blue-300 uppercase">
            How It Works
          </span>
          <h2 className="animate-fade-in delay-100 mt-3 text-4xl font-medium tracking-tighter sm:text-5xl">
            Simple process.
            <span className="text-gradient-blue"> Real results.</span>
          </h2>
          <p className="animate-fade-in delay-200 mt-6 font-ui text-lg leading-relaxed text-zinc-400">
            No complicated contracts or long timelines. Here&apos;s exactly
            what working with me looks like.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-6 lg:flex-row lg:items-stretch">
          {processSteps.map((step, i) => (
            <Fragment key={step.number}>
              <div
                className="animate-fade-in flex-1"
                style={{ animationDelay: `${0.1 * i + 0.3}s` }}
              >
                <ProcessStepCard step={step} />
              </div>
              {i < processSteps.length - 1 && (
                <div className="hidden shrink-0 items-center justify-center lg:flex">
                  <ChevronRight className="h-6 w-6 text-blue-400/40" />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export { ProcessSection };

import { WorkCard } from "@/components/site/work-card";
import { cn } from "@/lib/utils";
import { workItems } from "@/lib/site-config";

function WorkSection() {
  return (
    <section id="work" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="animate-fade-in font-ui text-xs font-semibold tracking-[0.18em] text-blue-300 uppercase">
            My Work
          </span>
          <h2 className="animate-fade-in delay-100 mt-3 text-4xl font-medium tracking-tighter sm:text-5xl">
            Real websites for
            <span className="text-gradient-blue"> real Alberta businesses</span>
          </h2>
          <p className="animate-fade-in delay-200 mt-6 font-ui text-lg leading-relaxed text-zinc-400">
            Every project is designed and built from scratch around the
            business it serves — no templates, no shortcuts.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {workItems.map((item, i) => (
            <div
              key={item.name}
              className={cn(
                "animate-fade-in",
                item.featured && "lg:col-span-2",
              )}
              style={{ animationDelay: `${0.1 * i + 0.3}s` }}
            >
              <WorkCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { WorkSection };

import { ArrowUpRight } from "lucide-react";

import { googleReviewEmbeds } from "@/lib/site-config";

function ReviewsSection() {
  return (
    <section id="results" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="animate-fade-in font-ui text-xs font-semibold tracking-[0.18em] text-blue-300 uppercase">
            Results
          </span>
          <h2 className="animate-fade-in delay-100 mt-3 text-4xl font-medium tracking-tighter sm:text-5xl">
            Real reviews from
            <span className="text-gradient-blue"> real clients</span>
          </h2>
          <p className="animate-fade-in delay-200 mt-6 font-ui text-lg leading-relaxed text-zinc-400">
            Straight from Google — no cherry-picking, no fake quotes.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {googleReviewEmbeds.map((business, i) => (
            <div
              key={business.cid}
              className="animate-fade-in overflow-hidden rounded-3xl border border-white/10 card-glass"
              style={{ animationDelay: `${0.1 * i + 0.3}s` }}
            >
              <iframe
                src={`https://www.google.com/maps?cid=${business.cid}&output=embed`}
                title={`${business.name} on Google Maps`}
                width="100%"
                height="380"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="flex items-center justify-between px-6 py-4">
                <span className="font-ui text-sm font-medium text-zinc-300">
                  {business.name}
                </span>
                <a
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 font-ui text-sm font-semibold text-blue-300 transition-colors hover:text-blue-200"
                >
                  See all reviews
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { ReviewsSection };

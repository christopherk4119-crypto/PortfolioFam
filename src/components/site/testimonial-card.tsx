import { Star } from "lucide-react";

type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
  avatarSrc: string;
};

function TestimonialCard({
  quote,
  name,
  role,
  avatarSrc,
}: TestimonialCardProps) {
  return (
    <div className="animate-fade-in delay-600 relative overflow-hidden rounded-3xl border border-white/10 card-glass p-6">
      <div className="pointer-events-none absolute -top-10 -right-8 h-32 w-32 rounded-full bg-blue-500/15 blur-2xl" />
      <div className="relative z-10 flex gap-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={avatarSrc}
          alt={name}
          className="h-11 w-11 rounded-full object-cover ring-2 ring-blue-400/30"
        />
        <div className="flex-1">
          <div className="mb-1 flex items-center gap-1 text-blue-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-current" />
            ))}
          </div>
          <p className="font-ui text-sm leading-relaxed text-zinc-300">
            &ldquo;{quote}&rdquo;
          </p>
          <p className="mt-2 font-ui text-xs text-zinc-500">
            {name} · {role}
          </p>
        </div>
      </div>
    </div>
  );
}

export { TestimonialCard };

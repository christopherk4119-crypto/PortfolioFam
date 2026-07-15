import { ctaHref } from "@/lib/site-config";

function SiteFooter() {
  return (
    <footer className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="hairline h-px w-full" />
      <div className="flex flex-col items-center justify-between gap-4 py-6 font-ui text-xs text-zinc-500 sm:flex-row">
        <span>© 2026 CDigitalStudios — Calgary, Alberta 🇨🇦</span>
        <div className="flex items-center gap-5">
          <a href="#work" className="transition-colors hover:text-blue-300">
            Work
          </a>
          <a
            href="#services"
            className="transition-colors hover:text-blue-300"
          >
            Services
          </a>
          <a href={ctaHref} className="transition-colors hover:text-blue-300">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export { SiteFooter };

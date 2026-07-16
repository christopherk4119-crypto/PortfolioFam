import Link from "next/link";

import { LogoMark } from "@/components/site/logo-mark";
import { navLinks } from "@/lib/site-config";

function SiteFooter() {
  return (
    <footer className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="hairline h-px w-full" />
      <div className="flex flex-col items-center justify-between gap-4 py-6 font-ui text-xs text-zinc-500 sm:flex-row">
        <span className="flex items-center gap-2">
          <LogoMark size={18} />© 2026 CDigitalStudios — Calgary, Alberta 🇨🇦
        </span>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-blue-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

export { SiteFooter };

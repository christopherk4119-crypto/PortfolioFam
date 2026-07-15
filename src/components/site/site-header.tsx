import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { LogoMark } from "@/components/site/logo-mark";
import { ctaHref, navLinks } from "@/lib/site-config";

function SiteHeader() {
  return (
    <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-4 pt-6 sm:px-6 lg:px-8">
      <Link href="/" className="flex items-center gap-2">
        <LogoMark size={36} />
        <span className="text-lg font-semibold tracking-tight">
          CDigital<span className="text-blue-400">Studios</span>
        </span>
      </Link>

      <nav className="hidden items-center gap-8 font-ui text-base font-medium text-zinc-300 md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="transition-colors hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <Button variant="ghost" size="sm" asChild className="group">
        <Link href={ctaHref}>
          Get a Free Demo
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </Button>
    </header>
  );
}

export { SiteHeader };

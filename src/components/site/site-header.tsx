"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { LogoMark } from "@/components/site/logo-mark";
import { ctaHref, navLinks } from "@/lib/site-config";

function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative z-20 mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setMobileOpen(false)}
        >
          <LogoMark size={36} />
          <span className="text-lg font-semibold tracking-tight">
            CDigital<span className="text-blue-400">Studios</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 font-ui text-base font-medium text-zinc-300 lg:flex">
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

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="group hidden lg:inline-flex"
          >
            <Link href={ctaHref}>
              Get a Free Demo
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="animate-fade-in mt-4 flex flex-col gap-1 rounded-2xl border border-white/10 card-glass p-4 font-ui text-base font-medium text-zinc-300 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-2.5 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={ctaHref}
            onClick={() => setMobileOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white"
          >
            Get a Free Demo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </nav>
      )}
    </header>
  );
}

export { SiteHeader };

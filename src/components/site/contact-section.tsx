import { MapPin, Phone, Mail, Rocket } from "lucide-react";

import { ContactForm } from "@/components/site/contact-form";
import { ContactInfoTile } from "@/components/site/contact-info-tile";
import { mailtoHref, siteConfig, telHref } from "@/lib/site-config";

function ContactSection() {
  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="animate-fade-in font-ui text-xs font-semibold tracking-[0.18em] text-blue-300 uppercase">
            Get In Touch
          </span>
          <h2 className="animate-fade-in delay-100 mt-3 text-4xl font-medium tracking-tighter sm:text-5xl">
            Ready to dominate
            <span className="text-gradient-blue"> your market?</span>
          </h2>
          <p className="animate-fade-in delay-200 mt-6 font-ui text-lg leading-relaxed text-zinc-400">
            Whether you need a new website, better Google rankings or
            systems that run on autopilot — I help businesses across
            Alberta and beyond turn more visitors into customers. Reach out
            and let&apos;s figure out what works best for you.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="animate-fade-in delay-300 space-y-4 lg:col-span-5">
            <ContactInfoTile
              icon={Phone}
              label="Phone"
              value={siteConfig.contactPhoneDisplay}
              href={telHref}
            />
            <ContactInfoTile
              icon={Mail}
              label="Email"
              value={siteConfig.contactEmail}
              href={mailtoHref}
            />
            <ContactInfoTile
              icon={MapPin}
              label="Location"
              value={siteConfig.location}
            />
          </div>

          <div className="animate-fade-in delay-400 relative overflow-hidden rounded-3xl border border-white/10 card-glass p-7 lg:col-span-7 sm:p-9">
            <div className="pointer-events-none absolute -top-20 -right-16 h-56 w-56 rounded-full bg-blue-500/15 blur-3xl" />
            <div className="relative z-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/30 to-blue-700/20 ring-1 ring-blue-400/30">
                  <Rocket className="h-5 w-5 text-blue-300" />
                </div>
                <div className="text-base font-semibold tracking-tight text-white">
                  Start a Project
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { ContactSection };

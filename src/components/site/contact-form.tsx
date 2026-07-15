"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { formspreeEndpoint, mailtoHref, serviceOptions } from "@/lib/site-config";

type Status = "idle" | "submitting" | "success" | "error";

function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 py-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-emerald-400" />
        <h3 className="text-lg font-semibold text-white">Message sent</h3>
        <p className="max-w-xs font-ui text-sm text-zinc-400">
          Thanks for reaching out — I respond within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        type="hidden"
        name="_subject"
        value="New project inquiry — CDigitalStudios website"
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            name="firstName"
            placeholder="John"
            autoComplete="given-name"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            name="lastName"
            placeholder="Smith"
            autoComplete="family-name"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@email.com"
            autoComplete="email"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(587) 000-0000"
            autoComplete="tel"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="businessType">Business Type</Label>
        <Input
          id="businessType"
          name="businessType"
          placeholder="e.g. Roofing, Restaurant, Auto Repair"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="service">What Do You Need?</Label>
        <Select id="service" name="service" defaultValue="" required>
          <option value="" disabled className="bg-[#0b1220] text-zinc-400">
            Select a service...
          </option>
          {serviceOptions.map((option) => (
            <option
              key={option}
              value={option}
              className="bg-[#0b1220] text-white"
            >
              {option}
            </option>
          ))}
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Tell Me About Your Business</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="What does your business do and what are you trying to achieve online?"
          required
        />
      </div>

      {status === "error" && (
        <p className="font-ui text-sm text-red-400">
          Something went wrong sending that — please try again, or email me
          directly at{" "}
          <a href={mailtoHref} className="underline hover:text-red-300">
            christopherb.digital@gmail.com
          </a>
          .
        </p>
      )}

      <Button
        type="submit"
        disabled={status === "submitting"}
        className="group w-full sm:w-auto"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
        <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </Button>

      <p className="font-ui text-xs text-zinc-500">
        I respond within 24 hours.
      </p>
    </form>
  );
}

export { ContactForm };

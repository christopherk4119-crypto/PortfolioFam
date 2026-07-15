"use client";

import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { serviceOptions, siteConfig } from "@/lib/site-config";

function ContactForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const firstName = data.get("firstName");
    const lastName = data.get("lastName");
    const email = data.get("email");
    const phone = data.get("phone");
    const businessType = data.get("businessType");
    const service = data.get("service");
    const message = data.get("message");

    const body = [
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Business type: ${businessType}`,
      `Interested in: ${service}`,
      "",
      `${message}`,
    ].join("\n");

    const mailto = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(
      `New project inquiry from ${firstName} ${lastName}`,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
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
          <option value="" disabled>
            Select a service...
          </option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
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

      <Button type="submit" className="group w-full sm:w-auto">
        Send Message
        <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </Button>

      <p className="font-ui text-xs text-zinc-500">
        I respond within 24 hours.
      </p>
    </form>
  );
}

export { ContactForm };

// No real client testimonials yet — flip this on once quotes are collected.
export const SHOW_TESTIMONIALS = false;

export const siteConfig = {
  name: "CDigitalStudios",
  tagline: "Calgary & Alberta Digital Growth Partner",
  contactEmail: "christopherk4119@gmail.com",
};

export const contactHref = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(
  "Free Demo Request",
)}`;

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
];

export const toolsUsed = [
  "Figma",
  "Framer",
  "Webflow",
  "Tailwind CSS",
  "Adobe CC",
];

export type Service = {
  icon: string;
  badge: string;
  badgeVariant: "blue" | "emerald" | "amber";
  title: string;
  description: string;
  points: string[];
};

export const services: Service[] = [
  {
    icon: "🌐",
    badge: "Most Popular",
    badgeVariant: "blue",
    title: "Custom Websites",
    description:
      "High-converting websites built specifically for your business — not templates. Every site is designed to turn visitors into customers.",
    points: [
      "Mobile optimized and fast loading",
      "Contact and booking forms",
      "Payment integration",
      "Member portals and dashboards",
      "Deployed and live within days",
    ],
  },
  {
    icon: "📈",
    badge: "High ROI",
    badgeVariant: "emerald",
    title: "SEO Optimization",
    description:
      "Get found on Google when local customers search for your service. I optimize your website and online presence to rank higher and bring in more traffic.",
    points: [
      "Local Calgary SEO strategy",
      "Google Business Profile setup",
      "Keyword optimization",
      "Citation building across directories",
      "Monthly performance tracking",
    ],
  },
  {
    icon: "🤖",
    badge: "Save Time",
    badgeVariant: "amber",
    title: "Business Automation",
    description:
      "AI-powered systems that handle the repetitive work for you — following up with leads, asking customers for reviews and reactivating old contacts automatically.",
    points: [
      "Automated lead follow-up",
      "Review request campaigns",
      "Lead reactivation sequences",
      "Appointment reminders",
      "Customer notification systems",
    ],
  },
];

export type WorkItem = {
  icon: string;
  status: "Live" | "Coming Soon";
  category: string;
  name: string;
  description: string;
  tags: string[];
  href: string | null;
  featured?: boolean;
};

export const workItems: WorkItem[] = [
  {
    icon: "🏠",
    status: "Coming Soon",
    category: "Roofing — Lethbridge",
    name: "Sun City Roofing",
    description:
      "Full multi-page website for a Lethbridge roofing company. Services, gallery, free estimate form and shingle comparison section.",
    tags: ["Multi-page", "Lead Gen", "Local SEO"],
    href: null,
  },
  {
    icon: "💡",
    status: "Live",
    category: "LED Installation — Calgary",
    name: "Glow Installations",
    description:
      "Premium website for a Calgary LED lighting and home security company. Gallery, service pages and quote form.",
    tags: ["Gallery", "Multi-page", "Quote System"],
    href: "https://www.suncityroofinglethbridge.net/",
  },
  {
    icon: "⚡",
    status: "Live",
    category: "Electrician — Calgary",
    name: "Restore Electric",
    description:
      "Professional website for a Calgary master electrician. Emergency CTAs, service listings, FAQ section and contact form optimized for local search.",
    tags: ["Emergency CTA", "Local SEO", "Contact Form"],
    href: "https://www.restoreelectric.ca/",
  },
  {
    icon: "🚗",
    status: "Live",
    category: "Auto Repair — Calgary",
    name: "Auto Repair Xperts",
    description:
      "Full website plus subscriber portal with membership plans, benefit tracking, appointment booking, payment integration and admin dashboard.",
    tags: ["Member Portal", "Stripe Payments", "Backend", "AI Automation"],
    href: "https://autorepairxperts.vercel.app/",
  },
  {
    icon: "🔧",
    status: "Live",
    category: "Electrical, Plumbing & Appliance",
    name: "Yaya General Service",
    description:
      "Full-service website for a multi-trade electrical, plumbing and appliance company — complete with a live AI chat assistant that answers customer questions and captures leads instantly, day or night.",
    tags: ["AI Assistant", "Multi-page", "Lead Gen"],
    href: "https://yayageneralservice.com/",
    featured: true,
  },
];

// No real client testimonials yet — flip this on once quotes are collected.
export const SHOW_TESTIMONIALS = false;

export const siteConfig = {
  name: "CDigitalStudios",
  tagline: "Calgary & Alberta Digital Growth Partner",
  contactEmail: "christopherb.digital@gmail.com",
  contactPhone: "587-703-0069",
  contactPhoneDisplay: "(587) 703-0069",
  location: "Alberta, Canada 🇨🇦 — Available Nationwide",
};

// Shared header/footer CTA — a real route so it works from every page, not
// just the homepage where a #contact anchor would exist.
export const ctaHref = "/contact";

export const mailtoHref = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(
  "Free Demo Request",
)}`;

export const telHref = `tel:+1${siteConfig.contactPhone.replace(/-/g, "")}`;

// Formspree endpoint used by the contact form.
export const formspreeEndpoint = "https://formspree.io/f/xykaoaen";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "Results", href: "/results" },
  { label: "Contact", href: "/contact" },
];

export type GoogleReviewEmbed = {
  name: string;
  // Google's numeric place ID (CID), extracted from the business's Maps
  // share URL. Lets us embed the exact listing (map + live star rating)
  // without a Google Maps API key.
  cid: string;
  mapsUrl: string;
};

export const googleReviewEmbeds: GoogleReviewEmbed[] = [
  {
    name: "Restore Electric",
    cid: "9965230480678931577",
    mapsUrl:
      "https://www.google.com/maps/place/Restore+Electric+LTD/@51.138397,-114.1290159,17z/data=!4m8!3m7!1s0x5371672925ccac51:0x8a4b9c52f9c34c79!8m2!3d51.138397!4d-114.126441!9m1!1b1!16s%2Fg%2F11zjvlx1bn",
  },
  {
    name: "Yaya Electrical, Plumbing & Appliance",
    cid: "7836733805385584931",
    mapsUrl:
      "https://www.google.com/maps/place/Yaya+Electrical,+Plumbing+%26+Appliance/@51.1083477,-113.9560472,17z/data=!4m8!3m7!1s0x537163e3a5fbaab1:0x6cc1abe00d4d9123!8m2!3d51.1083444!4d-113.9534723!9m1!1b1!16s%2Fg%2F11zgm5y8t3",
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Free Consultation",
    description:
      "We hop on a quick call to talk about your business, your goals and what you actually need — no pressure, no obligation, just an honest conversation about how I can help.",
  },
  {
    number: "02",
    title: "I Build a Demo",
    description:
      "I build a working demo of your website before you spend a dollar, so you can see exactly what you're getting before you commit to anything.",
  },
  {
    number: "03",
    title: "You Approve It",
    description:
      "You review the demo and request changes — we go back and forth until every detail is exactly right for your business.",
  },
  {
    number: "04",
    title: "We Go Live",
    description:
      "Once you approve it, I deploy everything and hand over the keys. Your business goes live and starts attracting customers online.",
  },
];

export const serviceOptions = [
  "Website",
  "SEO",
  "Automation System",
  "Website + SEO",
  "Website + Automation System",
  "SEO + Automation System",
  "All Three (Website + SEO + Automation)",
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
  // Optional screenshot shown faded in the card background. Drop a file in
  // public/work/ and point this at it — falls back to a watermark of `icon`
  // when unset.
  screenshotSrc?: string;
};

export const workItems: WorkItem[] = [
  {
    icon: "⚡",
    status: "Live",
    category: "Electrician — Calgary",
    name: "Restore Electric",
    description:
      "Professional website for a Calgary master electrician. Emergency CTAs, service listings, FAQ section and contact form optimized for local search.",
    tags: ["Emergency CTA", "Local SEO", "Contact Form"],
    href: "https://www.restoreelectric.ca/",
    screenshotSrc: "/work/restore-electric.webp",
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
    screenshotSrc: "/work/yaya-general-service.jpg",
    featured: true,
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
    screenshotSrc: "/work/glow-installations.jpg",
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
    screenshotSrc: "/work/auto-repair-xperts.webp",
  },
];

import type { MetadataRoute } from "next";

// Canonical host — cdigitalstudios.ca redirects here.
const BASE_URL = "https://www.cdigitalstudios.ca";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}

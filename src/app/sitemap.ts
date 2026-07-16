import type { MetadataRoute } from "next";

// Canonical host — cdigitalstudios.ca redirects here, so the sitemap
// should list the final destination directly rather than a redirect.
const BASE_URL = "https://www.cdigitalstudios.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/work", "/process", "/contact"];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}

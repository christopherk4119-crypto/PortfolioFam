import type { MetadataRoute } from "next";

const BASE_URL = "https://cdigitalstudios.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/work", "/process", "/contact"];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}

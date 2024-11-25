import type { MetadataRoute } from "next";

const routes = ["/", "/about", "brochures", "/courses", "/prices", "/hours"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(route => ({
    url: `https://gfmontiform.it${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  }));
}

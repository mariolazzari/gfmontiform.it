import type { MetadataRoute } from "next";

function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "Googlebot",
        allow: ["/"],
      },
      {
        userAgent: ["Applebot", "Bingbot"],
        allow: ["/"],
      },
    ],
    sitemap: "https://gfmontiform.it/sitemap.xml",
  };
}

export default robots;

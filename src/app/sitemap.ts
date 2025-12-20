import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com";
  const lastMod = new Date();
  const routes = [
    "",
    "/products",
    "/services",
    "/about",
    "/news",
    "/careers",
    "/contact",
  ];
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: lastMod,
    changeFrequency: "weekly",
    priority: path === "" ? 1.0 : 0.7,
  }));
}

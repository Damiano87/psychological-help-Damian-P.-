import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_URL || "https://miejscespotkanzmiana.pl";

  const routes = [
    "",
    "/aboutme",
    "/offer",
    "/offer/konsultacje-psychologiczne",
    "/offer/psychotraumatologia",
    "/offer/terapia-tsr",
    "/offer/warsztaty-szkolenia",
    "/prices",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : route === "/offer" ? 0.9 : 0.8,
  }));
}

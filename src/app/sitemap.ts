import type { MetadataRoute } from "next";
import { fetchStrapi } from "@/lib/strapi";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.matteralifesystems.com";

const STATIC_ROUTES = [
  "",
  "/company",
  "/technology",
  "/platform",
  "/applications",
  "/investors",
  "/research",
  "/research-collaboration",
  "/contact",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticEntries = STATIC_ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
  }));

  let dynamicEntries: MetadataRoute.Sitemap = [];

  try {
    const pages = await fetchStrapi("pages?fields=slug");
    if (Array.isArray(pages)) {
      dynamicEntries = pages
        .map((page: any) => page.attributes?.slug || page.slug)
        .filter((slug: string) => typeof slug === "string" && slug.length > 0)
        .map((slug: string) => ({
          url: `${SITE_URL}/${slug}`,
          lastModified: now,
        }));
    }
  } catch (error) {
    // Ignore; fallback to static routes only.
  }

  return [...staticEntries, ...dynamicEntries];
}

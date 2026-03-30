import type { MetadataRoute } from "next";
import { fetchStrapi } from "@/lib/strapi";

export const dynamic = "force-static";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://matteralifesystems.com";

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

  console.log("[Sitemap] Generating...");

  const staticEntries = STATIC_ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
  }));

  let dynamicEntries: MetadataRoute.Sitemap = [];

  try {
    const pages = await fetchStrapi("pages?fields=slug");
    if (pages && Array.isArray(pages)) {
      dynamicEntries = pages
        .map((page: any) => page.attributes?.slug || page.slug)
        .filter((slug: any) => typeof slug === "string" && slug.length > 0)
        .map((slug: string) => ({
          url: `${SITE_URL}/${slug}`,
          lastModified: now,
        }));
    }
  } catch (error) {
    console.warn("[Sitemap] Strapi fetch failed, using static only.");
  }

  return [...staticEntries, ...dynamicEntries];
}

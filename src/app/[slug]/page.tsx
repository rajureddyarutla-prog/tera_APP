import { fetchStrapi } from "@/lib/strapi";
import DynamicPageClient from "@/components/DynamicPageClient";

export const dynamicParams = false;

export async function generateStaticParams() {
    console.log("[generateStaticParams] Fetching slugs...");
    try {
        const pages = await fetchStrapi('pages?fields[0]=slug');

        let slugs: { slug: string }[] = [];
        if (pages && Array.isArray(pages)) {
            slugs = pages.map((p: any) => ({
                slug: (p.attributes?.slug || p.slug || "").toString()
            })).filter(item => item.slug.length > 0);
        }

        if (slugs.length === 0) {
            console.warn("[generateStaticParams] No pages found in Strapi. Using fallback 'test' slug.");
            return [{ slug: 'test' }];
        }

        console.log(`[generateStaticParams] Found ${slugs.length} dynamic pages.`);
        return slugs;
    } catch (error) {
        console.error("[generateStaticParams] Error:", error);
        return [{ slug: 'test' }];
    }
}

export default async function GenericPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const { slug } = resolvedParams;

    // Fetch initial data on server (for SEO/Build)
    let initialData = null;
    try {
        const pages = await fetchStrapi(`pages?filters[slug][$eq]=${slug}`);
        if (pages && pages.length > 0) {
            initialData = pages[0].attributes || pages[0];
        }
    } catch (err) {
        console.error(`Error fetching initial data for ${slug}:`, err);
    }

    return <DynamicPageClient slug={slug} initialData={initialData} />;
}
import { fetchStrapi } from "@/lib/strapi";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface PageData {
    title: string;
    slug: string;
    hero_title: string;
    hero_description: string;
    sections?: { title: string; desc: string }[];
}

export const dynamicParams = false;

export async function generateStaticParams() {
    try {
        const pages = await fetchStrapi('pages?fields=slug');
        console.log(`[generateStaticParams] Fetched pages:`, JSON.stringify(pages));

        if (!pages || !Array.isArray(pages)) {
            console.warn(`[generateStaticParams] No pages found or pages is not an array`);
            return [];
        }

        return pages.map((page: any) => ({
            slug: page.attributes?.slug || page.slug || "",
        })).filter(p => p.slug !== "");
    } catch (error) {
        console.error(`[generateStaticParams] Error:`, error);
        return [];
    }
}

export default async function GenericPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const { slug } = resolvedParams;

    const pages = await fetchStrapi(`pages?filters[slug][$eq]=${slug}`);

    if (!pages || pages.length === 0) {
        notFound();
    }

    const data: PageData = pages[0].attributes || pages[0];

    return (
        <div style={{ background: "var(--bg-primary)" }}>
            {/* Hero */}
            <section className="section-pad grid-bg" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                <div className="section-container">
                    <div className="tag-pill" style={{ marginBottom: "1.5rem" }}>Page Content</div>
                    <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", maxWidth: "800px", marginBottom: "1.25rem" }}>
                        {data.hero_title || data.title}
                    </h1>
                    <p style={{ color: "var(--text-secondary)", maxWidth: "600px", lineHeight: 1.85, fontSize: "1.125rem" }}>
                        {data.hero_description}
                    </p>
                </div>
            </section>

            {/* Dynamic Sections */}
            {data.sections && data.sections.map((section, idx) => (
                <section key={idx} className="section-pad" style={{ background: idx % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)" }}>
                    <div className="section-container">
                        <div style={{ maxWidth: "800px" }}>
                            <h2 style={{ fontSize: "1.75rem", marginBottom: "1rem", color: "#4FD1C5" }}>{section.title}</h2>
                            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "1rem" }}>
                                {section.desc}
                            </p>
                        </div>
                    </div>
                </section>
            ))}

            {/* Default Footer Action */}
            <section className="section-pad" style={{ textAlign: "center", borderTop: "1px solid var(--border-subtle)" }}>
                <div className="section-container">
                    <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", marginBottom: "1.5rem" }}>
                        Join the <span className="gradient-text">Future of Health Intelligence</span>
                    </h2>
                    <Link href="/contact" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                        Get in Touch <ArrowRight size={15} />
                    </Link>
                </div>
            </section>
        </div>
    );
}
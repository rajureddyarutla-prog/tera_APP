"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Brain, Activity, Cpu, Database, Shield, Globe, Layers, Zap } from "lucide-react";
import { fetchStrapi } from "@/lib/strapi";

interface TechLayerItem {
    label: string;
    detail: string;
}

interface TechLayer {
    id: string;
    tag: string;
    title: string;
    color: string;
    desc: string;
    items: TechLayerItem[];
}

interface ArchitectureStep {
    step: string;
    label: string;
    sub: string;
    color: string;
}

export default function TechnologyPage() {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function loadData() {
            setLoading(true);
            try {
                const result = await fetchStrapi('technology-page');
                setData(result);
            } catch (err) {
                console.warn("Failed to load technology data:", err);
            } finally {
                setLoading(false);
            }
        }
        loadData();
    }, []);

    const tag_pill = data?.tag_pill || "Technology Stack";
    const title = data?.title || "AI-First Architecture for Animal Health Intelligence";
    const description = data?.description || "Mattera follows a layered technical architecture where wearable devices, structured data pipelines, and predictive AI models converge into a unified intelligence platform.";
    const architecture_steps: ArchitectureStep[] = data?.architecture_steps || [
        { step: "01", label: "Wearable Devices", sub: "Sensor data capture", color: "#4FD1C5" },
        { step: "02", label: "Signal Processing", sub: "Noise filtration & normalization", color: "#6ac8c2" },
        { step: "03", label: "Data Pipeline", sub: "Event ingestion & enrichment", color: "#8FA7FF" },
        { step: "04", label: "AI Models", sub: "Anomaly detection & scoring", color: "#7a9aff" },
        { step: "05", label: "Insights Engine", sub: "Risk index computation", color: "#4FD1C5" },
        { step: "06", label: "PawOS Applications", sub: "Veterinary & owner interfaces", color: "#8FA7FF" },
    ];
    const tech_layers: TechLayer[] = data?.tech_layers || [];

    const cta = data?.cta_section || {
        title: "Advancing Animal Intelligence Research",
        description: "Mattera's technology stack is continuously evolving through academic partnerships and longitudinal health studies.",
        cta_label: "Research Collaboration",
        cta_href: "/research-collaboration"
    };

    return (
        <div style={{ background: "var(--bg-primary)" }}>
            {/* Hero */}
            <section className="section-pad grid-bg" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                <div className="section-container">
                    <div className="tag-pill" style={{ marginBottom: "1.5rem" }}>{tag_pill}</div>
                    <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", maxWidth: "720px", marginBottom: "1.25rem" }}>
                        {title}
                    </h1>
                    <p style={{ color: "var(--text-secondary)", maxWidth: "580px", lineHeight: 1.85, fontSize: "1.0625rem" }}>
                        {description}
                    </p>
                </div>
            </section>

            {/* Architecture flow */}
            <section className="section-pad">
                <div className="section-container">
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "1rem" }} className="arch-flow">
                        {architecture_steps.map((s, i) => (
                            <div key={s.label} style={{ position: "relative" }}>
                                <div className="glass-card" style={{ padding: "1.25rem", height: "100%", borderColor: `${s.color}15` }}>
                                    <div style={{ fontSize: "0.75rem", fontWeight: 800, color: s.color, marginBottom: "0.75rem", fontFamily: "var(--font-sora)" }}>{s.step}</div>
                                    <div style={{ fontWeight: 600, fontSize: "0.875rem", marginBottom: "0.25rem" }}>{s.label}</div>
                                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", lineHeight: 1.4 }}>{s.sub}</div>
                                </div>
                                {i < architecture_steps.length - 1 && (
                                    <div className="arch-arrow" style={{ position: "absolute", right: "-0.5rem", top: "50%", transform: "translateY(-50%)", color: "rgba(255,255,255,0.1)", zIndex: 10 }}>
                                        <ArrowRight size={14} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <style>{`
                    @media (max-width: 1024px) { .arch-flow { grid-template-columns: repeat(3, 1fr) !important; gap: 1.5rem !important; } .arch-arrow { display: none; } }
                    @media (max-width: 640px) { .arch-flow { grid-template-columns: 1fr 1fr !important; } }
                `}</style>
            </section>

            {/* Core Layers */}
            {tech_layers.length > 0 ? tech_layers.map((layer, idx) => (
                <section key={layer.id} className="section-pad" style={{ background: idx % 2 === 0 ? "var(--bg-secondary)" : "transparent" }}>
                    <div className="section-container">
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "4rem", alignItems: "start" }} className="layer-grid">
                            <div>
                                <div className="tag-pill" style={{ marginBottom: "1rem", color: layer.color, borderColor: `${layer.color}33` }}>{layer.tag}</div>
                                <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", marginBottom: "1.25rem" }}>{layer.title}</h2>
                                <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "2rem" }}>
                                    {layer.desc}
                                </p>
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }} className="feature-subgrid">
                                {layer.items.map((item) => (
                                    <div key={item.label} className="glass-card" style={{ padding: "1.5rem" }}>
                                        <div style={{ fontWeight: 700, fontSize: "0.9375rem", color: layer.color, marginBottom: "0.5rem" }}>{item.label}</div>
                                        <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{item.detail}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )) : (
                <div className="section-pad text-center">No layers found in CMS</div>
            )}

            <style>{`
                @media (max-width: 900px) { 
                    .layer-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
                    .feature-subgrid { grid-template-columns: 1fr 1fr !important; }
                }
                @media (max-width: 500px) {
                    .feature-subgrid { grid-template-columns: 1fr !important; }
                }
            `}</style>

            {/* Research CTA */}
            <section className="section-pad" style={{ textAlign: "center", borderTop: "1px solid var(--border-subtle)" }}>
                <div className="section-container">
                    <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", marginBottom: "1.5rem" }}>
                        {cta.title}
                    </h2>
                    <p style={{ color: "var(--text-secondary)", marginBottom: "2rem", maxWidth: "600px", margin: "0 auto 2rem" }}>
                        {cta.description}
                    </p>
                    <Link href={cta.cta_href} className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                        {cta.cta_label} <ArrowRight size={15} />
                    </Link>
                </div>
            </section>
        </div>
    );
}

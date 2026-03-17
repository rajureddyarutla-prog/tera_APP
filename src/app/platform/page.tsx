import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Brain, Activity, Cpu, Database, Shield, Globe, Layers, Zap } from "lucide-react";
import { fetchStrapi } from "@/lib/strapi";

export const metadata: Metadata = {
    title: "Platform — PawOS & Wearable Health Infrastructure",
    description:
        "PawOS is the central intelligence layer for animal health, integrating software intelligence, wearable hardware, and predictive AI models.",
};

const iconMap: Record<string, any> = {
    Brain,
    Activity,
    Cpu,
    Database,
    Shield,
    Globe,
    Layers,
    Zap
};

interface EngineCard {
    title: string;
    desc: string;
    color: string;
}

export default async function PlatformPage() {
    const data = await fetchStrapi('platform-page');

    const tag_pill = data?.tag_pill || "Platform";
    const title = data?.title || "Integrated Animal Health Intelligence Platform";
    const description = data?.description || "Mattera's platform layer bridges software intelligence, wearable hardware, and predictive AI models into a unified, continuously learning ecosystem.";

    const pawos_features: string[] = data?.pawos_features || [
        "Breed-specific baseline modeling",
        "Longitudinal health scoring",
        "Behavioral anomaly detection",
        "Structured diet & activity mapping",
        "Preventive health alerts",
        "Environmental health context",
    ];

    const signals: string[] = data?.signals || [
        "Activity Variability",
        "Rest Cycle Patterns",
        "Movement Symmetry",
        "Stress Behavior Indicators",
        "Temperature Deviation",
        "Environmental Exposure",
    ];

    const future_hardware: string[] = data?.future_hardware || [
        "Heart Rate Variability",
        "Respiration Variability",
        "Gait Anomaly Detection",
    ];

    const engine_cards: EngineCard[] = data?.engine_cards || [
        { title: "Cloud-Native Backend", desc: "Encrypted, scalable data pipelines with offline-first synchronization and API-first ecosystem design.", color: "#4FD1C5" },
        { title: "Multi-Signal Fusion", desc: "Behavioral, environmental, and physiological signal integration into unified health records with adaptive calibration.", color: "#8FA7FF" },
        { title: "Longitudinal Intelligence", desc: "Temporal health trajectory modeling accumulating insight over months and years of continuous observation.", color: "#4FD1C5" },
        { title: "Role-Based Access", desc: "Structured event logging with role-based data access controls for owners, veterinarians, and researchers.", color: "#8FA7FF" },
        { title: "Federated Learning", desc: "Future architecture enabling privacy-preserving distributed model training across large animal populations.", color: "#4FD1C5" },
        { title: "Veterinary API Layer", desc: "Planned integrations with veterinary clinic management systems and electronic health record platforms.", color: "#8FA7FF" },
    ];

    // New CTA Section from Strapi
    const cta = data?.cta_section || {
        badge: "Growth Strategy",
        title: "Toward Population-Scale Predictive Health",
        description: "Mattera is modularly scaling from a software intelligence layer to integrated wearable hardware, ultimately building a global data network for animal health intelligence.",
        links: [
            { label: "Research Pillars", href: "/research-collaboration", primary: true },
            { label: "Investment Roadmap", href: "/investors", primary: false },
        ]
    };

    return (
        <div style={{ background: "var(--bg-primary)" }}>
            {/* Hero */}
            <section className="section-pad grid-bg" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                <div className="section-container">
                    <div className="tag-pill" style={{ marginBottom: "1.5rem" }}>{tag_pill}</div>
                    <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", maxWidth: "700px", marginBottom: "1.25rem" }}>
                        PawOS: The foundational <span className="gradient-text">Animal Intelligence Engine</span>
                    </h1>
                    <p style={{ color: "var(--text-secondary)", maxWidth: "580px", lineHeight: 1.85, fontSize: "1.0625rem" }}>
                        {description}
                    </p>
                </div>
            </section>

            {/* PawOS Intro */}
            <section className="section-pad">
                <div className="section-container">
                    <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "5rem", alignItems: "center" }} className="platform-grid">
                        <div className="glass-card" style={{ padding: "3rem", borderLeft: "4px solid #4FD1C5" }}>
                            <div className="tag-pill" style={{ marginBottom: "1.5rem", color: "#4FD1C5", borderColor: "rgba(79,209,197,0.2)" }}>OS Layer</div>
                            <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>PawOS Intelligence Hub</h2>
                            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "2rem" }}>
                                More than an app, PawOS is a cloud-native intelligence layer structured to ingest, normalize,
                                and analyze longitudinal health events. It converts raw behavioral signals into actionable
                                risk indicators.
                            </p>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="feat-grid">
                                {pawos_features.map((f) => (
                                    <div key={f} style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.875rem", color: "var(--text-primary)" }}>
                                        <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4FD1C5" }} />
                                        {f}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className="tag-pill" style={{ marginBottom: "1.5rem" }}>Signal Pipeline</div>
                            <h3 style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>Multi-Signal Data Ingestion</h3>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                                {signals.map((s) => (
                                    <span key={s} className="tag-pill" style={{ background: "rgba(255,255,255,0.03)", color: "var(--text-secondary)" }}>
                                        {s}
                                    </span>
                                ))}
                            </div>
                            <div style={{ marginTop: "2.5rem", padding: "1.5rem", borderRadius: "12px", background: "rgba(143,167,255,0.05)", border: "1px dashed rgba(143,167,255,0.2)" }}>
                                <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#8FA7FF", marginBottom: "0.75rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>Hardware Roadmap</div>
                                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                                    {future_hardware.map((h) => (
                                        <div key={h} style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>+ {h}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <style>{`
                    @media (max-width: 1000px) { .platform-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } }
                    @media (max-width: 600px) { .feat-grid { grid-template-columns: 1fr !important; } }
                `}</style>
            </section>

            {/* Intelligence Engine */}
            <section className="section-pad" style={{ background: "var(--bg-secondary)" }}>
                <div className="section-container">
                    <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                        <div className="tag-pill" style={{ marginBottom: "1rem" }}>Infrastructure</div>
                        <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)" }}>The Intelligence <span className="gradient-text">Engine</span></h2>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }} className="engine-grid">
                        {engine_cards.map((card) => (
                            <div key={card.title} className="glass-card" style={{ padding: "2.5rem", borderColor: `${card.color}15` }}>
                                <div style={{ fontSize: "0.875rem", fontWeight: 800, color: card.color, marginBottom: "1rem", fontFamily: "var(--font-sora)" }}>{card.title}</div>
                                <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.75 }}>{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <style>{` @media (max-width: 1000px) { .engine-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 640px) { .engine-grid { grid-template-columns: 1fr !important; } } `}</style>
            </section>

            {/* Roadmap */}
            <section className="section-pad">
                <div className="section-container">
                    <div className="glass-card" style={{ padding: "4rem", textAlign: "center", background: "linear-gradient(to bottom right, rgba(79,209,197,0.03), rgba(143,167,255,0.03))" }}>
                        <div className="tag-pill" style={{ marginBottom: "1.5rem" }}>{cta.badge}</div>
                        <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>{cta.title}</h2>
                        <p style={{ color: "var(--text-secondary)", maxWidth: "650px", margin: "0 auto 3rem", lineHeight: 1.8 }}>
                            {cta.description}
                        </p>
                        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                            {cta.links.map((link: any) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className={link.primary ? "btn-primary" : "btn-ghost"}
                                >
                                    {link.label} <ArrowRight size={15} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

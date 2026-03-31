"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, BarChart3, ShieldCheck, Globe2, Network, ScrollText, Binary } from "lucide-react";
import { fetchStrapi } from "@/lib/strapi";

interface MarketStat {
    value: string;
    label: string;
}

interface Moat {
    title: string;
    color: string;
    desc: string;
    items: string[];
}

interface TRLStep {
    level: string;
    label: string;
    desc: string;
    status: string;
    pct: number;
}

interface GrowthStep {
    phase: string;
    title: string;
    desc: string;
    color: string;
}

export default function InvestorsPage() {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function loadData() {
            setLoading(true);
            try {
                const result = await fetchStrapi('investors-page');
                setData(result);
            } catch (err) {
                console.warn("Failed to load investors data:", err);
            } finally {
                setLoading(false);
            }
        }
        loadData();
    }, []);

    const tag_pill = data?.tag_pill || "Investor Overview";
    const title = data?.title || "Venture-Scale Infrastructure for Animal Health Intelligence";
    const description = data?.description || "Mattera is building the foundational AI infrastructure layer for animal health analytics — a category-defining platform with structural defensibility across data, algorithms, and hardware integration.";

    const market_stats: MarketStat[] = data?.market_stats || [
        { value: "$50B+", label: "Global Animal Healthcare Market" },
        { value: "3 Moats", label: "Data · Algorithmic · Hardware" },
        { value: "India + US", label: "Dual-Market Operations" },
    ];

    const market_drivers: string[] = data?.market_drivers || [
        "Pet humanization driving premium health spend",
        "Rising veterinary expenditure globally",
        "Precision livestock farming expansion",
        "Increased demand for smart monitoring devices",
        "Regulatory push toward animal welfare standards",
        "Predictive systems largely absent from market",
    ];

    const moats: Moat[] = data?.moats || [
        { title: "Data Moat", color: "#4FD1C5", desc: "Longitudinal animal health datasets combining behavioral signals, environmental exposure, and physiological indicators — creating proprietary datasets difficult for competitors to replicate.", items: ["Behavioral signal archives", "Cross-species longitudinal records", "Environmental health context data", "Breed-stratified health baselines"] },
        { title: "Algorithmic Moat", color: "#8FA7FF", desc: "Purpose-built algorithms for behavioral anomaly detection, multi-signal health scoring, and breed-specific baseline modeling that improve continuously as data accumulates.", items: ["Behavioral anomaly detection models", "Multi-signal health scoring", "Breed-specific baseline algorithms", "Predictive risk indices"] },
        { title: "Hardware Integration", color: "#4FD1C5", desc: "Integration between proprietary wearable devices and the PawOS intelligence platform creates a vertically integrated ecosystem that generates compounding data network effects.", items: ["Proprietary sensor hardware", "Direct PawOS integration", "Edge inference models", "Low-power field deployment"] },
        { title: "Ecosystem Lock-In", color: "#8FA7FF", desc: "Over time PawOS becomes the data layer connecting owners, veterinarians, livestock operators, and researchers — switching costs increase as longitudinal data accumulates.", items: ["Owner longitudinal records", "Veterinary clinical integrations", "Livestock operator workflows", "Research institution partnerships"] },
    ];

    const trl_levels: TRLStep[] = data?.trl_levels || [
        { level: "TRL 3", label: "Concept Validation", desc: "Algorithm research and theoretical validation", status: "achieved", pct: 100 },
        { level: "TRL 4", label: "Software Prototype", desc: "PawOS prototype platform operational", status: "achieved", pct: 100 },
        { level: "TRL 5", label: "Integrated Wearable", desc: "Hardware-software integration prototype", status: "target", pct: 45 },
        { level: "TRL 6", label: "Pilot Deployments", desc: "Research environment pilot programs", status: "future", pct: 10 },
    ];

    const ip_roadmap: string[] = data?.ip_roadmap || [
        "Behavioral health scoring models",
        "Animal activity anomaly detection",
        "Wearable sensor calibration algorithms",
        "Predictive veterinary risk indexing",
        "Multi-signal fusion methodologies",
        "Edge inference for animal monitoring",
    ];

    const growth_steps: GrowthStep[] = data?.growth_steps || [
        { phase: "Phase 1", title: "Software Intelligence Layer", desc: "PawOS platform accumulates longitudinal data at scale", color: "#4FD1C5" },
        { phase: "Phase 2", title: "Wearable Integration", desc: "Proprietary hardware expands passive signal capture", color: "#8FA7FF" },
        { phase: "Phase 3", title: "Predictive AI Models", desc: "Population-scale ML models with competitive moat", color: "#4FD1C5" },
        { phase: "Phase 4", title: "Global Research Network", desc: "International collaborations and data partnerships", color: "#8FA7FF" },
    ];

    const marketOpportunity = data?.market_opportunity_section || {
        badge: "Market Opportunity",
        title: "Macro Drivers in Animal Healthcare",
        description: "We are at the convergence of rising animal health spend, pet humanization, and a lack of structured longitudinal health intelligence."
    };

    const ipStrategy = data?.ip_strategy_section || {
        title: "IP / R&D Roadmap",
        strategy_label: "IP Strategy:",
        strategy_text: "Accumulating defensive trade secrets across behavioral datasets and filing utility patents for novel anomaly detection methodologies."
    };

    const cta = data?.cta_section || {
        title: "Investment Enquiries",
        description: "We are currently open to discussions with venture capital and strategic partners aligned with our mission to build critical animal health infrastructure.",
        cta_label: "Get in Touch",
        cta_href: "/contact"
    };

    return (
        <div style={{ background: "var(--bg-primary)" }}>
            {/* Hero */}
            <section className="section-pad grid-bg" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                <div className="section-container">
                    <div className="tag-pill" style={{ marginBottom: "1.5rem" }}>{tag_pill}</div>
                    <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", maxWidth: "800px", marginBottom: "1.25rem" }}>
                        {title}
                    </h1>
                    <p style={{ color: "var(--text-secondary)", maxWidth: "600px", lineHeight: 1.8, fontSize: "1.0625rem", marginBottom: "3rem" }}>
                        {description}
                    </p>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }} className="stat-grid">
                        {market_stats.map((s) => (
                            <div key={s.label} className="glass-card" style={{ padding: "2rem", textAlign: "center" }}>
                                <div style={{ fontSize: "2rem", fontWeight: 800, color: "#4FD1C5", marginBottom: "0.5rem", fontFamily: "var(--font-sora)" }}>{s.value}</div>
                                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <style>{`@media (max-width: 700px) { .stat-grid { grid-template-columns: 1fr !important; } }`}</style>
            </section>

            {/* Market Drivers */}
            <section className="section-pad">
                <div className="section-container">
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "5rem", alignItems: "center" }} className="driver-grid">
                        <div>
                            <div className="tag-pill" style={{ marginBottom: "1rem" }}>{marketOpportunity.badge}</div>
                            <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>{marketOpportunity.title}</h2>
                            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
                                {marketOpportunity.description}
                            </p>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="check-grid">
                            {market_drivers.map((d) => (
                                <div key={d} style={{ display: "flex", gap: "0.75rem", fontSize: "0.8125rem", color: "var(--text-secondary)" }}>
                                    <ShieldCheck size={16} style={{ color: "#4FD1C5", minWidth: "16px" }} />
                                    {d}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <style>{` @media (max-width: 900px) { .driver-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } } @media (max-width: 500px) { .check-grid { grid-template-columns: 1fr !important; } } `}</style>
            </section>

            {/* Moats */}
            <section className="section-pad" style={{ background: "var(--bg-secondary)" }}>
                <div className="section-container">
                    <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                        <div className="tag-pill" style={{ marginBottom: "1rem" }}>Defensibility</div>
                        <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)" }}>Mattera's Competitive <span className="gradient-text">Moats</span></h2>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }} className="moat-grid">
                        {moats.map((m) => (
                            <div key={m.title} className="glass-card" style={{ padding: "3rem" }}>
                                <h3 style={{ fontSize: "1.25rem", color: m.color, marginBottom: "1rem" }}>{m.title}</h3>
                                <p style={{ color: "var(--text-muted)", fontSize: "0.9375rem", lineHeight: 1.7, marginBottom: "2rem" }}>{m.desc}</p>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.625rem" }}>
                                    {m.items.map(item => (
                                        <span key={item} style={{ fontSize: "0.7rem", fontWeight: 700, padding: "0.4rem 0.8rem", background: "var(--bg-subtle)", borderRadius: "100px", color: "var(--text-muted)", border: "1px solid var(--border-subtle)" }}>{item}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <style>{`@media (max-width: 900px) { .moat-grid { grid-template-columns: 1fr !important; } }`}</style>
            </section>

            {/* TRL & IP */}
            <section className="section-pad">
                <div className="section-container">
                    <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "5rem" }} className="trl-grid">
                        <div>
                            <div className="tag-pill" style={{ marginBottom: "1.5rem" }}>Progress</div>
                            <h2 style={{ fontSize: "1.75rem", marginBottom: "2.5rem" }}>Technology Readiness Levels (TRL)</h2>
                            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                                {trl_levels.map((t) => (
                                    <div key={t.level}>
                                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem", fontSize: "0.8125rem" }}>
                                            <span style={{ fontWeight: 700, color: t.status === 'achieved' ? "#4FD1C5" : "var(--text-muted)" }}>{t.level}: {t.label}</span>
                                            <span style={{ color: "var(--text-muted)" }}>{t.status === 'achieved' ? "Achieved" : `Target ${t.pct}%`}</span>
                                        </div>
                                        <div style={{ height: "4px", width: "100%", background: "var(--bg-secondary)", borderRadius: "10px", overflow: "hidden" }}>
                                            <div style={{ height: "100%", width: `${t.pct}%`, background: t.status === 'achieved' ? "#4FD1C5" : "#8FA7FF", transition: "width 1s ease-out" }} />
                                        </div>
                                        <p style={{ marginTop: "0.5rem", fontSize: "0.75rem", color: "var(--text-muted)" }}>{t.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="glass-card" style={{ padding: "3rem" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                                <ScrollText style={{ color: "#8FA7FF" }} />
                                <h3 style={{ fontSize: "1.25rem" }}>{ipStrategy.title}</h3>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                                {ip_roadmap.map((ip) => (
                                    <div key={ip} style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                                        <div style={{ minWidth: "6px", height: "6px", borderRadius: "50%", background: "#8FA7FF" }} />
                                        {ip}
                                    </div>
                                ))}
                            </div>
                            <div style={{ marginTop: "2.5rem", padding: "1.25rem", background: "var(--bg-pill)", borderRadius: "8px", border: "1px solid var(--border-subtle)", fontSize: "0.75rem", color: "var(--accent-teal)", lineHeight: 1.6 }}>
                                <strong>{ipStrategy.strategy_label}</strong> {ipStrategy.strategy_text}
                            </div>
                        </div>
                    </div>
                </div>
                <style>{`@media (max-width: 900px) { .trl-grid { grid-template-columns: 1fr !important; gap: 4rem !important; } }`}</style>
            </section>

            {/* Steps / Growth */}
            <section className="section-pad" style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border-subtle)" }}>
                <div className="section-container">
                    <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                        <div className="tag-pill" style={{ marginBottom: "1rem" }}>Execution</div>
                        <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)" }}>Growth <span className="gradient-text">Trajectory</span></h2>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }} className="growth-grid">
                        {growth_steps.map((g) => (
                            <div key={g.phase} className="glass-card" style={{ padding: "2rem", borderColor: `${g.color}15` }}>
                                <div style={{ fontSize: "0.7rem", fontWeight: 800, color: g.color, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>{g.phase}</div>
                                <div style={{ fontWeight: 700, fontSize: "0.9375rem", marginBottom: "0.75rem" }}>{g.title}</div>
                                <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{g.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <style>{` @media (max-width: 1000px) { .growth-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 500px) { .growth-grid { grid-template-columns: 1fr !important; } } `}</style>
            </section>

            {/* Final CTA */}
            <section className="section-pad" style={{ textAlign: "center" }}>
                <div className="section-container">
                    <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", marginBottom: "1.5rem" }}>
                        {cta.title}
                    </h2>
                    <p style={{ color: "var(--text-secondary)", marginBottom: "2.5rem", maxWidth: "600px", margin: "0 auto 2.5rem" }}>
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

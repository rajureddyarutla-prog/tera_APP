import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Search, Activity, Cpu, Shield, Database, Microscope, FlaskConical } from "lucide-react";
import { fetchStrapi } from "@/lib/strapi";

export const metadata: Metadata = {
    title: "Research — Mattera Animal Intelligence Lab",
    description:
        "Mattera operates a structured research architecture spanning Behavioral Baseline Modeling, Predictive Disease Modeling, Signal Fusion, and Wearable Hardware.",
};

interface ResearchArea {
    id: string;
    tag: string;
    color: string;
    title: string;
    objective: string;
    methodology: string[];
    applications: string[];
}

interface ResearchStudy {
    id: string;
    title: string;
    tag: string;
    color: string;
    duration: string;
    methodology: string[];
    outcomes: string[];
}

interface MethodologyItem {
    label: string;
    color: string;
}

export default async function ResearchPage() {
    const data = await fetchStrapi('research-page');

    const tag_pill = data?.tag_pill || "Mattera Animal Intelligence Lab";
    const title = data?.title || "Structured Research in Veterinary Predictive Intelligence";
    const description = data?.description || "Mattera operates a structured research architecture spanning four major scientific pillars — generating the longitudinal datasets and validated models that power the intelligence platform.";

    const research_areas: ResearchArea[] = data?.research_areas || [
        {
            id: "behavioral",
            tag: "Behavioral",
            color: "#4FD1C5",
            title: "Behavioral Baseline Modeling",
            objective: "Develop statistical behavioral baselines across breeds and species.",
            methodology: ["Longitudinal behavioral observation datasets", "Breed stratification models", "Activity variance analysis", "Anomaly threshold detection algorithms"],
            applications: ["Early arthritis indicators", "Cognitive decline detection", "Chronic stress identification"],
        },
        {
            id: "predictive",
            tag: "Predictive",
            color: "#8FA7FF",
            title: "Predictive Disease Modeling",
            objective: "Develop probabilistic models identifying early disease indicators before visible symptoms appear.",
            methodology: ["Breed-disease correlation mapping", "Multi-signal risk modeling", "Longitudinal trajectory analysis", "Early deviation scoring frameworks"],
            applications: ["Pre-symptomatic disease detection", "Risk stratification by breed", "Veterinary early alert systems"],
        },
        {
            id: "signal",
            tag: "Signal Fusion",
            color: "#4FD1C5",
            title: "Signal Fusion Algorithms",
            objective: "Integrate behavioral, environmental, and physiological signals into unified health intelligence scores.",
            methodology: ["Sensor noise filtration pipelines", "Multi-signal weighting frameworks", "Adaptive baseline calibration", "Anomaly confidence scoring"],
            applications: ["Unified health score computation", "Cross-sensor validation", "Environmental health context modeling"],
        },
        {
            id: "wearable",
            tag: "Hardware",
            color: "#8FA7FF",
            title: "Wearable Hardware Systems",
            objective: "Develop low-power wearable devices for long-term passive animal monitoring.",
            methodology: ["Sensor calibration models", "Edge computing inference pipelines", "Energy-efficient firmware design", "Secure device communication protocols"],
            applications: ["Field livestock deployment", "Performance animal monitoring", "Companion animal health tracking"],
        },
    ];

    const studies: ResearchStudy[] = data?.studies || [
        { id: "01", title: "Activity Variability Monitoring in Working Buffaloes", tag: "Livestock", color: "#4FD1C5", duration: "120-day study", methodology: ["Movement intensity scoring", "Rest cycle variance analysis", "Strain threshold modeling"], outcomes: ["Early overexertion detection", "Improved livestock welfare metrics", "Productivity health analytics"] },
        { id: "02", title: "Gait Asymmetry Detection in Performance Horses", tag: "Equine", color: "#8FA7FF", duration: "Ongoing", methodology: ["Accelerometer-based gait analysis", "Step symmetry modeling", "Movement phase deviation scoring"], outcomes: ["Early orthopedic detection", "Injury prevention modeling", "Performance optimization insights"] },
        { id: "03", title: "Behavioral Stress Index — Companion Dogs", tag: "Companion", color: "#4FD1C5", duration: "Longitudinal", methodology: ["Sleep variability analysis", "Activity imbalance scoring", "Owner behavioral tagging integration", "Anomaly clustering algorithms"], outcomes: ["Early anxiety disorder detection", "Behavioral health trending", "Owner-reported signal validation"] },
    ];

    const methodology_items: MethodologyItem[] = data?.methodology_items || [
        { label: "Longitudinal Observation", color: "#4FD1C5" },
        { label: "Signal Fusion Modeling", color: "#8FA7FF" },
        { label: "Statistical Anomaly Detection", color: "#4FD1C5" },
        { label: "ML Risk Scoring", color: "#8FA7FF" },
        { label: "Breed Stratification", color: "#4FD1C5" },
        { label: "Multi-Signal Validation", color: "#8FA7FF" },
    ];

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

            {/* Four Pillars */}
            <section className="section-pad">
                <div className="section-container">
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.25rem", marginBottom: "5rem" }} className="pillar-grid">
                        {research_areas.map((p) => (
                            <a key={p.id} href={`#${p.id}`} className="glass-card" style={{ padding: "1.75rem", textDecoration: "none", borderBottom: `2px solid var(--border-subtle)` }}>
                                <div style={{ fontSize: "0.65rem", fontWeight: 800, color: p.color, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>{p.tag} Pillar</div>
                                <div style={{ fontWeight: 700, fontSize: "0.9375rem", color: "var(--text-primary)" }}>{p.title}</div>
                            </a>
                        ))}
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
                        {research_areas.map((area) => (
                            <div key={area.id} id={area.id} className="glass-card" style={{ padding: "3.5rem" }}>
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "4rem" }} className="area-detail-grid">
                                    <div>
                                        <div className="tag-pill" style={{ color: area.color, borderColor: "var(--border-subtle)", background: "var(--bg-pill)", marginBottom: "1.5rem" }}>{area.tag} Research</div>
                                        <h2 style={{ fontSize: "1.75rem", marginBottom: "1.25rem", color: "var(--text-primary)" }}>{area.title}</h2>
                                        <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "2rem" }}>
                                            <strong style={{ color: "var(--text-primary)", display: "block", marginBottom: "0.5rem" }}>Core Objective:</strong>
                                            {area.objective}
                                        </p>
                                    </div>
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                                        <div>
                                            <h4 style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em", color: area.color, marginBottom: "1rem" }}>Methodology</h4>
                                            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                                                {area.methodology.map(m => (
                                                    <li key={m} style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", display: "flex", gap: "0.5rem" }}>
                                                        <div style={{ minWidth: "4px", height: "4px", borderRadius: "50%", background: area.color, marginTop: "0.5rem" }} />
                                                        {m}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em", color: area.color, marginBottom: "1rem" }}>Health Applications</h4>
                                            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                                                {area.applications.map(a => (
                                                    <li key={a} style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", display: "flex", gap: "0.5rem" }}>
                                                        <div style={{ minWidth: "4px", height: "4px", borderRadius: "50%", background: area.color, marginTop: "0.5rem" }} />
                                                        {a}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <style>{` @media (max-width: 1000px) { .pillar-grid { grid-template-columns: 1fr 1fr !important; } .area-detail-grid { grid-template-columns: 1fr !important; gap: 2rem !important; } } @media (max-width: 500px) { .pillar-grid { grid-template-columns: 1fr !important; } } `}</style>
            </section>

            {/* Research Studies */}
            <section className="section-pad" style={{ background: "var(--bg-secondary)" }}>
                <div className="section-container">
                    <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                        <div className="tag-pill" style={{ marginBottom: "1rem" }}>Studies</div>
                        <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)" }}>Current Research <span className="gradient-text">Studies</span></h2>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }} className="studies-grid">
                        {studies.map((s) => (
                            <div key={s.id} className="glass-card" style={{ padding: "2.5rem" }}>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "1.5rem" }}>
                                    <div style={{ fontSize: "0.75rem", fontWeight: 800, color: s.color }}>ID #{s.id}</div>
                                    <div className="tag-pill" style={{ color: s.color, borderColor: "var(--border-subtle)", background: "var(--bg-pill)" }}>{s.tag}</div>
                                </div>
                                <h3 style={{ fontSize: "1.125rem", marginBottom: "1rem", lineHeight: 1.4, color: "var(--text-primary)" }}>{s.title}</h3>
                                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>Duration: {s.duration}</div>

                                <div style={{ borderTop: "1px solid var(--border-subtle)", paddingTop: "1.5rem" }}>
                                    <h4 style={{ fontSize: "0.65rem", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.75rem" }}>Primary Outcomes</h4>
                                    <ul style={{ listStyle: "none", padding: 0 }}>
                                        {s.outcomes.map(o => (
                                            <li key={o} style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", marginBottom: "0.4rem" }}>• {o}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <style>{` @media (max-width: 1000px) { .studies-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 640px) { .studies-grid { grid-template-columns: 1fr !important; } } `}</style>
            </section>

            {/* Publications Placeholder */}
            <section className="section-pad">
                <div className="section-container">
                    <div className="glass-card" style={{ padding: "4rem", textAlign: "center", border: "1px dashed var(--border-subtle)" }}>
                        <FlaskConical size={32} style={{ color: "#4FD1C5", marginBottom: "1.5rem" }} />
                        <h2 style={{ marginBottom: "1rem" }}>Academic Publications</h2>
                        <p style={{ color: "var(--text-secondary)", maxWidth: "500px", margin: "0 auto" }}>
                            Our research group is currently preparing longitudinal behavioral studies for peer review.
                            Publications will be listed here as they are released.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

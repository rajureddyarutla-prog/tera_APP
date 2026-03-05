import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Technology — AI Intelligence Layer & Wearable Systems",
    description:
        "Explore Mattera Life Systems' full technology stack: AI intelligence layer, data infrastructure, wearable hardware systems, and platform architecture.",
};

const techLayers = [
    {
        id: "ai",
        tag: "AI",
        title: "AI Intelligence Layer",
        color: "#4FD1C5",
        desc:
            "The core reasoning engine of the Mattera platform. Machine learning models trained on longitudinal animal health datasets to detect anomalies, score health trajectories, and generate predictive risk indicators.",
        items: [
            { label: "Behavioral Anomaly Detection", detail: "Identifies deviations from established breed-level behavioral baselines using unsupervised anomaly scoring models." },
            { label: "Risk Scoring Models", detail: "Probabilistic risk indices computed from multi-signal health data, updated continuously as new observations arrive." },
            { label: "Longitudinal Health Modeling", detail: "Temporal modeling of health trajectories to track gradual decline or improvement patterns across months and years." },
            { label: "Breed-Species Stratification", detail: "Individual baseline normalization across breed, age, weight, and activity profiles to eliminate false positive detection." },
        ],
    },
    {
        id: "data",
        tag: "Data",
        title: "Data Infrastructure Layer",
        color: "#8FA7FF",
        desc:
            "A cloud-native, API-first data platform engineered for high-frequency health event ingestion, normalization, and longitudinal storage. Designed to accumulate structured intelligence over time.",
        items: [
            { label: "Structured Event Pipelines", detail: "Real-time ingestion of behavioral and physiological events with automated schema normalization and validation." },
            { label: "Health Data Normalization", detail: "Standardized health event taxonomy ensuring cross-species, cross-device data comparability." },
            { label: "Multi-Signal Fusion", detail: "Integration layer combining behavioral, environmental, and physiological signal streams into unified health records." },
            { label: "Longitudinal Storage", detail: "Time-series data architecture optimized for health trajectory queries across months and years of accumulated records." },
        ],
    },
    {
        id: "hardware",
        tag: "Hardware",
        title: "Wearable Hardware Systems",
        color: "#4FD1C5",
        desc:
            "Mattera is developing a low-power wearable device layer enabling passive, continuous health signal capture from animals across species. Designed for long-term deployment in field and livestock environments.",
        items: [
            { label: "Activity & Movement Capture", detail: "High-frequency accelerometer and gyroscope data for activity variability, gait, and movement symmetry analysis." },
            { label: "Physiological Signal Sensors", detail: "Future roadmap includes heart rate variability, respiration variability, and temperature deviation monitoring." },
            { label: "Edge Inference Models", detail: "On-device ML inference for real-time anomaly flagging without continuous cloud dependency." },
            { label: "Low-Power Firmware", detail: "Energy-efficient embedded systems designed for extended field deployment with minimal maintenance cycles." },
        ],
    },
];

const architectureSteps = [
    { step: "01", label: "Wearable Devices", sub: "Sensor data capture", color: "#4FD1C5" },
    { step: "02", label: "Signal Processing", sub: "Noise filtration & normalization", color: "#6ac8c2" },
    { step: "03", label: "Data Pipeline", sub: "Event ingestion & enrichment", color: "#8FA7FF" },
    { step: "04", label: "AI Models", sub: "Anomaly detection & scoring", color: "#7a9aff" },
    { step: "05", label: "Insights Engine", sub: "Risk index computation", color: "#4FD1C5" },
    { step: "06", label: "PawOS Applications", sub: "Veterinary & owner interfaces", color: "#8FA7FF" },
];

export default function TechnologyPage() {
    return (
        <div style={{ background: "var(--bg-primary)" }}>
            {/* Hero */}
            <section className="section-pad grid-bg" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                <div className="section-container">
                    <div className="tag-pill" style={{ marginBottom: "1.5rem" }}>Technology Stack</div>
                    <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", maxWidth: "700px", marginBottom: "1.25rem" }}>
                        AI-First Architecture for{" "}
                        <span className="gradient-text">Animal Health Intelligence</span>
                    </h1>
                    <p style={{ color: "var(--text-secondary)", maxWidth: "600px", lineHeight: 1.85, fontSize: "1.0625rem" }}>
                        Mattera follows a layered technical architecture where wearable devices, structured data
                        pipelines, and predictive AI models converge into a unified intelligence platform.
                    </p>
                </div>
            </section>

            {/* Architecture Diagram */}
            <section id="architecture" className="section-pad" style={{ background: "var(--bg-secondary)" }}>
                <div className="section-container">
                    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                        <div className="tag-pill" style={{ marginBottom: "1rem" }}>Platform Architecture</div>
                        <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>
                            End-to-End <span className="gradient-text">Intelligence Pipeline</span>
                        </h2>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "0",
                            flexWrap: "wrap",
                            overflowX: "auto",
                            padding: "1rem 0",
                        }}
                    >
                        {architectureSteps.map((s, i) => (
                            <div key={s.step} style={{ display: "flex", alignItems: "center" }}>
                                <div
                                    className="glass-card"
                                    style={{
                                        padding: "1.5rem 1.25rem",
                                        textAlign: "center",
                                        minWidth: "140px",
                                        borderColor: `${s.color}30`,
                                    }}
                                >
                                    <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: "0.65rem", color: s.color, letterSpacing: "0.12em", marginBottom: "0.5rem" }}>
                                        {s.step}
                                    </div>
                                    <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "0.875rem", color: "var(--text-primary)", marginBottom: "0.3rem" }}>
                                        {s.label}
                                    </div>
                                    <div style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>{s.sub}</div>
                                </div>
                                {i < architectureSteps.length - 1 && (
                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "0 0.5rem" }}>
                                        <div style={{ width: "32px", height: "1px", background: `linear-gradient(90deg, ${s.color}60, ${architectureSteps[i + 1].color}60)` }} />
                                        <div style={{ width: "0", height: "0", borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderTop: `5px solid ${architectureSteps[i + 1].color}60`, marginTop: "-2px", transform: "rotate(90deg) translateX(-3px)" }} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <hr className="glow-divider" />

            {/* Tech layers */}
            {techLayers.map((layer, idx) => (
                <section
                    key={layer.id}
                    id={layer.id}
                    className="section-pad"
                    style={{ background: idx % 2 === 0 ? "var(--bg-primary)" : "var(--bg-secondary)" }}
                >
                    <div className="section-container">
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }} className="grid-2col">
                            <div>
                                <div
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                        background: `${layer.color}10`,
                                        border: `1px solid ${layer.color}28`,
                                        borderRadius: "100px",
                                        padding: "0.3rem 0.875rem",
                                        marginBottom: "1.25rem",
                                    }}
                                >
                                    <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, color: layer.color, fontSize: "0.75rem", letterSpacing: "0.08em" }}>
                                        {layer.tag} Layer
                                    </span>
                                </div>
                                <h2 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", marginBottom: "1.25rem" }}>
                                    {layer.title}
                                </h2>
                                <p style={{ color: "var(--text-secondary)", lineHeight: 1.85, fontSize: "0.9375rem" }}>
                                    {layer.desc}
                                </p>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                                {layer.items.map((item) => (
                                    <div key={item.label} className="glass-card" style={{ padding: "1.25rem 1.5rem" }}>
                                        <div style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", color: layer.color, marginBottom: "0.375rem", fontWeight: 600 }}>
                                            {item.label}
                                        </div>
                                        <div style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.7 }}>{item.detail}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <style>{`@media (max-width: 768px) { .grid-2col { grid-template-columns: 1fr !important; gap: 3rem !important; } }`}</style>
                </section>
            ))}

            <hr className="glow-divider" />

            {/* CTA */}
            <section className="section-pad" style={{ textAlign: "center" }}>
                <div className="section-container">
                    <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", marginBottom: "1rem" }}>
                        Explore the <span className="gradient-text">Research Behind the Technology</span>
                    </h2>
                    <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
                        Understand the scientific methodology powering each intelligence layer.
                    </p>
                    <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                        <Link href="/research" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                            View Research <ArrowRight size={15} />
                        </Link>
                        <Link href="/platform" className="btn-ghost" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                            Platform Details <ArrowRight size={15} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

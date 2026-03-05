import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Research — Mattera Animal Intelligence Lab",
    description:
        "Explore Mattera Life Systems' R&D framework: behavioral baseline modeling, predictive disease modeling, signal fusion, and wearable hardware research studies.",
};

const researchAreas = [
    {
        id: "behavioral",
        tag: "Behavioral",
        color: "#4FD1C5",
        title: "Behavioral Baseline Modeling",
        objective: "Develop statistical behavioral baselines across breeds and species.",
        methodology: [
            "Longitudinal behavioral observation datasets",
            "Breed stratification models",
            "Activity variance analysis",
            "Anomaly threshold detection algorithms",
        ],
        applications: ["Early arthritis indicators", "Cognitive decline detection", "Chronic stress identification"],
    },
    {
        id: "predictive",
        tag: "Predictive",
        color: "#8FA7FF",
        title: "Predictive Disease Modeling",
        objective: "Develop probabilistic models identifying early disease indicators before visible symptoms appear.",
        methodology: [
            "Breed-disease correlation mapping",
            "Multi-signal risk modeling",
            "Longitudinal trajectory analysis",
            "Early deviation scoring frameworks",
        ],
        applications: ["Pre-symptomatic disease detection", "Risk stratification by breed", "Veterinary early alert systems"],
    },
    {
        id: "signal",
        tag: "Signal Fusion",
        color: "#4FD1C5",
        title: "Signal Fusion Algorithms",
        objective: "Integrate behavioral, environmental, and physiological signals into unified health intelligence scores.",
        methodology: [
            "Sensor noise filtration pipelines",
            "Multi-signal weighting frameworks",
            "Adaptive baseline calibration",
            "Anomaly confidence scoring",
        ],
        applications: ["Unified health score computation", "Cross-sensor validation", "Environmental health context modeling"],
    },
    {
        id: "wearable",
        tag: "Hardware",
        color: "#8FA7FF",
        title: "Wearable Hardware Systems",
        objective: "Develop low-power wearable devices for long-term passive animal monitoring.",
        methodology: [
            "Sensor calibration models",
            "Edge computing inference pipelines",
            "Energy-efficient firmware design",
            "Secure device communication protocols",
        ],
        applications: ["Field livestock deployment", "Performance animal monitoring", "Companion animal health tracking"],
    },
];

const studies = [
    {
        id: "01",
        title: "Activity Variability Monitoring in Working Buffaloes",
        tag: "Livestock",
        color: "#4FD1C5",
        duration: "120-day study",
        methodology: [
            "Movement intensity scoring",
            "Rest cycle variance analysis",
            "Strain threshold modeling",
        ],
        outcomes: ["Early overexertion detection", "Improved livestock welfare metrics", "Productivity health analytics"],
    },
    {
        id: "02",
        title: "Gait Asymmetry Detection in Performance Horses",
        tag: "Equine",
        color: "#8FA7FF",
        duration: "Ongoing",
        methodology: [
            "Accelerometer-based gait analysis",
            "Step symmetry modeling",
            "Movement phase deviation scoring",
        ],
        outcomes: ["Early orthopedic detection", "Injury prevention modeling", "Performance optimization insights"],
    },
    {
        id: "03",
        title: "Behavioral Stress Index — Companion Dogs",
        tag: "Companion",
        color: "#4FD1C5",
        duration: "Longitudinal",
        methodology: [
            "Sleep variability analysis",
            "Activity imbalance scoring",
            "Owner behavioral tagging integration",
            "Anomaly clustering algorithms",
        ],
        outcomes: ["Early anxiety disorder detection", "Behavioral health trending", "Owner-reported signal validation"],
    },
];

export default function ResearchPage() {
    return (
        <div style={{ background: "var(--bg-primary)" }}>
            {/* Hero */}
            <section className="section-pad grid-bg" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                <div className="section-container">
                    <div className="tag-pill" style={{ marginBottom: "1.5rem" }}>Mattera Animal Intelligence Lab</div>
                    <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", maxWidth: "720px", marginBottom: "1.25rem" }}>
                        Structured Research in{" "}
                        <span className="gradient-text">Veterinary Predictive Intelligence</span>
                    </h1>
                    <p style={{ color: "var(--text-secondary)", maxWidth: "580px", lineHeight: 1.85, fontSize: "1.0625rem" }}>
                        Mattera operates a structured research architecture spanning four major scientific pillars
                        — generating the longitudinal datasets and validated models that power the intelligence
                        platform.
                    </p>
                </div>
            </section>

            {/* Research Areas */}
            <section id="areas" className="section-pad" style={{ background: "var(--bg-secondary)" }}>
                <div className="section-container">
                    <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                        <div className="tag-pill" style={{ marginBottom: "1rem" }}>Research Pillars</div>
                        <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>
                            Four-Pillar <span className="gradient-text">R&D Framework</span>
                        </h2>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem" }} className="research-grid">
                        {researchAreas.map((area) => (
                            <div key={area.id} id={area.id} className="glass-card" style={{ padding: "2rem" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                                    <span
                                        style={{
                                            fontFamily: "'Sora', sans-serif",
                                            fontSize: "0.65rem",
                                            fontWeight: 700,
                                            letterSpacing: "0.1em",
                                            textTransform: "uppercase",
                                            color: area.color,
                                            background: `${area.color}10`,
                                            border: `1px solid ${area.color}28`,
                                            padding: "0.25rem 0.7rem",
                                            borderRadius: "100px",
                                        }}
                                    >
                                        {area.tag}
                                    </span>
                                </div>
                                <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1.0625rem", marginBottom: "0.625rem" }}>
                                    {area.title}
                                </h3>
                                <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                                    <strong style={{ color: "var(--text-muted)", fontWeight: 600 }}>Objective: </strong>
                                    {area.objective}
                                </p>

                                <div style={{ marginBottom: "1.25rem" }}>
                                    <div style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)", marginBottom: "0.625rem" }}>
                                        Methodology
                                    </div>
                                    {area.methodology.map((m) => (
                                        <div key={m} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", marginBottom: "0.375rem" }}>
                                            <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: area.color, marginTop: "0.55rem", flexShrink: 0 }} />
                                            <span style={{ color: "var(--text-secondary)", fontSize: "0.8125rem" }}>{m}</span>
                                        </div>
                                    ))}
                                </div>

                                <div>
                                    <div style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)", marginBottom: "0.625rem" }}>
                                        Applications
                                    </div>
                                    {area.applications.map((a) => (
                                        <div key={a} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", marginBottom: "0.375rem" }}>
                                            <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#8FA7FF", marginTop: "0.55rem", flexShrink: 0 }} />
                                            <span style={{ color: "var(--text-secondary)", fontSize: "0.8125rem" }}>{a}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <style>{`@media (max-width: 768px) { .research-grid { grid-template-columns: 1fr !important; } }`}</style>
            </section>

            <hr className="glow-divider" />

            {/* Current Studies */}
            <section id="studies" className="section-pad">
                <div className="section-container">
                    <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                        <div className="tag-pill" style={{ marginBottom: "1rem" }}>Active Studies</div>
                        <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>
                            Representative <span className="gradient-text">Research Studies</span>
                        </h2>
                        <p style={{ color: "var(--text-secondary)", maxWidth: "520px", margin: "1rem auto 0" }}>
                            Demonstrating cross-species research capability spanning livestock, equine, and companion animals.
                        </p>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                        {studies.map((study) => (
                            <div key={study.id} className="glass-card" style={{ padding: "2.5rem" }}>
                                <div style={{ display: "grid", gridTemplateColumns: "auto 1fr 1fr 1fr", gap: "2.5rem", alignItems: "start" }} className="study-inner">
                                    {/* ID */}
                                    <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: "3rem", color: `${study.color}15`, lineHeight: 1 }}>
                                        {study.id}
                                    </div>
                                    {/* Title */}
                                    <div>
                                        <span
                                            style={{
                                                fontSize: "0.65rem",
                                                fontWeight: 700,
                                                letterSpacing: "0.1em",
                                                textTransform: "uppercase",
                                                color: study.color,
                                                background: `${study.color}10`,
                                                border: `1px solid ${study.color}28`,
                                                padding: "0.2rem 0.6rem",
                                                borderRadius: "100px",
                                                display: "inline-block",
                                                marginBottom: "0.75rem",
                                            }}
                                        >
                                            {study.tag}
                                        </span>
                                        <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1rem", lineHeight: 1.4, marginBottom: "0.5rem" }}>
                                            {study.title}
                                        </h3>
                                        <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{study.duration}</span>
                                    </div>
                                    {/* Methodology */}
                                    <div>
                                        <div style={{ fontSize: "0.65rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)", marginBottom: "0.625rem" }}>
                                            Methodology
                                        </div>
                                        {study.methodology.map((m) => (
                                            <div key={m} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", marginBottom: "0.375rem" }}>
                                                <div style={{ width: "3px", height: "3px", borderRadius: "50%", background: study.color, marginTop: "0.55rem", flexShrink: 0 }} />
                                                <span style={{ color: "var(--text-secondary)", fontSize: "0.8125rem" }}>{m}</span>
                                            </div>
                                        ))}
                                    </div>
                                    {/* Outcomes */}
                                    <div>
                                        <div style={{ fontSize: "0.65rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)", marginBottom: "0.625rem" }}>
                                            Potential Outcomes
                                        </div>
                                        {study.outcomes.map((o) => (
                                            <div key={o} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", marginBottom: "0.375rem" }}>
                                                <div style={{ width: "3px", height: "3px", borderRadius: "50%", background: "#8FA7FF", marginTop: "0.55rem", flexShrink: 0 }} />
                                                <span style={{ color: "var(--text-secondary)", fontSize: "0.8125rem" }}>{o}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <style>{`@media (max-width: 900px) { .study-inner { grid-template-columns: 1fr !important; } }`}</style>
            </section>

            <hr className="glow-divider" />

            {/* Methodology */}
            <section id="methodology" className="section-pad" style={{ background: "var(--bg-secondary)" }}>
                <div className="section-container">
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="grid-2col">
                        <div>
                            <div className="tag-pill" style={{ marginBottom: "1.5rem" }}>Methodology</div>
                            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", marginBottom: "1.25rem" }}>
                                Rigorous Scientific <span className="gradient-text">Research Framework</span>
                            </h2>
                            <p style={{ color: "var(--text-secondary)", lineHeight: 1.85 }}>
                                All Mattera research follows longitudinal observational protocols with statistical
                                validation, ensuring model reliability across diverse species, breeds, and environments.
                            </p>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                            {[
                                { label: "Longitudinal Observation", color: "#4FD1C5" },
                                { label: "Signal Fusion Modeling", color: "#8FA7FF" },
                                { label: "Statistical Anomaly Detection", color: "#4FD1C5" },
                                { label: "ML Risk Scoring", color: "#8FA7FF" },
                                { label: "Breed Stratification", color: "#4FD1C5" },
                                { label: "Multi-Signal Validation", color: "#8FA7FF" },
                            ].map((m) => (
                                <div
                                    key={m.label}
                                    className="glass-card"
                                    style={{ padding: "1.25rem", textAlign: "center", borderColor: `${m.color}20` }}
                                >
                                    <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: "0.8125rem", color: m.color }}>
                                        {m.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <style>{`@media (max-width: 768px) { .grid-2col { grid-template-columns: 1fr !important; gap: 3rem !important; } }`}</style>
            </section>

            <hr className="glow-divider" />

            {/* Publications placeholder */}
            <section className="section-pad" style={{ textAlign: "center" }}>
                <div className="section-container">
                    <div className="tag-pill" style={{ marginBottom: "1.25rem" }}>Publications</div>
                    <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", marginBottom: "1rem" }}>
                        Research Publications <span className="gradient-text">— Coming Soon</span>
                    </h2>
                    <p style={{ color: "var(--text-secondary)", maxWidth: "520px", margin: "0 auto 2rem" }}>
                        Mattera is preparing research publications for submission to peer-reviewed veterinary and
                        AI journals. Partnership enquiries from academic institutions are welcome.
                    </p>
                    <Link href="/research-collaboration" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                        Research Collaboration <ArrowRight size={15} />
                    </Link>
                </div>
            </section>
        </div>
    );
}

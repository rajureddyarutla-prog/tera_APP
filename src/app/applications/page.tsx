import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { fetchStrapi } from "@/lib/strapi";

export const metadata: Metadata = {
    title: "Applications — Companion Animals, Veterinary, Livestock & Performance",
    description:
        "Mattera Life Systems applications span companion animal health monitoring, veterinary clinical intelligence, livestock analytics, and performance animal diagnostics.",
};

interface Feature {
    title: string;
    detail: string;
}

interface Application {
    id: string;
    tag: string;
    color: string;
    headline: string;
    desc: string;
    features: Feature[];
}

export default async function ApplicationsPage() {
    const data = await fetchStrapi('applications-page');

    const tag_pill = data?.tag_pill || "Applications";
    const title = data?.title || "Cross-Segment Real-World Applications";
    const description = data?.description || "Mattera's intelligence infrastructure serves four distinct segments — delivering precision health monitoring across companion animals, veterinary clinics, livestock operations, and performance animals.";

    const applications: Application[] = data?.applications || [
        {
            id: "companion",
            tag: "Companion Animals",
            color: "#4FD1C5",
            headline: "Preventive Health Monitoring for Companion Animals",
            desc: "PawOS provides companion animal owners with a structured, longitudinal health intelligence layer — moving beyond reactive veterinary visits toward continuous, data-driven preventive care.",
            features: [
                { title: "Behavioral Awareness Scoring", detail: "Continuous analysis of activity patterns, sleep cycles, and behavioral deviations to identify early health changes." },
                { title: "Preventive Health Monitoring", detail: "Long-term health trajectory modeling with automated alerts for anomalies before symptoms appear." },
                { title: "Structured Longitudinal Records", detail: "Breed-normalized health records accumulated over time, providing rich context for veterinary consultations." },
                { title: "Diet & Activity Mapping", detail: "Structured logging and analysis of diet, activity, and environmental exposure correlated with health outcomes." },
            ],
        },
        {
            id: "veterinary",
            tag: "Veterinary Clinics",
            color: "#8FA7FF",
            headline: "Clinical Intelligence for Veterinary Professionals",
            desc: "Mattera enables veterinary clinics to access structured, longitudinal patient health data — enabling evidence-based decision support, early risk detection, and improved patient outcomes.",
            features: [
                { title: "Structured Patient History", detail: "Comprehensive longitudinal health records replacing fragmented, paper-based veterinary records." },
                { title: "Early Risk Alert Systems", detail: "Proactive notifications when patient health indicators approach anomaly thresholds requiring clinical attention." },
                { title: "Remote Monitoring Insights", detail: "Continuous patient health monitoring between clinic visits via PawOS behavior and wearable data streams." },
                { title: "Evidence-Based Decision Support", detail: "Population-level breed and species health baselines providing clinical reference context for individual patients." },
            ],
        },
        {
            id: "livestock",
            tag: "Livestock Operations",
            color: "#4FD1C5",
            headline: "Population-Scale Health Analytics for Livestock",
            desc: "For commercial livestock operators, Mattera provides population-scale behavioral monitoring enabling early strain detection, welfare analytics, and productivity health optimization.",
            features: [
                { title: "Strain & Overexertion Detection", detail: "Activity deviation scoring identifies early signs of physical overload and fatigue in working animal populations." },
                { title: "Productivity Health Scoring", detail: "Correlated health-productivity analytics enabling optimized work scheduling and welfare-driven management." },
                { title: "Welfare Analytics Dashboards", detail: "Population-level behavioral monitoring dashboards providing fleet-scale health oversight for large livestock operations." },
                { title: "Disease Outbreak Early Warning", detail: "Anomaly propagation detection across population behavioral patterns indicating emerging infectious or environmental health risks." },
            ],
        },
        {
            id: "performance",
            tag: "Performance Animals",
            color: "#8FA7FF",
            headline: "Precision Diagnostics for Performance & Equine Animals",
            desc: "High-value performance animals demand precision health monitoring. Mattera's gait analysis, movement symmetry modeling, and injury prevention systems serve equine athletes and performance animals.",
            features: [
                { title: "Gait Asymmetry Detection", detail: "Accelerometer-based analysis of step symmetry and movement phase deviation for early lameness identification." },
                { title: "Injury Prevention Modeling", detail: "Predictive risk scoring based on movement pattern deviation before catastrophic musculoskeletal injury occurs." },
                { title: "Performance Optimization", detail: "Health-performance correlation analytics enabling evidence-based training and recovery scheduling." },
                { title: "Orthopedic Early Detection", detail: "Longitudinal movement signature tracking to identify subtle deterioration in joint and limb function." },
            ],
        },
    ];

    return (
        <div style={{ background: "var(--bg-primary)" }}>
            {/* Hero */}
            <section className="section-pad grid-bg" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                <div className="section-container">
                    <div className="tag-pill" style={{ marginBottom: "1.5rem" }}>{tag_pill}</div>
                    <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", maxWidth: "700px", marginBottom: "1.25rem" }}>
                        {title}
                    </h1>
                    <p style={{ color: "var(--text-secondary)", maxWidth: "580px", lineHeight: 1.85, fontSize: "1.0625rem" }}>
                        {description}
                    </p>

                    {/* Segment tabs preview */}
                    <div style={{ display: "flex", gap: "0.75rem", marginTop: "2.5rem", flexWrap: "wrap" }}>
                        {applications.map((a) => (
                            <a
                                key={a.id}
                                href={`#${a.id}`}
                                style={{
                                    fontFamily: "'Sora', sans-serif",
                                    fontWeight: 600,
                                    fontSize: "0.8125rem",
                                    color: a.color,
                                    background: `${a.color}0F`,
                                    border: `1px solid ${a.color}28`,
                                    padding: "0.5rem 1.125rem",
                                    borderRadius: "100px",
                                    textDecoration: "none",
                                    transition: "all 0.2s",
                                }}
                            >
                                {a.tag}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application sections */}
            {applications.map((app, idx) => (
                <section
                    key={app.id}
                    id={app.id}
                    className="section-pad"
                    style={{ background: idx % 2 === 0 ? "var(--bg-secondary)" : "var(--bg-primary)" }}
                >
                    <div className="section-container">
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "5rem", alignItems: "start" }} className="grid-app">
                            <div>
                                <span
                                    style={{
                                        fontFamily: "'Sora', sans-serif",
                                        fontSize: "0.65rem",
                                        fontWeight: 700,
                                        letterSpacing: "0.12em",
                                        textTransform: "uppercase",
                                        color: app.color,
                                        background: `${app.color}10`,
                                        border: `1px solid ${app.color}28`,
                                        padding: "0.3rem 0.875rem",
                                        borderRadius: "100px",
                                        display: "inline-block",
                                        marginBottom: "1.25rem",
                                    }}
                                >
                                    {app.tag}
                                </span>
                                <h2 style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", marginBottom: "1.25rem" }}>
                                    {app.headline}
                                </h2>
                                <p style={{ color: "var(--text-secondary)", lineHeight: 1.85, fontSize: "0.9375rem" }}>
                                    {app.desc}
                                </p>
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                                {app.features.map((f) => (
                                    <div key={f.title} className="glass-card" style={{ padding: "1.5rem", borderColor: `${app.color}18` }}>
                                        <div
                                            style={{
                                                fontFamily: "'Sora', sans-serif",
                                                fontWeight: 700,
                                                fontSize: "0.875rem",
                                                color: app.color,
                                                marginBottom: "0.625rem",
                                                lineHeight: 1.3,
                                            }}
                                        >
                                            {f.title}
                                        </div>
                                        <p style={{ color: "var(--text-secondary)", fontSize: "0.8125rem", lineHeight: 1.7 }}>{f.detail}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <style>{`@media (max-width: 900px) { .grid-app { grid-template-columns: 1fr !important; gap: 3rem !important; } }`}</style>
                </section>
            ))}

            <hr className="glow-divider" />

            {/* CTA */}
            <section className="section-pad" style={{ textAlign: "center" }}>
                <div className="section-container">
                    <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", marginBottom: "1rem" }}>
                        Explore the <span className="gradient-text">Platform Enabling These Applications</span>
                    </h2>
                    <p style={{ color: "var(--text-secondary)", marginBottom: "2rem", maxWidth: "500px", margin: "0 auto 2rem" }}>
                        PawOS is the live intelligence platform powering all application segments.
                    </p>
                    <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                        <Link href="/platform" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                            Platform Details <ArrowRight size={15} />
                        </Link>
                        <Link href="/contact" className="btn-ghost" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                            Partnership Enquiry <ArrowRight size={15} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

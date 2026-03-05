import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Grants & Research Collaboration — Mattera Life Systems",
    description:
        "Research partnerships, grant programs, and academic collaborations with Mattera Life Systems. TRL framework documentation for grant reviewers and research institutions.",
};

const trlData = [
    { level: "TRL 3", label: "Concept Validation & Algorithm Research", achieved: true, color: "#4FD1C5", pct: 100 },
    { level: "TRL 4", label: "Software Prototype — PawOS Platform", achieved: true, color: "#4FD1C5", pct: 100 },
    { level: "TRL 5", label: "Integrated Wearable Prototype (Target)", achieved: false, color: "#8FA7FF", pct: 40 },
    { level: "TRL 6", label: "Pilot Deployments in Research Environments (Future)", achieved: false, color: "var(--text-muted)", pct: 5 },
];

const grantAreas = [
    { title: "AI for Animal Health", desc: "Research grants advancing AI applications in veterinary diagnostics and disease prevention.", tag: "AI / Veterinary" },
    { title: "Precision Livestock Farming", desc: "Agricultural innovation grants for technology-driven livestock health and productivity monitoring.", tag: "Agriculture" },
    { title: "Animal Behavioral Research", desc: "Behavioral science grants funding longitudinal observation and anomaly detection methodology development.", tag: "Behavioral Science" },
    { title: "Wearable Health Devices", desc: "Hardware R&D grants for low-power wearable sensor development targeting animal health applications.", tag: "Hardware / IoT" },
];

const partnerTypes = [
    { title: "Veterinary Academic Institutions", desc: "Collaboration with veterinary schools on clinical validation studies, behavioral dataset development, and research methodology peer review.", color: "#4FD1C5" },
    { title: "Agricultural Universities", desc: "Research partnerships on livestock health monitoring, precision farming analytics, and population-scale animal behavioral studies.", color: "#8FA7FF" },
    { title: "AI & Robotics Research Labs", desc: "Technical collaborations on sensor fusion algorithms, edge inference models, and machine learning methodologies for animal health data.", color: "#4FD1C5" },
    { title: "Veterinary Clinics", desc: "Clinical pilot programs to validate PawOS health scoring models with real-world patient data and professional veterinary feedback.", color: "#8FA7FF" },
];

export default function GrantsPage() {
    return (
        <div style={{ background: "var(--bg-primary)" }}>
            {/* Hero */}
            <section className="section-pad grid-bg" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                <div className="section-container">
                    <div className="tag-pill" style={{ marginBottom: "1.5rem" }}>Grants & Collaborations</div>
                    <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", maxWidth: "720px", marginBottom: "1.25rem" }}>
                        Research Partnerships &{" "}
                        <span className="gradient-text">Grant Programs</span>
                    </h1>
                    <p style={{ color: "var(--text-secondary)", maxWidth: "580px", lineHeight: 1.85, fontSize: "1.0625rem" }}>
                        Mattera Life Systems actively seeks research collaborations with veterinary institutions,
                        agricultural universities, and AI research labs — and is eligible for and pursuing grant
                        funding across AI, veterinary science, and precision agriculture domains.
                    </p>
                </div>
            </section>

            {/* Research Partnerships */}
            <section className="section-pad" style={{ background: "var(--bg-secondary)" }}>
                <div className="section-container">
                    <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                        <div className="tag-pill" style={{ marginBottom: "1rem" }}>Research Partnerships</div>
                        <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>
                            Partner Institution <span className="gradient-text">Categories</span>
                        </h2>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem" }} className="partner-grid">
                        {partnerTypes.map((p) => (
                            <div key={p.title} className="glass-card" style={{ padding: "2rem", borderColor: `${p.color}18` }}>
                                <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1rem", color: p.color, marginBottom: "0.875rem" }}>
                                    {p.title}
                                </div>
                                <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.75 }}>{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <style>{`@media (max-width: 768px) { .partner-grid { grid-template-columns: 1fr !important; } }`}</style>
            </section>

            <hr className="glow-divider" />

            {/* Grant Programs */}
            <section className="section-pad">
                <div className="section-container">
                    <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                        <div className="tag-pill" style={{ marginBottom: "1rem" }}>Grant Eligibility</div>
                        <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>
                            Applicable <span className="gradient-text">Grant Program Areas</span>
                        </h2>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem" }} className="grant-grid">
                        {grantAreas.map((g) => (
                            <div key={g.title} className="glass-card" style={{ padding: "2rem" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                                    <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1rem" }}>{g.title}</h3>
                                    <span
                                        style={{
                                            fontSize: "0.65rem",
                                            fontWeight: 700,
                                            letterSpacing: "0.08em",
                                            color: "#4FD1C5",
                                            background: "rgba(79,209,197,0.08)",
                                            border: "1px solid rgba(79,209,197,0.2)",
                                            padding: "0.15rem 0.6rem",
                                            borderRadius: "100px",
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        {g.tag}
                                    </span>
                                </div>
                                <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.75 }}>{g.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <style>{`@media (max-width: 768px) { .grant-grid { grid-template-columns: 1fr !important; } }`}</style>
            </section>

            <hr className="glow-divider" />

            {/* TRL Framework — for grant reviewers */}
            <section className="section-pad" style={{ background: "var(--bg-secondary)" }}>
                <div className="section-container">
                    <div style={{ marginBottom: "3rem" }}>
                        <div className="tag-pill" style={{ marginBottom: "1rem" }}>Grant Technical Annexure</div>
                        <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", marginBottom: "0.875rem" }}>
                            Technology Readiness Level <span className="gradient-text">Framework</span>
                        </h2>
                        <p style={{ color: "var(--text-secondary)", maxWidth: "560px", lineHeight: 1.8 }}>
                            This section is designed for grant reviewers and research institutions evaluating
                            Mattera's technology maturity and research trajectory.
                        </p>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "760px" }}>
                        {trlData.map((t) => (
                            <div key={t.level} className="glass-card" style={{ padding: "2rem" }}>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem", flexWrap: "wrap", gap: "1rem" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                        <span
                                            style={{
                                                fontFamily: "'Sora', sans-serif",
                                                fontWeight: 800,
                                                fontSize: "0.875rem",
                                                color: t.achieved ? "#4FD1C5" : "#8FA7FF",
                                                background: t.achieved ? "rgba(79,209,197,0.1)" : "rgba(143,167,255,0.08)",
                                                border: `1px solid ${t.achieved ? "rgba(79,209,197,0.25)" : "rgba(143,167,255,0.2)"}`,
                                                padding: "0.3rem 0.875rem",
                                                borderRadius: "100px",
                                            }}
                                        >
                                            {t.level}
                                        </span>
                                        <span style={{ color: "var(--text-primary)", fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: "0.9375rem" }}>
                                            {t.label}
                                        </span>
                                    </div>
                                    <span
                                        style={{
                                            fontSize: "0.75rem",
                                            fontWeight: 600,
                                            color: t.achieved ? "#4FD1C5" : t.pct > 10 ? "#8FA7FF" : "var(--text-muted)",
                                        }}
                                    >
                                        {t.achieved ? "✓ Achieved" : t.pct > 10 ? "In Progress" : "Planned"}
                                    </span>
                                </div>
                                <div style={{ height: "5px", background: "rgba(255,255,255,0.05)", borderRadius: "3px", overflow: "hidden" }}>
                                    <div style={{ height: "100%", width: `${t.pct}%`, background: t.achieved ? "linear-gradient(90deg, #4FD1C5, #8FA7FF)" : t.pct > 10 ? "linear-gradient(90deg, #8FA7FF, #6b8aff)" : "rgba(255,255,255,0.1)", borderRadius: "3px" }} />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Validation pathways */}
                    <div style={{ marginTop: "3.5rem" }}>
                        <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1.125rem", marginBottom: "1.5rem" }}>
                            Validation Pathways
                        </h3>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }} className="val-grid">
                            {[
                                { title: "Veterinary Academic Partnerships", desc: "Controlled validation studies with veterinary institutions." },
                                { title: "Behavioral Dataset Validation", desc: "Statistical validation of anomaly detection accuracy." },
                                { title: "Wearable Pilot Deployments", desc: "Signal reliability and calibration testing in real environments." },
                                { title: "Anomaly Detection Accuracy", desc: "Precision metrics across breed and species groups." },
                                { title: "Early Detection Precision", desc: "Evaluation metrics for pre-symptomatic indicator accuracy." },
                                { title: "Signal Reliability Studies", desc: "Cross-device, cross-environment sensor validation." },
                            ].map((v) => (
                                <div key={v.title} className="glass-card" style={{ padding: "1.25rem" }}>
                                    <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: "0.875rem", color: "#4FD1C5", marginBottom: "0.5rem" }}>{v.title}</div>
                                    <div style={{ color: "var(--text-muted)", fontSize: "0.8rem", lineHeight: 1.6 }}>{v.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <style>{`@media (max-width: 768px) { .val-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 480px) { .val-grid { grid-template-columns: 1fr !important; } }`}</style>
            </section>

            <hr className="glow-divider" />

            {/* CTA */}
            <section className="section-pad" style={{ textAlign: "center" }}>
                <div className="section-container">
                    <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", marginBottom: "1rem" }}>
                        Initiate a <span className="gradient-text">Research Collaboration</span>
                    </h2>
                    <p style={{ color: "var(--text-secondary)", marginBottom: "2rem", maxWidth: "500px", margin: "0 auto 2rem" }}>
                        Mattera welcomes research partnerships with academic institutions, veterinary schools, and grant programs.
                    </p>
                    <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                        <Link href="/contact" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                            Collaboration Enquiry <ArrowRight size={15} />
                        </Link>
                        <Link href="/research" className="btn-ghost" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                            Research Overview <ArrowRight size={15} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

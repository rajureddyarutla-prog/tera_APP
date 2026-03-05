import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Mail, ExternalLink } from "lucide-react";

// All hover interactions handled via CSS class, no JS event handlers needed

export const metadata: Metadata = {
    title: "Company — About Mattera Life Systems",
    description:
        "About Mattera Life Systems — mission, vision, global presence, and the team building predictive health intelligence infrastructure for animals.",
};

const values = [
    { title: "Infrastructure-First Thinking", desc: "We build foundational platforms, not point solutions. Every decision prioritizes long-term data accumulation and structural defensibility.", color: "#4FD1C5" },
    { title: "Research-Driven Development", desc: "Product decisions are grounded in scientific methodology, validated datasets, and peer-reviewed animal health research.", color: "#8FA7FF" },
    { title: "Multi-Species Scope", desc: "Our infrastructure is designed to scale across companion animals, working animals, and livestock — not limited to a single segment.", color: "#4FD1C5" },
    { title: "Cross-Domain Synthesis", desc: "We integrate AI, veterinary science, behavioral analytics, and embedded hardware — requiring deep expertise across domains.", color: "#8FA7FF" },
];

export default function CompanyPage() {
    return (
        <div style={{ background: "var(--bg-primary)" }}>
            {/* Hero */}
            <section className="section-pad grid-bg" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                <div className="section-container">
                    <div className="tag-pill" style={{ marginBottom: "1.5rem" }}>About</div>
                    <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", maxWidth: "720px", marginBottom: "1.25rem" }}>
                        Building the Missing{" "}
                        <span className="gradient-text">Intelligence Infrastructure</span>{" "}
                        for Animals
                    </h1>
                    <p style={{ color: "var(--text-secondary)", maxWidth: "600px", lineHeight: 1.85, fontSize: "1.0625rem" }}>
                        Mattera Life Systems Private Limited is a research and technology company based in
                        India with operations in the United States — engineering predictive health intelligence
                        infrastructure for animals across species and environments.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section-pad" style={{ background: "var(--bg-secondary)" }}>
                <div className="section-container">
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "stretch" }} className="grid-2col">
                        <div className="glass-card" style={{ padding: "2.5rem", borderColor: "rgba(79,209,197,0.2)" }}>
                            <div style={{ fontFamily: "'Sora', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#4FD1C5", marginBottom: "1rem" }}>
                                Mission
                            </div>
                            <h2 style={{ fontSize: "1.375rem", marginBottom: "1rem", lineHeight: 1.35 }}>
                                Build Predictive Health Intelligence Infrastructure for Animals
                            </h2>
                            <p style={{ color: "var(--text-secondary)", lineHeight: 1.85, fontSize: "0.9375rem" }}>
                                To develop the foundational AI infrastructure layer that enables continuous health
                                monitoring, early disease detection, and predictive health modeling across all
                                animal species and environments — closing the gap between observation and intelligence
                                in animal healthcare.
                            </p>
                        </div>
                        <div className="glass-card" style={{ padding: "2.5rem", borderColor: "rgba(143,167,255,0.18)" }}>
                            <div style={{ fontFamily: "'Sora', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8FA7FF", marginBottom: "1rem" }}>
                                Vision
                            </div>
                            <h2 style={{ fontSize: "1.375rem", marginBottom: "1rem", lineHeight: 1.35 }}>
                                Continuous Health Monitoring Infrastructure for All Animals
                            </h2>
                            <p style={{ color: "var(--text-secondary)", lineHeight: 1.85, fontSize: "0.9375rem" }}>
                                A world where animal health is monitored continuously, diseases are identified before
                                symptoms appear, and every veterinary decision is supported by structured longitudinal
                                intelligence — regardless of species, region, or economic context.
                            </p>
                        </div>
                    </div>
                </div>
                <style>{`@media (max-width: 768px) { .grid-2col { grid-template-columns: 1fr !important; gap: 1.5rem !important; } }`}</style>
            </section>

            <hr className="glow-divider" />

            {/* Company Profile */}
            <section className="section-pad">
                <div className="section-container">
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="grid-2col">
                        <div>
                            <div className="tag-pill" style={{ marginBottom: "1.5rem" }}>Company Profile</div>
                            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", marginBottom: "1.25rem" }}>
                                Mattera Life Systems{" "}
                                <span className="gradient-text">Private Limited</span>
                            </h2>
                            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                                {[
                                    { label: "Entity Type", value: "Private Limited Company" },
                                    { label: "Jurisdiction", value: "India (with US Operations)" },
                                    { label: "Domain", value: "matteralifesystems.com" },
                                    { label: "Product Platform", value: "pawos.app" },
                                    { label: "Contact", value: "contact@matteralifesystems.com" },
                                    { label: "Stage", value: "Early-Stage Deep-Tech / Research" },
                                ].map((row) => (
                                    <div key={row.label} style={{ display: "flex", justifyContent: "space-between", padding: "0.875rem 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                                        <span style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>{row.label}</span>
                                        <span style={{ color: "var(--text-primary)", fontFamily: "'Sora', sans-serif", fontWeight: 500, fontSize: "0.875rem" }}>{row.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                            {values.map((v) => (
                                <div key={v.title} className="glass-card" style={{ padding: "1.5rem", borderColor: `${v.color}18` }}>
                                    <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "0.9375rem", color: v.color, marginBottom: "0.5rem" }}>{v.title}</div>
                                    <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.7 }}>{v.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <hr className="glow-divider" />

            {/* Global Presence */}
            <section className="section-pad" style={{ background: "var(--bg-secondary)" }}>
                <div className="section-container">
                    <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                        <div className="tag-pill" style={{ marginBottom: "1rem" }}>Global Presence</div>
                        <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>
                            Dual-Location <span className="gradient-text">Operations</span>
                        </h2>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", maxWidth: "900px", margin: "0 auto" }} className="location-grid">
                        {[
                            {
                                location: "Hyderabad, India",
                                role: "Research, Engineering & Product Development Hub",
                                color: "#4FD1C5",
                                details: [
                                    "Core engineering team",
                                    "AI & data science research",
                                    "PawOS product development",
                                    "Hardware R&D coordination",
                                ],
                            },
                            {
                                location: "United States",
                                role: "Strategic Operations & Global Expansion",
                                color: "#8FA7FF",
                                details: [
                                    "Strategic partnerships",
                                    "Investor relations",
                                    "Global research collaborations",
                                    "International expansion base",
                                ],
                            },
                        ].map((loc) => (
                            <div key={loc.location} className="glass-card" style={{ padding: "2.5rem", borderColor: `${loc.color}20` }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.875rem" }}>
                                    <MapPin size={16} color={loc.color} />
                                    <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1.0625rem", color: loc.color }}>
                                        {loc.location}
                                    </span>
                                </div>
                                <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", marginBottom: "1.5rem", lineHeight: 1.7 }}>{loc.role}</p>
                                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                    {loc.details.map((d) => (
                                        <div key={d} style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                                            <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: loc.color, flexShrink: 0 }} />
                                            <span style={{ color: "var(--text-muted)", fontSize: "0.8125rem" }}>{d}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <style>{`@media (max-width: 768px) { .location-grid { grid-template-columns: 1fr !important; } }`}</style>
            </section>

            <hr className="glow-divider" />

            {/* Leadership & Careers placeholders */}
            <section className="section-pad">
                <div className="section-container">
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }} className="grid-2col">
                        {[
                            { title: "Leadership Team", desc: "Leadership profiles will be published as the company scales. For enquiries, contact contact@matteralifesystems.com", color: "#4FD1C5" },
                            { title: "Careers", desc: "Mattera is building its core research and engineering team. Open roles will be published here as positions become available.", color: "#8FA7FF" },
                        ].map((section) => (
                            <div key={section.title} className="glass-card" style={{ padding: "2.5rem", textAlign: "center" }}>
                                <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1.125rem", marginBottom: "0.875rem", color: section.color }}>
                                    {section.title}
                                </div>
                                <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>{section.desc}</p>
                                <Link href="/contact" className="btn-ghost" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8125rem" }}>
                                    Get in touch <ArrowRight size={13} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <hr className="glow-divider" />

            {/* CTA */}
            <section className="section-pad" style={{ background: "var(--bg-secondary)", textAlign: "center" }}>
                <div className="section-container">
                    <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", marginBottom: "1rem" }}>
                        Connect with <span className="gradient-text">Mattera Life Systems</span>
                    </h2>
                    <p style={{ color: "var(--text-secondary)", marginBottom: "2rem", maxWidth: "460px", margin: "0 auto 2rem" }}>
                        Investment discussions, research partnerships, veterinary collaborations, and hardware development enquiries.
                    </p>
                    <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                        <Link href="/contact" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                            <Mail size={14} /> Contact Us
                        </Link>
                        <a href="https://pawos.app" target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                            Access PawOS <ExternalLink size={14} />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

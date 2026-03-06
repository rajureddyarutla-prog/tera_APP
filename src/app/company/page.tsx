import type { Metadata } from "next";
import { Zap, Shield, Search, Globe, Mail, MapPin } from "lucide-react";
import { fetchStrapi } from "@/lib/strapi";

export const metadata: Metadata = {
    title: "Company — Mattera Life Systems",
    description: "Mattera Life Systems Private Limited is a research and technology company engineering predictive health intelligence infrastructure for animals.",
};

interface ProfileRow {
    label: string;
    value: string;
}

interface ValueCard {
    title: string;
    desc: string;
    color: string;
}

interface LocationBox {
    location: string;
    role: string;
    color: string;
    details: string[];
}

const iconMap: Record<string, any> = {
    Zap,
    Shield,
    Search,
    Globe
};

export default async function CompanyPage() {
    const data = await fetchStrapi('company-page');

    const tag_pill = data?.tag_pill || "About";
    const title = data?.title || "Building the Missing Intelligence Infrastructure for Animals";
    const description = data?.description || "Mattera Life Systems Private Limited is a research and technology company based in India with operations in the United States — engineering predictive health intelligence infrastructure for animals across species and environments.";

    const mission = data?.mission || {
        title: "Mission",
        h2: "Build Predictive Health Intelligence Infrastructure for Animals",
        desc: "To develop the foundational AI infrastructure layer that enables continuous health monitoring, early disease detection, and predictive health modeling across all animal species and environments."
    };

    const vision = data?.vision || {
        title: "Vision",
        h2: "Continuous Health Monitoring Infrastructure for All Animals",
        desc: "A world where animal health is monitored continuously, diseases are identified before symptoms appear, and every veterinary decision is supported by structured longitudinal intelligence."
    };

    const profile_rows: ProfileRow[] = data?.profile_rows || [
        { label: "Entity Type", value: "Private Limited Company" },
        { label: "Jurisdiction", value: "India (with US Operations)" },
        { label: "Domain", value: "matteralifesystems.com" },
        { label: "Product Platform", value: "pawos.app" },
        { label: "Contact", value: "contact@matteralifesystems.com" },
        { label: "Stage", value: "Early-Stage Deep-Tech / Research" },
    ];

    const values: ValueCard[] = data?.values || [
        { title: "Infrastructure-First Thinking", desc: "We build foundational platforms, not point solutions. Every decision prioritizes long-term data accumulation and structural defensibility.", color: "#4FD1C5" },
        { title: "Research-Driven Development", desc: "Product decisions are grounded in scientific methodology, validated datasets, and peer-reviewed animal health research.", color: "#8FA7FF" },
        { title: "Multi-Species Scope", desc: "Our infrastructure is designed to scale across companion animals, working animals, and livestock — not limited to a single segment.", color: "#4FD1C5" },
        { title: "Cross-Domain Synthesis", desc: "We integrate AI, veterinary science, behavioral analytics, and embedded hardware — requiring deep expertise across domains.", color: "#8FA7FF" },
    ];

    const locations: LocationBox[] = data?.locations || [];

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

            {/* Mission / Vision */}
            <section className="section-pad">
                <div className="section-container">
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }} className="mv-grid">
                        <div className="glass-card" style={{ padding: "3rem 2.5rem", borderLeft: "4px solid var(--accent-teal)" }}>
                            <div className="tag-pill" style={{ marginBottom: "1.5rem", color: "var(--accent-teal)", borderColor: "var(--border-subtle)", background: "var(--bg-pill)" }}>{mission.title}</div>
                            <h2 style={{ fontSize: "1.5rem", marginBottom: "1.25rem", fontFamily: "'Sora', sans-serif" }}>{mission.h2}</h2>
                            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "0.9375rem" }}>{mission.desc}</p>
                        </div>
                        <div className="glass-card" style={{ padding: "3rem 2.5rem", borderLeft: "4px solid var(--accent-blue)" }}>
                            <div className="tag-pill" style={{ marginBottom: "1.5rem", color: "var(--accent-blue)", borderColor: "var(--border-subtle)", background: "var(--bg-pill)" }}>{vision.title}</div>
                            <h2 style={{ fontSize: "1.5rem", marginBottom: "1.25rem", fontFamily: "'Sora', sans-serif" }}>{vision.h2}</h2>
                            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "0.9375rem" }}>{vision.desc}</p>
                        </div>
                    </div>
                </div>
                <style>{`@media (max-width: 800px) { .mv-grid { grid-template-columns: 1fr !important; } }`}</style>
            </section>

            {/* Company Profile */}
            <section className="section-pad" style={{ background: "var(--bg-secondary)" }}>
                <div className="section-container">
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "5rem", alignItems: "center" }} className="profile-grid">
                        <div>
                            <div className="tag-pill" style={{ marginBottom: "1rem" }}>Entity Profile</div>
                            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", marginBottom: "1.5rem" }}>
                                Mattera Life Systems <span className="gradient-text">Private Limited</span>
                            </h2>
                            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "2rem" }}>
                                Registered in India with ongoing global operations, Mattera operates as a research-intensive
                                technology firm focused on animal health infrastructure.
                            </p>
                        </div>
                        <div className="glass-card" style={{ padding: "2rem" }}>
                            {profile_rows.map((row, i) => (
                                <div key={row.label} style={{ display: "flex", justifyContent: "space-between", padding: "1rem 0", borderBottom: i < profile_rows.length - 1 ? "1px solid var(--border-subtle)" : "none" }}>
                                    <span style={{ color: "var(--text-muted)", fontSize: "0.875rem", fontWeight: 600 }}>{row.label}</span>
                                    <span style={{ color: "var(--text-primary)", fontSize: "0.875rem", fontWeight: 700, textAlign: "right", fontFamily: "'Sora', sans-serif" }}>{row.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <style>{`@media (max-width: 900px) { .profile-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } }`}</style>
            </section>

            {/* Values */}
            <section className="section-pad">
                <div className="section-container">
                    <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                        <div className="tag-pill" style={{ marginBottom: "1rem" }}>Core Principles</div>
                        <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>The Mattera <span className="gradient-text">Ethos</span></h2>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }} className="values-grid">
                        {values.map((v) => (
                            <div key={v.title} className="glass-card" style={{ padding: "2rem", borderColor: `${v.color}15` }}>
                                <div style={{ fontSize: "0.9375rem", fontWeight: 800, color: v.color, marginBottom: "0.875rem", fontFamily: "'Sora', sans-serif" }}>{v.title}</div>
                                <p style={{ color: "var(--text-secondary)", fontSize: "0.8125rem", lineHeight: 1.75 }}>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <style>{`@media (max-width: 1100px) { .values-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 600px) { .values-grid { grid-template-columns: 1fr !important; } }`}</style>
            </section>

            {/* Presence */}
            <section className="section-pad" style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border-subtle)" }}>
                <div className="section-container">
                    <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                        <div className="tag-pill" style={{ marginBottom: "1rem" }}>Presence</div>
                        <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>Global <span className="gradient-text">Reach</span></h2>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }} className="presence-grid">
                        {locations.map((loc) => (
                            <div key={loc.location} className="glass-card" style={{ padding: "2.5rem" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                                    <MapPin size={20} color={loc.color} />
                                    <h3 style={{ fontSize: "1.25rem", fontWeight: 700, fontFamily: "'Sora', sans-serif" }}>{loc.location}</h3>
                                </div>
                                <div style={{ fontWeight: 600, color: loc.color, fontSize: "0.875rem", marginBottom: "1rem" }}>{loc.role}</div>
                                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                                    {loc.details.map((d) => (
                                        <li key={d} style={{ fontSize: "0.8125rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                            <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: loc.color }} />
                                            {d}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <style>{`@media (max-width: 800px) { .presence-grid { grid-template-columns: 1fr !important; } }`}</style>
            </section>

            {/* Careers Placeholder */}
            <section className="section-pad" style={{ textAlign: "center" }}>
                <div className="section-container">
                    <div className="glass-card" style={{ padding: "4rem 2rem", background: "var(--bg-subtle)" }}>
                        <h2 style={{ marginBottom: "1rem" }}>Careers at <span className="gradient-text">Mattera</span></h2>
                        <p style={{ color: "var(--text-secondary)", maxWidth: "500px", margin: "0 auto 2rem" }}>
                            We are occasionally looking for deep-tech researchers and engineering talent.
                            Send your credentials to <strong style={{ color: "var(--accent-teal)" }}>contact@matteralifesystems.com</strong>
                        </p>
                        <a href="mailto:contact@matteralifesystems.com" className="btn-primary">Get in Touch</a>
                    </div>
                </div>
            </section>
        </div>
    );
}

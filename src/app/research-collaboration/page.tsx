import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Microscope, FlaskConical, Award, BookOpen, CheckCircle } from "lucide-react";
import { fetchStrapi } from "@/lib/strapi";

export const metadata: Metadata = {
    title: "Research Collaboration — Grants & Partnerships",
    description: "Mattera Life Systems actively seeks research collaborations with veterinary institutions, agricultural universities, and AI research labs.",
};

interface PartnerCategory {
    title: string;
    desc: string;
    color: string;
}

interface GrantArea {
    title: string;
    desc: string;
    tag: string;
}

interface TRLFramework {
    level: string;
    label: string;
    achieved: boolean;
    color: string;
    pct: number;
}

interface ValidationPathway {
    title: string;
    desc: string;
}

export default async function ResearchCollaborationPage() {
    const data = await fetchStrapi('research-collaboration-page');

    const tag_pill = data?.tag_pill || "Grants & Collaborations";
    const title = data?.title || "Research Partnerships & Grant Programs";
    const description = data?.description || "Mattera Life Systems actively seeks research collaborations with veterinary institutions, agricultural universities, and AI research labs — and is eligible for and pursuing grant funding across AI, veterinary science, and precision agriculture domains.";

    // New Roadmap Section from Strapi
    const roadmap = data?.roadmap_section || {
        badge: "Roadmap",
        title: "Scientific Validation Pathways"
    };

    const partner_categories: PartnerCategory[] = data?.partner_categories || [
        { title: "Veterinary Academic Institutions", desc: "Collaboration with veterinary schools on clinical validation studies, behavioral dataset development, and research methodology peer review.", color: "#4FD1C5" },
        { title: "Agricultural Universities", desc: "Research partnerships on livestock health monitoring, precision farming analytics, and population-scale animal behavioral studies.", color: "#8FA7FF" },
        { title: "AI & Robotics Research Labs", desc: "Technical collaborations on sensor fusion algorithms, edge inference models, and machine learning methodologies for animal health data.", color: "#4FD1C5" },
        { title: "Veterinary Clinics", desc: "Clinical pilot programs to validate PawOS health scoring models with real-world patient data and professional veterinary feedback.", color: "#8FA7FF" },
    ];

    const grant_areas: GrantArea[] = data?.grant_areas || [
        { title: "AI for Animal Health", desc: "Research grants advancing AI applications in veterinary diagnostics and disease prevention.", tag: "AI / Veterinary" },
        { title: "Precision Livestock Farming", desc: "Agricultural innovation grants for technology-driven livestock health and productivity monitoring.", tag: "Agriculture" },
        { title: "Animal Behavioral Research", desc: "Behavioral science grants funding longitudinal observation and anomaly detection methodology development.", tag: "Behavioral Science" },
        { title: "Wearable Health Devices", desc: "Hardware R&D grants for low-power wearable sensor development targeting animal health applications.", tag: "Hardware / IoT" },
    ];

    const trl_framework: TRLFramework[] = data?.trl_framework || [
        { level: "TRL 3", label: "Concept Validation & Algorithm Research", achieved: true, color: "#4FD1C5", pct: 100 },
        { level: "TRL 4", label: "Software Prototype — PawOS Platform", achieved: true, color: "#4FD1C5", pct: 100 },
        { level: "TRL 5", label: "Integrated Wearable Prototype (Target)", achieved: false, color: "#8FA7FF", pct: 40 },
        { level: "TRL 6", label: "Pilot Deployments in Research Environments (Future)", achieved: false, color: "var(--text-muted)", pct: 5 },
    ];

    const validation_pathways: ValidationPathway[] = data?.validation_pathways || [
        { title: "Veterinary Academic Partnerships", desc: "Controlled validation studies with veterinary institutions." },
        { title: "Behavioral Dataset Validation", desc: "Statistical validation of anomaly detection accuracy." },
        { title: "Wearable Pilot Deployments", desc: "Signal reliability and calibration testing in real environments." },
        { title: "Anomaly Detection Accuracy", desc: "Precision metrics across breed and species groups." },
        { title: "Early Detection Precision", desc: "Evaluation metrics for pre-symptomatic indicator accuracy." },
        { title: "Signal Reliability Studies", desc: "Cross-device, cross-environment sensor validation." },
    ];

    return (
        <div style={{ background: "var(--bg-primary)" }}>
            {/* Hero */}
            <section className="section-pad grid-bg" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                <div className="section-container">
                    <div className="tag-pill" style={{ marginBottom: "1.5rem" }}>{tag_pill}</div>
                    <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", maxWidth: "800px", marginBottom: "1.25rem" }}>
                        {title}
                    </h1>
                    <p style={{ color: "var(--text-secondary)", maxWidth: "650px", lineHeight: 1.85, fontSize: "1.0625rem" }}>
                        {description}
                    </p>
                </div>
            </section>

            {/* Partner Categories */}
            <section className="section-pad">
                <div className="section-container">
                    <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                        <div className="tag-pill" style={{ marginBottom: "1rem" }}>Collaboration</div>
                        <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)" }}>Strategic Partnership <span className="gradient-text">Targets</span></h2>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }} className="partner-grid">
                        {partner_categories.map((p) => (
                            <div key={p.title} className="glass-card" style={{ padding: "3rem", borderTop: `4px solid ${p.color}` }}>
                                <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>{p.title}</h3>
                                <p style={{ color: "var(--text-muted)", fontSize: "0.9375rem", lineHeight: 1.75 }}>{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <style>{`@media (max-width: 900px) { .partner-grid { grid-template-columns: 1fr !important; } }`}</style>
            </section>

            {/* Grants Section */}
            <section className="section-pad" style={{ background: "var(--bg-secondary)" }}>
                <div className="section-container">
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "5rem", alignItems: "start" }} className="grant-grid">
                        <div>
                            <div className="tag-pill" style={{ marginBottom: "1.5rem" }}>Funding</div>
                            <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>Grant Eligibility & Purpose</h2>
                            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "2rem" }}>
                                Mattera's research roadmap aligns with global grant priorities in AI, agricultural technology,
                                and animal welfare. We pursue non-dilutive funding to accelerate foundational science.
                            </p>
                            <Link href="/contact" className="btn-ghost" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                                Partnership Enquiry <ArrowRight size={15} />
                            </Link>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }} className="grant-subgrid">
                            {grant_areas.map((g) => (
                                <div key={g.title} className="glass-card" style={{ padding: "1.75rem" }}>
                                    <div style={{ fontSize: "0.65rem", fontWeight: 800, color: "#8FA7FF", textTransform: "uppercase", marginBottom: "0.75rem" }}>{g.tag}</div>
                                    <h4 style={{ fontSize: "0.9375rem", marginBottom: "0.75rem" }}>{g.title}</h4>
                                    <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{g.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <style>{`
                    @media (max-width: 1000px) { .grant-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } }
                    @media (max-width: 600px) { .grant-subgrid { grid-template-columns: 1fr !important; } }
                `}</style>
            </section>

            {/* Validation Pathway */}
            <section className="section-pad">
                <div className="section-container">
                    <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                        <div className="tag-pill" style={{ marginBottom: "1rem" }}>{roadmap.badge}</div>
                        <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)" }}>{roadmap.title}</h2>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "5rem" }} className="validation-grid">
                        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                            {trl_framework.map((t) => (
                                <div key={t.level} className="glass-card" style={{ padding: "2rem", display: "flex", gap: "1.5rem", alignItems: "center", opacity: t.achieved ? 1 : 0.6 }}>
                                    <div style={{ minWidth: "60px", textAlign: "center" }}>
                                        <div style={{ fontSize: "0.75rem", fontWeight: 800, color: t.color }}>{t.level}</div>
                                        <div style={{ fontSize: "0.6rem", color: "var(--text-muted)" }}>{t.pct}%</div>
                                    </div>
                                    <div style={{ height: "40px", width: "1px", background: "var(--border-subtle)" }} />
                                    <div>
                                        <div style={{ fontSize: "0.9375rem", fontWeight: 700, marginBottom: "0.25rem", color: t.achieved ? "var(--text-primary)" : "var(--text-muted)" }}>{t.label}</div>
                                        {t.achieved && <div style={{ fontSize: "0.65rem", color: "#4FD1C5", display: "flex", alignItems: "center", gap: "0.25rem" }}><CheckCircle size={10} /> Milestone Achieved</div>}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="glass-card" style={{ padding: "3rem" }}>
                            <h3 style={{ fontSize: "1.125rem", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                                <BookOpen size={20} style={{ color: "#4FD1C5" }} /> Validation Targets
                            </h3>
                            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                                {validation_pathways.map((v) => (
                                    <div key={v.title}>
                                        <div style={{ fontSize: "0.875rem", fontWeight: 700, marginBottom: "0.25rem" }}>{v.title}</div>
                                        <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", lineHeight: 1.5 }}>{v.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <style>{`@media (max-width: 1000px) { .validation-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } }`}</style>
            </section>
        </div>
    );
}

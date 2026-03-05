import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Investors — Market Opportunity & Defensibility",
    description:
        "Mattera Life Systems investor information: global animal health market opportunity, data and algorithmic moats, IP roadmap, and venture-scale growth strategy.",
};

const moats = [
    {
        title: "Data Moat",
        color: "#4FD1C5",
        desc: "Longitudinal animal health datasets combining behavioral signals, environmental exposure, and physiological indicators — creating proprietary datasets difficult for competitors to replicate.",
        items: ["Behavioral signal archives", "Cross-species longitudinal records", "Environmental health context data", "Breed-stratified health baselines"],
    },
    {
        title: "Algorithmic Moat",
        color: "#8FA7FF",
        desc: "Purpose-built algorithms for behavioral anomaly detection, multi-signal health scoring, and breed-specific baseline modeling that improve continuously as data accumulates.",
        items: ["Behavioral anomaly detection models", "Multi-signal health scoring", "Breed-specific baseline algorithms", "Predictive risk indices"],
    },
    {
        title: "Hardware Integration",
        color: "#4FD1C5",
        desc: "Integration between proprietary wearable devices and the PawOS intelligence platform creates a vertically integrated ecosystem that generates compounding data network effects.",
        items: ["Proprietary sensor hardware", "Direct PawOS integration", "Edge inference models", "Low-power field deployment"],
    },
    {
        title: "Ecosystem Lock-In",
        color: "#8FA7FF",
        desc: "Over time PawOS becomes the data layer connecting owners, veterinarians, livestock operators, and researchers — switching costs increase as longitudinal data accumulates.",
        items: ["Owner longitudinal records", "Veterinary clinical integrations", "Livestock operator workflows", "Research institution partnerships"],
    },
];

const trlLevels = [
    { level: "TRL 3", label: "Concept Validation", desc: "Algorithm research and theoretical validation", status: "achieved", pct: 100 },
    { level: "TRL 4", label: "Software Prototype", desc: "PawOS prototype platform operational", status: "achieved", pct: 100 },
    { level: "TRL 5", label: "Integrated Wearable", desc: "Hardware-software integration prototype", status: "target", pct: 45 },
    { level: "TRL 6", label: "Pilot Deployments", desc: "Research environment pilot programs", status: "future", pct: 10 },
];

const ipAreas = [
    "Behavioral health scoring models",
    "Animal activity anomaly detection",
    "Wearable sensor calibration algorithms",
    "Predictive veterinary risk indexing",
    "Multi-signal fusion methodologies",
    "Edge inference for animal monitoring",
];

export default function InvestorsPage() {
    return (
        <div style={{ background: "var(--bg-primary)" }}>
            {/* Hero */}
            <section className="section-pad grid-bg" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                <div className="section-container">
                    <div className="tag-pill" style={{ marginBottom: "1.5rem" }}>Investor Overview</div>
                    <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", maxWidth: "720px", marginBottom: "1.25rem" }}>
                        Venture-Scale Infrastructure for{" "}
                        <span className="gradient-text">Animal Health Intelligence</span>
                    </h1>
                    <p style={{ color: "var(--text-secondary)", maxWidth: "580px", lineHeight: 1.85, fontSize: "1.0625rem" }}>
                        Mattera is building the foundational AI infrastructure layer for animal health analytics
                        — a category-defining platform with structural defensibility across data, algorithms, and
                        hardware integration.
                    </p>

                    {/* Market stats */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", marginTop: "3.5rem", maxWidth: "680px" }} className="stat-grid">
                        {[
                            { value: "$50B+", label: "Global Animal Healthcare Market" },
                            { value: "3 Moats", label: "Data · Algorithmic · Hardware" },
                            { value: "India + US", label: "Dual-Market Operations" },
                        ].map((s) => (
                            <div key={s.label} className="glass-card" style={{ padding: "1.5rem", textAlign: "center" }}>
                                <div className="stat-number">{s.value}</div>
                                <div style={{ color: "var(--text-muted)", fontSize: "0.75rem", marginTop: "0.375rem" }}>{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <style>{`@media (max-width: 600px) { .stat-grid { grid-template-columns: 1fr !important; } }`}</style>
            </section>

            {/* Market Opportunity */}
            <section className="section-pad" style={{ background: "var(--bg-secondary)" }}>
                <div className="section-container">
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="grid-2col">
                        <div>
                            <div className="tag-pill" style={{ marginBottom: "1.5rem" }}>Market Opportunity</div>
                            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", marginBottom: "1.25rem" }}>
                                A Rapidly Expanding Market with{" "}
                                <span className="gradient-text">Missing Intelligence Infrastructure</span>
                            </h2>
                            <p style={{ color: "var(--text-secondary)", lineHeight: 1.85 }}>
                                Global animal healthcare markets are expanding rapidly driven by pet humanization,
                                rising veterinary expenditure, precision livestock farming growth, and surging demand
                                for smart monitoring devices — yet predictive intelligence systems remain largely absent.
                            </p>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                            {[
                                "Pet humanization driving premium health spend",
                                "Rising veterinary expenditure globally",
                                "Precision livestock farming expansion",
                                "Increased demand for smart monitoring devices",
                                "Regulatory push toward animal welfare standards",
                                "Predictive systems largely absent from market",
                            ].map((driver) => (
                                <div key={driver} className="glass-card" style={{ padding: "1rem 1.25rem", display: "flex", alignItems: "center", gap: "0.875rem" }}>
                                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4FD1C5", flexShrink: 0 }} />
                                    <span style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>{driver}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <style>{`@media (max-width: 768px) { .grid-2col { grid-template-columns: 1fr !important; gap: 3rem !important; } }`}</style>
            </section>

            <hr className="glow-divider" />

            {/* Moats */}
            <section className="section-pad">
                <div className="section-container">
                    <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                        <div className="tag-pill" style={{ marginBottom: "1rem" }}>Defensibility</div>
                        <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>
                            Multi-Layer <span className="gradient-text">Competitive Moat</span>
                        </h2>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem" }} className="moat-grid">
                        {moats.map((m) => (
                            <div key={m.title} className="glass-card" style={{ padding: "2rem", borderColor: `${m.color}18` }}>
                                <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1.0625rem", color: m.color, marginBottom: "0.875rem" }}>
                                    {m.title}
                                </div>
                                <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.75, marginBottom: "1.25rem" }}>{m.desc}</p>
                                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                                    {m.items.map((item) => (
                                        <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                                            <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: m.color, marginTop: "0.55rem", flexShrink: 0 }} />
                                            <span style={{ color: "var(--text-muted)", fontSize: "0.8125rem" }}>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <style>{`@media (max-width: 768px) { .moat-grid { grid-template-columns: 1fr !important; } }`}</style>
            </section>

            <hr className="glow-divider" />

            {/* Technology Readiness */}
            <section className="section-pad" style={{ background: "var(--bg-secondary)" }}>
                <div className="section-container">
                    <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                        <div className="tag-pill" style={{ marginBottom: "1rem" }}>TRL Framework</div>
                        <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>
                            Technology Readiness <span className="gradient-text">Progress</span>
                        </h2>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", maxWidth: "720px", margin: "0 auto" }}>
                        {trlLevels.map((trl) => (
                            <div key={trl.level} className="glass-card" style={{ padding: "1.75rem 2rem" }}>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.875rem" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                        <span
                                            style={{
                                                fontFamily: "'Sora', sans-serif",
                                                fontWeight: 800,
                                                fontSize: "0.8rem",
                                                color: trl.status === "achieved" ? "#4FD1C5" : trl.status === "target" ? "#8FA7FF" : "var(--text-muted)",
                                                background: trl.status === "achieved" ? "rgba(79,209,197,0.1)" : trl.status === "target" ? "rgba(143,167,255,0.1)" : "rgba(255,255,255,0.04)",
                                                border: `1px solid ${trl.status === "achieved" ? "rgba(79,209,197,0.25)" : trl.status === "target" ? "rgba(143,167,255,0.25)" : "rgba(255,255,255,0.08)"}`,
                                                padding: "0.25rem 0.75rem",
                                                borderRadius: "100px",
                                            }}
                                        >
                                            {trl.level}
                                        </span>
                                        <div>
                                            <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: "0.9375rem" }}>{trl.label}</div>
                                            <div style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>{trl.desc}</div>
                                        </div>
                                    </div>
                                    <div style={{ textAlign: "right" }}>
                                        <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "0.875rem", color: trl.status === "achieved" ? "#4FD1C5" : trl.status === "target" ? "#8FA7FF" : "var(--text-muted)" }}>
                                            {trl.status === "achieved" ? "Achieved" : trl.status === "target" ? "In Progress" : "Planned"}
                                        </div>
                                    </div>
                                </div>
                                <div style={{ height: "4px", background: "rgba(255,255,255,0.05)", borderRadius: "2px", overflow: "hidden" }}>
                                    <div
                                        style={{
                                            height: "100%",
                                            width: `${trl.pct}%`,
                                            background: trl.status === "achieved" ? "linear-gradient(90deg, #4FD1C5, #8FA7FF)" : trl.status === "target" ? "linear-gradient(90deg, #8FA7FF, #6b8aff)" : "rgba(255,255,255,0.12)",
                                            borderRadius: "2px",
                                            transition: "width 1s ease",
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <hr className="glow-divider" />

            {/* IP Roadmap */}
            <section className="section-pad">
                <div className="section-container">
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="grid-2col">
                        <div>
                            <div className="tag-pill" style={{ marginBottom: "1.5rem" }}>Intellectual Property</div>
                            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", marginBottom: "1.25rem" }}>
                                IP Roadmap Across{" "}
                                <span className="gradient-text">India · US · EU</span>
                            </h2>
                            <p style={{ color: "var(--text-secondary)", lineHeight: 1.85, marginBottom: "1.5rem" }}>
                                Mattera's patent strategy covers core behavioral health algorithms, sensor
                                calibration systems, and predictive veterinary models — with planned filings
                                across India, United States, and the European Union.
                            </p>
                            <div style={{ display: "flex", gap: "0.75rem" }}>
                                {["India", "United States", "European Union"].map((j) => (
                                    <div
                                        key={j}
                                        style={{ background: "rgba(79,209,197,0.06)", border: "1px solid rgba(79,209,197,0.18)", borderRadius: "8px", padding: "0.5rem 1rem", fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: "0.8rem", color: "#4FD1C5" }}
                                    >
                                        {j}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                            {ipAreas.map((ip) => (
                                <div key={ip} className="glass-card" style={{ padding: "1rem 1.5rem", display: "flex", alignItems: "center", gap: "0.875rem" }}>
                                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#8FA7FF", flexShrink: 0 }} />
                                    <span style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>{ip}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <hr className="glow-divider" />

            {/* Growth Strategy */}
            <section className="section-pad" style={{ background: "var(--bg-secondary)" }}>
                <div className="section-container">
                    <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                        <div className="tag-pill" style={{ marginBottom: "1rem" }}>Growth Strategy</div>
                        <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>
                            Platform → Hardware → <span className="gradient-text">Data Network</span>
                        </h2>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0", flexWrap: "wrap" }}>
                        {[
                            { phase: "Phase 1", title: "Software Intelligence Layer", desc: "PawOS platform accumulates longitudinal data at scale", color: "#4FD1C5" },
                            { phase: "Phase 2", title: "Wearable Integration", desc: "Proprietary hardware expands passive signal capture", color: "#8FA7FF" },
                            { phase: "Phase 3", title: "Predictive AI Models", desc: "Population-scale ML models with competitive moat", color: "#4FD1C5" },
                            { phase: "Phase 4", title: "Global Research Network", desc: "International collaborations and data partnerships", color: "#8FA7FF" },
                        ].map((p, i) => (
                            <div key={p.phase} style={{ display: "flex", alignItems: "center" }}>
                                <div className="glass-card" style={{ padding: "1.75rem 1.5rem", textAlign: "center", maxWidth: "200px", borderColor: `${p.color}25` }}>
                                    <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: "0.65rem", color: p.color, letterSpacing: "0.12em", marginBottom: "0.5rem" }}>
                                        {p.phase}
                                    </div>
                                    <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "0.875rem", marginBottom: "0.5rem" }}>{p.title}</div>
                                    <div style={{ color: "var(--text-muted)", fontSize: "0.75rem", lineHeight: 1.6 }}>{p.desc}</div>
                                </div>
                                {i < 3 && (
                                    <div style={{ padding: "0 0.5rem", color: "#4FD1C5", fontSize: "1.25rem" }}>→</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <hr className="glow-divider" />

            {/* Investment CTA */}
            <section className="section-pad dot-bg" style={{ textAlign: "center" }}>
                <div className="section-container">
                    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
                        <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", marginBottom: "1rem" }}>
                            Explore <span className="gradient-text">Investment Opportunities</span>
                        </h2>
                        <p style={{ color: "var(--text-secondary)", marginBottom: "2rem", lineHeight: 1.8 }}>
                            Mattera Life Systems is building venue-scale infrastructure for animal health analytics.
                            Investment discussions are open for aligned partners.
                        </p>
                        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                            <Link href="/contact" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                                Investor Enquiry <ArrowRight size={15} />
                            </Link>
                            <Link href="/research-collaboration" className="btn-ghost" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                                Grant Programs <ArrowRight size={15} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

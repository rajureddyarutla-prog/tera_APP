import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
    title: "Platform — PawOS & Wearable Health Devices",
    description:
        "Explore PawOS — Mattera's longitudinal animal health intelligence platform — plus upcoming wearable devices and the data intelligence engine.",
};

export default function PlatformPage() {
    return (
        <div style={{ background: "var(--bg-primary)" }}>
            {/* Hero */}
            <section className="section-pad grid-bg" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                <div className="section-container">
                    <div className="tag-pill" style={{ marginBottom: "1.5rem" }}>Platform</div>
                    <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", maxWidth: "720px", marginBottom: "1.25rem" }}>
                        Integrated Animal Health{" "}
                        <span className="gradient-text">Intelligence Platform</span>
                    </h1>
                    <p style={{ color: "var(--text-secondary)", maxWidth: "580px", lineHeight: 1.85, fontSize: "1.0625rem" }}>
                        Mattera's platform layer bridges software intelligence, wearable hardware, and predictive
                        AI models into a unified, continuously learning ecosystem.
                    </p>
                </div>
            </section>

            {/* PawOS */}
            <section id="pawos" className="section-pad" style={{ background: "var(--bg-secondary)" }}>
                <div className="section-container">
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="grid-2col">
                        <div>
                            <div
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "0.625rem",
                                    background: "rgba(79,209,197,0.06)",
                                    border: "1px solid rgba(79,209,197,0.22)",
                                    borderRadius: "100px",
                                    padding: "0.375rem 1.125rem",
                                    marginBottom: "1.5rem",
                                }}
                            >
                                <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, color: "#4FD1C5", fontSize: "1rem" }}>PawOS</span>
                                <span style={{ fontSize: "0.65rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Primary Platform</span>
                            </div>
                            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", marginBottom: "1.25rem" }}>
                                Longitudinal Animal Health{" "}
                                <span className="gradient-text">Intelligence System</span>
                            </h2>
                            <p style={{ color: "var(--text-secondary)", lineHeight: 1.85, marginBottom: "1.5rem" }}>
                                PawOS transforms observational animal health data into structured predictive analytics.
                                Unlike traditional pet applications, PawOS is architected as a <strong style={{ color: "var(--text-primary)" }}>data infrastructure platform</strong> —
                                a continuous monitoring layer that accumulates structured health intelligence over time.
                            </p>
                            <p style={{ color: "var(--text-secondary)", lineHeight: 1.85, marginBottom: "2rem" }}>
                                The platform serves as the intelligence hub connecting wearable devices, owner-reported
                                observations, environmental context, and veterinary records into a unified health record.
                            </p>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "2rem" }}>
                                {[
                                    "Breed-specific baseline modeling",
                                    "Longitudinal health scoring",
                                    "Behavioral anomaly detection",
                                    "Structured diet & activity mapping",
                                    "Preventive health alerts",
                                    "Environmental health context",
                                ].map((f) => (
                                    <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                                        <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#4FD1C5", marginTop: "0.55rem", flexShrink: 0 }} />
                                        <span style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>{f}</span>
                                    </div>
                                ))}
                            </div>
                            <a
                                href="https://pawos.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary"
                                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
                            >
                                Access PawOS Platform <ExternalLink size={14} />
                            </a>
                        </div>

                        {/* PawOS Dashboard mock */}
                        <div>
                            <div className="glass-card animate-pulse-glow" style={{ padding: "2rem" }}>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.75rem" }}>
                                    <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, color: "#F0F4FF" }}>Health Intelligence Dashboard</div>
                                    <div style={{ display: "flex", gap: "0.375rem" }}>
                                        <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#4FD1C5", boxShadow: "0 0 8px #4FD1C5" }} />
                                        <span style={{ fontSize: "0.7rem", color: "#4FD1C5" }}>Live</span>
                                    </div>
                                </div>

                                {/* Score arc */}
                                <div style={{ textAlign: "center", marginBottom: "1.75rem", padding: "1.5rem", background: "rgba(79,209,197,0.04)", borderRadius: "12px", border: "1px solid rgba(79,209,197,0.12)" }}>
                                    <div className="stat-number" style={{ fontSize: "3.5rem" }}>87</div>
                                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Health Score / 100</div>
                                    <div style={{ marginTop: "0.75rem" }}>
                                        <div style={{ height: "4px", background: "rgba(255,255,255,0.06)", borderRadius: "2px", overflow: "hidden" }}>
                                            <div className="trl-bar" style={{ width: "87%" }} />
                                        </div>
                                    </div>
                                </div>

                                {[
                                    { label: "Activity Baseline", value: "Normal Range", icon: "→", color: "#8FA7FF" },
                                    { label: "Behavioral State", value: "Stable", icon: "✓", color: "#4FD1C5" },
                                    { label: "Risk Index", value: "0.09 — Low", icon: "↓", color: "#4FD1C5" },
                                    { label: "Last Update", value: "2 min ago", icon: "◎", color: "#8FA7FF" },
                                ].map((row) => (
                                    <div
                                        key={row.label}
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            padding: "0.625rem 0",
                                            borderBottom: "1px solid rgba(255,255,255,0.04)",
                                            fontSize: "0.8rem",
                                        }}
                                    >
                                        <span style={{ color: "var(--text-muted)" }}>{row.label}</span>
                                        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                                            <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>{row.value}</span>
                                            <span style={{ color: row.color, fontSize: "0.7rem" }}>{row.icon}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <style>{`@media (max-width: 768px) { .grid-2col { grid-template-columns: 1fr !important; gap: 3rem !important; } }`}</style>
            </section>

            <hr className="glow-divider" />

            {/* Wearable Devices */}
            <section id="devices" className="section-pad">
                <div className="section-container">
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="grid-2col">
                        {/* Signals grid */}
                        <div>
                            <div style={{ marginBottom: "1.5rem" }}>
                                <div style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)", marginBottom: "1rem" }}>
                                    Current Signal Targets
                                </div>
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                                    {["Activity Variability", "Rest Cycle Patterns", "Movement Symmetry", "Stress Behavior Indicators", "Temperature Deviation", "Environmental Exposure"].map((s) => (
                                        <div key={s} className="glass-card" style={{ padding: "1rem 1.25rem", borderColor: "rgba(79,209,197,0.15)" }}>
                                            <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: "0.8rem", color: "#4FD1C5" }}>{s}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <div style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)", marginBottom: "1rem" }}>
                                    Future Hardware Capabilities
                                </div>
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                                    {["Heart Rate Variability", "Respiration Variability", "Gait Anomaly Detection"].map((s) => (
                                        <div key={s} className="glass-card" style={{ padding: "1rem 1.25rem", borderColor: "rgba(143,167,255,0.15)" }}>
                                            <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: "0.8rem", color: "#8FA7FF" }}>{s}</div>
                                            <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>Roadmap</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="tag-pill" style={{ marginBottom: "1.25rem", background: "rgba(143,167,255,0.08)", borderColor: "rgba(143,167,255,0.2)", color: "#8FA7FF" }}>
                                Wearable Hardware
                            </div>
                            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", marginBottom: "1.25rem" }}>
                                Passive Health Signal Capture <span className="gradient-text">Devices</span>
                            </h2>
                            <p style={{ color: "var(--text-secondary)", lineHeight: 1.85, marginBottom: "1.5rem" }}>
                                Mattera is developing a hardware layer enabling passive, continuous health signal
                                capture from animals. Engineered for long-term field deployment without frequent
                                maintenance — integrating directly with PawOS to enable continuous behavioral and
                                physiological monitoring.
                            </p>
                            <p style={{ color: "var(--text-secondary)", lineHeight: 1.85 }}>
                                Edge inference models enable real-time anomaly detection on-device, reducing
                                cloud dependency and enabling deployment in remote livestock environments.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="glow-divider" />

            {/* Data Intelligence Engine */}
            <section id="engine" className="section-pad" style={{ background: "var(--bg-secondary)" }}>
                <div className="section-container">
                    <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                        <div className="tag-pill" style={{ marginBottom: "1rem" }}>Intelligence Engine</div>
                        <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>
                            Predictive <span className="gradient-text">Data Intelligence Layer</span>
                        </h2>
                        <p style={{ color: "var(--text-secondary)", maxWidth: "520px", margin: "1rem auto 0" }}>
                            The core reasoning infrastructure behind PawOS — transforming raw signals into
                            actionable health intelligence.
                        </p>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }} className="engine-grid">
                        {[
                            { title: "Cloud-Native Backend", desc: "Encrypted, scalable data pipelines with offline-first synchronization and API-first ecosystem design.", color: "#4FD1C5" },
                            { title: "Multi-Signal Fusion", desc: "Behavioral, environmental, and physiological signal integration into unified health records with adaptive calibration.", color: "#8FA7FF" },
                            { title: "Longitudinal Intelligence", desc: "Temporal health trajectory modeling accumulating insight over months and years of continuous observation.", color: "#4FD1C5" },
                            { title: "Role-Based Access", desc: "Structured event logging with role-based data access controls for owners, veterinarians, and researchers.", color: "#8FA7FF" },
                            { title: "Federated Learning", desc: "Future architecture enabling privacy-preserving distributed model training across large animal populations.", color: "#4FD1C5" },
                            { title: "Veterinary API Layer", desc: "Planned integrations with veterinary clinic management systems and electronic health record platforms.", color: "#8FA7FF" },
                        ].map((c) => (
                            <div key={c.title} className="glass-card" style={{ padding: "1.75rem", borderColor: `${c.color}18` }}>
                                <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "0.9375rem", color: c.color, marginBottom: "0.75rem" }}>{c.title}</div>
                                <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.7 }}>{c.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <style>{`@media (max-width: 900px) { .engine-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 580px) { .engine-grid { grid-template-columns: 1fr !important; } }`}</style>
            </section>

            <hr className="glow-divider" />

            {/* CTA */}
            <section className="section-pad" style={{ textAlign: "center" }}>
                <div className="section-container">
                    <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", marginBottom: "1rem" }}>
                        Ready to Access the <span className="gradient-text">Intelligence Platform?</span>
                    </h2>
                    <p style={{ color: "var(--text-secondary)", marginBottom: "2rem", maxWidth: "460px", margin: "0 auto 2rem" }}>
                        The PawOS platform is live. Access the product environment and explore the intelligence interface.
                    </p>
                    <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                        <a href="https://pawos.app" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                            Access PawOS <ExternalLink size={14} />
                        </a>
                        <Link href="/applications" className="btn-ghost" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                            View Applications <ArrowRight size={14} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

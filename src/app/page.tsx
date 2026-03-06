import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, ArrowRight, Activity, Brain, Cpu, Database, Shield, Globe, LucideIcon } from "lucide-react";
import { fetchStrapi } from "@/lib/strapi";

const ICON_MAP: Record<string, LucideIcon> = {
  Activity, Brain, Cpu, Database, Shield, Globe
};

interface TechPillar {
  label: string;
  color: string;
  icon: LucideIcon;
}

interface UseCase {
  segment: string;
  tag: string;
  color: string;
  items: string[];
  desc: string;
}

interface ResearchStudy {
  display_id: string;
  title: string;
  tag: string;
  summary: string;
}

interface LocationData {
  city: string;
  role: string;
  color: string;
}

export const metadata: Metadata = {
  title: "AI Animal Health Platform | Mattera Life Systems",
  description:
    "Mattera Life Systems builds AI-powered health intelligence infrastructure for animals — wearable sensors, behavioral analytics, and predictive diagnostics.",
};

// Fallback data
const defaultTechPillars = [
  { icon: Brain, label: "Artificial Intelligence", color: "#4FD1C5" },
  { icon: Activity, label: "Behavioral Analytics", color: "#8FA7FF" },
  { icon: Cpu, label: "IoT & Wearable Sensors", color: "#4FD1C5" },
  { icon: Database, label: "Longitudinal Health Data", color: "#8FA7FF" },
  { icon: Shield, label: "Veterinary Science", color: "#4FD1C5" },
  { icon: Globe, label: "Cross-Species Intelligence", color: "#8FA7FF" },
];

const defaultUseCases = [
  {
    segment: "Companion Animals",
    tag: "Pets",
    color: "#4FD1C5",
    items: ["Preventive health monitoring", "Behavioral awareness scoring", "Structured longitudinal records"],
    desc: "Continuous intelligence layer for companion animal owners and veterinary partners.",
  },
  {
    segment: "Veterinary Clinics",
    tag: "Clinical",
    color: "#8FA7FF",
    items: ["Structured patient history", "Early risk alert systems", "Remote monitoring insights"],
    desc: "Structured data infrastructure enabling evidence-based clinical decision support.",
  },
  {
    segment: "Livestock Operations",
    tag: "Agriculture",
    color: "#4FD1C5",
    items: ["Strain & overexertion detection", "Productivity health scoring", "Welfare analytics dashboards"],
    desc: "Population-scale monitoring for working animals and commercial livestock operations.",
  },
  {
    segment: "Performance Animals",
    tag: "Equine & Sport",
    color: "#8FA7FF",
    items: ["Gait asymmetry detection", "Injury prevention modeling", "Performance optimization"],
    desc: "Precision health monitoring for high-value performance and equine athletes.",
  },
];

const defaultResearchStudies = [
  {
    display_id: "01",
    title: "Activity Variability in Working Buffaloes",
    tag: "Livestock",
    summary: "120-day movement intensity monitoring with strain threshold modeling for early overexertion detection.",
  },
  {
    display_id: "02",
    title: "Gait Asymmetry Detection in Performance Horses",
    tag: "Equine",
    summary: "Accelerometer-based step symmetry modeling for early lameness and orthopedic risk identification.",
  },
  {
    display_id: "03",
    title: "Behavioral Stress Index — Companion Dogs",
    tag: "Companion",
    summary: "Sleep variability and activity imbalance scoring with owner behavioral tagging for anxiety disorder detection.",
  },
];

const defaultLocations = [
  { city: "Hyderabad, India", role: "Research, Engineering & Product Development Hub", color: "#4FD1C5" },
  { city: "United States", role: "Strategic Operations, Partnerships & Global Expansion", color: "#8FA7FF" },
];

export default async function HomePage() {
  // Fetch dynamic content
  const heroData = await fetchStrapi("hero");
  const techPillarsData = await fetchStrapi("tech-pillars");
  const useCasesData = await fetchStrapi("use-cases");
  const researchStudiesData = await fetchStrapi("research-studies");
  const locationsData = await fetchStrapi("locations");

  // Hero fallback
  const hero = {
    badge_text: heroData?.badge_text || "Deep-Tech Animal Health Infrastructure",
    title: heroData?.title || "Engineering Predictive Health Intelligence Infrastructure for Animals",
    description: heroData?.description || "AI-driven infrastructure combining behavioral analytics, wearable sensors, and predictive modeling to enable continuous health monitoring across companion animals, working animals, and livestock populations.",
  };

  // Tech Pillars mapping
  const techPillars = techPillarsData?.length > 0
    ? techPillarsData.map((tp: any) => ({
      label: tp.label,
      color: tp.color,
      icon: ICON_MAP[tp.icon_name] || Brain
    }))
    : defaultTechPillars;

  // Use Cases mapping
  const useCases = useCasesData?.length > 0
    ? useCasesData.map((uc: any) => ({
      segment: uc.segment,
      tag: uc.tag,
      color: uc.color,
      items: uc.items || [],
      desc: uc.description
    }))
    : defaultUseCases;

  // Research Studies mapping
  const researchStudies = researchStudiesData?.length > 0
    ? researchStudiesData.map((rs: any) => ({
      id: rs.display_id,
      title: rs.title,
      tag: rs.tag,
      summary: rs.summary
    }))
    : defaultResearchStudies;

  // Locations mapping
  const locations = locationsData?.length > 0
    ? locationsData.map((loc: any) => ({
      city: loc.city,
      role: loc.role,
      color: loc.color
    }))
    : defaultLocations;

  return (
    <div style={{ background: "var(--bg-primary)" }}>
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          minHeight: "92vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
        className="grid-bg"
      >
        {/* Radial glow blobs */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: "8%",
            width: "600px",
            height: "600px",
            background: "radial-gradient(ellipse, rgba(79,209,197,var(--glow-opacity)) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "5%",
            left: "5%",
            width: "400px",
            height: "400px",
            background: "radial-gradient(ellipse, rgba(143,167,255,var(--glow-opacity)) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />

        <div className="section-container" style={{ padding: "6rem 2rem", width: "100%" }}>
          <div style={{ maxWidth: "800px" }}>
            <div className="tag-pill animate-fade-up" style={{ marginBottom: "2rem" }}>
              {hero.badge_text}
            </div>

            <h1
              className="animate-fade-up delay-100"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                fontFamily: "'Sora', sans-serif",
              }}
            >
              {/* Note: In a real app we might want to split words to keep the gradient highlight, 
                  but for the CMS we'll keep it simple or use a special tag system. */}
              {hero.title}
            </h1>

            <p
              className="animate-fade-up delay-200"
              style={{
                fontSize: "1.125rem",
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                marginBottom: "2.5rem",
                maxWidth: "620px",
              }}
            >
              {hero.description}
            </p>

            <div
              className="animate-fade-up delay-300"
              style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
            >
              <Link href="/technology" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                Explore Technology <ArrowRight size={16} />
              </Link>
              <a
                href="https://pawos.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
              >
                Access PawOS <ExternalLink size={14} />
              </a>
            </div>

            {/* Stats row */}
            <div
              className="animate-fade-up delay-400"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "2rem",
                marginTop: "4rem",
                maxWidth: "480px",
              }}
            >
              {[
                { value: "TRL 4", label: "Platform Maturity" },
                { value: "3+", label: "Active Research Studies" },
                { value: "Multi-Species", label: "Coverage" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="stat-number" style={{ fontSize: "1.5rem" }}>{s.value}</div>
                  <div style={{ color: "var(--text-muted)", fontSize: "0.75rem", marginTop: "0.25rem", fontFamily: "'Inter', sans-serif" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Architecture preview — floating right panel */}
        <div
          style={{
            position: "absolute",
            right: "5%",
            top: "50%",
            transform: "translateY(-50%)",
            width: "340px",
          }}
          className="animate-float hidden-sm"
        >
          <div
            className="glass-card animate-pulse-glow"
            style={{ padding: "2rem", fontFamily: "'Inter', sans-serif" }}
          >
            <div style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent-teal)", marginBottom: "1.25rem", fontWeight: 600 }}>
              Intelligence Stack
            </div>
            {[
              { label: "Wearable Devices", color: "#4FD1C5" },
              { label: "Signal Processing", color: "#6bc8c1" },
              { label: "Data Pipeline", color: "#8FA7FF" },
              { label: "AI Models", color: "#7a9aff" },
              { label: "Insights Engine", color: "#4FD1C5" },
              { label: "PawOS Applications", color: "#8FA7FF" },
            ].map((item, i) => (
              <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: i < 5 ? "0" : "0" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: item.color, flexShrink: 0 }} />
                  {i < 5 && <div style={{ width: "1px", height: "24px", background: `linear-gradient(${item.color}, transparent)`, opacity: 0.3 }} />}
                </div>
                <div
                  style={{
                    flex: 1,
                    background: "var(--bg-subtle)",
                    border: `1px solid var(--border-subtle)`,
                    borderRadius: "6px",
                    padding: "0.5rem 0.875rem",
                    fontSize: "0.8rem",
                    color: "var(--text-secondary)",
                    marginBottom: i < 5 ? "-12px" : "0",
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 1100px) { .hidden-sm { display: none !important; } }
        `}</style>
      </section>

      <hr className="glow-divider" />

      {/* ─── INFRASTRUCTURE VISION ────────────────────────────────── */}
      <section className="section-pad" style={{ background: "var(--bg-secondary)" }}>
        <div className="section-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="grid-2col">
            <div>
              <div className="tag-pill" style={{ marginBottom: "1.5rem" }}>The Structural Gap</div>
              <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", marginBottom: "1.25rem" }}>
                Animal Healthcare Remains{" "}
                <span className="gradient-text">Fundamentally Reactive</span>
              </h2>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.85, marginBottom: "2rem" }}>
                Diagnosis occurs after symptoms appear rather than before disease onset. The absence
                of continuous monitoring, longitudinal baselines, and integrated behavioral signals
                creates systemic blind spots across the entire animal health ecosystem.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  "Lack of longitudinal behavioral baselines",
                  "Absence of passive monitoring systems",
                  "Fragmented veterinary data ecosystems",
                  "Limited predictive disease modeling",
                  "Poor behavioral-physiological signal integration",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                    <div
                      style={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        background: "var(--accent-teal)",
                        marginTop: "0.55rem",
                        flexShrink: 0,
                      }}
                    />
                    <span style={{ color: "var(--text-secondary)", fontSize: "0.9375rem" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gap visualization cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { label: "Current State", value: "Reactive Diagnosis", icon: "⚠", color: "rgba(255,100,100,0.15)", border: "rgba(255,100,100,0.2)" },
                { label: "Missing Layer", value: "Intelligence Infrastructure", icon: "◎", color: "rgba(79,209,197,0.08)", border: "rgba(79,209,197,0.2)" },
                { label: "Target State", value: "Predictive Health Monitoring", icon: "✓", color: "rgba(143,167,255,0.08)", border: "rgba(143,167,255,0.2)" },
              ].map((card) => (
                <div
                  key={card.label}
                  className="glass-card"
                  style={{
                    padding: "1.25rem 1.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "1.25rem",
                    background: "var(--bg-subtle)",
                    borderColor: "var(--border-subtle)",
                  }}
                >
                  <span style={{ fontSize: "1.5rem" }}>{card.icon}</span>
                  <div>
                    <div style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)", marginBottom: "0.2rem" }}>
                      {card.label}
                    </div>
                    <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600, color: "var(--text-primary)" }}>
                      {card.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) { .grid-2col { grid-template-columns: 1fr !important; gap: 3rem !important; } }
        `}</style>
      </section>

      <hr className="glow-divider" />

      {/* ─── TECHNOLOGY PILLARS ───────────────────────────────────── */}
      <section className="section-pad">
        <div className="section-container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div className="tag-pill" style={{ marginBottom: "1.25rem" }}>Core Technology</div>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", marginBottom: "1rem" }}>
              Multi-Disciplinary{" "}
              <span className="gradient-text">Intelligence Stack</span>
            </h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "560px", margin: "0 auto", lineHeight: 1.8 }}>
              Mattera operates at the intersection of five scientific domains to build a unified
              animal health intelligence infrastructure.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.25rem",
            }}
            className="tech-grid"
          >
            {techPillars.map((pillar: TechPillar) => (
              <div key={pillar.label} className="glass-card" style={{ padding: "1.75rem" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "10px",
                    background: `${pillar.color}12`,
                    border: `1px solid ${pillar.color}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <pillar.icon size={20} color={pillar.color} />
                </div>
                <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: "0.9375rem", color: "var(--text-primary)" }}>
                  {pillar.label}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/technology" className="btn-ghost" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              Explore Full Technology Stack <ArrowRight size={15} />
            </Link>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) { .tech-grid { grid-template-columns: 1fr 1fr !important; } }
          @media (max-width: 480px) { .tech-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      <hr className="glow-divider" />

      {/* ─── PAWOS PLATFORM ───────────────────────────────────────── */}
      <section className="section-pad" style={{ background: "var(--bg-secondary)" }}>
        <div className="section-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="grid-2col">
            {/* Features */}
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "rgba(79,209,197,0.06)",
                  border: "1px solid rgba(79,209,197,0.2)",
                  borderRadius: "100px",
                  padding: "0.375rem 1rem",
                  marginBottom: "1.5rem",
                }}
              >
                <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, color: "#4FD1C5", fontSize: "0.875rem" }}>PawOS</span>
                <span style={{ fontSize: "0.7rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Primary Platform</span>
              </div>
              <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", marginBottom: "1.25rem" }}>
                AI-Powered Animal{" "}
                <span className="gradient-text">Health Intelligence</span>
              </h2>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.85, marginBottom: "2rem" }}>
                PawOS is a longitudinal animal health intelligence system designed to transform
                observational health data into structured predictive analytics. Architected as a
                data infrastructure platform — not a consumer application.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.875rem", marginBottom: "2rem" }}>
                {[
                  "Breed-specific baseline modeling",
                  "Longitudinal health scoring",
                  "Behavioral anomaly detection",
                  "Structured diet & activity mapping",
                  "Preventive health alerts",
                  "Environmental context modeling",
                ].map((feat) => (
                  <div key={feat} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem" }}>
                    <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#4FD1C5", marginTop: "0.6rem", flexShrink: 0 }} />
                    <span style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>{feat}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a href="https://pawos.app" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                  Access Platform <ExternalLink size={14} />
                </a>
                <Link href="/platform" className="btn-ghost" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                  Platform Details <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* PawOS mock panel */}
            <div>
              <div className="glass-card animate-pulse-glow" style={{ padding: "2rem" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
                  <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, color: "#4FD1C5", fontSize: "0.9rem" }}>PawOS — Health Intelligence</div>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#4FD1C5", boxShadow: "0 0 8px #4FD1C5" }} />
                </div>
                {[
                  { metric: "Health Score", value: "87 / 100", trend: "↑", color: "#4FD1C5" },
                  { metric: "Activity Baseline", value: "Normal", trend: "→", color: "#8FA7FF" },
                  { metric: "Sleep Quality", value: "Optimal", trend: "↑", color: "#4FD1C5" },
                  { metric: "Behavioral Anomaly", value: "None Detected", trend: "✓", color: "#8FA7FF" },
                  { metric: "Predictive Risk Index", value: "Low (0.12)", trend: "↓", color: "#4FD1C5" },
                ].map((row) => (
                  <div
                    key={row.metric}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "0.75rem 0",
                      borderBottom: "1px solid rgba(255,255,255,0.04)",
                      fontSize: "0.85rem",
                    }}
                  >
                    <span style={{ color: "var(--text-secondary)" }}>{row.metric}</span>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600, color: "var(--text-primary)" }}>{row.value}</span>
                      <span style={{ color: row.color, fontSize: "0.75rem" }}>{row.trend}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="glow-divider" />

      {/* ─── RESEARCH HIGHLIGHTS ──────────────────────────────────── */}
      <section className="section-pad">
        <div className="section-container">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "3rem", flexWrap: "wrap", gap: "1.5rem" }}>
            <div>
              <div className="tag-pill" style={{ marginBottom: "1.25rem" }}>Mattera Animal Intelligence Lab</div>
              <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
                Cross-Species{" "}
                <span className="gradient-text">Research Studies</span>
              </h2>
            </div>
            <Link href="/research" className="btn-ghost" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", whiteSpace: "nowrap" }}>
              View All Research <ArrowRight size={14} />
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }} className="studies-grid">
            {researchStudies.map((study: any) => (
              <div key={study.id || study.display_id} className="glass-card" style={{ padding: "2rem" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                  <span
                    style={{
                      fontFamily: "'Sora', sans-serif",
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#4FD1C5",
                      background: "rgba(79,209,197,0.08)",
                      border: "1px solid rgba(79,209,197,0.18)",
                      padding: "0.2rem 0.6rem",
                      borderRadius: "100px",
                    }}
                  >
                    {study.tag}
                  </span>
                  <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: "2rem", color: "rgba(79,209,197,0.12)" }}>
                    {study.id}
                  </span>
                </div>
                <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1rem", marginBottom: "0.875rem", color: "var(--text-primary)", lineHeight: 1.4 }}>
                  {study.title}
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.75 }}>
                  {study.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .studies-grid { grid-template-columns: 1fr 1fr !important; } }
          @media (max-width: 600px) { .studies-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      <hr className="glow-divider" />

      {/* ─── USE CASES ────────────────────────────────────────────── */}
      <section className="section-pad" style={{ background: "var(--bg-secondary)" }}>
        <div className="section-container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div className="tag-pill" style={{ marginBottom: "1.25rem" }}>Applications</div>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
              <span className="gradient-text">Cross-Segment</span> Use Cases
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.25rem" }} className="usecase-grid">
            {useCases.map((uc: UseCase) => (
              <div key={uc.segment} className="glass-card" style={{ padding: "2rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                  <span
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: uc.color,
                      background: `${uc.color}12`,
                      border: `1px solid ${uc.color}28`,
                      padding: "0.2rem 0.6rem",
                      borderRadius: "100px",
                    }}
                  >
                    {uc.tag}
                  </span>
                </div>
                <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>{uc.segment}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", marginBottom: "1.25rem", lineHeight: 1.7 }}>{uc.desc}</p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {uc.items.map((item: string) => (
                    <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem" }}>
                      <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: uc.color, marginTop: "0.6rem", flexShrink: 0 }} />
                      <span style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 700px) { .usecase-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      <hr className="glow-divider" />

      {/* ─── GLOBAL PRESENCE ──────────────────────────────────────── */}
      <section className="section-pad">
        <div className="section-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="grid-2col">
            <div>
              <div className="tag-pill" style={{ marginBottom: "1.5rem" }}>Global Operations</div>
              <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", marginBottom: "1.25rem" }}>
                Dual-Location{" "}
                <span className="gradient-text">Research & Strategy</span>
              </h2>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.85, marginBottom: "2rem" }}>
                Mattera Life Systems operates across two strategic locations — engineering and R&D
                anchored in Hyderabad with strategic partnerships and global expansion driven from
                the United States.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {locations.map((loc: any) => (
                  <div
                    key={loc.city}
                    className="glass-card"
                    style={{ padding: "1.25rem 1.5rem", display: "flex", alignItems: "flex-start", gap: "1rem" }}
                  >
                    <div style={{ width: "3px", height: "40px", borderRadius: "2px", background: loc.color, flexShrink: 0 }} />
                    <div>
                      <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600, color: loc.color, marginBottom: "0.25rem" }}>{loc.city}</div>
                      <div style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>{loc.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Domain info panel */}
            <div className="glass-card" style={{ padding: "2.5rem" }}>
              <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1.1rem", marginBottom: "2rem", color: "var(--text-primary)" }}>
                Platform Domains
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {[
                  { label: "Corporate Portal", url: "matteralifesystems.com", desc: "Research, investors, corporate" },
                  { label: "Product Platform", url: "pawos.app", desc: "Live product environment", highlight: true },
                ].map((d) => (
                  <div
                    key={d.label}
                    style={{
                      padding: "1.25rem",
                      borderRadius: "10px",
                      background: d.highlight ? "rgba(79,209,197,0.06)" : "rgba(255,255,255,0.02)",
                      border: d.highlight ? "1px solid rgba(79,209,197,0.2)" : "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <div style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)", marginBottom: "0.375rem" }}>
                      {d.label}
                    </div>
                    <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, color: d.highlight ? "#4FD1C5" : "#8FA7FF", fontSize: "1rem", marginBottom: "0.25rem" }}>
                      {d.url}
                    </div>
                    <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{d.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="glow-divider" />

      {/* ─── FINAL CTA ────────────────────────────────────────────── */}
      <section className="section-pad dot-bg" style={{ textAlign: "center" }}>
        <div className="section-container">
          <div
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              padding: "4rem",
              background: "var(--bg-overlay)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "20px",
              backdropFilter: "blur(16px)",
              boxShadow: "0 0 80px var(--border-subtle)",
            }}
          >
            <div className="tag-pill" style={{ marginBottom: "1.5rem" }}>Engage With Us</div>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", marginBottom: "1.25rem" }}>
              Partner in Building the Future of{" "}
              <span className="gradient-text">Animal Health Intelligence</span>
            </h2>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.85, marginBottom: "2.5rem" }}>
              Whether you are an investor, research institution, veterinary partner, or hardware
              developer — Mattera Life Systems is building the foundational infrastructure layer for
              animal health analytics.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
              <Link href="/investors" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                Investment Opportunities <ArrowRight size={15} />
              </Link>
              <Link href="/research-collaboration" className="btn-ghost" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                Research Collaboration <ArrowRight size={15} />
              </Link>
              <Link href="/contact" className="btn-ghost" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                Contact Us <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

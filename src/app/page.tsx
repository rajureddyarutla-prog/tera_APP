"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ExternalLink, ArrowRight, Activity, Brain, Cpu, Database, Shield, Globe, LucideIcon } from "lucide-react";
import { fetchStrapi } from "@/lib/strapi";

const UseCasesSection = dynamic(() => import("@/components/home/UseCasesGrid"), {
  ssr: false,
});

const ICON_MAP: Record<string, LucideIcon> = {
  Activity, Brain, Cpu, Database, Shield, Globe
};

interface TechPillar {
  label: string;
  color: string;
  icon: LucideIcon;
}

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
    id: "study-01",
    display_id: "01",
    title: "Activity Variability in Working Buffaloes",
    tag: "Livestock",
    summary: "120-day movement intensity monitoring with strain threshold modeling for early overexertion detection.",
  },
  {
    id: "study-02",
    display_id: "02",
    title: "Gait Asymmetry Detection in Performance Horses",
    tag: "Equine",
    summary: "Accelerometer-based step symmetry modeling for early lameness and orthopedic risk identification.",
  },
  {
    id: "study-03",
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

export default function HomePage() {
  const [data, setData] = useState<any>({
    hero: null,
    techPillars: [],
    useCases: [],
    researchStudies: [],
    locations: []
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const [
          homepageData,
          techPillarsData,
          useCasesData,
          researchStudiesData,
          locationsData
        ] = await Promise.all([
          fetchStrapi("home-page"),
          fetchStrapi("tech-pillars"),
          fetchStrapi("use-cases"),
          fetchStrapi("research-studies"),
          fetchStrapi("locations")
        ]);

        setData({
          hero: homepageData?.hero || homepageData, // Handle if it's nested or direct
          techPillars: Array.isArray(techPillarsData) ? techPillarsData : [],
          useCases: Array.isArray(useCasesData) ? useCasesData : [],
          researchStudies: Array.isArray(researchStudiesData) ? researchStudiesData : [],
          locations: Array.isArray(locationsData) ? locationsData : []
        });
      } catch (err) {
        console.warn("Failed to load home page data:", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const { hero: heroData, techPillars: techPillarsData, useCases: useCasesData, researchStudies: researchStudiesData, locations: locationsData } = data;

  // Hero section setup
  const hero = {
    badge_text: heroData?.badge_text || "Deep-Tech Animal Health Infrastructure",
    title: heroData?.title || "Engineering Predictive Health Intelligence Infrastructure for Animals",
    description: heroData?.description || "AI-driven infrastructure combining behavioral analytics, wearable sensors, and predictive modeling to enable continuous health monitoring across companion animals, working animals, and livestock populations.",
  };

  const vision = heroData?.vision_section || {
    badge: "The Structural Gap",
    title: "Animal Healthcare Remains Fundamentally Reactive",
    description: "Diagnosis occurs after symptoms appear rather than before disease onset. The absence of continuous monitoring, longitudinal baselines, and integrated behavioral signals creates systemic blind spots across the entire animal health ecosystem.",
    points: [
      "Lack of longitudinal behavioral baselines",
      "Absence of passive monitoring systems",
      "Fragmented veterinary data ecosystems",
      "Limited predictive disease modeling",
      "Poor behavioral-physiological signal integration",
    ],
    cards: [
      { label: "Current State", value: "Reactive Diagnosis", icon: "⚠" },
      { label: "Missing Layer", value: "Intelligence Infrastructure", icon: "◎" },
      { label: "Target State", value: "Predictive Health Monitoring", icon: "✓" },
    ]
  };

  const platformContent = heroData?.platform_section || {
    badge: "PawOS",
    sub_badge: "Primary Platform",
    title: "AI-Powered Animal Health Intelligence",
    description: "PawOS is a longitudinal animal health intelligence system designed to transform observational health data into structured predictive analytics. Architected as a data infrastructure platform — not a consumer application.",
    features: [
      "Breed-specific baseline modeling",
      "Longitudinal health scoring",
      "Behavioral anomaly detection",
      "Structured diet & activity mapping",
      "Preventive health alerts",
      "Environmental context modeling",
    ],
    metrics: [
      { metric: "Health Score", value: "87 / 100", trend: "↑", color: "#4FD1C5" },
      { metric: "Activity Baseline", value: "Normal", trend: "→", color: "#8FA7FF" },
      { metric: "Sleep Quality", value: "Optimal", trend: "↑", color: "#4FD1C5" },
      { metric: "Behavioral Anomaly", value: "None Detected", trend: "✓", color: "#8FA7FF" },
      { metric: "Predictive Risk Index", value: "Low (0.12)", trend: "↓", color: "#4FD1C5" },
    ]
  };

  const cta = heroData?.cta_section || {
    badge: "Engage With Us",
    title: "Partner in Building the Future of Animal Health Intelligence",
    description: "Whether you are an investor, research institution, veterinary partner, or hardware developer — Mattera Life Systems is building the foundational infrastructure layer for animal health analytics.",
    links: [
      { label: "Investment Opportunities", href: "/investors", primary: true },
      { label: "Research Collaboration", href: "/research-collaboration", primary: false },
      { label: "Contact Us", href: "/contact", primary: false },
    ]
  };

  const techPillars = techPillarsData?.length > 0
    ? techPillarsData.map((tp: any) => ({
      label: tp.label,
      color: tp.color,
      icon: ICON_MAP[tp.icon_name] || Brain
    }))
    : defaultTechPillars;

  const useCases = useCasesData?.length > 0
    ? useCasesData.map((uc: any) => ({
      segment: uc.segment,
      tag: uc.tag,
      color: uc.color,
      items: uc.items || [],
      desc: uc.description
    }))
    : defaultUseCases;

  const researchStudies = researchStudiesData?.length > 0
    ? researchStudiesData.map((rs: any, i: number) => ({
      id: rs.display_id || rs.id || `study-${i}`,
      title: rs.title,
      tag: rs.tag,
      summary: rs.summary
    }))
    : defaultResearchStudies;

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
        <div className="section-container" style={{ padding: "6rem 2rem", width: "100%" }}>
          <div style={{ maxWidth: "800px" }}>
            <div className="tag-pill animate-fade-up" style={{ marginBottom: "2rem" }}>
              {hero.badge_text}
            </div>
            <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "1.5rem", fontFamily: "var(--font-sora)" }}>
              {hero.title}
            </h1>
            <p style={{ fontSize: "1.125rem", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "2.5rem", maxWidth: "620px" }}>
              {hero.description}
            </p>
            <div className="animate-fade-up delay-300" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/technology" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                Explore Technology <ArrowRight size={16} />
              </Link>
              <a href="https://pawos.app" target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                Access PawOS <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VISION ───────────────────────────────────────────────── */}
      <section className="section-pad" style={{ background: "var(--bg-secondary)" }}>
        <div className="section-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="grid-2col">
            <div>
              <div className="tag-pill" style={{ marginBottom: "1.5rem" }}>{vision.badge}</div>
              <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", marginBottom: "1.25rem" }}>{vision.title}</h2>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.85, marginBottom: "2rem" }}>{vision.description}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {vision.points.map((item: string, i: number) => (
                  <div key={`${item}-${i}`} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                    <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "var(--accent-teal)", marginTop: "0.55rem", flexShrink: 0 }} />
                    <span style={{ color: "var(--text-secondary)", fontSize: "0.9375rem" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {vision.cards.map((card: any, i: number) => (
                <div key={`${card.label}-${i}`} className="glass-card" style={{ padding: "1.25rem 1.5rem", display: "flex", alignItems: "center", gap: "1.25rem" }}>
                  <span style={{ fontSize: "1.5rem" }}>{card.icon}</span>
                  <div>
                    <div style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)", marginBottom: "0.2rem" }}>{card.label}</div>
                    <div style={{ fontFamily: "var(--font-sora)", fontWeight: 600, color: "var(--text-primary)" }}>{card.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TECH PILLARS ────────────────────────────────────────── */}
      <section className="section-pad">
        <div className="section-container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div className="tag-pill" style={{ marginBottom: "1.25rem" }}>Core Technology</div>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>Multi-Disciplinary <span className="gradient-text">Intelligence Stack</span></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }} className="tech-grid">
            {techPillars.map((pillar: TechPillar, i: number) => (
              <div key={pillar.label || i} className="glass-card" style={{ padding: "1.75rem" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: `${pillar.color}12`, border: `1px solid ${pillar.color}30`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                  <pillar.icon size={20} color={pillar.color} />
                </div>
                <div style={{ fontFamily: "var(--font-sora)", fontWeight: 600, fontSize: "0.9375rem", color: "var(--text-primary)" }}>{pillar.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PAWOS PLATFORM ───────────────────────────────────────── */}
      <section className="section-pad" style={{ background: "var(--bg-secondary)" }}>
        <div className="section-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="grid-2col">
            <div>
              <div className="tag-pill" style={{ marginBottom: "1.5rem" }}>{platformContent.badge} — {platformContent.sub_badge}</div>
              <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", marginBottom: "1.25rem" }}>{platformContent.title}</h2>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.85, marginBottom: "2rem" }}>{platformContent.description}</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.875rem", marginBottom: "2rem" }}>
                {platformContent.features.map((feat: string, i: number) => (
                  <div key={feat || i} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem" }}>
                    <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#4FD1C5", marginTop: "0.6rem", flexShrink: 0 }} />
                    <span style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-card animate-pulse-glow" style={{ padding: "2rem" }}>
              {platformContent.metrics.map((row: any, i: number) => (
                <div key={row.metric || i} style={{ display: "flex", justifyContent: "space-between", padding: "0.75rem 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                  <span style={{ color: "var(--text-secondary)", fontSize: "0.85rem" }}>{row.metric}</span>
                  <span style={{ color: row.color, fontWeight: 700 }}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── RESEARCH ─────────────────────────────────────────────── */}
      <section className="section-pad">
        <div className="section-container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>Research <span className="gradient-text">Studies</span></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }} className="studies-grid">
            {researchStudies.map((study: any, i: number) => (
              <div key={study.id || `study-item-${i}`} className="glass-card" style={{ padding: "2rem" }}>
                <span className="tag-pill" style={{ marginBottom: "1rem" }}>{study.tag}</span>
                <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>{study.title}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>{study.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── USE CASES ────────────────────────────────────────────── */}
      <section className="section-pad" style={{ background: "var(--bg-secondary)" }}>
        <div className="section-container">
          <UseCasesSection useCases={useCases} />
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────── */}
      <section className="section-pad dot-bg" style={{ textAlign: "center" }}>
        <div className="section-container">
          <div style={{ maxWidth: "700px", margin: "0 auto", padding: "4rem", background: "var(--bg-overlay)", border: "1px solid var(--border-subtle)", borderRadius: "20px" }}>
            <div className="tag-pill" style={{ marginBottom: "1.5rem" }}>{cta.badge}</div>
            <h2 style={{ marginBottom: "1.5rem" }}>{cta.title}</h2>
            <p style={{ color: "var(--text-secondary)", marginBottom: "2.5rem" }}>{cta.description}</p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              {cta.links.map((link: any, i: number) => (
                <Link key={`${link.label}-${i}`} href={link.href} className={link.primary ? "btn-primary" : "btn-ghost"}>{link.label}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { useState } from "react";

import Link from "next/link";
import { ExternalLink, Mail, MapPin } from "lucide-react";

interface FooterLink {
    label: string;
    href: string;
}

interface FooterColumn {
    title: string;
    links: FooterLink[];
}

interface NavData {
    footer_columns: FooterColumn[];
    logo_image?: {
        url: string;
        name: string;
    };
}

export default function Footer({ navData }: { navData?: NavData }) {
    const [logoError, setLogoError] = useState(false);

    const strapiUrl = (process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337').replace(/\/$/, '');
    const logoSrc = navData?.logo_image?.url
        ? (navData.logo_image.url.startsWith('http') ? navData.logo_image.url : `${strapiUrl}${navData.logo_image.url}`)
        : null;

    const columns = navData?.footer_columns || [
        {
            title: "Technology",
            links: [
                { label: "AI Layer", href: "/technology#ai" },
                { label: "Data Infrastructure", href: "/technology#data" },
                { label: "Wearable Systems", href: "/technology#hardware" },
                { label: "Platform Architecture", href: "/technology#architecture" },
            ],
        },
        {
            title: "Research",
            links: [
                { label: "R&D Lab", href: "/research" },
                { label: "Research Areas", href: "/research#areas" },
                { label: "Current Studies", href: "/research#studies" },
                { label: "Methodology", href: "/research#methodology" },
            ],
        },
        {
            title: "Platform",
            links: [
                { label: "PawOS", href: "/platform#pawos" },
                { label: "Wearable Devices", href: "/platform#devices" },
                { label: "Data Engine", href: "/platform#engine" },
                { label: "Applications", href: "/applications" },
            ],
        },
        {
            title: "Company",
            links: [
                { label: "Investors", href: "/investors" },
                { label: "Grants", href: "/research-collaboration" },
                { label: "About", href: "/company" },
                { label: "Contact", href: "/contact" },
            ],
        },
    ];
    return (
        <footer
            style={{
                background: "var(--bg-secondary)",
                borderTop: "1px solid var(--border-subtle)",
                marginTop: "0",
            }}
        >
            {/* Main footer */}
            <div className="section-container" style={{ padding: "5rem 2rem 3rem" }}>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
                        gap: "3rem",
                    }}
                    className="footer-grid"
                >
                    {/* Brand column */}
                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                            {logoSrc && !logoError ? (
                                <img
                                    src={logoSrc}
                                    alt="Mattera Life Systems Logo"
                                    style={{
                                        height: "40px",
                                        width: "auto",
                                        objectFit: "contain",
                                        borderRadius: "4px"
                                    }}
                                    onError={() => setLogoError(true)}
                                />
                            ) : (
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem'
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "40px",
                                            height: "40px",
                                            background: "linear-gradient(135deg, #4FD1C5, #8FA7FF)",
                                            borderRadius: "10px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
                                            <path d="M10 2L18 6V14L10 18L2 14V6L10 2Z" stroke="#0B0F19" strokeWidth="1.5" strokeLinejoin="round" />
                                            <path d="M10 6V14M6 8L14 12M14 8L6 12" stroke="#0B0F19" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "var(--text-primary)" }}>
                                            Mattera Life Systems
                                        </div>
                                        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: "var(--accent-teal)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                                            Private Limited
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.8, marginBottom: "1.5rem", maxWidth: "300px" }}>
                            Engineering predictive health intelligence infrastructure for animals across species and environments.
                        </p>

                        {/* Locations */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem", marginBottom: "1.5rem" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", color: "var(--text-secondary)", fontSize: "0.8125rem" }}>
                                <MapPin size={14} color="var(--accent-teal)" />
                                Hyderabad, India — R&D Hub
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", color: "var(--text-secondary)", fontSize: "0.8125rem" }}>
                                <MapPin size={14} color="var(--accent-blue)" />
                                United States — Strategic Operations
                            </div>
                        </div>

                        {/* Email */}
                        <a
                            href="mailto:contact@matteralifesystems.com"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                color: "#4FD1C5",
                                fontSize: "0.8125rem",
                                textDecoration: "none",
                                fontFamily: "'Inter', sans-serif",
                                transition: "opacity 0.2s",
                            }}
                            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.75")}
                            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                        >
                            <Mail size={13} />
                            contact@matteralifesystems.com
                        </a>
                    </div>

                    {/* Nav columns */}
                    {columns.map((col) => (
                        <div key={col.title}>
                            <h3
                                style={{
                                    fontFamily: "'Sora', sans-serif",
                                    fontWeight: 600,
                                    fontSize: "0.75rem",
                                    letterSpacing: "0.1em",
                                    textTransform: "uppercase",
                                    color: "#4FD1C5",
                                    marginBottom: "1.25rem",
                                }}
                            >
                                {col.title}
                            </h3>
                            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                                {col.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            style={{
                                                color: "var(--text-secondary)",
                                                textDecoration: "none",
                                                fontSize: "0.875rem",
                                                transition: "color 0.2s",
                                                fontFamily: "'Inter', sans-serif",
                                            }}
                                            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-primary)")}
                                            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Access PawOS banner */}
                <div
                    style={{
                        margin: "3rem 0 0",
                        padding: "1.75rem 2rem",
                        background: "rgba(79, 209, 197, 0.05)",
                        border: "1px solid rgba(79, 209, 197, 0.15)",
                        borderRadius: "14px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1.5rem",
                        flexWrap: "wrap",
                    }}
                >
                    <div>
                        <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600, color: "var(--text-primary)", marginBottom: "0.25rem" }}>
                            PawOS Platform
                        </div>
                        <div style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>
                            Access the live product environment and application interface at{" "}
                            <span style={{ color: "var(--accent-teal)" }}>pawos.app</span>
                        </div>
                    </div>
                    <a
                        href="https://pawos.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", whiteSpace: "nowrap" }}
                    >
                        Access PawOS <ExternalLink size={14} />
                    </a>
                </div>
            </div>

            {/* Bottom bar */}
            <div
                style={{
                    borderTop: "1px solid rgba(255,255,255,0.05)",
                    padding: "1.25rem 2rem",
                }}
            >
                <div
                    className="section-container"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                        flexWrap: "wrap",
                    }}
                >
                    <p style={{ color: "var(--text-muted)", fontSize: "0.8125rem", fontFamily: "'Inter', sans-serif" }}>
                        © {new Date().getFullYear()} Mattera Life Systems Private Limited. All rights reserved.
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                        <a
                            href="https://matteralifesystems.com"
                            style={{ color: "var(--text-muted)", fontSize: "0.8125rem", textDecoration: "none", fontFamily: "'Inter', sans-serif", transition: "color 0.2s" }}
                            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")}
                            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")}
                        >
                            matteralifesystems.com
                        </a>
                        <span style={{ color: "var(--text-muted)", fontSize: "0.8125rem" }}>|</span>
                        <a
                            href="https://pawos.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: "var(--text-muted)",
                                fontSize: "0.8125rem",
                                textDecoration: "none",
                                fontFamily: "'Inter', sans-serif",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.35rem",
                                transition: "color 0.2s",
                            }}
                            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent-teal)")}
                            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")}
                        >
                            pawos.app <ExternalLink size={11} />
                        </a>
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </footer>
    );
}

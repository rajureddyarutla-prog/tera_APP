"use client";

import Link from "next/link";
import { ExternalLink, Mail, MapPin } from "lucide-react";

const footerNav = [
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

export default function Footer() {
    return (
        <footer
            style={{
                background: "#080C14",
                borderTop: "1px solid rgba(79, 209, 197, 0.1)",
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
                                <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#F0F4FF" }}>
                                    Mattera Life Systems
                                </div>
                                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: "#4FD1C5", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                                    Private Limited
                                </div>
                            </div>
                        </div>
                        <p style={{ color: "#9BAACF", fontSize: "0.875rem", lineHeight: 1.8, marginBottom: "1.5rem", maxWidth: "300px" }}>
                            Engineering predictive health intelligence infrastructure for animals across species and environments.
                        </p>

                        {/* Locations */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem", marginBottom: "1.5rem" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", color: "#9BAACF", fontSize: "0.8125rem" }}>
                                <MapPin size={14} color="#4FD1C5" />
                                Hyderabad, India — R&D Hub
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", color: "#9BAACF", fontSize: "0.8125rem" }}>
                                <MapPin size={14} color="#8FA7FF" />
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
                    {footerNav.map((col) => (
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
                                                color: "#9BAACF",
                                                textDecoration: "none",
                                                fontSize: "0.875rem",
                                                transition: "color 0.2s",
                                                fontFamily: "'Inter', sans-serif",
                                            }}
                                            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#F0F4FF")}
                                            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#9BAACF")}
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
                        <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600, color: "#F0F4FF", marginBottom: "0.25rem" }}>
                            PawOS Platform
                        </div>
                        <div style={{ color: "#9BAACF", fontSize: "0.875rem" }}>
                            Access the live product environment and application interface at{" "}
                            <span style={{ color: "#4FD1C5" }}>pawos.app</span>
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
                    <p style={{ color: "#5A6A8A", fontSize: "0.8125rem", fontFamily: "'Inter', sans-serif" }}>
                        © {new Date().getFullYear()} Mattera Life Systems Private Limited. All rights reserved.
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                        <a
                            href="https://matteralifesystems.com"
                            style={{ color: "#5A6A8A", fontSize: "0.8125rem", textDecoration: "none", fontFamily: "'Inter', sans-serif", transition: "color 0.2s" }}
                            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#9BAACF")}
                            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#5A6A8A")}
                        >
                            matteralifesystems.com
                        </a>
                        <span style={{ color: "#5A6A8A", fontSize: "0.8125rem" }}>|</span>
                        <a
                            href="https://pawos.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: "#5A6A8A",
                                fontSize: "0.8125rem",
                                textDecoration: "none",
                                fontFamily: "'Inter', sans-serif",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.35rem",
                                transition: "color 0.2s",
                            }}
                            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#4FD1C5")}
                            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#5A6A8A")}
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

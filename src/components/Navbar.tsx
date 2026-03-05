"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ExternalLink } from "lucide-react";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Technology", href: "/technology" },
    { label: "Research", href: "/research" },
    { label: "Platform", href: "/platform" },
    { label: "Applications", href: "/applications" },
    { label: "Investors", href: "/investors" },
    { label: "Grants", href: "/research-collaboration" },
    { label: "Company", href: "/company" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    return (
        <>
            <header
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    transition: "all 0.3s ease",
                    background: scrolled
                        ? "rgba(11, 15, 25, 0.92)"
                        : "rgba(11, 15, 25, 0.6)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    borderBottom: scrolled
                        ? "1px solid rgba(79, 209, 197, 0.12)"
                        : "1px solid transparent",
                    boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.4)" : "none",
                }}
            >
                <div
                    className="section-container"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        height: "72px",
                    }}
                >
                    {/* Logo */}
                    <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                        {/* Logo mark */}
                        <div
                            style={{
                                width: "36px",
                                height: "36px",
                                background: "linear-gradient(135deg, #4FD1C5, #8FA7FF)",
                                borderRadius: "8px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                            }}
                        >
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10 2L18 6V14L10 18L2 14V6L10 2Z" stroke="#0B0F19" strokeWidth="1.5" strokeLinejoin="round" />
                                <path d="M10 6V14M6 8L14 12M14 8L6 12" stroke="#0B0F19" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </div>
                        <div>
                            <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#F0F4FF", lineHeight: 1.1 }}>
                                Mattera
                            </div>
                            <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "0.625rem", color: "#4FD1C5", letterSpacing: "0.15em", textTransform: "uppercase", lineHeight: 1.2 }}>
                                Life Systems
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav style={{ display: "flex", alignItems: "center", gap: "0.125rem" }} className="hidden-mobile">
                        {navLinks.map((link) => {
                            const active = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    style={{
                                        fontFamily: "'Inter', sans-serif",
                                        fontWeight: 500,
                                        fontSize: "0.8125rem",
                                        color: active ? "#4FD1C5" : "#9BAACF",
                                        textDecoration: "none",
                                        padding: "0.5rem 0.875rem",
                                        borderRadius: "6px",
                                        transition: "all 0.2s ease",
                                        background: active ? "rgba(79, 209, 197, 0.08)" : "transparent",
                                        position: "relative",
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!active) {
                                            (e.target as HTMLElement).style.color = "#F0F4FF";
                                            (e.target as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!active) {
                                            (e.target as HTMLElement).style.color = "#9BAACF";
                                            (e.target as HTMLElement).style.background = "transparent";
                                        }
                                    }}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* CTA + Mobile toggle */}
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                        <a
                            href="https://pawos.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary hidden-mobile"
                            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8125rem", padding: "0.625rem 1.25rem" }}
                        >
                            Access PawOS
                            <ExternalLink size={13} />
                        </a>

                        {/* Mobile hamburger */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="show-mobile"
                            style={{
                                background: "transparent",
                                border: "1px solid rgba(143,167,255,0.2)",
                                borderRadius: "8px",
                                padding: "0.5rem",
                                color: "#9BAACF",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                transition: "all 0.2s",
                            }}
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                style={{
                    position: "fixed",
                    top: "72px",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 999,
                    background: "rgba(11, 15, 25, 0.98)",
                    backdropFilter: "blur(20px)",
                    transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
                    transition: "transform 0.35s cubic-bezier(0.77, 0, 0.175, 1)",
                    padding: "2rem 1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                    overflowY: "auto",
                }}
            >
                {navLinks.map((link, i) => {
                    const active = pathname === link.href;
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            style={{
                                fontFamily: "'Sora', sans-serif",
                                fontWeight: 600,
                                fontSize: "1.25rem",
                                color: active ? "#4FD1C5" : "#F0F4FF",
                                textDecoration: "none",
                                padding: "1rem 1.25rem",
                                borderRadius: "12px",
                                background: active ? "rgba(79, 209, 197, 0.08)" : "transparent",
                                border: active ? "1px solid rgba(79, 209, 197, 0.2)" : "1px solid transparent",
                                transition: "all 0.2s",
                                animationDelay: `${i * 0.05}s`,
                            }}
                        >
                            {link.label}
                        </Link>
                    );
                })}
                <a
                    href="https://pawos.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ marginTop: "1.5rem", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}
                >
                    Access PawOS <ExternalLink size={14} />
                </a>
            </div>

            {/* Spacer for fixed nav */}
            <div style={{ height: "72px" }} />

            <style>{`
        @media (max-width: 900px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 901px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
        </>
    );
}

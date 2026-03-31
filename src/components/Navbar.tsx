"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ExternalLink } from "lucide-react";

interface NavLink {
    label: string;
    href: string;
}

interface NavData {
    logo_text_top: string;
    logo_text_bottom: string;
    logo_image?: {
        url: string;
        name: string;
    };
    nav_links: NavLink[];
    cta_text: string;
    cta_href: string;
    notification?: {
        enabled: boolean;
        text: string;
        color: string;
    };
}

import { fetchStrapi } from "@/lib/strapi";

export default function Navbar({ navData: initialNavData }: { navData?: NavData }) {
    const [navData, setNavData] = useState<NavData | undefined>(initialNavData);
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [logoError, setLogoError] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        async function getLiveNav() {
            try {
                const liveData = await fetchStrapi('navigation');
                if (liveData) {
                    setNavData(liveData);
                }
            } catch (err) {
                console.error("Failed to fetch live navigation:", err);
            }
        }
        getLiveNav();
    }, []);

    const logoTop = navData?.logo_text_top || "Mattera";
    const logoBottom = navData?.logo_text_bottom || "Life Systems";

    // Try to get logo from Strapi if available
    const strapiUrl = (process.env.NEXT_PUBLIC_STRAPI_URL || 'https://admin.matteralifesystems.com').replace(/\/$/, '');
    const logoSrc = navData?.logo_image?.url
        ? (navData.logo_image.url.startsWith('http') ? navData.logo_image.url : `${strapiUrl}${navData.logo_image.url}`)
        : "/mattera.png";

    const links = navData?.nav_links || [
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
    const ctaText = navData?.cta_text || "Access PawOS";
    const ctaHref = navData?.cta_href || "https://pawos.app";
    const notification = navData?.notification;

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
            {/* Notification Bar */}
            {notification?.enabled && (
                <div style={{
                    background: `${notification.color}20`,
                    backdropFilter: "blur(12px)",
                    borderBottom: `1px solid ${notification.color}30`,
                    padding: "0.5rem",
                    textAlign: "center",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: notification.color,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1001,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase"
                }}>
                    {notification.text}
                </div>
            )}

            <header
                style={{
                    position: "fixed",
                    top: notification?.enabled ? "33px" : 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    transition: "all 0.3s ease",
                    background: scrolled
                        ? "var(--bg-primary)"
                        : "transparent",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    borderBottom: scrolled
                        ? "1px solid var(--border-subtle)"
                        : "1px solid transparent",
                    boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.1)" : "none",
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
                        <Image
                            src="/mattera.png"
                            alt="Mattera"
                            width={160}
                            height={40}
                            priority
                            className="nav-logo"
                            style={{
                                height: "40px",
                                width: "auto",
                                objectFit: "contain",
                            }}
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav style={{ display: "flex", alignItems: "center", gap: "0.125rem" }} className="hidden-mobile">
                        {links.map((link) => {
                            const active = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    style={{
                                        fontFamily: "var(--font-inter)",
                                        fontWeight: 500,
                                        fontSize: "0.8125rem",
                                        color: active ? "var(--accent-teal)" : "var(--text-secondary)",
                                        textDecoration: "none",
                                        padding: "0.5rem 0.875rem",
                                        borderRadius: "6px",
                                        transition: "all 0.2s ease",
                                        background: active ? "rgba(79, 209, 197, 0.08)" : "transparent",
                                        position: "relative",
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!active) {
                                            (e.target as HTMLElement).style.color = "var(--text-primary)";
                                            (e.target as HTMLElement).style.background = "var(--border-subtle)";
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!active) {
                                            (e.target as HTMLElement).style.color = "var(--text-secondary)";
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
                            href={ctaHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary hidden-mobile"
                            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8125rem", padding: "0.625rem 1.25rem" }}
                        >
                            {ctaText}
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
                    top: notification?.enabled ? "105px" : "72px",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 999,
                    background: "var(--bg-primary)",
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
                {links.map((link, i) => {
                    const active = pathname === link.href;
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            style={{
                                fontFamily: "var(--font-sora)",
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
                    href={ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ marginTop: "1.5rem", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}
                >
                    {ctaText} <ExternalLink size={14} />
                </a>
            </div>

            {/* Spacer for fixed nav */}
            <div style={{ height: notification?.enabled ? "105px" : "72px" }} />

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

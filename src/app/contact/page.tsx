import type { Metadata } from "next";
import { Mail, MapPin, ExternalLink } from "lucide-react";
import { fetchStrapi } from "@/lib/strapi";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
    title: "Contact — Mattera Life Systems",
    description: "Connect with Mattera Life Systems. We welcome enquiries from investors, research institutions, veterinary partners, and hardware development teams.",
};

const enquiryTypesDefault = [
    "Research Collaboration",
    "Investment Discussion",
    "Veterinary Partnership",
    "Hardware Development",
    "Media / Press",
    "General Enquiry",
];

export default async function ContactPage() {
    const data = await fetchStrapi('contact-page');

    const tag_pill = data?.tag_pill || "Contact";
    const title = data?.title || "Connect with Mattera Life Systems";
    const description = data?.description || "We welcome enquiries from investors, research institutions, veterinary partners, and hardware development teams.";

    const enquiry_areas = data?.enquiry_areas || [
        { label: "Research Collaborations", desc: "Academic and institutional R&D partnerships" },
        { label: "Veterinary Partnerships", desc: "Clinical pilot programs and data validation" },
        { label: "Hardware Development", desc: "Sensor and IoT co-development" },
        { label: "Investment Discussions", desc: "Venture and strategic investment enquiries" },
    ];

    const locations = data?.locations || [
        { city: "Hyderabad, India", role: "Research & Engineering", color: "#4FD1C5" },
        { city: "United States", role: "Strategic Operations", color: "#8FA7FF" },
    ];

    const contactDetails = data?.contact_details_section || {
        email: "contact@matteralifesystems.com",
        links: [
            { label: "matteralifesystems.com", href: "https://matteralifesystems.com" },
            { label: "pawos.app", href: "https://pawos.app" },
        ]
    };

    return (
        <div style={{ background: "var(--bg-primary)" }}>
            {/* Hero */}
            <section className="section-pad grid-bg" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                <div className="section-container">
                    <div className="tag-pill" style={{ marginBottom: "1.5rem" }}>{tag_pill}</div>
                    <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", maxWidth: "700px", marginBottom: "1.25rem" }}>
                        {title}
                    </h1>
                    <p style={{ color: "var(--text-secondary)", maxWidth: "560px", lineHeight: 1.85, fontSize: "1.0625rem" }}>
                        {description}
                    </p>
                </div>
            </section>

            {/* Contact info + form */}
            <section className="section-pad">
                <div className="section-container">
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "5rem", alignItems: "start" }} className="contact-grid">
                        {/* Left panel */}
                        <div>
                            {/* Enquiry types */}
                            <div style={{ marginBottom: "2.5rem" }}>
                                <div style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--text-muted)", marginBottom: "1.25rem" }}>
                                    Enquiry Areas
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                                    {enquiry_areas.map((eq: any) => (
                                        <div key={eq.label} className="glass-card" style={{ padding: "1.125rem 1.25rem" }}>
                                            <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: "0.875rem", color: "var(--accent-teal)", marginBottom: "0.25rem" }}>{eq.label}</div>
                                            <div style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>{eq.desc}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Contact details */}
                            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                                <a
                                    href={`mailto:${contactDetails.email}`}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.875rem",
                                        textDecoration: "none",
                                        transition: "opacity 0.2s",
                                    }}
                                >
                                    <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "var(--bg-pill)", border: "1px solid var(--border-subtle)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                        <Mail size={16} color="var(--accent-teal)" />
                                    </div>
                                    <div>
                                        <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", marginBottom: "0.2rem" }}>Email</div>
                                        <div style={{ color: "var(--accent-teal)", fontSize: "0.875rem", fontFamily: "'Inter', sans-serif" }}>{contactDetails.email}</div>
                                    </div>
                                </a>
                                {locations.map((loc: any) => (
                                    <div key={loc.city} style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
                                        <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "var(--bg-pill)", border: "1px solid var(--border-subtle)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                            <MapPin size={16} color={loc.color} />
                                        </div>
                                        <div>
                                            <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", marginBottom: "0.2rem" }}>{loc.role}</div>
                                            <div style={{ color: "var(--text-primary)", fontSize: "0.875rem" }}>{loc.city}</div>
                                        </div>
                                    </div>
                                ))}
                                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "0.5rem" }}>
                                    {contactDetails.links.map((d: any) => (
                                        <a key={d.label} href={d.href} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--accent-blue)", fontSize: "0.8125rem", textDecoration: "none" }}>
                                            <ExternalLink size={12} /> {d.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div>
                            <ContactForm enquiryTypes={enquiry_areas.map((a: any) => a.label)} />
                        </div>
                    </div>
                </div>
                <style>{`@media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } }`}</style>
            </section>
        </div>
    );
}
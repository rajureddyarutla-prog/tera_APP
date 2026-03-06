
"use client";

import type { Metadata } from "next";
import { useState } from "react";
import { Mail, MapPin, ExternalLink, Send, CheckCircle } from "lucide-react";

// Note: metadata export can't be in a client component — moved to layout/head
// This page uses a client component for form state

const enquiryTypes = [
    "Research Collaboration",
    "Investment Discussion",
    "Veterinary Partnership",
    "Hardware Development",
    "Media / Press",
    "General Enquiry",
];

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        organisation: "",
        type: "General Enquiry",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                const data = await response.json();
                alert(data.error || "Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            alert("Failed to connect to the server. Please check your internet connection.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ background: "var(--bg-primary)" }}>
            {/* Hero */}
            <section className="section-pad grid-bg" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                <div className="section-container">
                    <div className="tag-pill" style={{ marginBottom: "1.5rem" }}>Contact</div>
                    <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", maxWidth: "700px", marginBottom: "1.25rem" }}>
                        Connect with{" "}
                        <span className="gradient-text">Mattera Life Systems</span>
                    </h1>
                    <p style={{ color: "var(--text-secondary)", maxWidth: "560px", lineHeight: 1.85, fontSize: "1.0625rem" }}>
                        We welcome enquiries from investors, research institutions, veterinary partners, and hardware development teams.
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
                                    {[
                                        { label: "Research Collaborations", desc: "Academic and institutional R&D partnerships" },
                                        { label: "Veterinary Partnerships", desc: "Clinical pilot programs and data validation" },
                                        { label: "Hardware Development", desc: "Sensor and IoT co-development" },
                                        { label: "Investment Discussions", desc: "Venture and strategic investment enquiries" },
                                    ].map((eq) => (
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
                                    href="mailto:contact@matteralifesystems.com"

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
                                        <div style={{ color: "var(--accent-teal)", fontSize: "0.875rem", fontFamily: "'Inter', sans-serif" }}>contact@matteralifesystems.com</div>
                                    </div>
                                </a>
                                {[
                                    { city: "Hyderabad, India", role: "Research & Engineering", color: "#4FD1C5" },
                                    { city: "United States", role: "Strategic Operations", color: "#8FA7FF" },
                                ].map((loc) => (
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
                                    {[
                                        { label: "matteralifesystems.com", href: "https://matteralifesystems.com" },
                                        { label: "pawos.app", href: "https://pawos.app" },
                                    ].map((d) => (
                                        <a key={d.label} href={d.href} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--accent-blue)", fontSize: "0.8125rem", textDecoration: "none" }}>
                                            <ExternalLink size={12} /> {d.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div>
                            {submitted ? (
                                <div
                                    className="glass-card"
                                    style={{
                                        padding: "4rem 3rem",
                                        textAlign: "center",
                                        borderColor: "var(--accent-teal)",
                                        background: "var(--bg-pill)",
                                    }}
                                >
                                    <CheckCircle size={48} color="var(--accent-teal)" style={{ marginBottom: "1.5rem" }} />
                                    <h2 style={{ fontSize: "1.375rem", marginBottom: "0.875rem", color: "var(--text-primary)" }}>
                                        <span className="gradient-text">Message Received</span>
                                    </h2>
                                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
                                        Thank you for reaching out to Mattera Life Systems. We will review your
                                        enquiry and respond to <strong style={{ color: "var(--accent-teal)" }}>{form.email}</strong> within 2–3 business days.
                                    </p>
                                </div>
                            ) : (
                                <form
                                    onSubmit={handleSubmit}
                                    className="glass-card"
                                    style={{ padding: "2.5rem" }}
                                >
                                    <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1.25rem", marginBottom: "0.5rem" }}>Send an Enquiry</h2>
                                    <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", marginBottom: "2rem" }}>
                                        All fields are required. Responses within 2–3 business days.
                                    </p>

                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }} className="form-split">
                                        <div>
                                            <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                className="input-field"
                                                placeholder="Dr. Jane Smith"
                                                value={form.name}
                                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                className="input-field"
                                                placeholder="you@institution.edu"
                                                value={form.email}
                                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div style={{ marginBottom: "1rem" }}>
                                        <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>
                                            Organisation
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            className="input-field"
                                            placeholder="University / Firm / Clinic"
                                            value={form.organisation}
                                            onChange={(e) => setForm({ ...form, organisation: e.target.value })}
                                        />
                                    </div>

                                    <div style={{ marginBottom: "1rem" }}>
                                        <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>
                                            Enquiry Type
                                        </label>
                                        <select
                                            className="input-field"
                                            value={form.type}
                                            onChange={(e) => setForm({ ...form, type: e.target.value })}
                                            style={{ appearance: "none", cursor: "pointer", background: "var(--bg-card)", color: "var(--text-primary)" }}
                                        >
                                            {enquiryTypes.map((t) => (
                                                <option key={t} value={t} style={{ background: "var(--bg-card)" }}>
                                                    {t}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div style={{ marginBottom: "1.75rem" }}>
                                        <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>
                                            Message
                                        </label>
                                        <textarea
                                            required
                                            className="input-field"
                                            placeholder="Describe your enquiry, research interest, or partnership proposal..."
                                            rows={5}
                                            value={form.message}
                                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                                            style={{ resize: "vertical", minHeight: "120px" }}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn-primary"
                                        disabled={loading}
                                        style={{
                                            width: "100%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: "0.5rem",
                                            opacity: loading ? 0.7 : 1,
                                            cursor: loading ? "not-allowed" : "pointer",
                                        }}
                                    >
                                        {loading ? (
                                            <>
                                                <div style={{ width: "16px", height: "16px", borderRadius: "50%", border: "2px solid #0B0F19", borderTopColor: "transparent", animation: "spin 0.8s linear infinite" }} />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send size={15} />
                                                Send Enquiry
                                            </>
                                        )}
                                    </button>

                                    <p style={{ color: "var(--text-muted)", fontSize: "0.75rem", marginTop: "1rem", textAlign: "center" }}>
                                        Or email directly at{" "}
                                        <a href="mailto:contact@matteralifesystems.com" style={{ color: "var(--accent-teal)", textDecoration: "none" }}>contact@matteralifesystems.com</a>
                                    </p>

                                    <style>{`
                    @keyframes spin { to { transform: rotate(360deg); } }
                    @media (max-width: 560px) { .form-split { grid-template-columns: 1fr !important; } }
                  `}</style>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
                <style>{`@media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } }`}</style>
            </section>
        </div>
    );
}
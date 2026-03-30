"use client";

import { CheckCircle } from "lucide-react";

interface UseCase {
    segment: string;
    tag: string;
    color: string;
    items: string[];
    desc: string;
}

export default function UseCasesGrid({ useCases }: { useCases: UseCase[] }) {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.25rem" }} className="usecase-grid">
            {useCases.map((uc) => (
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
                    <h3 style={{ fontFamily: "var(--font-sora)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>{uc.segment}</h3>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", marginBottom: "1.25rem", lineHeight: 1.7 }}>{uc.desc}</p>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        {uc.items.map((item) => (
                            <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem" }}>
                                <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: uc.color, marginTop: "0.6rem", flexShrink: 0 }} />
                                <span style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

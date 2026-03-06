"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
    const [theme, setTheme] = useState<"light" | "dark">("dark");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
        const initialTheme = savedTheme || "dark";
        setTheme(initialTheme);
        document.documentElement.setAttribute("data-theme", initialTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    if (!mounted) return null;

    return (
        <>
            <style>{`
                .theme-toggle-btn {
                    position: fixed;
                    bottom: 2rem;
                    right: 2rem;
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    background: var(--bg-card);
                    border: 1px solid var(--border-card);
                    color: var(--text-primary);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    z-index: 1000;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    overflow: hidden;
                    backdrop-filter: blur(8px);
                    -webkit-backdrop-filter: blur(8px);
                }
                .theme-toggle-btn:hover {
                    transform: translateY(-4px) scale(1.05);
                    border-color: var(--accent-teal);
                    box-shadow: var(--glow-teal);
                }
                .icon-container {
                    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .icon-rotate { transform: rotate(360deg); }
                .moon-icon { color: var(--accent-blue); }
                .sun-icon { color: #FFD700; }
                @media (max-width: 768px) {
                    .theme-toggle-btn {
                        bottom: 1.5rem;
                        right: 1.5rem;
                        width: 42px;
                        height: 42px;
                    }
                }
            `}</style>

            <button
                onClick={toggleTheme}
                className="theme-toggle-btn"
                aria-label="Toggle Theme"
            >
                <div className={`icon-container ${theme === "light" ? "icon-rotate" : ""}`}>
                    {theme === "dark" ? (
                        <Moon size={20} className="moon-icon" />
                    ) : (
                        <Sun size={20} className="sun-icon" />
                    )}
                </div>
            </button>
        </>
    );
}

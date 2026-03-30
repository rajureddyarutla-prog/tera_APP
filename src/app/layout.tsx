import type { Metadata } from "next";
import dynamic from "next/dynamic";
import "./globals.css";
import Navbar from "@/components/Navbar";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { fetchStrapi } from "@/lib/strapi";

// Dynamically import heavy/non-critical components
const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: true, // Keep SSR but defer hydration
});

const ThemeToggle = dynamic(() => import("@/components/ThemeToggle"));

// Using local system font stack class names to bypass Google Font build errors.
// These are defined in globals.css as fallback-friendly stacks.
const interVar = "font-inter";
const soraVar = "font-sora";

export const metadata: Metadata = {
  title: {
    default: "AI Animal Health Platform | Predictive Veterinary Intelligence | Mattera Life Systems",
    template: "%s | Mattera Life Systems",
  },
  description:
    "Mattera Life Systems develops AI-powered health intelligence infrastructure for animals combining wearable devices, behavioral analytics, and predictive diagnostics. Explore PawOS and next-generation veterinary data platforms.",
  keywords: [
    "AI animal health platform",
    "pet health monitoring system",
    "veterinary predictive analytics",
    "smart pet wearable health tracker",
    "livestock health analytics",
    "animal behavioral health monitoring",
    "preventive veterinary technology",
    "AI veterinary diagnostics",
    "pet health data platform",
    "wearable monitoring for animals",
    "animal healthcare AI infrastructure",
  ],
  authors: [{ name: "Mattera Life Systems" }],
  creator: "Mattera Life Systems",
  metadataBase: new URL("https://www.matteralifesystems.com"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.matteralifesystems.com",
    siteName: "Mattera Life Systems",
    title: "AI Animal Health Platform | Mattera Life Systems",
    description:
      "AI-powered health intelligence infrastructure for animals — wearable sensors, behavioral analytics, and predictive diagnostics.",
    images: [
      {
        url: "mattera.png",
        width: 1200,
        height: 630,
        alt: "Mattera Life Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mattera Life Systems — AI Animal Health Platform",
    description: "Predictive veterinary intelligence infrastructure powered by AI and wearable sensors.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let navData = null;
  try {
    navData = await fetchStrapi('navigation');
  } catch (err) {
    // Fail silently
  }

  return (
    <html lang="en" className={`${interVar} ${soraVar}`}>
      <body className="antialiased">
        <GoogleAnalytics />
        <Navbar navData={navData} />
        <main>{children}</main>
        <Footer navData={navData} />
        <ThemeToggle />
      </body>
    </html>
  );
}

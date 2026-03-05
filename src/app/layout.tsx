import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

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
  metadataBase: new URL("https://matteralifesystems.com"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://matteralifesystems.com",
    siteName: "Mattera Life Systems",
    title: "AI Animal Health Platform | Mattera Life Systems",
    description:
      "AI-powered health intelligence infrastructure for animals — wearable sensors, behavioral analytics, and predictive diagnostics.",
    images: [
      {
        url: "/og-image.png",
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
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="antialiased">
        <GoogleAnalytics />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

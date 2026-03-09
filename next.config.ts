import type { NextConfig } from "next";
import path from "path";

const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

const nextConfig: NextConfig = {
  reactCompiler: true,

  // Fix: Pin workspace root to this project directory to avoid
  // Next.js picking up the wrong package.json from a parent directory.
  // This resolves the "Can't resolve tailwindcss" error.
  turbopack: {
    root: path.resolve(__dirname),
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
              `connect-src 'self' ${strapiUrl} https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com`,
              `img-src 'self' data: ${strapiUrl} https://www.google-analytics.com https://www.googletagmanager.com`,
              "style-src 'self' 'unsafe-inline'",
              "font-src 'self' data:",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
import type { NextConfig } from "next";
import path from "path";

const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  //   output: 'export', // Enables Static HTML Export
  //   trailingSlash: true, // Creates folders with index.html for better static hosting
  images: {
    unoptimized: true, // Required for static export
  },

  turbopack: {
    root: path.resolve(__dirname),
  },

  // Note: headers() are ignored by 'output: export'. 
  // You should configure headers in your hosting provider (e.g., .htaccess for Hostinger)
  /*
  async headers() {
    ...
  },
  */
};

export default nextConfig;

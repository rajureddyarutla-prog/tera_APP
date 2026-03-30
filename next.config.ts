import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: 'export',       // Static HTML export for Hostinger
  trailingSlash: true,
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    unoptimized: true,   // Required for static export
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

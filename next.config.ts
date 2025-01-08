import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["images.unsplash.com", "ss3.4sqi.net", "via.placeholder.com"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ss3.4sqi.net',
        pathname: '/**',
      }
    ],
  },

};

export default nextConfig;

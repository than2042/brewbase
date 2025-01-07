import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["images.unsplash.com", "ss3.4sqi.net", "via.placeholder.com"],
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

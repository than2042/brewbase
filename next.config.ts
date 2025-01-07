import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['unsplash.com'],
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

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
images: {
    // Use remotePatterns for modern Next.js versions (13+)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  }
};

export default nextConfig;

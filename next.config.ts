import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        hostname: 'assets.aceternity.com',
      },
      {
        hostname: 'images.unsplash.com',
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;

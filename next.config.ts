import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Local placeholder images live in /public/images. When UPSDE provides real
  // photography hosted remotely, add the host under images.remotePatterns here.

  // Permanent redirects from the previous URL structure to the new
  // Who We Are / What We Do sections so existing links keep working.
  // Note: the removed "Stories & Updates" route is intentionally NOT redirected
  // — /stories now returns the normal 404.
  async redirects() {
    return [
      { source: "/about", destination: "/who-we-are/about", permanent: true },
      { source: "/who-we-are", destination: "/who-we-are/about", permanent: true },
      { source: "/programs", destination: "/what-we-do/our-work", permanent: true },
      { source: "/what-we-do", destination: "/what-we-do/our-work", permanent: true },
      { source: "/impact", destination: "/what-we-do/our-impact", permanent: true },
    ];
  },
};

export default nextConfig;

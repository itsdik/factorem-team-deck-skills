import type { NextConfig } from "next";

// Static export so the whole deck deploys to Vercel (or any static host) as plain
// HTML/JS with zero server cost. `npm run build` writes the deck to /out.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;

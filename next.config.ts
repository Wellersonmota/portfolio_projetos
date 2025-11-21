import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Only use basePath in production (GitHub Pages)
  // In local dev, we want to use http://localhost:3000/
  basePath: isProd ? '/portfolio_projetos' : '',
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    RAPIDAPI_KEY: process.env.RAPIDAPI_KEY, 
  },
  images: {
    domains: ['img.a.transfermarkt.technology', 's2-ge.glbimg.com'], 
  },
};

export default nextConfig;

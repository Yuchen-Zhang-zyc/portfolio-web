import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    resolveExtensions: ['.tsx', '.ts', '.jsx', '.js', '.css'],
  },
  webpack: (config) => {
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['**/.claude/**', '**/node_modules/**'],
    };
    return config;
  },
};

export default nextConfig;

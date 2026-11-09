import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    // Pin the workspace root to this project so a stray lockfile in a parent
    // directory (e.g. ~/package-lock.json) doesn't hijack module resolution.
    root: path.join(__dirname),
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    distDir: "dist",
    // Optimize for React Three Fiber and Three.js
    webpack: (config) => {
        config.externals = config.externals || [];
        config.externals.push({
            canvas: "canvas",
        });
        return config;
    },
    output: "standalone",
};

export default nextConfig;

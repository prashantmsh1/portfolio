import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    // Optimize for React Three Fiber and Three.js
    webpack: (config) => {
        config.externals = config.externals || [];
        config.externals.push({
            canvas: "canvas",
        });
        return config;
    },
};

export default nextConfig;

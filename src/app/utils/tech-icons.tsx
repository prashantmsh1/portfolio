import React from "react";
import {
    Code,
    Database,
    Server,
    Layout,
    FileCode,
    Palette,
    Globe,
    Layers,
    PackageOpen,
    Zap,
    Coffee,
} from "lucide-react";

// Technology icon mapping
export interface TechIcon {
    icon: React.ReactNode;
    color: string; // Tailwind color class or hex value
}

// Map lowercase tech names to their icons and colors
export const techIcons: Record<string, TechIcon> = {
    // Frontend frameworks & libraries
    react: {
        icon: <Code />,
        color: "text-blue-400",
    },
    "vue.js": {
        icon: <Code />,
        color: "text-green-500",
    },
    "next.js": {
        icon: <Zap />,
        color: "text-gray-200",
    },
    typescript: {
        icon: <FileCode />,
        color: "text-blue-500",
    },
    javascript: {
        icon: <FileCode />,
        color: "text-yellow-400",
    },

    // Backend & database
    "node.js": {
        icon: <Server />,
        color: "text-green-500",
    },
    express: {
        icon: <Server />,
        color: "text-gray-300",
    },
    mongodb: {
        icon: <Database />,
        color: "text-green-600",
    },
    postgresql: {
        icon: <Database />,
        color: "text-blue-500",
    },
    firebase: {
        icon: <Database />,
        color: "text-yellow-500",
    },
    python: {
        icon: <Code />,
        color: "text-blue-300",
    },
    django: {
        icon: <Server />,
        color: "text-green-700",
    },

    // CSS & styling
    "tailwind css": {
        icon: <Palette />,
        color: "text-cyan-400",
    },
    css: {
        icon: <Palette />,
        color: "text-blue-500",
    },
    bootstrap: {
        icon: <Layout />,
        color: "text-purple-500",
    },
    vuetify: {
        icon: <Layout />,
        color: "text-blue-400",
    },

    // Animation & UI
    "framer motion": {
        icon: <Layers />,
        color: "text-purple-400",
    },

    // Default icon for any technology not listed
    default: {
        icon: <PackageOpen />,
        color: "text-gray-400",
    },
};

/**
 * Get icon for a specific technology
 * @param tech The technology name
 * @returns The icon component with its color
 */
export const getTechIcon = (tech: string): TechIcon => {
    const normalizedTech = tech.toLowerCase();
    return techIcons[normalizedTech] || techIcons.default;
};

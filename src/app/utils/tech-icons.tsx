import React from "react";
import {
    Code,
    Database,
    Server,
    Layout,
    FileCode,
    Palette,
    Layers,
    PackageOpen,
    Zap,
} from "lucide-react";

// Technology icon mapping
export interface TechIcon {
    icon: React.ReactNode;
    color: string; // Tailwind color class or hex value
}

const accentClasses = {
    dawn: "text-[var(--pale_dogwood-500)]",
    dusk: "text-[var(--rose_quartz-500)]",
    twilight: "text-[var(--ultra_violet-700)]",
    midnight: "text-[var(--space_cadet-700)]",
    glow: "text-[rgba(252,250,249,0.85)]",
    mist: "text-[rgba(201,173,167,0.75)]",
};

// Map lowercase tech names to their icons and colors
export const techIcons: Record<string, TechIcon> = {
    // Frontend frameworks & libraries
    react: {
        icon: <Code />,
        color: accentClasses.dawn,
    },
    "vue.js": {
        icon: <Code />,
        color: accentClasses.dusk,
    },
    "next.js": {
        icon: <Zap />,
        color: accentClasses.glow,
    },
    typescript: {
        icon: <FileCode />,
        color: accentClasses.twilight,
    },
    javascript: {
        icon: <FileCode />,
        color: accentClasses.glow,
    },

    // Backend & database
    "node.js": {
        icon: <Server />,
        color: accentClasses.midnight,
    },
    express: {
        icon: <Server />,
        color: accentClasses.mist,
    },
    mongodb: {
        icon: <Database />,
        color: accentClasses.dawn,
    },
    postgresql: {
        icon: <Database />,
        color: accentClasses.twilight,
    },
    firebase: {
        icon: <Database />,
        color: accentClasses.glow,
    },
    python: {
        icon: <Code />,
        color: accentClasses.mist,
    },
    django: {
        icon: <Server />,
        color: accentClasses.midnight,
    },

    // CSS & styling
    "tailwind css": {
        icon: <Palette />,
        color: accentClasses.twilight,
    },
    css: {
        icon: <Palette />,
        color: accentClasses.dusk,
    },
    bootstrap: {
        icon: <Layout />,
        color: accentClasses.dawn,
    },
    vuetify: {
        icon: <Layout />,
        color: accentClasses.twilight,
    },

    // Animation & UI
    "framer motion": {
        icon: <Layers />,
        color: accentClasses.dawn,
    },

    // Default icon for any technology not listed
    default: {
        icon: <PackageOpen />,
        color: accentClasses.dusk,
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

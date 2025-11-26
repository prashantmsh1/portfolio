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
    gradient: string; // Tailwind gradient classes
}

const accentClasses = {
    dawn: "text-[var(--pale_dogwood-500)]",
    dusk: "text-[var(--rose_quartz-500)]",
    twilight: "text-[var(--ultra_violet-700)]",
    midnight: "text-[var(--space_cadet-700)]",
    glow: "text-[rgba(252,250,249,0.85)]",
    mist: "text-[rgba(201,173,167,0.75)]",
};

export const accentGradients = {
    dawn: "from-[rgba(201,173,167,0.85)] to-[rgba(154,140,152,0.78)]",
    dusk: "from-[rgba(154,140,152,0.85)] to-[rgba(201,173,167,0.78)]",
    twilight: "from-[rgba(64,64,111,0.85)] to-[rgba(96,96,163,0.78)]",
    midnight: "from-[rgba(34,34,59,0.85)] to-[rgba(64,64,111,0.78)]",
    glow: "from-[rgba(252,250,249,0.85)] to-[rgba(235,232,234,0.78)]",
    mist: "from-[rgba(201,173,167,0.75)] to-[rgba(235,232,234,0.68)]",
};

// Map lowercase tech names to their icons and colors
export const techIcons: Record<string, TechIcon> = {
    // Frontend frameworks & libraries
    react: {
        icon: <Code />,
        color: accentClasses.dawn,
        gradient: accentGradients.dawn,
    },
    "vue.js": {
        icon: <Code />,
        color: accentClasses.dusk,
        gradient: accentGradients.dusk,
    },
    "next.js": {
        icon: <Zap />,
        color: accentClasses.glow,
        gradient: accentGradients.glow,
    },
    typescript: {
        icon: <FileCode />,
        color: accentClasses.twilight,
        gradient: accentGradients.twilight,
    },
    javascript: {
        icon: <FileCode />,
        color: accentClasses.glow,
        gradient: accentGradients.glow,
    },

    // Backend & database
    "node.js": {
        icon: <Server />,
        color: accentClasses.midnight,
        gradient: accentGradients.midnight,
    },
    express: {
        icon: <Server />,
        color: accentClasses.mist,
        gradient: accentGradients.mist,
    },
    mongodb: {
        icon: <Database />,
        color: accentClasses.dawn,
        gradient: accentGradients.dawn,
    },
    postgresql: {
        icon: <Database />,
        color: accentClasses.twilight,
        gradient: accentGradients.twilight,
    },
    firebase: {
        icon: <Database />,
        color: accentClasses.glow,
        gradient: accentGradients.glow,
    },
    python: {
        icon: <Code />,
        color: accentClasses.mist,
        gradient: accentGradients.mist,
    },
    django: {
        icon: <Server />,
        color: accentClasses.midnight,
        gradient: accentGradients.midnight,
    },

    // CSS & styling
    "tailwind css": {
        icon: <Palette />,
        color: accentClasses.twilight,
        gradient: accentGradients.twilight,
    },
    css: {
        icon: <Palette />,
        color: accentClasses.dusk,
        gradient: accentGradients.dusk,
    },
    bootstrap: {
        icon: <Layout />,
        color: accentClasses.dawn,
        gradient: accentGradients.dawn,
    },
    vuetify: {
        icon: <Layout />,
        color: accentClasses.twilight,
        gradient: accentGradients.twilight,
    },

    // Animation & UI
    "framer motion": {
        icon: <Layers />,
        color: accentClasses.dawn,
        gradient: accentGradients.dawn,
    },

    // Default icon for any technology not listed
    default: {
        icon: <PackageOpen />,
        color: accentClasses.dusk,
        gradient: accentGradients.dusk,
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

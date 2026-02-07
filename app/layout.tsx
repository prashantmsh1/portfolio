import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "../src/app/components/SmoothScroll";

export const metadata: Metadata = {
    title: "Prashant | Creative Developer",
    description: "A showcase of ultra-modern web experiences.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className="antialiased overflow-x-hidden selection:bg-purple-500 selection:text-white">
                <SmoothScroll />
                <div className="relative min-h-screen w-full">
                    {/* Subtle Grain or Noise could be added here if desired, keeping it clean for now */}
                    <main className="flex min-h-screen flex-col">{children}</main>
                </div>
            </body>
        </html>
    );
}

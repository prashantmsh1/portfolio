import type { Metadata } from "next";
import "./globals.css";
import { ScrollProvider } from "../src/app/context/ScrollContext";

export const metadata: Metadata = {
    title: "Prashant | Creative Developer",
    description: "A showcase of ultra-modern web experiences.",
    icons: {
        icon: "/icon.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className="antialiased overflow-x-hidden selection:bg-purple-500 selection:text-white">
                <ScrollProvider>
                    <div className="relative min-h-screen w-full">
                        {/* Subtle Grain or Noise could be added here if desired, keeping it clean for now */}
                        <main className="flex min-h-screen flex-col">{children}</main>
                    </div>
                </ScrollProvider>
            </body>
        </html>
    );
}

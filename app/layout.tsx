import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TextHoverEffect } from "@/components/Hover-Footer";
import Footer from "@/components/demo-footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Modern Blog",
    description: "A modern blog built with Next.js 15, Tailwind CSS, and Framer Motion",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="flex min-h-screen flex-col">
                        {children}
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}

import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { cn } from "@/lib/utils";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { FadeInOnView } from "@/components/FadeInOnView";

const dmSans = DM_Sans({
    subsets: ["latin"],
    variable: "--font-sans",
    weight: ["300", "400", "500"],
});

const syne = Syne({
    subsets: ["latin"],
    variable: "--font-display",
    weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
    title: "Marusi Matei Bruno — Full-Stack Developer",
    description:
        "Portofoliu — produse web, Next.js, React și stack modern full-stack.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="ro"
            className={cn("scroll-smooth font-sans", dmSans.variable)}
        >
            <body
                className={twMerge(
                    dmSans.variable,
                    syne.variable,
                    "bg-[var(--bg-dark)] text-white antialiased font-sans",
                )}
            >
                <Header />

                <main>{children}</main>
                <FadeInOnView>
                    <Footer />
                </FadeInOnView>
            </body>
        </html>
    );
}

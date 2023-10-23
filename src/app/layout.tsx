import { Inter } from "next/font/google";

import type { Metadata } from "next";

import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "Stepan Pavlov",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html className={inter.variable} lang="en">
            <body className="dark">{children}</body>
        </html>
    );
}

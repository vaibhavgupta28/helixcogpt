import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@/styles/globals.css";
import "@/styles/tailwind.css";
import { Inter, Space_Grotesk } from "next/font/google";
import { defaultMetadata } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}

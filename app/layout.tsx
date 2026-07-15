import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Trishna Tanaya | Software Engineer",
  description:
    "Software engineer building full-stack platforms, AI pipelines, and real-time systems.",
  keywords: [
    "software engineer",
    "full stack developer",
    "portfolio",
    "react",
    "next.js",
    "typescript",
    "python",
    "java",
  ],
  authors: [{ name: "Trishna Tanaya" }],
  openGraph: {
    title: "Trishna Tanaya | Software Engineer",
    description:
      "Software engineer building full-stack platforms, AI pipelines, and real-time systems.",
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-full flex flex-col">
        <div className="grain-overlay" />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

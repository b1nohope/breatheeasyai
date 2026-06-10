import type { Metadata } from "next";
import { Unbounded, Sora, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import "./design.css";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import SiteEffects from "@/components/SiteEffects";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--font-unbounded",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sora",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  title: "BreatheEzAI — AI literacy & automation, proven live",
  description:
    "AI automation for businesses and AI literacy education for kids, schools, and organizations in Clarksville, TN.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${unbounded.variable} ${sora.variable} ${plexMono.variable}`}
    >
      <body className="antialiased">
        <SiteEffects />
        <SiteNav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});
const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});
const space = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://studio.salillakra.com"),
  title: {
    default: "VEYLO — Digital Product & Engineering Studio",
    template: "%s — VEYLO",
  },
  description:
    "VEYLO is an independent digital product and engineering studio helping startups and businesses turn ambitious ideas into meaningful digital products.",
  keywords: [
    "digital product studio",
    "product engineering studio",
    "web development studio",
    "SaaS development",
    "backend engineering",
    "AI automation",
    "Next.js development",
    "custom software development",
  ],
  authors: [{ name: "Salil Lakra", url: "https://salillakra.com" }],
  creator: "VEYLO",
  publisher: "VEYLO",
  applicationName: "VEYLO",
  category: "technology",
  alternates: { canonical: "https://studio.salillakra.com" },
  icons: { icon: "/favicon.png", apple: "/favicon.png" },
  openGraph: {
    type: "website",
    url: "https://studio.salillakra.com",
    siteName: "VEYLO",
    locale: "en_US",
    title: "VEYLO — Digital Product & Engineering Studio",
    description:
      "Ideas into reality. Digital products, thoughtful design, and serious engineering.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "VEYLO — Ideas into reality",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VEYLO — Digital Product & Engineering Studio",
    description:
      "Ideas into reality. Digital products, thoughtful design, and serious engineering.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true, "max-image-preview": "large" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${space.variable}`}
    >
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

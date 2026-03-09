import type { Metadata } from "next";
import { JetBrains_Mono, Manrope, Space_Grotesk } from "next/font/google";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://emirhanatici.xyz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Darkenola | Emirhan | Software Developer",
    template: "%s | Darkenola",
  },
  description:
    "A premium developer portfolio for Emirhan, focused on backend systems, automation, and polished digital experiences.",
  applicationName: "Darkenola Portfolio",
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Emirhan" }],
  creator: "Emirhan",
  publisher: "Emirhan",
  category: "technology",
  keywords: [
    "Emirhan",
    "Darkenola",
    "software developer",
    "developer portfolio",
    "Next.js portfolio",
    "backend developer",
    "automation",
    "portfolio website",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Darkenola",
    title: "Darkenola | Emirhan | Software Developer",
    description:
      "Premium software developer portfolio focused on backend systems, automation, and polished digital experiences.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Darkenola portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Darkenola | Emirhan | Software Developer",
    description:
      "Premium software developer portfolio focused on backend systems, automation, and polished digital experiences.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" data-theme="dark">
      <body
        className={`${manrope.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

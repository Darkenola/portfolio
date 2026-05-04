import type { Metadata } from "next";
import { IBM_Plex_Sans, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});
const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Emirhan Atıcı — Premium Web Developer & Digital Creator",
  description:
    "Markalar, girişimler ve dijital projeler için hızlı, estetik, premium ve dönüşüm odaklı web siteleri.",
  metadataBase: new URL("https://emirhanatici.xyz"),
  openGraph: {
    title: "Emirhan Atıcı — Premium Web Developer",
    description:
      "Modern web deneyimleri tasarlıyor ve geliştiriyorum.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${body.variable} ${display.variable} ${mono.variable}`}>
      <body className="font-sans bg-ink-950 text-white selection:bg-neon-cyan/40">
        {children}
      </body>
    </html>
  );
}

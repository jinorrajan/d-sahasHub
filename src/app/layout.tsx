import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Dr. P. V. Devi Seshadri",
    "Tactical Leadership Management Coach",
    "D SAHAS Hub",
    "DeeSkill",
    "LiveEase",
    "Dhee Foods",
    "Executive Coaching Chennai",
    "Family Business Consultant",
    "REACT to RESPOND",
    "SELF Philosophy",
    "BYST Senior Mentor",
    "World Record 55 Hours Webinar",
  ],
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.umbrella,
    images: [
      {
        url: "/images/client/person/person-1.jpeg",
        width: 1200,
        height: 630,
        alt: "Dr. P. V. Devi Seshadri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/images/client/person/person-1.jpeg"],
  },
  icons: {
    icon: "/images/client/logo/d-sahas-hub-logo.jpg",
    apple: "/images/client/logo/d-sahas-hub-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans antialiased selection:bg-brand-crimson selection:text-white">
        <JsonLd />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}


import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyCTA } from "@/components/features/StickyCTA";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://costielec.be"),
  title: {
    default: "Électricien Bruxelles | COSTI ELEC — Devis Gratuit 7j/7",
    template: "%s | COSTI ELEC",
  },
  description:
    "Électricien agréé à Bruxelles. Conformité RGIE, rénovation, bornes EV, vidéophones. Disponible 7j/7. Devis gratuit. ☎ +32 489 98 62 09",
  keywords: [
    "électricien Bruxelles",
    "électricien agréé Bruxelles",
    "mise en conformité RGIE",
    "rénovation électrique",
    "borne de recharge",
  ],
  authors: [{ name: "COSTI ELEC" }],
  creator: "COSTI ELEC",
  openGraph: {
    type: "website",
    locale: "fr_BE",
    url: "https://costielec.be",
    siteName: "COSTI ELEC",
    title: "Électricien Bruxelles | COSTI ELEC — Devis Gratuit 7j/7",
    description:
      "Électricien agréé à Bruxelles. Conformité RGIE, rénovation, bornes EV, vidéophones. Disponible 7j/7. Devis gratuit.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "COSTI ELEC - Électricien Bruxelles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Électricien Bruxelles | COSTI ELEC",
    description:
      "Électricien agréé à Bruxelles. Conformité RGIE, rénovation, bornes EV. Devis gratuit 7j/7.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: "your-google-verification-code",
  },
  icons: {
    icon: "/1-f86c1c56.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-BE" className={inter.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}

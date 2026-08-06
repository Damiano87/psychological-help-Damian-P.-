import type { Metadata } from "next";
import { Geist, Geist_Mono, Jost, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin", "latin-ext"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_URL || "https://miejscespotkanzmiana.pl",
  ),
  alternates: {
    canonical: "https://miejscespotkanzmiana.pl",
  },
  title: {
    default: "Miejsce spotkań ZMIANA | Damian Piwowarczyk - Psycholog",
    template: "%s | Miejsce spotkań ZMIANA - Damian Piwowarczyk",
  },
  description:
    "Konsultacje psychologiczne, psychotraumatologia, terapia TSR oraz warsztaty i szkolenia.",
  keywords: [
    "psycholog",
    "psychotraumatolog",
    "terapia TSR",
    "konsultacje psychologiczne",
    "stres pourazowy",
    "pomoc psychologiczna",
    "Damian Piwowarczyk",
    "Miejsce spotkań ZMIANA",
    "Ostrowiec Świętokrzyski",
    "Ostrowiec",
  ],
  authors: [{ name: "Damian Piwowarczyk" }],
  creator: "Damian Piwowarczyk",
  openGraph: {
    type: "website",
    locale: "pl_PL",
    siteName: "Miejsce spotkań ZMIANA - Damian Piwowarczyk",
    title:
      "Miejsce spotkań ZMIANA | Damian Piwowarczyk - Psycholog, Psychotraumatolog",
    description:
      "Profesjonalna pomoc psychologiczna, psychotraumatologia, terapia TSR oraz warsztaty. Przywracanie równowagi i dobrostanu psychicznego.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Miejsce spotkań ZMIANA | Damian Piwowarczyk",
    description:
      "Profesjonalna pomoc psychologiczna, psychotraumatologia i terapia TSR.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { rel: "icon", url: "/favicon.ico" },
      {
        rel: "icon",
        type: "image/png",
        sizes: "256x256",
        url: "/favicon-256x256.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
    ],
    apple: [
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        url: "/apple-touch-icon.png",
      },
    ],
  },
  other: {
    "msapplication-TileColor": "#da532c",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${geistSans.variable} ${geistMono.variable} ${jost.variable} ${roboto.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

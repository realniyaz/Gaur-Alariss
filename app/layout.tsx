import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gaur Alaris Sector 22D Yamuna Expressway | 3 & 4 BHK Luxury Apartments",
  description: "Discover Gaur Alaris at Sector 22D, Yamuna Expressway. Ultra-luxury 3 & 4 BHK high-rise residences across 11.8 acres near Noida International Airport. Starting ₹1.36 Cr*.",
  keywords: [
    "Gaur Alaris",
    "Gaur Alaris Sector 22D",
    "Gaur Alaris Yamuna Expressway",
    "Luxury Apartments",
    "3 BHK 4 BHK Flats Near Jewar Airport",
    "Gaur Alaris Price List",
    "Gaur Alaris Floor Plan",
  ],
  authors: [{ name: "Official Sales Partner" }],
  creator: "Official Sales Partner",
  publisher: "Authorized Channel Partner",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://gauralariss.in",
    title: "Gaur Alaris Sector 22D Yamuna Expressway | Ultra-Luxury Residences",
    description: "Explore 3 & 4 BHK ultra-luxury apartments at Gaur Alaris, Yamuna Expressway. Near Jewar Airport. Starting ₹1.36 Cr*.",
    siteName: "Gaur Alaris",
    images: [
      {
        url: "/banner_1.png",
        width: 1200,
        height: 630,
        alt: "Gaur Alaris Ultra-Luxury Residences",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaur Alaris Sector 22D Yamuna Expressway",
    description: "Ultra-luxury 3 & 4 BHK residences near Noida International Airport.",
    images: ["/banner_1.png"],
  },
  other: {
    "rera-number": "UPRERAPRJ950965/07/2026",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <link rel="canonical" href="/" />
      </head>
      <body className="font-sans bg-cream-bg text-peacock-dark antialiased selection:bg-gold-base selection:text-peacock-dark">
        {children}
      </body>
    </html>
  );
}
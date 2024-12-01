import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { geistMono, geistSans } from "./fonts";
import { ThemeProvider } from "next-themes";
import { Footer } from "@/components/Footer";
import { Layout } from "@/types/Layout";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  metadataBase: new URL("https://gfmontiform.it"),
  title: {
    template: "%s | GF Montiform Corsi di lingue Montichiari",
    default: "GF Montiform | Corsi di lingue Montichiari",
  },
  alternates: {
    canonical: "/",
  },
  description: "GF MontiForm - corsi di lingue Montichiari",
  keywords: ["Corsi", "Lingue", "Brescia", "Montichiari", "Inglese"],
  authors: [{ name: "Mario Lazzari", url: "https://mariolazzari.it" }],
  creator: "Mario Lazzari",
  openGraph: {
    title: "GF Montiform",
    description: "Corsi di lingue a Montichiari",
    images: "/images/logo.png",
    url: "https://gfmontiform.it",
    siteName: "GF Montiform",
  },
};

function RootLayout({ children }: Layout) {
  return (
    <html lang="it">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          <div className="h-[calc(100dvh-150px)] overflow-y-auto p-4">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>

      <GoogleTagManager gtmId="GTM-T3KQ5P9J" />
      <GoogleAnalytics gaId="G-M2676NK92Z" />
    </html>
  );
}

export default RootLayout;

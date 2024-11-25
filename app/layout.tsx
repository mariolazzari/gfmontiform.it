import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { geistMono, geistSans } from "./fonts";
import { ThemeProvider } from "next-themes";
import { Footer } from "@/components/Footer";
import { Layout } from "@/types/Layout";

export const metadata: Metadata = {
  title: {
    template: "%s | GF Montiform",
    default: "GF Montiform",
  },
  description: "GF MontiForm - corsi di lingue Montichiari",
  keywords: ["Corsi", "Lingue", "Brescia", "Montichiari"],
  authors: [{ name: "Mario Lazzari", url: "https://mariolazzari.it" }],
  creator: "Mario Lazzari",
  openGraph: {
    title: "GF Montiform",
    description: "Corsi di lingue a Montichiari",
    images: "/images/logo.png",
    url: "https://gfmontiform.it",
    siteName: "GF Montiform",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js",
    description: "The React Framework for the Web",
    siteId: "1467726470533754880",
    creator: "@nextjs",
    creatorId: "1467726470533754880",
    images: ["https://nextjs.org/og.png"], // Must be an absolute URL
  },
};

function RootLayout({ children }: Layout) {
  return (
    <html lang="it" suppressHydrationWarning>
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
    </html>
  );
}

export default RootLayout;

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import LanguageProvider from "@/i18n/LanguageProvider";

// Fonts are self-hosted (src/app/fonts) so the build doesn't depend on
// downloading from Google Fonts, which was failing on Vercel.
const bebasNeue = localFont({
  src: "./fonts/BebasNeue-Regular.woff2",
  weight: "400",
  variable: "--font-bebas-neue",
  display: "swap",
});

const openSans = localFont({
  src: "./fonts/OpenSans-Variable.woff2",
  weight: "400 700",
  variable: "--font-open-sans",
  display: "swap",
});

const heebo = localFont({
  src: "./fonts/Heebo-Variable.woff2",
  weight: "400 700",
  variable: "--font-heebo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Peruvian Universities",
  description:
    "Impulsando el liderazgo desde el Perú hacia el mundo. Organización estudiantil de debate académico y Model United Nations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${bebasNeue.variable} ${openSans.variable} ${heebo.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-white text-neutral-900 font-body">
        <LanguageProvider>
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}

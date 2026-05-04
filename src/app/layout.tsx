import type { Metadata } from "next";
import { Bebas_Neue, Open_Sans, Heebo } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  weight: ["400", "600", "700"],
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const heebo = Heebo({
  weight: ["400", "500", "600", "700"],
  variable: "--font-heebo",
  subsets: ["latin"],
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
        {children}
      </body>
    </html>
  );
}

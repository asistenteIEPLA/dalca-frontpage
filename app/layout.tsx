import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DALCA Coating | Perfección en Recubrimientos Industriales",
  description: "Protección extrema. Estética industrial. Pintura Electrostática, Anticorrosivos y Acabados de Alto Rendimiento.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-inter antialiased bg-[#F4F4F4] text-[#121212] overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}

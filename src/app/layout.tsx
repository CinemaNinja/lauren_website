import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingIntro from "@/components/LoadingIntro";
import CustomCursor from "@/components/CustomCursor";
import PageTransitionProvider from "@/components/PageTransitionProvider";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Lauren Strelau | Luxury Photography Portfolio",
  description: "Artistic portraiture and timeless underwater photo sessions in Aspen, Colorado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${montserrat.variable} antialiased`}>
        <LoadingIntro />
        <CustomCursor />
        <Navbar />
        <PageTransitionProvider>
          {children}
        </PageTransitionProvider>
        <Footer />
      </body>
    </html>
  );
}

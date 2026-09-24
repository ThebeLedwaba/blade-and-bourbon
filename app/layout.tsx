import type { Metadata } from "next";
import "@fontsource/bebas-neue";
import "@fontsource/karla/400.css";
import "@fontsource/karla/700.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WelcomePopup from "@/components/WelcomePopup";

export const metadata: Metadata = {
  title: "Blade & Bourbon | Premium Barbershop in Rosebank",
  description:
    "Sharp cuts. Smooth pours. Premium barbershop experience in Rosebank, Johannesburg. Book your cut, fade, or beard trim today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
        <WelcomePopup />
      </body>
    </html>
  );
}
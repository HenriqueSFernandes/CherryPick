import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./../globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Gradients from "@/components/general/gradients";
import { AuthProvider } from "@/context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cherry Pick",
  description: "Fresh Picks, Perfectly Paired",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Cherry Pick" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative bg-mellow-white`}
      >
        <Gradients />
        <AuthProvider>
          <Header />
          {children}
        </AuthProvider>
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}

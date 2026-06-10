import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Jahnvi Priyam | Backend & Cloud Engineer",
  description: "Portfolio of Jahnvi Priyam, Backend & Cloud Engineer specializing in scalable systems, FastAPI, AWS, and Kubernetes.",
  keywords: ["Backend Engineer", "Cloud Engineer", "DevOps", "FastAPI", "AWS", "Kubernetes", "Software Engineer Portfolio"],
  openGraph: {
    title: "Jahnvi Priyam | Backend & Cloud Engineer",
    description: "Building scalable backend systems, cloud-native applications, and infrastructure-focused developer tools.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jahnvi Priyam | Backend & Cloud Engineer",
    description: "Building scalable backend systems, cloud-native applications, and infrastructure-focused developer tools.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-background text-primaryText min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

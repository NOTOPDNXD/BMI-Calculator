import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BMI Calculator | CodeWithDarsh",
  description: "Welcome to our BMI website, your ultimate destination for understanding and managing your Body Mass Index (BMI).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} text-white [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]`}
      >
        <Navbar />
        <div className="min-h-[calc(100vh-7rem)]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

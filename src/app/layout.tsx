import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/user/layouts/Header";
import Footer from "@/components/user/layouts/Footer";
import {ThemeProvider} from "next-themes";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "SMM xizmatlari sotuv paneli",
  description: "Nakrutka uchun web-sayt. Arzon obunachilar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

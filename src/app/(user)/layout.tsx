import type {Metadata} from "next";
import NextTopLoader from "nextjs-toploader";
import {Inter} from "next/font/google";
import "../../app/globals.css";
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
          <NextTopLoader color="#0077b6" height={4} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

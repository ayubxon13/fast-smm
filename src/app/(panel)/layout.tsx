import {ThemeProvider} from "next-themes";
import {Inter} from "next/font/google";
import "../../app/globals.css";
import Sidebar from "@/components/panel/ui/Sidebar";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "sonner";

const inter = Inter({subsets: ["latin"]});

export default function PanelLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextTopLoader color="#0077b6" />
          <Toaster
            position="top-center"
            richColors
            visibleToasts={3}
            duration={3000}
          />
          <Sidebar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

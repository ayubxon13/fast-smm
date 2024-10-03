import {ThemeProvider} from "next-themes";
import {Inter} from "next/font/google";
import "../../app/globals.css";

const inter = Inter({subsets: ["latin"]});

export default function PanelLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

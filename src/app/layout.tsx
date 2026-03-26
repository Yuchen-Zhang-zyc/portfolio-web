import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, DM_Serif_Display, Inter, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import TopNav from "./components/TopNav";
import BfcacheRepaint from "./components/BfcacheRepaint";
import LenisProvider from "./components/LenisProvider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-sans" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
const dmSerifDisplay = DM_Serif_Display({ weight: "400", subsets: ["latin"], variable: "--font-serif" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--font-dm-sans" });
const dmMono = DM_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-dm-mono" });

export const metadata: Metadata = {
  title: "Yuchen | Human-AI Interaction Designer",
  description: "Human-AI Interaction Designer & Researcher",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="https://mcp.figma.com/mcp/html-to-design/capture.js" async></script>
      </head>
      <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${dmSerifDisplay.variable} ${inter.variable} ${dmSans.variable} ${dmMono.variable} font-body antialiased bg-brand-bg text-brand-primary min-h-screen flex flex-col`}>
        <LenisProvider>
          <BfcacheRepaint />
          <TopNav />
          <main className="flex-1 w-full">
            {children}
          </main>
        </LenisProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import TopNav from "./components/TopNav";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-sans" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
const dmSerifDisplay = DM_Serif_Display({ weight: "400", subsets: ["latin"], variable: "--font-serif" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

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
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${dmSerifDisplay.variable} ${inter.variable} font-body antialiased bg-brand-bg text-brand-primary min-h-screen flex flex-col`}>

        {/* Top Navigation */}
        <TopNav />

        {/* Main Content Area */}
        <main className="flex-1 w-full">
          {children}
        </main>

      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
        <header className="w-full absolute top-0 left-0 right-0 z-50">
          <div className="max-w-[1280px] mx-auto w-full px-6 md:px-[80px] pt-12 md:pt-[64px] flex justify-end">
            <nav className="flex gap-12 font-body text-white text-sm font-medium">
              <Link href="#about" className="hover:text-brand-accent transition-colors">
                Me
              </Link>
              <Link href="#resume" className="hover:text-brand-accent transition-colors">
                Resume
              </Link>
              <Link href="#projects" className="hover:text-brand-accent transition-colors">
                Project
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 w-full">
          {children}
        </main>

      </body>
    </html>
  );
}

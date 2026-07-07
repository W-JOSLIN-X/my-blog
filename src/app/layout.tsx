import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/header";
import "./globals.css";

const sans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: { default: "Roooooxy", template: "%s | Roooooxy" },
  description: "Software Engineering Student · Developer · Builder",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className={`${sans.variable} ${mono.variable} h-full`}>
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' fill='%230c0c10'/><text x='8' y='24' font-size='18'>◆</text></svg>" />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-[#282840] bg-[#0c0c10]">
          <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between text-[10px] font-mono text-[#605c6e] tracking-wider">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-[#22e07a] shadow-[0_0_4px_#22e07a]" />
              <span>SYS.ONLINE</span>
            </div>
            <span>© {new Date().getFullYear()} Roooooxy · BUILT WITH NEXT.JS</span>
            <span className="hidden sm:inline">NODE-01 · STABLE</span>
          </div>
        </footer>
      </body>
    </html>
  );
}

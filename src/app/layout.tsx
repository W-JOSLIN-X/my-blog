import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Header } from "@/components/header";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: { default: "Roooooxy", template: "%s — Roooooxy" },
  description: "记录学习，生活，爱好点滴。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className={`${geist.variable} h-full antialiased`}>
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='2' fill='%230a0a0a'/><text y='24' font-size='20'>▶</text></svg>" />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-[rgba(255,255,255,0.06)]">
          <div className="max-w-4xl mx-auto px-4 py-6 flex items-center justify-between text-[11px] text-[#444] tracking-wider">
            <div className="flex items-center gap-3">
              <span className="rec-dot">REC</span>
              <span className="font-mono">SYS:ONLINE</span>
            </div>
            <span>&copy; {new Date().getFullYear()} Roooooxy</span>
            <span className="font-mono hidden sm:inline">CH:001</span>
          </div>
        </footer>
      </body>
    </html>
  );
}

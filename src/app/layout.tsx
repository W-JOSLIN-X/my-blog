import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Roooooxy的blog",
    template: "%s | Roooooxy的blog",
  },
  description: "记录学习，生活，爱好点滴。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚡</text></svg>" />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1 py-8 px-4">{children}</main>
        <footer className="border-t border-[#2a2a45] py-6">
          <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-[#6b6b8a]">
            <span>&copy; {new Date().getFullYear()} Roooooxy. Built with Next.js &amp; MDX.</span>
            <span className="text-[#ff2d78]">◆ SYSTEM ONLINE ◆</span>
          </div>
        </footer>
      </body>
    </html>
  );
}

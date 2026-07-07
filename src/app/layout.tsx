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
      <body className="min-h-full flex flex-col bg-white dark:bg-zinc-950">
        <Header />
        <main className="flex-1 py-12 px-4">{children}</main>
        <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
          <div className="max-w-2xl mx-auto px-4">
            &copy; {new Date().getFullYear()} Roooooxy的blog. Built with Next.js &amp;
            MDX.
          </div>
        </footer>
      </body>
    </html>
  );
}

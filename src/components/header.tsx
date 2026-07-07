"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "首页", en: "HOME" },
  { href: "/posts", label: "文章", en: "ARTICLES" },
  { href: "/projects", label: "项目", en: "PROJECTS" },
  { href: "/tags", label: "标签", en: "TAGS" },
  { href: "/about", label: "关于", en: "ABOUT" },
];

export function Header() {
  const path = usePathname();
  return (
    <header className="sticky top-0 z-50 bg-[#0c0c10]/95 backdrop-blur-sm border-b border-[#282840]">
      <div className="max-w-5xl mx-auto flex items-center justify-between h-12 px-6">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="flex items-center gap-1.5 text-xs font-black tracking-[0.2em] text-[#ff5c28]">
            <span className="w-2 h-2 bg-[#ff5c28] inline-block" />
            ROOOOXY
          </span>
          <span className="text-[10px] font-mono text-[#605c6e] hidden sm:inline tracking-wider">
            // ARCHIVE SYSTEM
          </span>
        </Link>
        <nav className="flex items-center gap-0">
          {nav.map((item) => {
            const active = path === item.href || (item.href !== "/" && path.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-[10px] font-bold tracking-[0.1em] transition-colors uppercase ${
                  active
                    ? "text-[#ff5c28] border-b border-[#ff5c28]"
                    : "text-[#605c6e] hover:text-[#9a96a8]"
                }`}
              >
                {item.en}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

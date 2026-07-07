import Link from "next/link";

const navLinks = [
  { href: "/", label: "首页" },
  { href: "/projects", label: "项目" },
  { href: "/tags", label: "标签" },
  { href: "/friends", label: "友链" },
  { href: "/archives", label: "归档" },
  { href: "/about", label: "关于" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#0a0a10]/90 backdrop-blur-md border-b border-[#2a2a45]">
      <div className="max-w-4xl mx-auto flex items-center justify-between h-14 px-4">
        <Link
          href="/"
          className="font-bold text-lg tracking-wider zzz-text-gradient"
          style={{
            textShadow: "0 0 20px rgba(0,229,255,0.3)",
          }}
        >
          Roooooxy
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-sm text-[#8b8bae] hover:text-[#00e5ff] transition-colors relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#00e5ff] transition-all duration-300 group-hover:w-3/4" />
            </Link>
          ))}
        </nav>
        <nav className="flex md:hidden items-center gap-1 overflow-x-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-2 py-1 text-xs text-[#8b8bae] hover:text-[#00e5ff] transition-colors whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

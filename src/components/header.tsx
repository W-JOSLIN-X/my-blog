import Link from "next/link";

const nav = [
  { href: "/", label: "HOME" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/tags", label: "TAGS" },
  { href: "/friends", label: "LINKS" },
  { href: "/archives", label: "ARCHIVE" },
  { href: "/about", label: "ABOUT" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-[rgba(255,255,255,0.06)]">
      <div className="max-w-4xl mx-auto flex items-center justify-between px-4 h-12">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-sm tracking-[0.15em] uppercase text-[#e8e8e8] hover:text-[#ff6b00] transition-colors"
        >
          <span className="text-[#ff6b00]">■</span>
          Roooooxy
        </Link>
        <nav className="flex items-center gap-0">
          {nav.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-2.5 py-2 text-[10px] font-medium tracking-[0.12em] text-[#666] hover:text-[#e8e8e8] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

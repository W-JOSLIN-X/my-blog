import type { ComponentPropsWithoutRef as P } from "react";

type HP = P<"h1">; type PP = P<"p">; type AP = P<"a">;
type UP = P<"ul">; type OP = P<"ol">; type LP = P<"li">;
type BP = P<"blockquote">; type PRP = P<"pre">; type CP = P<"code">;
type TP = P<"table">; type THP = P<"th">; type TDP = P<"td">; type HRP = P<"hr">;

export const mdxComponents = {
  h1: (p: HP) => <h1 className="text-xl font-black mt-12 mb-4 pb-3 border-b border-[#282840]" {...p} />,
  h2: (p: HP) => (
    <h2 className="text-lg font-black mt-10 mb-4 flex items-center gap-2" {...p}>
      <span className="w-1 h-5 bg-[#ff5c28] inline-block shrink-0" />
      {p.children}
    </h2>
  ),
  h3: (p: HP) => <h3 className="text-base font-bold mt-8 mb-3 text-[#ccc]" {...p} />,
  p: (p: PP) => <p className="my-3 leading-7 text-[#bbb]" {...p} />,
  a: ({ href, children, ...p }: AP) => (
    <a href={href} className="text-[#ff5c28] hover:text-[#ff7e50] underline decoration-[#363655] underline-offset-4 transition-colors" {...p}>
      {children}
    </a>
  ),
  ul: (p: UP) => <ul className="my-3 space-y-1" style={{ listStyle: "none" }} {...p} />,
  ol: (p: OP) => <ol className="my-3 space-y-1" style={{ listStyle: "none" }} {...p} />,
  li: ({ children, ...p }: LP) => (
    <li className="leading-7 text-[#bbb] pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-[#ff5c28] before:text-xs" {...p}>
      {children}
    </li>
  ),
  blockquote: (p: BP) => (
    <div className="my-6 border border-[#282840] bg-[#14141c]">
      <div className="flex items-center gap-2 px-4 py-2 border-b border-[#282840]">
        <span className="w-1.5 h-1.5 bg-[#ff5c28]" />
        <span className="text-[10px] font-mono text-[#605c6e] tracking-wider">NOTE</span>
      </div>
      <blockquote className="px-4 py-3 text-[#9a96a8] italic text-sm" {...p} />
    </div>
  ),
  pre: (p: PRP) => (
    <div className="my-6 border border-[#282840] bg-[#0d0d14]">
      <div className="flex items-center justify-between px-4 py-2 border-b border-[#282840]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-[#ff5c28] shadow-[0_0_6px_rgba(255,92,40,0.4)]" />
          <span className="w-2.5 h-2.5 bg-[#f5c842] shadow-[0_0_6px_rgba(245,200,66,0.4)]" />
          <span className="w-2.5 h-2.5 bg-[#22e07a] shadow-[0_0_6px_rgba(34,224,122,0.4)]" />
        </div>
        <span className="text-[10px] font-mono text-[#605c6e] tracking-wider">TERMINAL</span>
      </div>
      <pre className="overflow-x-auto p-5 text-sm leading-relaxed text-[#bbb]" {...p} />
    </div>
  ),
  code: ({ children, ...p }: CP) => {
    const inline = typeof children === "string" && !children.includes("\n");
    if (inline) return (
      <code className="bg-[rgba(255,92,40,0.08)] text-[#ff5c28] px-1.5 py-0.5 text-[13px] font-mono border border-[rgba(255,92,40,0.15)]" {...p}>
        {children}
      </code>
    );
    return <code className="font-mono text-sm" {...p}>{children}</code>;
  },
  table: (p: TP) => (
    <div className="my-6 border border-[#282840] overflow-x-auto">
      <table className="w-full text-sm border-collapse" {...p} />
    </div>
  ),
  th: (p: THP) => (
    <th className="border border-[#282840] px-4 py-2.5 text-left text-[11px] font-bold tracking-wider text-[#9a96a8] bg-[#14141c] uppercase" {...p} />
  ),
  td: (p: TDP) => <td className="border border-[#282840] px-4 py-2.5 text-[#bbb]" {...p} />,
  hr: (p: HRP) => <hr className="divider my-8" {...p} />,
};

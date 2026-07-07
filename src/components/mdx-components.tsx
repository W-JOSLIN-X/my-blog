import type { ComponentPropsWithoutRef } from "react";

type H = ComponentPropsWithoutRef<"h1">;
type P = ComponentPropsWithoutRef<"p">;
type A = ComponentPropsWithoutRef<"a">;
type UL = ComponentPropsWithoutRef<"ul">;
type OL = ComponentPropsWithoutRef<"ol">;
type LI = ComponentPropsWithoutRef<"li">;
type BQ = ComponentPropsWithoutRef<"blockquote">;
type PRE = ComponentPropsWithoutRef<"pre">;
type CODE = ComponentPropsWithoutRef<"code">;
type TBL = ComponentPropsWithoutRef<"table">;
type TH = ComponentPropsWithoutRef<"th">;
type TD = ComponentPropsWithoutRef<"td">;
type HR = ComponentPropsWithoutRef<"hr">;

export const mdxComponents = {
  h1: (p: H) => (
    <h1 className="text-xl font-bold mt-12 mb-5 pb-3 border-b border-[rgba(255,255,255,0.08)]" {...p} />
  ),
  h2: (p: H) => (
    <h2 className="text-lg font-bold mt-10 mb-4 flex items-center gap-2" {...p}>
      <span className="w-1 h-4 bg-[#ff6b00] inline-block shrink-0" />
      {p.children}
    </h2>
  ),
  h3: (p: H) => (
    <h3 className="text-base font-semibold mt-8 mb-3 text-[#ccc]" {...p} />
  ),
  p: (p: P) => (
    <p className="my-4 leading-7 text-[#aaa]" {...p} />
  ),
  a: ({ href, children, ...p }: A) => (
    <a
      href={href}
      className="text-[#ff6b00] hover:text-[#ff8c3d] underline decoration-[rgba(255,255,255,0.1)] underline-offset-4 transition-colors"
      {...p}
    >
      {children}
    </a>
  ),
  ul: (p: UL) => (
    <ul className="my-4 space-y-2" style={{ listStyle: "none" }} {...p} />
  ),
  ol: (p: OL) => (
    <ol className="my-4 space-y-2" style={{ listStyle: "none" }} {...p} />
  ),
  li: ({ children, ...p }: LI) => (
    <li className="leading-7 text-[#aaa] pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-[#ff6b00] before:text-xs" {...p}>
      {children}
    </li>
  ),
  blockquote: (p: BQ) => (
    <blockquote
      className="my-6 border-l-[3px] border-[#ff6b00] pl-4 text-[#777] italic bg-[rgba(255,107,0,0.04)] py-3 pr-4"
      {...p}
    />
  ),
  pre: (p: PRE) => (
    <div className="my-6 border border-[rgba(255,255,255,0.08)] bg-[#0d0d0d]">
      <div className="flex items-center gap-2 px-4 py-2 border-b border-[rgba(255,255,255,0.06)]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#444]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#444]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#444]" />
        <span className="ml-2 text-[10px] text-[#555] font-mono tracking-wider">CODE</span>
      </div>
      <pre className="overflow-x-auto p-5 text-sm leading-relaxed" {...p} />
    </div>
  ),
  code: ({ children, ...p }: CODE) => {
    const inline = typeof children === "string" && !children.includes("\n");
    if (inline) {
      return (
        <code
          className="bg-[rgba(255,255,255,0.05)] text-[#ff8c3d] px-1.5 py-0.5 text-[13px] font-mono border border-[rgba(255,255,255,0.06)]"
          {...p}
        >
          {children}
        </code>
      );
    }
    return <code className="text-[#ccc] font-mono text-sm" {...p}>{children}</code>;
  },
  table: (p: TBL) => (
    <div className="my-6 overflow-x-auto border border-[rgba(255,255,255,0.08)]">
      <table className="w-full text-sm border-collapse" {...p} />
    </div>
  ),
  th: (p: TH) => (
    <th className="border border-[rgba(255,255,255,0.06)] px-4 py-2.5 text-left font-semibold bg-[rgba(255,255,255,0.02)] text-[11px] text-[#888] uppercase tracking-wider" {...p} />
  ),
  td: (p: TD) => (
    <td className="border border-[rgba(255,255,255,0.06)] px-4 py-2.5 text-[#aaa]" {...p} />
  ),
  hr: (p: HR) => <hr className="zzz-divider my-8" {...p} />,
};

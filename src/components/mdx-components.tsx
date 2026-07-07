import type { ComponentPropsWithoutRef } from "react";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParaProps = ComponentPropsWithoutRef<"p">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;
type PreProps = ComponentPropsWithoutRef<"pre">;
type CodeProps = ComponentPropsWithoutRef<"code">;
type TableProps = ComponentPropsWithoutRef<"table">;
type ThProps = ComponentPropsWithoutRef<"th">;
type TdProps = ComponentPropsWithoutRef<"td">;
type HrProps = ComponentPropsWithoutRef<"hr">;

export const mdxComponents = {
  h1: ({ children, ...props }: HeadingProps) => (
    <h1
      className="text-2xl font-bold mt-12 mb-6 pb-3 border-b border-[#2a2a45] text-[#e0dce8]"
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: HeadingProps) => (
    <h2
      className="text-xl font-bold mt-10 mb-4 flex items-center gap-2 text-[#e0dce8] group"
      {...props}
    >
      <span className="text-[#00e5ff] opacity-0 group-hover:opacity-100 transition-opacity">◆</span>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: HeadingProps) => (
    <h3
      className="text-lg font-semibold mt-8 mb-3 text-[#b388ff]"
      {...props}
    >
      {children}
    </h3>
  ),
  p: ({ children, ...props }: ParaProps) => (
    <p className="my-4 leading-7 text-[#c4c0d0]" {...props}>
      {children}
    </p>
  ),
  a: ({ href, children, ...props }: AnchorProps) => (
    <a
      href={href}
      className="text-[#00e5ff] hover:text-[#ff2d78] underline decoration-[#2a2a45] hover:decoration-[#ff2d78] underline-offset-2 transition-all"
      {...props}
    >
      {children}
    </a>
  ),
  ul: ({ children, ...props }: ListProps) => (
    <ul
      className="my-4 ml-4 space-y-2 text-[#c4c0d0]"
      style={{ listStyle: "none" }}
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: ListProps) => (
    <ol className="my-4 ml-4 space-y-2 text-[#c4c0d0] counter" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }: ListItemProps) => (
    <li className="leading-7 flex items-start gap-2 before:content-['▸'] before:text-[#00e5ff] before:text-xs before:mt-1.5 before:shrink-0" {...props}>
      <span>{children}</span>
    </li>
  ),
  blockquote: ({ children, ...props }: BlockquoteProps) => (
    <blockquote
      className="my-6 border-l-[3px] border-[#ff2d78] pl-4 italic text-[#8b8bae] bg-[#12121e] py-3 pr-4 rounded-r"
      {...props}
    >
      {children}
    </blockquote>
  ),
  pre: ({ children, ...props }: PreProps) => (
    <pre
      className="my-6 overflow-x-auto bg-[#0a0a10] border border-[#2a2a45] p-5 text-sm"
      {...props}
    >
      {children}
    </pre>
  ),
  code: ({ children, ...props }: CodeProps) => {
    const isInline = typeof children === "string" && !children.includes("\n");
    if (isInline) {
      return (
        <code
          className="bg-[#1a1a2e] text-[#ffd740] px-1.5 py-0.5 text-sm font-mono border border-[#2a2a45]"
          {...props}
        >
          {children}
        </code>
      );
    }
    return (
      <code className="text-[#c4c0d0] font-mono text-sm" {...props}>
        {children}
      </code>
    );
  },
  table: ({ children, ...props }: TableProps) => (
    <div className="my-6 overflow-x-auto border border-[#2a2a45]">
      <table className="w-full text-sm border-collapse" {...props}>
        {children}
      </table>
    </div>
  ),
  th: ({ children, ...props }: ThProps) => (
    <th
      className="border border-[#2a2a45] px-4 py-2.5 text-left font-semibold bg-[#12121e] text-[#00e5ff] text-xs uppercase tracking-wider"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }: TdProps) => (
    <td className="border border-[#2a2a45] px-4 py-2.5 text-[#c4c0d0]" {...props}>
      {children}
    </td>
  ),
  hr: (props: HrProps) => (
    <div className="zzz-divider my-8" {...props} />
  ),
};

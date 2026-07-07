import type { ComponentPropsWithoutRef, FC } from "react";

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
    <h1 className="mt-10 mb-4 text-2xl font-bold" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: HeadingProps) => (
    <h2
      className="mt-10 mb-4 text-xl font-semibold scroll-mt-20"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: HeadingProps) => (
    <h3 className="mt-8 mb-3 text-lg font-semibold" {...props}>
      {children}
    </h3>
  ),
  p: ({ children, ...props }: ParaProps) => (
    <p className="my-4 leading-7 text-zinc-700 dark:text-zinc-300" {...props}>
      {children}
    </p>
  ),
  a: ({ href, children, ...props }: AnchorProps) => (
    <a
      href={href}
      className="text-blue-600 dark:text-blue-400 underline decoration-zinc-300 hover:decoration-blue-600 dark:decoration-zinc-700 dark:hover:decoration-blue-400 underline-offset-2 transition-colors"
      {...props}
    >
      {children}
    </a>
  ),
  ul: ({ children, ...props }: ListProps) => (
    <ul className="my-4 ml-6 list-disc space-y-2 text-zinc-700 dark:text-zinc-300" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: ListProps) => (
    <ol className="my-4 ml-6 list-decimal space-y-2 text-zinc-700 dark:text-zinc-300" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }: ListItemProps) => (
    <li className="leading-7" {...props}>
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }: BlockquoteProps) => (
    <blockquote
      className="my-6 border-l-4 border-blue-500 pl-4 italic text-zinc-600 dark:text-zinc-400"
      {...props}
    >
      {children}
    </blockquote>
  ),
  pre: ({ children, ...props }: PreProps) => (
    <pre
      className="my-6 overflow-x-auto rounded-lg bg-zinc-950 p-4 text-sm text-zinc-50 dark:bg-zinc-900"
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
          className="rounded bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 text-sm font-mono text-zinc-800 dark:text-zinc-200"
          {...props}
        >
          {children}
        </code>
      );
    }
    return <code {...props}>{children}</code>;
  },
  table: ({ children, ...props }: TableProps) => (
    <div className="my-6 overflow-x-auto">
      <table className="w-full text-sm border-collapse" {...props}>
        {children}
      </table>
    </div>
  ),
  th: ({ children, ...props }: ThProps) => (
    <th
      className="border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-left font-semibold bg-zinc-50 dark:bg-zinc-900"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }: TdProps) => (
    <td
      className="border border-zinc-300 dark:border-zinc-700 px-4 py-2"
      {...props}
    >
      {children}
    </td>
  ),
  hr: (props: HrProps) => (
    <hr className="my-8 border-zinc-200 dark:border-zinc-800" {...props} />
  ),
};

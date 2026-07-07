import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { mdxComponents } from "@/components/mdx-components";
import { Giscus } from "@/components/giscus";
import * as runtime from "react/jsx-runtime";
import { evaluate } from "@mdx-js/mdx";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const post = getPostBySlug((await params).slug);
  if (!post) return {};
  return { title: post.title, description: post.description };
}

async function MDXContent({ source }: { source: string }) {
  const { default: C } = await evaluate(source, {
    ...runtime,
    useMDXComponents: () => mdxComponents,
  });
  return <C />;
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const all = getAllPosts();
  const idx = all.findIndex((p) => p.slug === slug);
  const prev = all[idx + 1] ?? null;
  const next = all[idx - 1] ?? null;

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Back */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs text-[#666] hover:text-[#ff6b00] transition-colors mb-10 font-mono tracking-wider"
      >
        <span>◀</span> BACK TO INDEX
      </Link>

      <article>
        {/* Header */}
        <header className="zzz-panel p-8 mb-10">
          <div className="flex items-center gap-3 mb-5 font-mono text-[11px] text-[#555] tracking-wider">
            <span className="text-[#ff6b00] font-bold">
              {new Date(post.date).toLocaleDateString("zh-CN")}
            </span>
            <span className="text-[#333]">|</span>
            <span>#{String(idx + 1).padStart(2, "0")}</span>
            <span className="text-[#333]">|</span>
            <span>Roooooxy</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-black tracking-tight leading-tight">
            {post.title}
          </h1>
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-5">
              {post.tags.map((tag) => (
                <Link key={tag} href={`/tags#tag-${tag}`} className="zzz-tag">
                  {tag}
                </Link>
              ))}
            </div>
          )}
        </header>

        {/* Content */}
        <div className="zzz-panel p-6 md:p-10">
          <MDXContent source={post.content} />
        </div>
      </article>

      {/* Nav */}
      <nav className="grid grid-cols-2 gap-4 mt-10">
        {prev ? (
          <Link href={`/posts/${prev.slug}`} className="zzz-card p-4 group">
            <div className="font-mono text-[10px] text-[#555] tracking-wider mb-1">
              ◀ PREV
            </div>
            <div className="text-sm font-medium text-[#e8e8e8] group-hover:text-[#ff6b00] transition-colors line-clamp-1">
              {prev.title}
            </div>
          </Link>
        ) : <div />}
        {next ? (
          <Link href={`/posts/${next.slug}`} className="zzz-card p-4 group text-right">
            <div className="font-mono text-[10px] text-[#555] tracking-wider mb-1">
              NEXT ▶
            </div>
            <div className="text-sm font-medium text-[#e8e8e8] group-hover:text-[#ff6b00] transition-colors line-clamp-1">
              {next.title}
            </div>
          </Link>
        ) : <div />}
      </nav>

      <hr className="zzz-divider my-12" />
      <Giscus />
    </div>
  );
}

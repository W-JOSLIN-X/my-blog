import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { mdxComponents } from "@/components/mdx-components";
import { Giscus } from "@/components/giscus";
import * as runtime from "react/jsx-runtime";
import { evaluate } from "@mdx-js/mdx";

interface PageProps { params: Promise<{ slug: string }>; }

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
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Link
        href="/posts"
        className="inline-flex items-center gap-2 text-xs font-mono text-[#605c6e] hover:text-[#ff5c28] transition-colors mb-10 tracking-wider"
      >
        ◀ BACK TO ARTICLES
      </Link>

      <article>
        {/* post header */}
        <header className="panel p-8 md:p-12 mb-10">
          <div className="flex flex-wrap items-center gap-2 mb-4 font-mono text-[11px] text-[#605c6e] tracking-wider">
            <span className="text-[#ff5c28] font-bold">
              REC #{String(idx + 1).padStart(3, "0")}
            </span>
            <span>·</span>
            <span>{new Date(post.date).toLocaleDateString("zh-CN")}</span>
            <span>·</span>
            <span>Roooooxy</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-black tracking-tight leading-tight mb-6">
            {post.title}
          </h1>
          {post.tags && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((t) => (
                <Link key={t} href={`/tags#tag-${t}`} className="tag text-xs">{t}</Link>
              ))}
            </div>
          )}
        </header>

        {/* post body */}
        <div className="panel p-6 md:p-10">
          <MDXContent source={post.content} />
        </div>
      </article>

      {/* prev/next */}
      <nav className="grid grid-cols-2 gap-4 mt-10">
        {prev ? (
          <Link href={`/posts/${prev.slug}`} className="card p-4 group">
            <div className="font-mono text-[10px] text-[#605c6e] tracking-wider mb-1">◀ PREV</div>
            <div className="text-sm font-bold text-[#dedae8] group-hover:text-[#ff5c28] transition-colors line-clamp-1">{prev.title}</div>
          </Link>
        ) : <div />}
        {next ? (
          <Link href={`/posts/${next.slug}`} className="card p-4 group text-right">
            <div className="font-mono text-[10px] text-[#605c6e] tracking-wider mb-1">NEXT ▶</div>
            <div className="text-sm font-bold text-[#dedae8] group-hover:text-[#ff5c28] transition-colors line-clamp-1">{next.title}</div>
          </Link>
        ) : <div />}
      </nav>

      <div className="divider my-12" />
      <Giscus />
    </div>
  );
}

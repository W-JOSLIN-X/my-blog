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
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: post.description };
}

async function MDXContent({ source }: { source: string }) {
  const { default: Content } = await evaluate(source, {
    ...runtime,
    useMDXComponents: () => mdxComponents,
  });
  return <Content />;
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prev = allPosts[currentIndex + 1] || null;
  const next = allPosts[currentIndex - 1] || null;

  return (
    <div className="max-w-3xl mx-auto">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-[#6b6b8a] hover:text-[#00e5ff] transition-colors mb-8 group"
      >
        <span className="group-hover:-translate-x-1 transition-transform">←</span>
        返回首页
      </Link>

      <article>
        <header className="mb-12">
          <div className="flex items-center gap-3 text-xs text-[#6b6b8a] mb-4">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("zh-CN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span className="text-[#3a3a5c]">◆</span>
            <span>Roooooxy</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 zzz-text-gradient">
            {post.title}
          </h1>
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Link key={tag} href={`/tags?tag=${tag}`} className="zzz-tag">
                  #{tag}
                </Link>
              ))}
            </div>
          )}
        </header>

        <div className="zzz-card rounded p-6 md:p-10">
          <div className="zzz-prose">
            <MDXContent source={post.content} />
          </div>
        </div>
      </article>

      <nav className="grid grid-cols-2 gap-4 mt-12">
        {prev ? (
          <Link
            href={`/posts/${prev.slug}`}
            className="zzz-card rounded p-4 text-left group"
          >
            <span className="text-xs text-[#6b6b8a]">← 上一篇</span>
            <p className="text-sm text-[#e0dce8] mt-1 group-hover:text-[#00e5ff] transition-colors line-clamp-1">
              {prev.title}
            </p>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`/posts/${next.slug}`}
            className="zzz-card rounded p-4 text-right group"
          >
            <span className="text-xs text-[#6b6b8a]">下一篇 →</span>
            <p className="text-sm text-[#e0dce8] mt-1 group-hover:text-[#00e5ff] transition-colors line-clamp-1">
              {next.title}
            </p>
          </Link>
        ) : (
          <div />
        )}
      </nav>

      <div className="zzz-divider my-12" />

      <Giscus />
    </div>
  );
}

import { notFound } from "next/navigation";
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

  return {
    title: post.title,
    description: post.description,
  };
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

  return (
    <div className="max-w-2xl mx-auto">
      <article>
        <header className="mb-10">
          <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-3">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("zh-CN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            {post.tags && post.tags.length > 0 && (
              <>
                <span>·</span>
                <span>{post.tags.join(", ")}</span>
              </>
            )}
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            {post.title}
          </h1>
        </header>

        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <MDXContent source={post.content} />
        </div>
      </article>

      <hr className="my-12 border-zinc-200 dark:border-zinc-800" />

      <Giscus />
    </div>
  );
}

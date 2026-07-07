import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="max-w-2xl mx-auto">
      <section className="mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Roooooxy的blog
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          记录学习，生活，爱好点滴。
        </p>
      </section>

      <section>
        <h2 className="mb-8 text-sm font-medium text-zinc-500 uppercase tracking-wider">
          全部文章
        </h2>
        <div className="flex flex-col gap-8">
          {posts.map((post) => (
            <article key={post.slug}>
              <Link href={`/posts/${post.slug}`} className="group block">
                <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-1">
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
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
                <p className="mt-1 text-zinc-600 dark:text-zinc-400 line-clamp-2">
                  {post.description}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

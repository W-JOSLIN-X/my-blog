import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="max-w-4xl mx-auto">
      <section className="mb-16 text-center">
        <div className="inline-block mb-4 px-4 py-1 border border-[#2a2a45] text-xs text-[#6b6b8a] tracking-[0.2em]">
          ◆ WELCOME TO THE SYSTEM ◆
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          <span className="zzz-text-gradient zzz-glow">Roooooxy的blog</span>
        </h1>
        <p className="text-lg text-[#8b8bae] max-w-lg mx-auto">
          记录学习，生活，爱好点滴。
        </p>
        <div className="zzz-divider mt-8 max-w-md mx-auto" />
      </section>

      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-sm font-medium text-[#b388ff] tracking-[0.3em] uppercase flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-[#b388ff] shadow-[0_0_6px_#b388ff]" />
            最新文章
          </h2>
          <Link
            href="/archives"
            className="text-xs text-[#6b6b8a] hover:text-[#00e5ff] transition-colors"
          >
            查看全部 →
          </Link>
        </div>

        <div className="flex flex-col gap-6">
          {posts.map((post) => (
            <article key={post.slug}>
              <Link href={`/posts/${post.slug}`} className="block group">
                <div className="zzz-card rounded p-6">
                  <div className="flex items-center gap-3 text-xs text-[#6b6b8a] mb-3">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("zh-CN")}
                    </time>
                    {post.tags && post.tags.length > 0 && (
                      <span className="text-[#3a3a5c]">◆</span>
                    )}
                    <div className="flex items-center gap-2">
                      {post.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="text-[#00e5ff] text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#e0dce8] group-hover:text-[#00e5ff] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#8b8bae] line-clamp-2 leading-relaxed">
                    {post.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-[#ff2d78] text-xs group-hover:gap-4 transition-all">
                    <span>READ MORE</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

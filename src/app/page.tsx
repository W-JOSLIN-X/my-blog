import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="zzz-panel p-10 md:p-16 mb-16">
        <div className="zzz-stripes py-10 px-8 -m-10 md:-m-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="rec-dot">REC</span>
            <span className="font-mono text-[11px] text-[#666] tracking-wider">
              2026.07.06 — CH:MAIN
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
            Roooooxy
          </h1>
          <p className="text-lg md:text-xl text-[#666] max-w-lg">
            记录学习，生活，爱好点滴。
          </p>
          <div className="flex gap-3 mt-8">
            <Link href="/about" className="zzz-btn primary">
              ABOUT ME
            </Link>
            <Link href="/projects" className="zzz-btn">
              PROJECTS
            </Link>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section>
        <div className="zzz-section-title">Latest Posts</div>
        <div className="space-y-4">
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/posts/${post.slug}`}
              className="zzz-card block p-5 group"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-[11px] text-[#444]">
                      {new Date(post.date).toLocaleDateString("zh-CN")}
                    </span>
                    <span className="text-[#333]">|</span>
                    <span className="font-mono text-[11px] text-[#444]">
                      #{String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="text-base font-bold text-[#e8e8e8] group-hover:text-[#ff6b00] transition-colors mb-1.5">
                    {post.title}
                  </h2>
                  <p className="text-sm text-[#666] line-clamp-1">
                    {post.description}
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-2 shrink-0 mt-1">
                  {post.tags?.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-[10px] text-[#555] border border-[rgba(255,255,255,0.06)] px-2 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="zzz-card p-12 text-center">
            <p className="text-[#666]">暂无文章</p>
          </div>
        )}
      </section>
    </div>
  );
}

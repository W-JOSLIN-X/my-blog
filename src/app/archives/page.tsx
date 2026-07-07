import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function ArchivesPage() {
  const posts = getAllPosts();
  const grouped: Record<string, typeof posts> = {};
  posts.forEach((p) => {
    const y = new Date(p.date).getFullYear().toString();
    (grouped[y] ??= []).push(p);
  });
  const years = Object.keys(grouped).sort((a, b) => +b - +a);
  const totalChars = posts.reduce((s, p) => s + (p.content?.length || 0), 0);

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="zzz-panel p-8 md:p-12 mb-12 text-center">
        <div className="flex items-center justify-center gap-3 mb-6 font-mono text-[11px] text-[#555] tracking-wider">
          <span className="rec-dot">REC</span>
          <span>DATA ARCHIVE</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-4">文章归档</h1>
        <div className="flex items-center justify-center gap-6 text-xs font-mono text-[#555]">
          <span>
            <span className="text-[#ff6b00]">■</span> {posts.length} POSTS
          </span>
          <span>
            <span className="text-[#00e5ff]">■</span> {(totalChars / 1000).toFixed(1)}K CHARS
          </span>
        </div>
      </div>

      <div className="space-y-12">
        {years.map((year) => (
          <section key={year}>
            <div className="flex items-center gap-4 mb-4">
              <span className="font-mono text-2xl font-black text-[#ff6b00] tracking-tight">{year}</span>
              <span className="flex-1 h-px bg-[rgba(255,255,255,0.08)]" />
              <span className="font-mono text-[10px] text-[#555]">
                {grouped[year].length}篇
              </span>
            </div>
            <div className="space-y-2">
              {grouped[year].map((post) => (
                <Link
                  key={post.slug}
                  href={`/posts/${post.slug}`}
                  className="zzz-card p-4 flex items-center justify-between group"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <span className="font-mono text-xs text-[#555] shrink-0 w-16">
                      {new Date(post.date).toLocaleDateString("zh-CN", { month: "2-digit", day: "2-digit" })}
                    </span>
                    <span className="font-medium text-[#e8e8e8] group-hover:text-[#ff6b00] transition-colors truncate">
                      {post.title}
                    </span>
                  </div>
                  <div className="hidden md:flex items-center gap-2 shrink-0">
                    {post.tags?.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-[10px] text-[#555] border border-[rgba(255,255,255,0.06)] px-1.5 py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

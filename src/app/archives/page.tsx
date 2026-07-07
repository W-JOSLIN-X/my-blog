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

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="panel p-8 md:p-12 mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[10px] font-mono tracking-[0.2em] text-[#ff5c28] border border-[#ff5c28]/30 px-2 py-0.5">
            DATA.ARCHIVE
          </span>
          <span className="font-mono text-[11px] text-[#605c6e]">
            {posts.length} RECORDS
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl font-black tracking-tighter">数据归档</h1>
        <p className="text-[#9a96a8] mt-3 max-w-lg">按时间线查看所有文章。</p>
      </div>

      <div className="space-y-12">
        {years.map((year) => (
          <section key={year}>
            <div className="flex items-center gap-4 mb-4">
              <span className="font-mono text-2xl font-black text-[#ff5c28]">{year}</span>
              <span className="flex-1 h-px bg-[#282840]" />
              <span className="font-mono text-[10px] text-[#605c6e]">{grouped[year].length} POSTS</span>
            </div>
            <div className="space-y-2">
              {grouped[year].map((post) => (
                <Link key={post.slug} href={`/posts/${post.slug}`} className="card p-4 flex items-center justify-between group">
                  <div className="flex items-center gap-4 min-w-0">
                    <span className="font-mono text-xs text-[#605c6e] shrink-0 w-12">
                      {new Date(post.date).toLocaleDateString("zh-CN", { month: "2-digit", day: "2-digit" })}
                    </span>
                    <span className="font-bold text-[#dedae8] group-hover:text-[#ff5c28] transition-colors truncate text-sm">
                      {post.title}
                    </span>
                  </div>
                  <div className="hidden md:flex gap-1.5 shrink-0">
                    {post.tags?.slice(0, 2).map((t) => <span key={t} className="tag">{t}</span>)}
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

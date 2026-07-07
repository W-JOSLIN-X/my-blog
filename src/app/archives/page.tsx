import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function ArchivesPage() {
  const posts = getAllPosts();

  const groupedByYear = posts.reduce<Record<string, typeof posts>>((acc, post) => {
    const year = new Date(post.date).getFullYear().toString();
    if (!acc[year]) acc[year] = [];
    acc[year].push(post);
    return acc;
  }, {});

  const years = Object.keys(groupedByYear).sort((a, b) => Number(b) - Number(a));
  const totalWords = posts.reduce((sum, p) => sum + (p.content?.length || 0), 0);

  return (
    <div className="max-w-3xl mx-auto">
      <header className="text-center mb-16">
        <div className="inline-block mb-4 px-4 py-1 border border-[#2a2a45] text-xs text-[#6b6b8a] tracking-[0.2em]">
          ◆ ARCHIVES ◆
        </div>
        <h1 className="text-3xl md:text-4xl font-bold zzz-text-gradient zzz-glow mb-4">
          文章归档
        </h1>
        <div className="flex items-center justify-center gap-6 text-sm text-[#6b6b8a]">
          <span className="flex items-center gap-1">
            <span className="text-[#00e5ff]">■</span>
            {posts.length} 篇文章
          </span>
          <span className="flex items-center gap-1">
            <span className="text-[#b388ff]">■</span>
            {(totalWords / 1000).toFixed(1)}k 字
          </span>
        </div>
      </header>

      <div className="space-y-12">
        {years.map((year) => (
          <section key={year}>
            <h2 className="text-2xl font-bold text-[#e0dce8] mb-6 flex items-center gap-3">
              <span className="text-[#00e5ff] font-mono">{year}</span>
              <span className="flex-1 h-[1px] bg-[#2a2a45]" />
            </h2>
            <div className="space-y-3">
              {groupedByYear[year].map((post) => (
                <Link
                  key={post.slug}
                  href={`/posts/${post.slug}`}
                  className="zzz-card rounded p-4 group flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-[#6b6b8a] font-mono shrink-0 w-10">
                      {new Date(post.date).toLocaleDateString("zh-CN", {
                        month: "2-digit",
                        day: "2-digit",
                      })}
                    </span>
                    <h3 className="font-medium text-[#e0dce8] group-hover:text-[#00e5ff] transition-colors">
                      {post.title}
                    </h3>
                  </div>
                  <div className="hidden md:flex items-center gap-2">
                    {post.tags?.map((tag) => (
                      <span key={tag} className="text-xs text-[#6b6b8a]">
                        #{tag}
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

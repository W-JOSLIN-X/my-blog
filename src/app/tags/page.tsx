import Link from "next/link";
import { getAllPosts, getAllTags } from "@/lib/posts";

const colors = ["#ff5c28", "#00d4ff", "#f5c842", "#ff3860", "#22e07a"];

export default function TagsPage() {
  const tags = getAllTags();
  const posts = getAllPosts();

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="panel p-8 md:p-12 mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[10px] font-mono tracking-[0.2em] text-[#ff5c28] border border-[#ff5c28]/30 px-2 py-0.5">
            TAG.INDEX
          </span>
          <span className="font-mono text-[11px] text-[#605c6e]">
            {tags.length} CATEGORIES
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl font-black tracking-tighter">标签分类</h1>
        <p className="text-[#9a96a8] mt-3 max-w-lg">按技术分类浏览所有文章。</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-16">
        {tags.map((tag, i) => (
          <a key={tag} href={`#tag-${tag}`} className="tag text-xs px-3 py-1" style={{ borderColor: `${colors[i % colors.length]}44`, color: colors[i % colors.length] }}>
            {tag}
          </a>
        ))}
      </div>

      <div className="space-y-16">
        {tags.map((tag, ti) => {
          const list = posts.filter((p) => p.tags?.includes(tag));
          const c = colors[ti % colors.length];
          return (
            <section key={tag} id={`tag-${tag}`}>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2 h-2 shrink-0" style={{ background: c, boxShadow: `0 0 6px ${c}` }} />
                <h2 className="text-lg font-black text-[#dedae8]">{tag}</h2>
                <span className="font-mono text-xs text-[#605c6e]">{list.length}篇</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {list.map((post) => (
                  <Link key={post.slug} href={`/posts/${post.slug}`} className="card p-4 group">
                    <h3 className="text-sm font-bold text-[#dedae8] group-hover:text-[#ff5c28] transition-colors line-clamp-1">{post.title}</h3>
                    <p className="text-xs text-[#9a96a8] mt-1 line-clamp-1">{post.description}</p>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

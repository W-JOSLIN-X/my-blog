import Link from "next/link";
import { getAllPosts, getAllTags } from "@/lib/posts";

const colors = ["#ff6b00", "#00e5ff", "#ff0080", "#ffd700", "#00ff41"];

export default function TagsPage() {
  const tags = getAllTags();
  const posts = getAllPosts();

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="zzz-panel p-8 md:p-12 mb-12 text-center">
        <div className="flex items-center justify-center gap-3 mb-6 font-mono text-[11px] text-[#555] tracking-wider">
          <span className="rec-dot">REC</span>
          <span>TAG INDEX</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-4">标签分类</h1>
        <p className="text-[#888]">按标签浏览文章</p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-16">
        {tags.map((tag, i) => (
          <a
            key={tag}
            href={`#tag-${tag}`}
            className="zzz-tag text-xs px-3 py-1"
            style={{ borderColor: `${colors[i % colors.length]}33`, color: colors[i % colors.length] }}
          >
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
                <span
                  className="block w-3 h-3 shrink-0"
                  style={{ background: c, boxShadow: `0 0 6px ${c}99` }}
                />
                <h2 className="text-base font-bold text-[#e8e8e8]">{tag}</h2>
                <span className="font-mono text-xs text-[#555]">
                  {String(list.length).padStart(2, "0")}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {list.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/posts/${post.slug}`}
                    className="zzz-card p-4 group"
                  >
                    <h3 className="text-sm font-medium text-[#e8e8e8] group-hover:text-[#ff6b00] transition-colors line-clamp-1">
                      {post.title}
                    </h3>
                    <p className="text-xs text-[#666] mt-1 line-clamp-1">{post.description}</p>
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

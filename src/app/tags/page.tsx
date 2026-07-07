import Link from "next/link";
import { getAllPosts, getAllTags } from "@/lib/posts";

export default function TagsPage() {
  const tags = getAllTags();
  const posts = getAllPosts();

  const tagColors: Record<string, string> = {
    "前端": "#00e5ff",
    "Next.js": "#ff2d78",
    "博客": "#b388ff",
    "生活": "#ffd740",
  };

  return (
    <div className="max-w-4xl mx-auto">
      <header className="text-center mb-16">
        <div className="inline-block mb-4 px-4 py-1 border border-[#2a2a45] text-xs text-[#6b6b8a] tracking-[0.2em]">
          ◆ TAGS ◆
        </div>
        <h1 className="text-3xl md:text-4xl font-bold zzz-text-gradient zzz-glow mb-4">
          标签分类
        </h1>
        <p className="text-[#8b8bae]">按标签浏览文章</p>
      </header>

      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {tags.map((tag) => (
          <a
            key={tag}
            href={`#tag-${tag}`}
            className="zzz-tag text-sm"
            style={tagColors[tag] ? {
              color: tagColors[tag],
              borderColor: `${tagColors[tag]}33`,
              background: `${tagColors[tag]}14`,
            } : {}}
          >
            #{tag}
          </a>
        ))}
      </div>

      <div className="space-y-12">
        {tags.map((tag) => {
          const taggedPosts = posts.filter((p) => p.tags?.includes(tag));
          const color = tagColors[tag] || "#00e5ff";
          return (
            <section key={tag} id={`tag-${tag}`}>
              <h2
                className="text-lg font-bold mb-6 flex items-center gap-2"
                style={{ color }}
              >
                <span
                  className="inline-block w-2 h-2"
                  style={{
                    backgroundColor: color,
                    boxShadow: `0 0 6px ${color}`,
                  }}
                />
                #{tag}
                <span className="text-xs text-[#6b6b8a] font-normal">
                  ({taggedPosts.length})
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {taggedPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/posts/${post.slug}`}
                    className="zzz-card rounded p-4 group"
                  >
                    <h3 className="font-semibold text-[#e0dce8] group-hover:text-[#00e5ff] transition-colors text-sm">
                      {post.title}
                    </h3>
                    <p className="text-xs text-[#6b6b8a] mt-1 line-clamp-1">
                      {post.description}
                    </p>
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

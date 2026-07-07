import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

const categories = [
  { name: "全部", slug: "" },
  { name: "前端", slug: "前端" },
  { name: "Next.js", slug: "Next.js" },
  { name: "博客", slug: "博客" },
  { name: "生活", slug: "生活" },
];

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="panel p-8 md:p-12 mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[10px] font-mono tracking-[0.2em] text-[#ff5c28] border border-[#ff5c28]/30 px-2 py-0.5">
            TASK.BOARD
          </span>
          <span className="font-mono text-[11px] text-[#605c6e]">
            {posts.length} RECORDS
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl font-black tracking-tighter">
          任务记录
        </h1>
        <p className="text-[#9a96a8] mt-3 max-w-lg">
          所有技术文章和学习笔记，按时间倒序排列。
        </p>
      </div>

      {/* Tab */}
      <div className="flex items-center gap-1 mb-8 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={cat.slug ? `/tags?tag=${cat.slug}` : "/posts"}
            className="shrink-0 px-4 py-1.5 text-xs font-bold tracking-wider bg-[#14141c] border border-[#282840] text-[#9a96a8] hover:border-[#ff5c28] hover:text-[#ff5c28] transition-colors"
          >
            {cat.name}
          </Link>
        ))}
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((post, i) => (
          <Link key={post.slug} href={`/posts/${post.slug}`} className="card p-5 group">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-[11px] text-[#ff5c28] tracking-wider">#{String(i + 1).padStart(2, "0")}</span>
              <span className="w-px h-3 bg-[#363655]" />
              <span className="font-mono text-[11px] text-[#605c6e]">{new Date(post.date).toLocaleDateString("zh-CN")}</span>
            </div>
            <h3 className="font-bold text-[15px] text-[#dedae8] group-hover:text-[#ff5c28] transition-colors mb-2 line-clamp-1">
              {post.title}
            </h3>
            <p className="text-[13px] text-[#9a96a8] leading-relaxed line-clamp-2">{post.description}</p>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {post.tags?.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
          </Link>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="panel p-12 text-center text-[#605c6e]">
          <div className="text-4xl mb-3">◆</div>
          <p className="font-mono text-xs tracking-wider">NO RECORDS FOUND</p>
        </div>
      )}
    </div>
  );
}

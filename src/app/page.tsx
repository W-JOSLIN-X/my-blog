import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

const categories = [
  { name: "全部", slug: "" },
  { name: "前端", slug: "前端" },
  { name: "后端", slug: "后端" },
  { name: "数据库", slug: "数据库" },
  { name: "嵌入式", slug: "嵌入式" },
  { name: "AI/ML", slug: "AIML" },
  { name: "算法", slug: "算法" },
  { name: "工具", slug: "工具" },
];

const skills = ["TypeScript", "React", "Next.js", "Node.js", "Python", "C", "Git", "Linux"];

export default function Home() {
  const posts = getAllPosts().slice(0, 6);

  return (
    <div className="max-w-5xl mx-auto px-6">

      {/* ─── HERO ─── */}
      <section className="py-16 md:py-24">
        <div className="stripes-bg">
          <div className="panel p-8 md:p-14">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-[10px] font-mono tracking-[0.2em] text-[#ff5c28] border border-[#ff5c28]/30 px-2 py-0.5">
                SYS.BOOT
              </span>
              <span className="text-[10px] font-mono text-[#605c6e] tracking-wider">
                2026.07.07 · UNIT-01
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-4">
              <span className="text-[#ff5c28]">ROOOOXY</span>
              <br />
              <span className="text-[#dedae8] text-2xl md:text-4xl font-bold tracking-wide">
                软件开发学生 · 构建者 · 学习者
              </span>
            </h1>

            <p className="text-[#9a96a8] text-lg max-w-xl leading-relaxed mt-6 mb-8">
              一个热爱技术的程序学习者。记录学习笔记、项目实战、踩坑经验。
              这是我的个人知识档案馆。
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="/posts" className="btn btn-accent">
                ▶ 进入档案
              </Link>
              <Link href="/about" className="btn">
                关于我
              </Link>
              <Link href="/projects" className="btn">
                项目记录
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LATEST POSTS ─── */}
      <section className="mb-16">
        <div className="sec-head">
          <span className="mark" />
          <span className="title">最新任务记录</span>
          <span className="line" />
          <Link href="/posts" className="text-[10px] font-mono text-[#605c6e] hover:text-[#ff5c28] transition-colors tracking-wider ml-auto">
            VIEW ALL →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {posts.map((post, i) => (
            <Link key={post.slug} href={`/posts/${post.slug}`} className="card p-5 group">
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-[11px] text-[#ff5c28] tracking-wider">
                  #{String(i + 1).padStart(2, "0")}
                </span>
                <span className="w-px h-3 bg-[#363655]" />
                <span className="font-mono text-[11px] text-[#605c6e]">
                  {new Date(post.date).toLocaleDateString("zh-CN")}
                </span>
              </div>
              <h3 className="font-bold text-[15px] text-[#dedae8] group-hover:text-[#ff5c28] transition-colors mb-2 line-clamp-1">
                {post.title}
              </h3>
              <p className="text-[13px] text-[#9a96a8] leading-relaxed line-clamp-2">
                {post.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {post.tags?.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── CATEGORIES ─── */}
      <section className="mb-16">
        <div className="sec-head">
          <span className="mark" />
          <span className="title">分类频道</span>
          <span className="line" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={cat.slug ? `/tags?tag=${cat.slug}` : "/posts"}
              className="card p-4 group flex items-center gap-3"
            >
              <span className="w-1.5 h-1.5 bg-[#ff5c28] group-hover:shadow-[0_0_8px_rgba(255,92,40,0.4)] transition-shadow" />
              <span className="text-sm font-bold text-[#dedae8] group-hover:text-[#ff5c28] transition-colors">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── SKILLS ─── */}
      <section className="mb-16">
        <div className="sec-head">
          <span className="mark" />
          <span className="title">技术栈</span>
          <span className="line" />
        </div>
        <div className="panel p-6">
          <div className="flex flex-wrap gap-3">
            {skills.map((s) => (
              <span
                key={s}
                className="px-3 py-1.5 text-xs font-bold text-[#9a96a8] border border-[#363655] hover:border-[#ff5c28] hover:text-[#ff5c28] transition-colors"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT PREVIEW ─── */}
      <section className="mb-16">
        <div className="sec-head">
          <span className="mark" />
          <span className="title">关于我</span>
          <span className="line" />
        </div>
        <div className="panel p-6 flex flex-col md:flex-row gap-6 items-start">
          <div className="shrink-0 w-16 h-16 bg-[#1a1a24] border border-[#363655] flex items-center justify-center text-2xl">
            ◆
          </div>
          <div>
            <h3 className="font-bold text-lg text-[#dedae8] mb-2">Roooooxy</h3>
            <p className="text-sm text-[#9a96a8] leading-relaxed mb-4">
              软件开发学生，专注于 Web 全栈开发。热爱新技术，喜欢写技术笔记，
              相信知识分享的力量。目前正在深入学习和实践中。
            </p>
            <Link href="/about" className="btn text-xs py-1.5 px-4">
              查看完整档案 →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

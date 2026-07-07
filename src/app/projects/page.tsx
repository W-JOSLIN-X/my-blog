import Link from "next/link";

const projects = [
  {
    name: "个人博客系统",
    id: "PRJ-001",
    desc: "基于 Next.js + MDX 的个人技术博客。包含文章系统、分类标签、代码高亮、Giscus 评论、响应式布局。采用游戏 UI 风格的视觉设计。",
    tech: ["Next.js", "TypeScript", "Tailwind", "MDX", "Vercel"],
    period: "2026.07",
    status: "维护中",
    link: "https://github.com/W-JOSLIN-X/my-blog",
    color: "#ff5c28",
  },
  {
    name: "待添加项目",
    id: "PRJ-002",
    desc: "在这里可以展示你的课程设计、个人项目、开源贡献等。描述项目背景、技术方案和你学到的东西。",
    tech: ["待定", "待定"],
    period: "待定",
    status: "规划中",
    color: "#00d4ff",
  },
  {
    name: "待添加项目",
    id: "PRJ-003",
    desc: "继续添加更多项目，展示你的技术广度和解决问题的能力。",
    tech: ["待定"],
    period: "待定",
    status: "规划中",
    color: "#f5c842",
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="panel p-8 md:p-12 mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[10px] font-mono tracking-[0.2em] text-[#ff5c28] border border-[#ff5c28]/30 px-2 py-0.5">
            MISSION.LOG
          </span>
          <span className="font-mono text-[11px] text-[#605c6e]">
            {projects.length} ENTRIES
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl font-black tracking-tighter">
          作战记录
        </h1>
        <p className="text-[#9a96a8] mt-3 max-w-lg">
          每个项目的开发过程、技术栈和收获。
        </p>
      </div>

      <div className="space-y-4">
        {projects.map((p) => (
          <article key={p.id} className="card p-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="w-2 h-2 shrink-0"
                    style={{ background: p.color, boxShadow: `0 0 6px ${p.color}` }}
                  />
                  <span className="font-mono text-[11px] text-[#605c6e] tracking-wider">{p.id}</span>
                  <span className="text-[10px] font-mono text-[#ff5c28] border border-[#ff5c28]/30 px-1.5 py-0.5">
                    {p.status}
                  </span>
                  <span className="font-mono text-[11px] text-[#605c6e] ml-auto">{p.period}</span>
                </div>
                <h3 className="font-black text-lg text-[#dedae8] mb-2">{p.name}</h3>
                <p className="text-sm text-[#9a96a8] leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener" className="text-xs font-mono font-bold text-[#ff5c28] hover:text-[#ff7e50] transition-colors tracking-wider">
                    VIEW SOURCE →
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

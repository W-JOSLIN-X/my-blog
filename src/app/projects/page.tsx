const projects = [
  {
    name: "个人博客系统",
    desc: "基于 Next.js + MDX，采用 ZZZ 风格 UI 设计，包含文章系统、标签分类、友链等功能模块。",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
    link: "https://github.com/W-JOSLIN-X/my-blog",
    color: "#ff6b00",
  },
  {
    name: "待添加项目",
    desc: "这里可以展示你的项目作品。",
    tech: ["React", "Node.js"],
    color: "#00e5ff",
  },
  {
    name: "待添加项目",
    desc: "继续添加更多项目展示。",
    tech: ["Vue", "Python"],
    color: "#ff0080",
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="zzz-panel p-8 md:p-12 mb-12 text-center">
        <div className="flex items-center justify-center gap-3 mb-6 font-mono text-[11px] text-[#555] tracking-wider">
          <span className="rec-dot">REC</span>
          <span>PROJECT ARCHIVE</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-4">项目展示</h1>
        <p className="text-[#888]">这里是我做过的项目作品</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((p, i) => (
          <article key={i} className="zzz-card p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="block w-3 h-3 shrink-0"
                style={{ background: p.color, boxShadow: `0 0 6px ${p.color}99` }}
              />
              <h3 className="font-bold text-[#e8e8e8]">{p.name}</h3>
            </div>
            <p className="text-sm text-[#888] leading-relaxed mb-4 flex-1">{p.desc}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map((t) => (
                <span key={t} className="text-[10px] text-[#555] border border-[rgba(255,255,255,0.06)] px-2 py-0.5">
                  {t}
                </span>
              ))}
            </div>
            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-[#ff6b00] hover:text-[#ff8c3d] transition-colors tracking-wider"
              >
                VIEW PROJECT ▶
              </a>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}

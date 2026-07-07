export default function AboutPage() {
  const skills = [
    ["React / Next.js", 85, "#ff6b00"],
    ["TypeScript", 78, "#00e5ff"],
    ["Node.js", 70, "#ff0080"],
    ["Tailwind CSS", 88, "#ffd700"],
    ["Python", 65, "#00ff41"],
    ["Git / DevOps", 72, "#ff6b00"],
  ];

  const timeline = [
    ["2024", "开始系统学习前端开发", "从 HTML/CSS 到 React 生态"],
    ["2025", "深入学习全栈技术", "Next.js + Node.js + 数据库"],
    ["2026", "建立个人博客", "分享学习经验与技术笔记"],
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="zzz-panel p-8 md:p-12 mb-12 text-center">
        <div className="flex items-center justify-center gap-3 mb-6 font-mono text-[11px] text-[#555] tracking-wider">
          <span className="rec-dot">REC</span>
          <span>SYSTEM PROFILE</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-4">关于我</h1>
        <p className="text-[#888] max-w-lg mx-auto leading-relaxed">
          一个热爱技术与创作的前端开发者，专注于构建优秀的 Web 体验。
          喜欢探索新工具、分享知识，也热爱游戏与音乐。
        </p>
      </div>

      <section className="mb-12">
        <div className="zzz-section-title">SKILL MATRIX</div>
        <div className="zzz-panel p-6">
          <div className="space-y-4">
            {skills.map(([name, level, color]) => (
              <div key={name as string}>
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-[#aaa] font-medium">{name}</span>
                  <span className="font-mono text-[#555]">{level}%</span>
                </div>
                <div className="h-1 bg-[rgba(255,255,255,0.04)] overflow-hidden">
                  <div
                    className="h-full transition-all duration-700"
                    style={{ width: `${level}%`, background: color, boxShadow: `0 0 8px ${color}66` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="zzz-section-title">TIMELINE</div>
        <div className="space-y-3">
          {timeline.map(([year, title, desc], i) => (
            <div key={i} className="zzz-card p-5 flex gap-6 items-start">
              <div className="shrink-0 font-mono text-sm font-bold text-[#ff6b00] tracking-wider w-12">
                {year}
              </div>
              <div>
                <h3 className="font-bold text-[#e8e8e8] mb-1">{title}</h3>
                <p className="text-sm text-[#666]">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

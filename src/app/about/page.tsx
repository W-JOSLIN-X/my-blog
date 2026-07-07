export default function AboutPage() {
  const skills = [
    { name: "React / Next.js", level: 85, color: "#00e5ff" },
    { name: "TypeScript", level: 78, color: "#b388ff" },
    { name: "Node.js", level: 70, color: "#69f0ae" },
    { name: "Tailwind CSS", level: 88, color: "#ffd740" },
    { name: "Python", level: 65, color: "#ff9100" },
    { name: "Git / DevOps", level: 72, color: "#ff2d78" },
  ];

  const timeline = [
    { year: "2024", title: "开始系统学习前端开发", desc: "从 HTML/CSS 到 React 生态" },
    { year: "2025", title: "深入学习全栈技术", desc: "Next.js + Node.js + 数据库" },
    { year: "2026", title: "建立个人博客", desc: "分享学习经验与技术笔记" },
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <header className="text-center mb-16">
        <div className="inline-block mb-4 px-4 py-1 border border-[#2a2a45] text-xs text-[#6b6b8a] tracking-[0.2em]">
          ◆ ABOUT ME ◆
        </div>
        <h1 className="text-3xl md:text-4xl font-bold zzz-text-gradient zzz-glow mb-6">
          关于我
        </h1>
        <p className="text-[#8b8bae] leading-relaxed max-w-xl mx-auto">
          一个热爱技术与创作的前端开发者，专注于构建优秀的 Web 体验。
          喜欢探索新工具、分享知识，也热爱游戏与音乐。
        </p>
      </header>

      <section className="mb-16">
        <h2 className="text-sm font-medium text-[#b388ff] tracking-[0.3em] uppercase mb-8 flex items-center gap-2">
          <span className="inline-block w-2 h-2 bg-[#b388ff] shadow-[0_0_6px_#b388ff]" />
          技能雷达
        </h2>
        <div className="zzz-card rounded p-6 md:p-8">
          <div className="space-y-5">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-[#c4c0d0]">{skill.name}</span>
                  <span className="text-[#6b6b8a] font-mono">{skill.level}%</span>
                </div>
                <div className="h-1.5 bg-[#0a0a10] border border-[#2a2a45] overflow-hidden">
                  <div
                    className="h-full transition-all duration-1000"
                    style={{
                      width: `${skill.level}%`,
                      backgroundColor: skill.color,
                      boxShadow: `0 0 10px ${skill.color}`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-sm font-medium text-[#b388ff] tracking-[0.3em] uppercase mb-8 flex items-center gap-2">
          <span className="inline-block w-2 h-2 bg-[#b388ff] shadow-[0_0_6px_#b388ff]" />
          时间线
        </h2>
        <div className="space-y-6">
          {timeline.map((item, i) => (
            <div key={i} className="zzz-card rounded p-5 flex gap-6 items-start group">
              <div className="shrink-0 w-16 text-center">
                <span className="text-[#00e5ff] font-bold font-mono text-lg">{item.year}</span>
              </div>
              <div>
                <h3 className="font-bold text-[#e0dce8] mb-1 group-hover:text-[#00e5ff] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#6b6b8a]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";

const timeline = [
  ["2024", "开始系统学习前端", "从 HTML/CSS 起步，逐步接触 React 生态系统。"],
  ["2025", "深入全栈技术", "学习 Node.js、数据库、服务器部署，建立全栈视野。"],
  ["2026", "建立个人博客", "用学到的东西搭建自己的技术博客，开始输出知识。"],
];

const interests = ["前端开发", "全栈实践", "系统设计", "开源社区", "游戏UI", "人工智能"];

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Profile Card */}
      <div className="panel p-8 md:p-12 mb-12">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="shrink-0 w-20 h-20 bg-[#1a1a24] border border-[#363655] flex items-center justify-center text-3xl">
            ◆
          </div>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[10px] font-mono tracking-[0.2em] text-[#ff5c28] border border-[#ff5c28]/30 px-2 py-0.5">
                AGENT.PROFILE
              </span>
              <span className="font-mono text-[11px] text-[#605c6e]">ID:001</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
              Roooooxy
            </h1>
            <p className="text-[#9a96a8] leading-relaxed max-w-lg">
              软件开发学生，热爱前沿技术和创造性工具。专注 Web 全栈方向，
              同时也对游戏开发、UI 设计、嵌入式系统感兴趣。
              喜欢把学到的知识整理成笔记，分享给同样热爱技术的人。
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <a href="https://github.com/W-JOSLIN-X" target="_blank" rel="noopener" className="btn text-xs py-1.5 px-4">
                GITHUB
              </a>
              <Link href="/projects" className="btn text-xs py-1.5 px-4">
                项目作品
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <section className="mb-12">
        <div className="sec-head"><span className="mark" /><span className="title">成长轨迹</span><span className="line" /></div>
        <div className="space-y-3">
          {timeline.map(([y, t, d], i) => (
            <div key={i} className="card p-5 flex gap-6 items-start">
              <div className="shrink-0 font-mono text-lg font-black text-[#ff5c28] tracking-tight">{y}</div>
              <div>
                <h3 className="font-bold text-[#dedae8] mb-1">{t}</h3>
                <p className="text-sm text-[#9a96a8]">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interests */}
      <section>
        <div className="sec-head"><span className="mark" /><span className="title">兴趣方向</span><span className="line" /></div>
        <div className="panel p-6">
          <div className="flex flex-wrap gap-3">
            {interests.map((i) => (
              <span key={i} className="px-3 py-1.5 text-xs font-bold text-[#9a96a8] border border-[#363655] hover:border-[#ff5c28] hover:text-[#ff5c28] transition-colors">
                {i}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

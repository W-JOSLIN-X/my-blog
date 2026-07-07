import Link from "next/link";

const projects = [
  {
    name: "个人博客系统",
    desc: "基于 Next.js + MDX 构建的个人博客，采用绝区零风格 UI 设计。",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
    link: "https://github.com/W-JOSLIN-X/my-blog",
    color: "#00e5ff",
  },
  {
    name: "待添加项目",
    desc: "这里可以展示你的项目作品，描述项目的功能、技术栈和亮点。",
    tech: ["React", "Node.js", "MongoDB"],
    color: "#b388ff",
  },
  {
    name: "待添加项目",
    desc: "继续添加更多项目展示，让访问者了解你的技术能力和项目经验。",
    tech: ["Vue.js", "Python", "Docker"],
    color: "#ffd740",
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <header className="text-center mb-16">
        <div className="inline-block mb-4 px-4 py-1 border border-[#2a2a45] text-xs text-[#6b6b8a] tracking-[0.2em]">
          ◆ PROJECTS ◆
        </div>
        <h1 className="text-3xl md:text-4xl font-bold zzz-text-gradient zzz-glow mb-4">
          项目展示
        </h1>
        <p className="text-[#8b8bae]">这里是我做过的项目作品</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <article
            key={i}
            className="zzz-card rounded p-6 group flex flex-col"
          >
            <div className="mb-4">
              <div
                className="inline-block w-3 h-3 mb-3"
                style={{
                  backgroundColor: project.color,
                  boxShadow: `0 0 10px ${project.color}`,
                }}
              />
              <h3 className="text-lg font-bold text-[#e0dce8] group-hover:text-[#00e5ff] transition-colors">
                {project.name}
              </h3>
            </div>
            <p className="text-sm text-[#8b8bae] leading-relaxed mb-4 flex-1">
              {project.desc}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-0.5 bg-[#0a0a10] border border-[#2a2a45] text-[#6b6b8a]"
                >
                  {t}
                </span>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#ff2d78] hover:text-[#00e5ff] transition-colors flex items-center gap-1"
              >
                VIEW PROJECT →
              </a>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}

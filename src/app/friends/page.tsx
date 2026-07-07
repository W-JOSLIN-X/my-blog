const friends = [
  {
    name: "你的朋友",
    desc: "友情链接描述",
    url: "https://example.com",
    icon: "🌐",
  },
  {
    name: "你的朋友",
    desc: "友情链接描述",
    url: "https://example.com",
    icon: "📝",
  },
  {
    name: "你的朋友",
    desc: "友情链接描述",
    url: "https://example.com",
    icon: "💻",
  },
  {
    name: "你的朋友",
    desc: "友情链接描述",
    url: "https://example.com",
    icon: "🎮",
  },
  {
    name: "你的朋友",
    desc: "友情链接描述",
    url: "https://example.com",
    icon: "📚",
  },
  {
    name: "你的朋友",
    desc: "友情链接描述",
    url: "https://example.com",
    icon: "🎵",
  },
];

export default function FriendsPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <header className="text-center mb-16">
        <div className="inline-block mb-4 px-4 py-1 border border-[#2a2a45] text-xs text-[#6b6b8a] tracking-[0.2em]">
          ◆ FRIENDS ◆
        </div>
        <h1 className="text-3xl md:text-4xl font-bold zzz-text-gradient zzz-glow mb-4">
          友链
        </h1>
        <p className="text-[#8b8bae]">一些有趣的网站和朋友们</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {friends.map((friend, i) => (
          <a
            key={i}
            href={friend.url}
            target="_blank"
            rel="noopener noreferrer"
            className="zzz-card rounded p-5 group flex items-center gap-4"
          >
            <div className="shrink-0 w-12 h-12 flex items-center justify-center text-2xl bg-[#0a0a10] border border-[#2a2a45]">
              {friend.icon}
            </div>
            <div>
              <h3 className="font-semibold text-[#e0dce8] group-hover:text-[#00e5ff] transition-colors">
                {friend.name}
              </h3>
              <p className="text-xs text-[#6b6b8a] mt-0.5">{friend.desc}</p>
            </div>
          </a>
        ))}
      </div>

      <div className="zzz-divider my-12" />

      <div className="text-center">
        <h2 className="text-sm font-medium text-[#b388ff] tracking-[0.3em] uppercase mb-6">
          交换友链
        </h2>
        <div className="zzz-card rounded p-6 inline-block text-left">
          <p className="text-sm text-[#8b8bae] mb-4">添加友链请提供以下信息：</p>
          <ul className="space-y-2 text-sm text-[#c4c0d0]">
            <li className="before:content-['▸'] before:text-[#00e5ff] before:mr-2">网站名称</li>
            <li className="before:content-['▸'] before:text-[#00e5ff] before:mr-2">网站地址</li>
            <li className="before:content-['▸'] before:text-[#00e5ff] before:mr-2">一句话描述</li>
            <li className="before:content-['▸'] before:text-[#00e5ff] before:mr-2">一个 emoji 图标</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

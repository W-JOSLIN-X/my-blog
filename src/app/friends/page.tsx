const friends = [
  ["你的朋友", "友情链接描述", "https://example.com", "🌐"],
  ["你的朋友", "友情链接描述", "https://example.com", "📝"],
  ["你的朋友", "友情链接描述", "https://example.com", "💻"],
  ["你的朋友", "友情链接描述", "https://example.com", "🎮"],
  ["你的朋友", "友情链接描述", "https://example.com", "📚"],
  ["你的朋友", "友情链接描述", "https://example.com", "🎵"],
];

export default function FriendsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="zzz-panel p-8 md:p-12 mb-12 text-center">
        <div className="flex items-center justify-center gap-3 mb-6 font-mono text-[11px] text-[#555] tracking-wider">
          <span className="rec-dot">REC</span>
          <span>NETWORK LINKS</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-4">友链</h1>
        <p className="text-[#888]">一些有趣的网站和朋友们</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-16">
        {friends.map(([name, desc, url, icon], i) => (
          <a
            key={i}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="zzz-card p-4 flex items-center gap-4 group"
          >
            <div className="shrink-0 w-11 h-11 flex items-center justify-center text-xl bg-[#0a0a0a] border border-[rgba(255,255,255,0.06)]">
              {icon}
            </div>
            <div className="min-w-0">
              <div className="font-medium text-[#e8e8e8] text-sm group-hover:text-[#ff6b00] transition-colors">
                {name}
              </div>
              <div className="text-xs text-[#666] mt-0.5 truncate">{desc}</div>
            </div>
          </a>
        ))}
      </div>

      <div className="zzz-panel p-6 text-center">
        <div className="zzz-section-title justify-center">ADD YOUR LINK</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs text-[#666]">
          <div className="zzz-card p-2.5">网站名称</div>
          <div className="zzz-card p-2.5">网站地址</div>
          <div className="zzz-card p-2.5">一句话描述</div>
          <div className="zzz-card p-2.5">Emoji 图标</div>
        </div>
      </div>
    </div>
  );
}

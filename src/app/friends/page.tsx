const friends = [
  ["友链待添加", "把你的朋友网站放这里", "https://example.com", "🌐"],
  ["友链待添加", "把你的朋友网站放这里", "https://example.com", "📝"],
  ["友链待添加", "交换友链请联系我", "https://example.com", "💻"],
  ["友链待添加", "交换友链请联系我", "https://example.com", "🎮"],
];

export default function FriendsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="panel p-8 md:p-12 mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[10px] font-mono tracking-[0.2em] text-[#ff5c28] border border-[#ff5c28]/30 px-2 py-0.5">
            NET.LINKS
          </span>
          <span className="font-mono text-[11px] text-[#605c6e]">
            {friends.length} NODES
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl font-black tracking-tighter">网络节点</h1>
        <p className="text-[#9a96a8] mt-3 max-w-lg">朋友们的网站。</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-16">
        {friends.map(([name, desc, url, icon], i) => (
          <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="card p-4 flex items-center gap-4 group">
            <div className="shrink-0 w-11 h-11 flex items-center justify-center text-xl bg-[#0c0c10] border border-[#282840]">
              {icon}
            </div>
            <div className="min-w-0">
              <div className="font-bold text-sm text-[#dedae8] group-hover:text-[#ff5c28] transition-colors">{name}</div>
              <div className="text-xs text-[#605c6e] mt-0.5 truncate">{desc}</div>
            </div>
          </a>
        ))}
      </div>

      <div className="panel p-6 text-center">
        <div className="sec-head justify-center">
          <span className="mark" />
          <span className="title">交换友链</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs text-[#605c6e]">
          {["网站名称", "网站地址", "一句话描述", "Emoji图标"].map((l) => (
            <div key={l} className="card p-2.5">{l}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

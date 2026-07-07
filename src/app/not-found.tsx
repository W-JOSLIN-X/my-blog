import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto flex flex-col items-center justify-center py-32 text-center">
      <div className="text-8xl font-bold zzz-text-gradient mb-6 zzz-glow">
        404
      </div>
      <div className="mb-4 px-4 py-1 border border-[#2a2a45] text-xs text-[#6b6b8a] tracking-[0.2em]">
        ◆ SIGNAL LOST ◆
      </div>
      <p className="text-[#8b8bae] mb-8">这个频道不存在或已丢失...</p>
      <Link href="/" className="zzz-btn">
        <span>返回首页</span>
      </Link>
    </div>
  );
}

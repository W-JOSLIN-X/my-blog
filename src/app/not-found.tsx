import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-md mx-auto px-6 py-32 text-center">
      <div className="panel p-12">
        <div className="text-[10px] font-mono tracking-[0.2em] text-[#ff3860] mb-6">SYS.ERROR</div>
        <div className="text-7xl font-black text-[#ff5c28] mb-4">404</div>
        <div className="font-mono text-xs text-[#605c6e] tracking-[0.2em] mb-8">
          SIGNAL NOT FOUND · 频道丢失
        </div>
        <Link href="/" className="btn btn-accent">
          ◀ 返回首页
        </Link>
      </div>
    </div>
  );
}

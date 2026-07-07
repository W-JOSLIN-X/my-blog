import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-lg mx-auto px-4 py-32 text-center">
      <div className="zzz-panel p-12">
        <div className="font-mono text-[11px] text-[#555] tracking-wider mb-6">
          <span className="rec-dot inline-flex">REC</span>
        </div>
        <div className="text-7xl font-black text-[#ff6b00] mb-4">404</div>
        <div className="font-mono text-xs text-[#666] tracking-[0.2em] mb-8">
          SIGNAL NOT FOUND
        </div>
        <Link href="/" className="zzz-btn primary">
          RETURN TO INDEX
        </Link>
      </div>
    </div>
  );
}

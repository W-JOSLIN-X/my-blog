import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto flex flex-col items-center justify-center py-32">
      <h1 className="text-6xl font-bold text-zinc-300 dark:text-zinc-700">404</h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">页面未找到</p>
      <Link
        href="/"
        className="mt-8 text-blue-600 dark:text-blue-400 hover:underline"
      >
        返回首页
      </Link>
    </div>
  );
}

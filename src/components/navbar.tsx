import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2.5 font-bold">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-purple-600 text-sm text-white shadow-sm">
            VC
          </span>
          <span className="text-gray-900">
            Vibe<span className="text-primary">Coding</span>101
          </span>
        </Link>
        <div className="flex items-center gap-1 text-sm font-medium">
          <Link
            href="/blog"
            className="rounded-lg px-3 py-1.5 text-gray-600 transition-colors hover:bg-violet-50 hover:text-primary"
          >
            Blog
          </Link>
          <Link
            href="/tutorials"
            className="rounded-lg px-3 py-1.5 text-gray-600 transition-colors hover:bg-violet-50 hover:text-primary"
          >
            Tutorials
          </Link>
          <Link
            href="/about"
            className="rounded-lg px-3 py-1.5 text-gray-600 transition-colors hover:bg-violet-50 hover:text-primary"
          >
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}

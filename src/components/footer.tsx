import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/50 bg-muted/30">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="mb-3 text-sm font-semibold">VibeCoding101</h3>
            <p className="text-sm text-muted-foreground">
              Learn to build apps with AI — no coding experience needed.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold">Content</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="/blog" className="hover:text-foreground">
                Blog
              </Link>
              <Link href="/tutorials" className="hover:text-foreground">
                Tutorials
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold">More</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="/about" className="hover:text-foreground">
                About
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border/50 pt-6 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} VibeCoding101. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

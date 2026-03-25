import Link from "next/link";
import { PostCard } from "@/components/post-card";
import { AdUnit } from "@/components/ad-unit";
import { HeroButtons } from "@/components/hero-buttons";
import { getAllPosts } from "@/lib/mdx";

const features = [
  {
    icon: "💬",
    title: "Describe It",
    description:
      "Tell the AI what you want in plain English. No syntax, no jargon — just your idea.",
  },
  {
    icon: "⚡",
    title: "AI Builds It",
    description:
      "Watch AI generate real, working code in seconds. Complete apps, not just snippets.",
  },
  {
    icon: "🚀",
    title: "Ship It",
    description:
      "Deploy your app to the internet with one click. Share it with the world.",
  },
];

const tools = [
  { name: "Cursor", desc: "AI code editor", color: "bg-blue-100 text-blue-700" },
  { name: "v0", desc: "UI generator", color: "bg-violet-100 text-violet-700" },
  { name: "Claude Code", desc: "AI assistant", color: "bg-amber-100 text-amber-700" },
  { name: "Bolt", desc: "Browser builder", color: "bg-green-100 text-green-700" },
];

export default function Home() {
  const blogPosts = getAllPosts("blog").slice(0, 3);
  const tutorials = getAllPosts("tutorials").slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-100 via-purple-50 to-pink-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(124,58,237,0.08),transparent_50%)]" />
        <div className="relative mx-auto max-w-5xl px-4 py-20 text-center sm:py-28">
          <div className="mb-4 text-5xl sm:text-6xl">🎨✨🤖</div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/80 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
            No coding experience needed
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Build Apps with AI.{" "}
            <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              No Code Required.
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
            Vibe coding lets you create real software by simply describing what
            you want. Start building today — it&apos;s free, fun, and surprisingly easy.
          </p>
          <HeroButtons />
        </div>
      </section>

      {/* How it Works */}
      <section className="border-y border-border/50 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <h2 className="mb-2 text-center text-sm font-semibold uppercase tracking-wider text-primary">
            How it works
          </h2>
          <p className="mb-12 text-center text-2xl font-bold sm:text-3xl">
            Three steps. That&apos;s it.
          </p>
          <div className="grid gap-8 sm:grid-cols-3">
            {features.map((f, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-100 to-purple-100 text-3xl shadow-sm">
                  {f.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{f.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad: Leaderboard */}
      <div className="mx-auto max-w-5xl px-4">
        <AdUnit
          slot={process.env.NEXT_PUBLIC_ADSENSE_LEADERBOARD_SLOT ?? ""}
          format="horizontal"
          className="my-6"
        />
      </div>

      {/* Tools Section */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="mb-2 text-center text-sm font-semibold uppercase tracking-wider text-primary">
          Popular tools
        </h2>
        <p className="mb-10 text-center text-2xl font-bold sm:text-3xl">
          Pick a tool, start building
        </p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {tools.map((t) => (
            <div
              key={t.name}
              className="rounded-xl border border-border/50 bg-white p-5 text-center shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              <div
                className={`mx-auto mb-3 inline-block rounded-lg px-3 py-1 text-xs font-semibold ${t.color}`}
              >
                {t.desc}
              </div>
              <div className="font-semibold">{t.name}</div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Not sure which one?{" "}
          <Link href="/blog/top-5-ai-coding-tools-2026" className="text-primary underline underline-offset-4">
            Read our comparison guide
          </Link>
        </p>
      </section>

      {/* Featured Tutorials */}
      {tutorials.length > 0 && (
        <section className="border-y border-border/50 bg-gradient-to-b from-violet-50/50 to-white">
          <div className="mx-auto max-w-5xl px-4 py-16">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Featured Tutorials</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Hands-on guides — follow along and build real projects
                </p>
              </div>
              <Link
                href="/tutorials"
                className="text-sm font-medium text-primary hover:underline"
              >
                View all &rarr;
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {tutorials.map((post) => (
                <PostCard key={post.slug} post={post} type="tutorials" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Latest Blog Posts */}
      {blogPosts.length > 0 && (
        <section className="mx-auto max-w-5xl px-4 py-16">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Latest from the Blog</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Guides and insights for AI coding beginners
              </p>
            </div>
            <Link
              href="/blog"
              className="text-sm font-medium text-primary hover:underline"
            >
              View all &rarr;
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <PostCard key={post.slug} post={post} type="blog" />
            ))}
          </div>
        </section>
      )}

      {/* CTA Banner */}
      <section className="mx-auto max-w-5xl px-4 pb-16">
        <div className="rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 px-8 py-12 text-center text-white shadow-lg">
          <div className="mb-3 text-4xl">🚀</div>
          <h2 className="mb-3 text-2xl font-bold sm:text-3xl">
            Ready to build your first app?
          </h2>
          <p className="mx-auto mb-6 max-w-lg text-violet-100">
            Jump into our beginner tutorial and have a working app in 10
            minutes. No signup, no credit card — just start.
          </p>
          <Link
            href="/tutorials/build-todo-app-with-claude-code"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 font-semibold text-violet-700 shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            Start the Tutorial &rarr;
          </Link>
        </div>
      </section>

      {/* Bottom Ad */}
      <div className="mx-auto max-w-5xl px-4">
        <AdUnit
          slot={process.env.NEXT_PUBLIC_ADSENSE_BOTTOM_SLOT ?? ""}
          format="horizontal"
          className="my-6"
        />
      </div>
    </>
  );
}

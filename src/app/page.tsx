import Link from "next/link";
import { PostCard } from "@/components/post-card";
import { AdUnit } from "@/components/ad-unit";
import { HeroButtons } from "@/components/hero-buttons";
import { getAllPosts } from "@/lib/mdx";

export default function Home() {
  const blogPosts = getAllPosts("blog").slice(0, 3);
  const tutorials = getAllPosts("tutorials").slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:py-28">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            No coding experience needed
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Learn to Build Apps{" "}
            <span className="text-primary">with AI</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Vibe coding is the new way to create software. Just describe what
            you want, and AI builds it for you. Start your journey here —
            completely free.
          </p>
          <HeroButtons />
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

      {/* What is Vibe Coding */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="mb-6 text-center text-2xl font-bold sm:text-3xl">
          What is Vibe Coding?
        </h2>
        <div className="mx-auto max-w-3xl space-y-4 text-center text-muted-foreground">
          <p>
            Vibe coding is a revolutionary approach to building software. Instead
            of writing code line by line, you describe what you want in plain
            English and AI tools like Cursor, v0, and Claude Code generate the
            code for you.
          </p>
          <p>
            It&apos;s perfect for entrepreneurs, designers, content creators, and
            anyone who wants to build digital products without spending years
            learning to code.
          </p>
        </div>
      </section>

      {/* Featured Tutorials */}
      {tutorials.length > 0 && (
        <section className="mx-auto max-w-5xl px-4 py-12">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Featured Tutorials</h2>
            <Link
              href="/tutorials"
              className="text-sm font-medium text-primary hover:underline"
            >
              View all &rarr;
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tutorials.map((post) => (
              <PostCard key={post.slug} post={post} type="tutorials" />
            ))}
          </div>
        </section>
      )}

      {/* Latest Blog Posts */}
      {blogPosts.length > 0 && (
        <section className="mx-auto max-w-5xl px-4 py-12">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Latest from the Blog</h2>
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

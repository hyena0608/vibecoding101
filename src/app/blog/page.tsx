import type { Metadata } from "next";
import { PostCard } from "@/components/post-card";
import { AdUnit } from "@/components/ad-unit";
import { getAllPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles about vibe coding, AI tools, and building apps without coding experience.",
};

export default function BlogPage() {
  const posts = getAllPosts("blog");

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <div className="mb-10">
        <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Blog
        </h1>
        <p className="text-lg text-muted-foreground">
          Guides, tips, and insights about building with AI — written for
          complete beginners.
        </p>
      </div>

      <AdUnit
        slot={process.env.NEXT_PUBLIC_ADSENSE_LEADERBOARD_SLOT ?? ""}
        format="horizontal"
        className="mb-8"
      />

      {posts.length === 0 ? (
        <p className="text-muted-foreground">No posts yet. Check back soon!</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} type="blog" />
          ))}
        </div>
      )}

      <AdUnit
        slot={process.env.NEXT_PUBLIC_ADSENSE_BOTTOM_SLOT ?? ""}
        format="horizontal"
        className="mt-10"
      />
    </div>
  );
}

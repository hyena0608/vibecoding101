import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { PostMeta } from "@/lib/mdx";

interface PostCardProps {
  post: PostMeta;
  type: "blog" | "tutorials";
}

const categoryConfig: Record<string, { emoji: string; color: string }> = {
  basics: { emoji: "📖", color: "bg-blue-50 border-blue-200" },
  tools: { emoji: "🛠️", color: "bg-amber-50 border-amber-200" },
  tutorial: { emoji: "👨‍💻", color: "bg-green-50 border-green-200" },
};

export function PostCard({ post, type }: PostCardProps) {
  const config = categoryConfig[post.category] ?? {
    emoji: "📝",
    color: "bg-gray-50 border-gray-200",
  };

  return (
    <Link href={`/${type}/${post.slug}`} className="group block h-full">
      <div className="flex h-full flex-col overflow-hidden rounded-xl border border-border/60 bg-white shadow-sm transition-all group-hover:shadow-md group-hover:-translate-y-0.5">
        {/* Color header strip */}
        <div className={`flex items-center gap-3 border-b px-5 py-4 ${config.color}`}>
          <span className="text-2xl">{config.emoji}</span>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs font-medium">
              {post.category}
            </Badge>
            <span className="text-xs text-muted-foreground">
              {post.readingTime}
            </span>
          </div>
        </div>
        {/* Content */}
        <div className="flex flex-1 flex-col p-5">
          <h3 className="mb-2 text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
            {post.title}
          </h3>
          <p className="mb-4 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
            {post.description}
          </p>
          <time className="text-xs text-muted-foreground">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
      </div>
    </Link>
  );
}

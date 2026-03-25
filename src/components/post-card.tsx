import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { PostMeta } from "@/lib/mdx";

interface PostCardProps {
  post: PostMeta;
  type: "blog" | "tutorials";
}

export function PostCard({ post, type }: PostCardProps) {
  return (
    <Link href={`/${type}/${post.slug}`}>
      <Card className="group h-full transition-all hover:shadow-md hover:-translate-y-0.5">
        <CardHeader>
          <div className="mb-2 flex items-center gap-2">
            <Badge variant="secondary" className="text-xs">
              {post.category}
            </Badge>
            <span className="text-xs text-muted-foreground">
              {post.readingTime}
            </span>
          </div>
          <CardTitle className="text-lg leading-snug group-hover:text-primary transition-colors">
            {post.title}
          </CardTitle>
          <CardDescription className="line-clamp-2">
            {post.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <time className="text-xs text-muted-foreground">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </CardContent>
      </Card>
    </Link>
  );
}

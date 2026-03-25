import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const contentDirectory = path.join(process.cwd(), "content");

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  thumbnail: string;
  readingTime: string;
}

export function getPostSlugs(type: "blog" | "tutorials"): string[] {
  const dir = path.join(contentDirectory, type);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getPostBySlug(
  type: "blog" | "tutorials",
  slug: string
): { meta: PostMeta; content: string } {
  const filePath = path.join(contentDirectory, type, `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const stats = readingTime(content);

  return {
    meta: {
      slug,
      title: data.title ?? "",
      description: data.description ?? "",
      date: data.date ?? "",
      category: data.category ?? "",
      thumbnail: data.thumbnail ?? "",
      readingTime: stats.text,
    },
    content,
  };
}

export function getAllPosts(type: "blog" | "tutorials"): PostMeta[] {
  const slugs = getPostSlugs(type);
  return slugs
    .map((slug) => getPostBySlug(type, slug).meta)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

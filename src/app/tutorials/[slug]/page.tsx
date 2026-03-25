import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Badge } from "@/components/ui/badge";
import { AdUnit } from "@/components/ad-unit";
import { mdxComponents } from "@/components/mdx-components";
import { getPostBySlug, getPostSlugs } from "@/lib/mdx";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getPostSlugs("tutorials").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { meta } = getPostBySlug("tutorials", slug);
    return {
      title: meta.title,
      description: meta.description,
      openGraph: {
        title: meta.title,
        description: meta.description,
        type: "article",
        publishedTime: meta.date,
      },
    };
  } catch {
    return {};
  }
}

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default async function TutorialPostPage({ params }: Props) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug("tutorials", slug);
  } catch {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: post.meta.title,
          description: post.meta.description,
        }}
      />
      <article className="mx-auto max-w-3xl px-4 py-12">
        <header className="mb-10">
          <div className="mb-4 flex items-center gap-3">
            <Badge variant="secondary">{post.meta.category}</Badge>
            <span className="text-sm text-muted-foreground">
              {post.meta.readingTime}
            </span>
            <time className="text-sm text-muted-foreground">
              {new Date(post.meta.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {post.meta.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {post.meta.description}
          </p>
        </header>

        <AdUnit
          slot={process.env.NEXT_PUBLIC_ADSENSE_LEADERBOARD_SLOT ?? ""}
          format="horizontal"
          className="mb-8"
        />

        <div className="prose-custom">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>

        <AdUnit
          slot={process.env.NEXT_PUBLIC_ADSENSE_BOTTOM_SLOT ?? ""}
          format="horizontal"
          className="mt-10"
        />
      </article>
    </>
  );
}

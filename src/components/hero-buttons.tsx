"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroButtons() {
  return (
    <div className="flex justify-center gap-4">
      <Link
        href="/tutorials"
        className={cn(buttonVariants({ size: "lg" }), "rounded-full px-8")}
      >
        Start Learning
      </Link>
      <Link
        href="/blog"
        className={cn(
          buttonVariants({ variant: "outline", size: "lg" }),
          "rounded-full px-8"
        )}
      >
        Read the Blog
      </Link>
    </div>
  );
}

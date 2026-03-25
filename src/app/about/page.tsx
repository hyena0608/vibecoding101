import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "VibeCoding101 helps complete beginners build apps with AI — no coding experience needed.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
        About VibeCoding101
      </h1>
      <div className="space-y-4 text-muted-foreground">
        <p>
          VibeCoding101 was created with a simple mission: make software
          creation accessible to everyone, regardless of technical background.
        </p>
        <p>
          <strong className="text-foreground">Vibe coding</strong> is a new way
          to build software where you describe what you want in plain language,
          and AI tools generate the code for you. It&apos;s changing who can
          create digital products — and we&apos;re here to help you get started.
        </p>
        <p>
          Whether you&apos;re an entrepreneur with an app idea, a designer who
          wants to prototype faster, or just curious about AI — our tutorials
          and guides will help you build real things from day one.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-foreground">
          What You&apos;ll Find Here
        </h2>
        <ul className="ml-6 list-disc space-y-2">
          <li>
            <strong className="text-foreground">Blog posts</strong> explaining
            AI coding concepts in plain English
          </li>
          <li>
            <strong className="text-foreground">Step-by-step tutorials</strong>{" "}
            with interactive playgrounds where you can practice
          </li>
          <li>
            <strong className="text-foreground">Tool guides</strong> for
            popular AI coding assistants like Cursor, v0, and Claude Code
          </li>
        </ul>

        <h2 className="pt-4 text-xl font-semibold text-foreground">
          Contact
        </h2>
        <p>
          Have feedback or a tutorial request? Reach out at{" "}
          <a
            href="mailto:hello@vibecoding101.com"
            className="text-primary underline underline-offset-4"
          >
            hello@vibecoding101.com
          </a>
        </p>
      </div>
    </div>
  );
}

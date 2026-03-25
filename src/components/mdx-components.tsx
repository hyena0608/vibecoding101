import { AdUnit } from "./ad-unit";

function Playground({ url, title }: { url: string; title?: string }) {
  return (
    <div className="my-8 overflow-hidden rounded-xl border border-border">
      <div className="bg-muted px-4 py-2 text-sm font-medium text-muted-foreground">
        {title ?? "Interactive Playground"} — Try it yourself!
      </div>
      <iframe
        src={url}
        className="h-[500px] w-full border-0"
        title={title ?? "Code playground"}
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        loading="lazy"
      />
    </div>
  );
}

function AdSlot() {
  return (
    <AdUnit
      slot={process.env.NEXT_PUBLIC_ADSENSE_ARTICLE_SLOT ?? ""}
      format="auto"
      className="my-8"
    />
  );
}

function Callout({
  type = "info",
  children,
}: {
  type?: "tip" | "warning" | "info";
  children: React.ReactNode;
}) {
  const styles = {
    tip: "border-green-300 bg-green-50 text-green-900",
    warning: "border-amber-300 bg-amber-50 text-amber-900",
    info: "border-primary/30 bg-primary/5 text-foreground",
  };
  const icons = { tip: "💡", warning: "⚠️", info: "ℹ️" };

  return (
    <div className={`my-6 rounded-xl border-l-4 p-4 ${styles[type]}`}>
      <span className="mr-2">{icons[type]}</span>
      {children}
    </div>
  );
}

function Step({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-8">
      <div className="mb-3 flex items-center gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
          {number}
        </span>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="ml-11">{children}</div>
    </div>
  );
}

export const mdxComponents = {
  Playground,
  AdSlot,
  Callout,
  Step,
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="mb-6 mt-10 text-3xl font-bold tracking-tight" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="mb-4 mt-8 text-2xl font-semibold tracking-tight" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="mb-3 mt-6 text-xl font-semibold" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mb-4 leading-relaxed text-foreground/90" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="mb-4 ml-6 list-disc space-y-2" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="mb-4 ml-6 list-decimal space-y-2" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-relaxed" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-primary underline underline-offset-4 hover:text-primary/80" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm" {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="mb-4 overflow-x-auto rounded-xl bg-foreground/5 p-4 font-mono text-sm" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="mb-4 border-l-4 border-primary/30 pl-4 italic text-muted-foreground" {...props} />
  ),
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className="my-6 rounded-xl" alt={props.alt ?? ""} {...props} />
  ),
};

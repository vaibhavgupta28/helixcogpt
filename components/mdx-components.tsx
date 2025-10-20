import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const mdxComponents: MDXComponents = {
  h2: ({ className, ...props }) => (
    <h2 className={cn("mt-12 text-3xl font-semibold text-text", className)} {...props} />
  ),
  h3: ({ className, ...props }) => (
    <h3 className={cn("mt-8 text-2xl font-semibold text-text", className)} {...props} />
  ),
  p: ({ className, ...props }) => (
    <p className={cn("mt-4 text-base leading-7 text-muted", className)} {...props} />
  ),
  ul: ({ className, ...props }) => (
    <ul className={cn("mt-4 list-disc space-y-2 pl-6 text-muted", className)} {...props} />
  ),
  ol: ({ className, ...props }) => (
    <ol className={cn("mt-4 list-decimal space-y-2 pl-6 text-muted", className)} {...props} />
  ),
  li: ({ className, ...props }) => (
    <li className={cn("leading-7", className)} {...props} />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={cn(
        "mt-6 border-l-4 border-accent pl-6 italic text-muted",
        className
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }) => (
    <code
      className={cn(
        "rounded bg-surface px-1.5 py-1 font-mono text-sm text-accent",
        className
      )}
      {...props}
    />
  ),
  table: ({ className, ...props }) => (
    <div className="mt-6 overflow-hidden rounded-lg border border-border">
      <table className={cn("w-full border-collapse text-left text-sm", className)} {...props} />
    </div>
  ),
  th: ({ className, ...props }) => (
    <th className={cn("bg-surface px-4 py-3 text-left font-semibold", className)} {...props} />
  ),
  td: ({ className, ...props }) => (
    <td className={cn("bg-[#0b1016] px-4 py-3", className)} {...props} />
  ),
  img: ({ className, alt = "", ...props }) => (
    <Image className={cn("rounded-lg", className)} alt={alt} {...props} />
  )
};

import { z } from "zod";

export const baseFrontmatter = z.object({
  title: z.string().min(1),
  slug: z.string().min(1),
  date: z.coerce.date(),
  read_time_minutes: z.coerce.number().int().positive()
});

export const caseStudySchema = baseFrontmatter.extend({
  summary: z.string().min(1),
  kpis: z.array(z.string().min(1)).nonempty(),
  industries: z.array(z.string().min(1)).nonempty(),
  services: z.array(z.string().min(1)).nonempty()
});

export type CaseStudyFrontmatter = z.infer<typeof caseStudySchema>;

export const insightSchema = baseFrontmatter.extend({
  excerpt: z.string().min(1),
  tags: z.array(z.string().min(1)).nonempty()
});

export type InsightFrontmatter = z.infer<typeof insightSchema>;

export type MDXContent<T> = T & {
  body: string;
};

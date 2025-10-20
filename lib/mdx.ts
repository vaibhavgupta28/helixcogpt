import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { cache } from "react";
import { compileMDX } from "next-mdx-remote/rsc";
import type { ReactNode } from "react";
import { caseStudySchema, insightSchema, type CaseStudyFrontmatter, type InsightFrontmatter } from "./schema";
import { mdxComponents } from "@/components/mdx-components";

export type CaseStudyContent = CaseStudyFrontmatter & { body: ReactNode };
export type InsightContent = InsightFrontmatter & { body: ReactNode };

const CASE_STUDY_DIR = path.join(process.cwd(), "content", "case-studies");
const INSIGHTS_DIR = path.join(process.cwd(), "content", "insights");

async function readMDXFile(filePath: string) {
  const source = await fs.readFile(filePath, "utf8");
  const { content, data } = matter(source);
  return { content, data };
}

async function compileContent<T extends object>(filePath: string, schema: (data: unknown) => T) {
  const { content, data } = await readMDXFile(filePath);
  const parsed = schema(data);

  const { content: compiled } = await compileMDX<{ body: ReactNode }>({
    source: content,
    options: {
      parseFrontmatter: false
    },
    components: mdxComponents
  });

  return {
    ...parsed,
    body: compiled
  } as T & { body: ReactNode };
}

const validateCaseStudy = (data: unknown) => caseStudySchema.parse(data);
const validateInsight = (data: unknown) => insightSchema.parse(data);

export const getAllCaseStudies = cache(async (): Promise<CaseStudyFrontmatter[]> => {
  const files = await fs.readdir(CASE_STUDY_DIR);
  const entries = await Promise.all(
    files
      .filter((file) => file.endsWith(".mdx"))
      .map(async (file) => {
        const filePath = path.join(CASE_STUDY_DIR, file);
        const { data } = await readMDXFile(filePath);
        return caseStudySchema.parse(data);
      })
  );

  return entries.sort((a, b) => b.date.getTime() - a.date.getTime());
});

export const getCaseStudy = cache(async (slug: string): Promise<CaseStudyContent> => {
  const filePath = path.join(CASE_STUDY_DIR, `${slug}.mdx`);
  return compileContent<CaseStudyFrontmatter>(filePath, validateCaseStudy);
});

export const getAllPosts = cache(async (): Promise<InsightFrontmatter[]> => {
  const files = await fs.readdir(INSIGHTS_DIR);
  const entries = await Promise.all(
    files
      .filter((file) => file.endsWith(".mdx"))
      .map(async (file) => {
        const filePath = path.join(INSIGHTS_DIR, file);
        const { data } = await readMDXFile(filePath);
        return insightSchema.parse(data);
      })
  );

  return entries.sort((a, b) => b.date.getTime() - a.date.getTime());
});

export const getPost = cache(async (slug: string): Promise<InsightContent> => {
  const filePath = path.join(INSIGHTS_DIR, `${slug}.mdx`);
  return compileContent<InsightFrontmatter>(filePath, validateInsight);
});

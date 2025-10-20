import type { MetadataRoute } from "next";
import { getAllCaseStudies, getAllPosts } from "@/lib/mdx";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://helix.example";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const caseStudies = await getAllCaseStudies();
  const posts = await getAllPosts();

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/studio",
    "/case-studies",
    "/insights",
    "/careers",
    "/contact",
    "/terms",
    "/privacy",
    "/cookies"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date()
  }));

  const studyRoutes = caseStudies.map((study) => ({
    url: `${baseUrl}/case-studies/${study.slug}`,
    lastModified: study.date
  }));

  const postRoutes = posts.map((post) => ({
    url: `${baseUrl}/insights/${post.slug}`,
    lastModified: post.date
  }));

  return [...staticRoutes, ...studyRoutes, ...postRoutes];
}

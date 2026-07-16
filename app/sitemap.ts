import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/sanity-data";

const siteUrl = "https://klinikpsikologzeynepdogruel.com";

const staticRoutes = [
  "/",
  "/blog",
  "/#hakkimda",
  "/#egitimler",
  "/#calisma-alanlari",
  "/#galeri",
  "/#iletisim",
] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));

  const posts = await getAllPosts();
  const blogPages: MetadataRoute.Sitemap = posts
    .map((post) => post.slug?.current)
    .filter((slug): slug is string => Boolean(slug))
    .map((slug) => ({
      url: `${siteUrl}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));

  return [...staticPages, ...blogPages];
}

import type { Post } from "@/components/ui/BlogCard";
import type { GalleryItem } from "@/components/ui/GalleryGrid";
import { client } from "@/sanity/lib/client";
import {
  recentPostsQuery,
  postsQuery,
  postBySlugQuery,
  galleryQuery,
} from "@/sanity/lib/queries";
import { isSanityConfigured } from "@/sanity/env";

export async function getRecentPosts(): Promise<Post[]> {
  if (!isSanityConfigured || !client) return [];
  try {
    return await client.fetch(recentPostsQuery);
  } catch {
    return [];
  }
}

export async function getAllPosts(): Promise<Post[]> {
  if (!isSanityConfigured || !client) return [];
  try {
    return await client.fetch(postsQuery);
  } catch {
    return [];
  }
}

export async function getPostBySlug(slug: string) {
  if (!isSanityConfigured || !client) return null;
  try {
    return await client.fetch(postBySlugQuery, { slug });
  } catch {
    return null;
  }
}

export async function getGalleryImages(): Promise<GalleryItem[]> {
  if (!isSanityConfigured || !client) return [];
  try {
    return await client.fetch(galleryQuery);
  } catch {
    return [];
  }
}

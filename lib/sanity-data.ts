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

/** İçerik tazeliği öncelikli: her istekte güncel veriyi çek */
const blogFetchOptions = { cache: "no-store" as const };

/** İçerik tazeliği öncelikli: her istekte güncel veriyi çek */
const galleryFetchOptions = { cache: "no-store" as const };

export async function getRecentPosts(): Promise<Post[]> {
  if (!isSanityConfigured || !client) return [];
  try {
    return await client.fetch(recentPostsQuery, {}, blogFetchOptions);
  } catch {
    return [];
  }
}

export async function getAllPosts(): Promise<Post[]> {
  if (!isSanityConfigured || !client) return [];
  try {
    return await client.fetch(postsQuery, {}, blogFetchOptions);
  } catch {
    return [];
  }
}

export async function getPostBySlug(slug: string) {
  if (!isSanityConfigured || !client) return null;
  try {
    return await client.fetch(postBySlugQuery, { slug }, blogFetchOptions);
  } catch {
    return null;
  }
}

export async function getGalleryImages(): Promise<GalleryItem[]> {
  if (!isSanityConfigured || !client) return [];
  try {
    return await client.fetch(galleryQuery, {}, galleryFetchOptions);
  } catch {
    return [];
  }
}

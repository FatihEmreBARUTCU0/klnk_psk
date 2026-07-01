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

/** Blog içeriği için ISR — Sanity'den en geç 60 sn'de bir yenilenir */
const BLOG_REVALIDATE_SECONDS = 60;

const blogFetchOptions = { next: { revalidate: BLOG_REVALIDATE_SECONDS } };

/** Galeri içeriği için ISR — Sanity'den en geç 60 sn'de bir yenilenir */
const GALLERY_REVALIDATE_SECONDS = 60;

const galleryFetchOptions = { next: { revalidate: GALLERY_REVALIDATE_SECONDS } };

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

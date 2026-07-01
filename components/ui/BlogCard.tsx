import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  coverImage?: { asset: { _ref: string } };
  excerpt?: string;
}

interface BlogCardProps {
  post: Post;
}

export function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="premium-card group flex h-full flex-col !p-0">
      <div className="relative aspect-[16/10] overflow-hidden bg-white/20">
        {post.coverImage ? (
          <Image
            src={urlFor(post.coverImage).width(600).height(375).url()}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <p className="text-sm text-muted">Kapak görseli</p>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <time className="text-xs text-muted">{formattedDate}</time>
        <h3 className="mt-2 font-display text-xl text-text">{post.title}</h3>
        {post.excerpt && (
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted line-clamp-3">
            {post.excerpt}
          </p>
        )}
        <Link
          href={`/blog/${post.slug.current}`}
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-text"
        >
          Devamını Oku
          <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  );
}

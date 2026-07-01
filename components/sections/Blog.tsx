import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BlogCard, type Post } from "@/components/ui/BlogCard";
import { FadeIn } from "@/components/ui/FadeIn";

interface BlogSectionProps {
  posts: Post[];
}

export function Blog({ posts }: BlogSectionProps) {
  return (
    <section id="blog" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            title="Blog"
            subtitle="Psikoloji, ruh sağlığı ve kişisel gelişim üzerine yazılar."
          />
          {posts.length > 0 && (
            <FadeIn>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-all duration-300 hover:gap-3 hover:text-text"
              >
                Tüm Yazılar
                <ArrowRight size={14} />
              </Link>
            </FadeIn>
          )}
        </div>

        {posts.length > 0 ? (
          <div className="mt-14 grid gap-8 min-[560px]:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <FadeIn key={post._id} delay={i * 0.08}>
                <BlogCard post={post} />
              </FadeIn>
            ))}
          </div>
        ) : (
          <div className="mt-14 grid gap-6 min-[560px]:grid-cols-2 lg:grid-cols-3">
            {[0, 1, 2].map((idx) => (
              <FadeIn key={idx} delay={0.08 * idx}>
                <div className="premium-card overflow-hidden !p-0">
                  <div className="skeleton-shimmer aspect-[16/10] w-full" />
                  <div className="space-y-3 p-6">
                    <div className="skeleton-shimmer h-3 w-24 rounded-full" />
                    <div className="skeleton-shimmer h-6 w-3/4 rounded-full" />
                    <div className="skeleton-shimmer h-4 w-full rounded-full" />
                    <div className="skeleton-shimmer h-4 w-5/6 rounded-full" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

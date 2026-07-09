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
          <div className="mt-14 rounded-2xl border border-dashed border-white/50 bg-white/20 px-8 py-16 text-center backdrop-blur-sm">
            <p className="font-display text-xl text-text">Henüz blog yazısı yok</p>
          </div>
        )}
      </div>
    </section>
  );
}

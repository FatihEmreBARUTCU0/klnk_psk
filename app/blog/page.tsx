import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { BlogCard } from "@/components/ui/BlogCard";
import { FadeIn } from "@/components/ui/FadeIn";
import { getAllPosts } from "@/lib/sanity-data";
import { siteConfig } from "@/lib/constants";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Blog",
  description: `${siteConfig.fullName} — psikoloji ve ruh sağlığı üzerine yazılar.`,
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      <Navbar />
      <main className="min-h-screen section-padding pt-28">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-text"
            >
              <ArrowLeft size={14} />
              Ana Sayfa
            </Link>
            <h1 className="section-title">Blog</h1>
            <p className="section-subtitle">
              Psikoloji, ruh sağlığı ve kişisel gelişim üzerine yazılar.
            </p>
          </FadeIn>

          {posts.length > 0 ? (
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, i) => (
                <FadeIn key={post._id} delay={i * 0.05}>
                  <BlogCard post={post} />
                </FadeIn>
              ))}
            </div>
          ) : (
            <div className="mt-12 rounded-2xl border border-dashed border-white/50 bg-white/20 px-8 py-16 text-center backdrop-blur-sm">
              <p className="font-display text-xl text-text">
                Henüz blog yazısı yok
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

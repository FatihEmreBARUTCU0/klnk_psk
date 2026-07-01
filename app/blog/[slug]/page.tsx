import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { getPostBySlug, getAllPosts } from "@/lib/sanity-data";
import { urlFor } from "@/sanity/lib/image";
import { siteConfig } from "@/lib/constants";

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug.current }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: "Yazı Bulunamadı" };

  return {
    title: post.title,
    description: post.excerpt || siteConfig.description,
    openGraph: {
      title: post.title,
      description: post.excerpt || siteConfig.description,
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <Navbar />
      <main className="min-h-screen section-padding pt-28">
        <article className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-text"
          >
            <ArrowLeft size={14} />
            Tüm Yazılar
          </Link>

          <time className="text-sm text-muted">{formattedDate}</time>
          <h1 className="mt-2 font-display text-4xl text-text md:text-5xl">
            {post.title}
          </h1>

          {post.coverImage && (
            <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={urlFor(post.coverImage).width(1200).height(675).url()}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <div className="prose-custom mt-10">
            {post.body ? (
              <PortableText
                value={post.body}
                components={{
                  types: {
                    image: ({ value }) =>
                      value?.asset ? (
                        <div className="relative my-8 aspect-[16/10] overflow-hidden rounded-xl">
                          <Image
                            src={urlFor(value).width(800).url()}
                            alt={value.alt || post.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ) : null,
                  },
                  block: {
                    normal: ({ children }) => (
                      <p className="mb-4 text-base leading-relaxed text-muted md:text-lg">
                        {children}
                      </p>
                    ),
                    h2: ({ children }) => (
                      <h2 className="mb-4 mt-8 font-display text-2xl text-text">
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="mb-3 mt-6 font-display text-xl text-text">
                        {children}
                      </h3>
                    ),
                  },
                }}
              />
            ) : (
              <p className="text-muted">İçerik yakında eklenecek.</p>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { CV } from "@/components/sections/CV";
import { Education } from "@/components/sections/Education";
import { Services } from "@/components/sections/Services";
import { Blog } from "@/components/sections/Blog";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";
import { getRecentPosts, getGalleryImages } from "@/lib/sanity-data";

export default async function Home() {
  const [posts, galleryImages] = await Promise.all([
    getRecentPosts(),
    getGalleryImages(),
  ]);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <CV />
        <Education />
        <Services />
        <Blog posts={posts} />
        <Gallery images={galleryImages} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

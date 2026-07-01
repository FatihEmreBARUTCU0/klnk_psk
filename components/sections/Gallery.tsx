import { SectionHeader } from "@/components/ui/SectionHeader";
import { GalleryGrid, type GalleryItem } from "@/components/ui/GalleryGrid";

interface GallerySectionProps {
  images: GalleryItem[];
}

export function Gallery({ images }: GallerySectionProps) {
  return (
    <section id="galeri" className="relative section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          title="Gözümden"
          subtitle="Terapi odasının dışından, günlük hayattan kareler."
        />

        <div className="mt-14">
          <GalleryGrid images={images} />
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

interface GalleryItem {
  src: string;
  alt: string;
  /** Intrinsic pixel dimensions — preserves the natural aspect ratio and
   * prevents layout shift while the photo loads. */
  width: number;
  height: number;
  caption: string;
}

interface GalleryGridProps {
  items: GalleryItem[];
}

/**
 * Responsive masonry-style photo gallery. Photos keep their natural aspect
 * ratio (mixed portrait and landscape) and lazy-load as the user scrolls.
 */
export function GalleryGrid({ items }: GalleryGridProps) {
  return (
    <ul className="columns-1 gap-5 sm:columns-2 lg:columns-3">
      {items.map((item) => (
        <li key={item.src} className="mb-5 break-inside-avoid">
          <figure className="overflow-hidden rounded-lg border border-line bg-card shadow-sm">
            <Image
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="w-full bg-surface"
            />
            <figcaption className="px-4 py-3 text-sm text-ink-secondary">
              {item.caption}
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}

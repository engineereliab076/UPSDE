import { Breadcrumbs } from "@/components/navigation/breadcrumbs";
import Image from "next/image";
import type { EditorialPhoto } from "@/data/editorial";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  /** Single trailing breadcrumb label. Ignored when `breadcrumbItems` is set. */
  breadcrumb?: string;
  /** Full breadcrumb trail (Home is prepended automatically). */
  breadcrumbItems?: { label: string; href?: string }[];
  image?: EditorialPhoto;
}

/** Deep green hero band used at the top of every internal page. */
export function PageHero({ eyebrow, title, intro, breadcrumb, breadcrumbItems, image }: PageHeroProps) {
  const items = breadcrumbItems ?? (breadcrumb ? [{ label: breadcrumb }] : []);
  return (
    <section className="bg-primary-dark text-white">
      <div className={image ? "grid lg:grid-cols-[1.05fr_.95fr]" : "container-site"}>
        <div className={image ? "flex min-h-[27rem] items-center px-5 py-14 sm:px-8 lg:ml-auto lg:w-full lg:max-w-[40rem] lg:px-10 lg:py-20" : "py-14 md:py-20"}>
          <div>
            <Breadcrumbs items={items} onDark />
            {eyebrow && <p className="eyebrow mb-4 text-gold">{eyebrow}</p>}
            <h1 className="max-w-3xl text-5xl font-bold leading-[1.02] md:text-6xl">{title}</h1>
            {intro && <p className="prose-width mt-5 text-base leading-relaxed text-white/78 md:text-lg">{intro}</p>}
          </div>
        </div>
        {image && (
          <figure className="relative min-h-80 overflow-hidden lg:min-h-[31rem]">
            <Image src={image.src} alt={image.alt} fill priority quality={82} sizes="(max-width: 1024px) 100vw, 48vw" className="object-cover" style={{ objectPosition: image.objectPosition ?? "50% 50%" }} />
            <figcaption className="absolute bottom-0 right-0 bg-ink/85 px-4 py-2 text-xs text-white">{image.caption}</figcaption>
          </figure>
        )}
      </div>
    </section>
  );
}

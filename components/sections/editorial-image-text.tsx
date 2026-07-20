import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { EditorialPhoto } from "@/data/editorial";
import { cn } from "@/lib/utils";

interface EditorialImageTextProps {
  eyebrow: string;
  title: string;
  text: string;
  href: string;
  linkLabel: string;
  photo: EditorialPhoto;
  reverse?: boolean;
  dark?: boolean;
}

export function EditorialImageText({
  eyebrow,
  title,
  text,
  href,
  linkLabel,
  photo,
  reverse = false,
  dark = false,
}: EditorialImageTextProps) {
  return (
    <article className={cn("grid lg:grid-cols-12", dark ? "bg-primary-dark text-white" : "bg-card text-ink")}>
      <div className={cn("relative min-h-80 overflow-hidden sm:min-h-96 lg:col-span-7 lg:min-h-[34rem]", reverse && "lg:order-2")}>
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          quality={82}
          sizes="(max-width: 1024px) 100vw, 58vw"
          className="object-cover"
          style={{ objectPosition: photo.objectPosition ?? "50% 50%" }}
        />
        <p className="absolute bottom-0 left-0 bg-ink/85 px-4 py-2 text-xs text-white">
          {photo.caption}
        </p>
      </div>
      <div className={cn("flex items-center px-7 py-12 sm:px-12 lg:col-span-5 lg:px-14", reverse && "lg:order-1")}>
        <div>
          <p className={cn("eyebrow", dark ? "text-gold" : "text-terracotta")}>{eyebrow}</p>
          <h3 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">{title}</h3>
          <p className={cn("mt-5 text-base leading-relaxed md:text-lg", dark ? "text-white/75" : "text-ink-secondary")}>
            {text}
          </p>
          <Link href={href} className={cn("mt-7 text-link", dark && "text-white")}>
            {linkLabel} <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}

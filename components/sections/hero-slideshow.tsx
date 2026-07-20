"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { heroSlides } from "@/data/editorial";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const AUTOPLAY_INTERVAL = 6000;

export function HeroSlideshow() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  const paused = hovered || focused || userPaused || reducedMotion;

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(
      () => setActive((current) => (current + 1) % heroSlides.length),
      AUTOPLAY_INTERVAL,
    );
    return () => window.clearInterval(timer);
  }, [paused]);

  const chooseSlide = (index: number) => {
    setActive((index + heroSlides.length) % heroSlides.length);
    setUserPaused(true);
  };

  return (
    <section
      aria-roledescription="carousel"
      aria-label="UPSDE community work"
      className="relative isolate overflow-hidden bg-primary-dark text-white lg:min-h-[650px]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
    >
      {/*
       * Split hero. On desktop the image panel is pinned to the right edge and
       * spans the full height of the section (~42% width). On tablet/mobile it
       * drops below the text as a full-width band. See heroSlides in
       * data/editorial.ts for why only the high-resolution photos are used here.
       */}

      {/* Text content — kept clear of the right image panel on desktop */}
      <div className="container-site relative z-10 flex flex-col justify-center pb-24 pt-16 md:pt-20 lg:min-h-[650px] lg:pb-0 lg:pt-0">
        <div className="lg:max-w-[56%] lg:pr-8">
          <p className="eyebrow mb-5 text-gold">Tanzanian NGO · Mwanza</p>
          <h1 className="max-w-2xl text-5xl font-bold leading-[0.98] sm:text-6xl lg:text-7xl">
            Restoring dignity. Supporting vulnerable communities.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/86 md:text-xl">
            UPSDE works with children, families, women, youth and people with
            disabilities through counselling, education, advocacy and practical
            community support.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/what-we-do/our-work" variant="onDarkSolid" size="lg">
              Explore Our Work
            </ButtonLink>
            <ButtonLink href="/get-involved#support" variant="onDark" size="lg">
              Support UPSDE
            </ButtonLink>
          </div>
        </div>
      </div>

      {/* Image panel: full-width band on mobile/tablet, right column on desktop */}
      <div
        aria-live="off"
        className="relative h-[280px] w-full overflow-hidden sm:h-[360px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[42%]"
      >
        {heroSlides.map((slide, index) => (
          <div
            key={slide.src}
            className="hero-slide absolute inset-0"
            data-active={active === index}
            aria-hidden={active !== index}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              quality={85}
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
              style={{ objectPosition: slide.objectPosition }}
            />
          </div>
        ))}
        {/* Soft blend into the dark text side on desktop */}
        <div className="pointer-events-none absolute inset-0 hidden lg:block lg:bg-[linear-gradient(90deg,rgba(16,54,43,.9)_0%,rgba(16,54,43,.25)_18%,rgba(16,54,43,0)_42%)]" />
      </div>

      {/* Slideshow controls */}
      <div className="container-site absolute inset-x-0 bottom-5 z-20 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2" role="group" aria-label="Choose a slide">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => chooseSlide(index)}
              aria-label={`Show slide ${index + 1}: ${slide.caption}`}
              aria-current={active === index ? "true" : undefined}
              className={cn(
                "h-3 min-w-3 rounded-full border border-white transition-[width,background-color]",
                active === index ? "w-9 bg-white" : "w-3 bg-transparent hover:bg-white/45",
              )}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => chooseSlide(active - 1)}
            aria-label="Previous slide"
            className="flex h-11 w-11 items-center justify-center border border-white/45 bg-primary-dark/55 text-white hover:bg-white hover:text-primary"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => setUserPaused((value) => !value)}
            aria-label={
              reducedMotion
                ? "Autoplay disabled because reduced motion is preferred"
                : userPaused
                  ? "Resume slideshow"
                  : "Pause slideshow"
            }
            disabled={reducedMotion}
            className="flex h-11 w-11 items-center justify-center border border-white/45 bg-primary-dark/55 text-white hover:bg-white hover:text-primary"
          >
            {userPaused || reducedMotion ? (
              <Play className="h-4.5 w-4.5" aria-hidden="true" />
            ) : (
              <Pause className="h-4.5 w-4.5" aria-hidden="true" />
            )}
          </button>
          <button
            type="button"
            onClick={() => chooseSlide(active + 1)}
            aria-label="Next slide"
            className="flex h-11 w-11 items-center justify-center border border-white/45 bg-primary-dark/55 text-white hover:bg-white hover:text-primary"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}

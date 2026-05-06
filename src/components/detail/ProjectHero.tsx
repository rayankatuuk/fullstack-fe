"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Badge from "@/components/ui/Badge";
import Icon from "@/components/ui/Icon";
import type { ProjectDetail } from "@/data/projects";

type ProjectHeroProps = {
  title: string;
  detail: ProjectDetail;
};

export default function ProjectHero({ title, detail }: ProjectHeroProps) {
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const gallery = detail.heroGallery ?? [];

  useEffect(() => {
    if (!galleryRef.current || gallery.length === 0) return;
    const node = galleryRef.current;

    const updateIndex = () => {
      const slideWidth = node.clientWidth;
      if (!slideWidth) return;
      const index = Math.round(node.scrollLeft / slideWidth);
      setActiveIndex(Math.max(0, Math.min(index, gallery.length - 1)));
    };

    updateIndex();
    node.addEventListener("scroll", updateIndex, { passive: true });
    return () => node.removeEventListener("scroll", updateIndex);
  }, [gallery.length]);

  const scrollToIndex = (index: number) => {
    if (!galleryRef.current) return;
    const node = galleryRef.current;
    const slideWidth = node.clientWidth;
    node.scrollTo({ left: slideWidth * index, behavior: "smooth" });
  };

  return (
    <section className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
      <div className="space-y-6">
        <Badge
          label={detail.statusLabel}
          variant="pill"
          icon={<Icon name="verified" className="text-[16px]" />}
        />
        <h1 className="text-4xl font-extrabold leading-tight text-on-background sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-on-surface-variant sm:text-lg">
          {detail.summary}
        </p>
        <div className="flex flex-wrap gap-3 pt-2 text-sm">
          <div className="flex items-center gap-2 rounded-lg border border-surface-variant bg-surface-container px-4 py-2">
            <Icon name="code" className="text-tertiary" />
            <span className="font-medium text-on-surface">{detail.roleLabel}</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-surface-variant bg-surface-container px-4 py-2">
            <Icon name="schedule" className="text-tertiary" />
            <span className="font-medium text-on-surface">{detail.timeline}</span>
          </div>
        </div>
      </div>
      <div className="relative w-full overflow-hidden rounded-2xl border border-surface-variant bg-surface-container shadow-2xl">
        {gallery.length > 0 ? (
          <div className="relative">
            <div
              ref={galleryRef}
              className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth"
              aria-label={`${title} gallery`}
            >
              {gallery.map((image) => (
                <div
                  key={image.src}
                  className="relative aspect-4/3 w-full shrink-0 snap-center overflow-hidden lg:aspect-5/4"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent" />
                </div>
              ))}
            </div>
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-surface-variant bg-background/70 px-3 py-1.5 backdrop-blur">
              {gallery.map((_, index) => (
                <button
                  key={`dot-${index}`}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => scrollToIndex(index)}
                  className={`h-2 w-2 rounded-full transition ${
                    index === activeIndex
                      ? "bg-tertiary"
                      : "bg-on-surface-variant/40 hover:bg-on-surface-variant/70"
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="relative aspect-4/3 w-full lg:aspect-5/4">
            <Image
              src={detail.heroImage.src}
              alt={detail.heroImage.alt}
              fill
              className="object-cover opacity-85"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />
          </div>
        )}
      </div>
    </section>
  );
}

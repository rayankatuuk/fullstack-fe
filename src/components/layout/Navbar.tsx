"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { NavLink } from "@/data/site";
import ButtonLink, { ButtonVariant } from "@/components/ui/ButtonLink";
import Icon from "@/components/ui/Icon";

type NavbarProps = {
  brand: string;
  links: NavLink[];
  resumeLink: { label: string; href: string; icon?: string };
  resumeVariant?: ButtonVariant;
};

export default function Navbar({
  brand,
  links,
  resumeLink,
  resumeVariant = "outline",
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string>(links[0]?.href ?? "/#home");

  const sectionLinks = useMemo(
    () =>
      links
        .map((link) => ({
          ...link,
          hash: link.href.includes("#") ? link.href.split("#")[1] : null,
        }))
        .filter((link) => link.hash),
    [links]
  );

  const normalizeHref = (href: string) =>
    href.startsWith("#") ? `/${href}` : href;

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const updateFromHash = () => {
      const hash = window.location.hash;
      if (hash) {
        setActiveHref(`/#${hash.replace("#", "")}`);
      } else {
        setActiveHref("/#home");
      }
    };

    updateFromHash();
    window.addEventListener("hashchange", updateFromHash);

    const observers: IntersectionObserver[] = [];

    if (sectionLinks.length > 0) {
      const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

          if (visible.length > 0) {
            const id = visible[0].target.getAttribute("id");
            if (id) {
              setActiveHref(`/#${id}`);
            }
          }
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: [0.1, 0.25, 0.5] }
      );

      sectionLinks.forEach((link) => {
        if (link.hash) {
          const el = document.getElementById(link.hash);
          if (el) {
            observer.observe(el);
          }
        }
      });

      observers.push(observer);
    }

    return () => {
      window.removeEventListener("hashchange", updateFromHash);
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sectionLinks]);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-gray-800/50 bg-[#141313]/90 backdrop-blur-md">
      <div className="flex h-20 items-center justify-between gap-3 px-6 md:px-12 lg:px-24">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2 hover:opacity-80 transition-opacity"
          onClick={closeMenu}
        >
          <div className="relative h-20 w-20 shrink-0 flex items-center justify-center -ml-4 mt-2">
            <Image
              src="/images/logo-rk.png"
              alt="Rayan Katuuk logo"
              fill
              sizes="100px"
              className="object-contain"
              priority
            />
          </div>
          <div className="flex items-center text-lg font-bold text-gray-100 tracking-wide leading-none">
            {brand}
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={
                normalizeHref(link.href) === activeHref
                  ? "border-b-2 border-[#b8860b] pb-2 text-[#b8860b] text-sm font-medium"
                  : "border-b-2 border-transparent pb-2 text-gray-400 hover:text-gray-200 text-sm font-medium transition-colors"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <ButtonLink
            href={resumeLink.href}
            label={resumeLink.label}
            variant={resumeVariant}
            icon={resumeLink.icon ? <Icon name={resumeLink.icon} className="text-lg" /> : undefined}
            className="px-5 py-2.5 text-sm border-gray-600 text-gray-200 hover:bg-gray-800"
          />
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative z-20 flex h-10 w-10 shrink-0 items-center justify-center self-center rounded-lg border border-yellow-600 bg-[#1a1a1a] text-gray-200 hover:bg-gray-800 md:hidden"
        >
          <Icon name={isOpen ? "close" : "menu"} className="text-xl" />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={
          isOpen
            ? "md:hidden border-t border-gray-800/60 bg-[#141313]/95 px-6 pb-6 pt-4"
            : "md:hidden hidden"
        }
      >
        <div className="flex flex-col gap-3">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              className={
                normalizeHref(link.href) === activeHref
                  ? "text-[#b8860b] text-sm font-semibold"
                  : "text-gray-300 text-sm font-medium hover:text-gray-100 transition-colors"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="mt-5">
          <ButtonLink
            href={resumeLink.href}
            label={resumeLink.label}
            variant={resumeVariant}
            icon={resumeLink.icon ? <Icon name={resumeLink.icon} className="text-lg" /> : undefined}
            className="w-full justify-center px-5 py-2.5 text-sm border-gray-600 text-gray-200 hover:bg-gray-800"
          />
        </div>
      </div>
    </nav>
  );
}

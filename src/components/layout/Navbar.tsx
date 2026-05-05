"use client";

import { useState } from "react";
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

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-gray-800/50 bg-[#141313]/90 backdrop-blur-md">
      <div className="flex h-20 items-center justify-between px-6 md:px-12 lg:px-24">
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          onClick={closeMenu}
        >
          <div className="relative h-15 w-15">
          <Image
            src="/images/logo-rk.png"
            alt="Rayan Katuuk logo"
            fill
            sizes="36px"
            className="object-contain"
            priority
          />
        </div>
          <div className="text-lg font-bold text-gray-100 tracking-wide leading-none">
            {brand}
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={
                link.isActive
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
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-yellow-600 bg-[#1a1a1a] text-gray-200 hover:bg-gray-800 md:hidden"
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
                link.isActive
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

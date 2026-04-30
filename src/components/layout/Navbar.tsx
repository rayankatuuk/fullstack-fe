import Link from "next/link";
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
  return (
    <nav className="fixed left-0 top-0 z-50 flex h-20 w-full items-center justify-between border-b border-gray-800/50 bg-[#141313]/90 px-6 backdrop-blur-md md:px-12 lg:px-24">
      <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
        <div className="text-[#b8860b] mb-1">
          {/* Logo icon approximation */}
          <Icon name="architecture" className="text-3xl" />
        </div>
        <div className="text-xl font-bold text-gray-100 tracking-wide">
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
      <ButtonLink
        href={resumeLink.href}
        label={resumeLink.label}
        variant={resumeVariant}
        icon={resumeLink.icon ? <Icon name={resumeLink.icon} className="text-lg" /> : undefined}
        className="px-5 py-2.5 text-sm border-gray-600 text-gray-200 hover:bg-gray-800"
      />
    </nav>
  );
}

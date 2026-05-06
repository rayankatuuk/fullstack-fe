import type { SocialLink } from "@/data/site";
import Icon from "@/components/ui/Icon";

type FooterProps = {
  brand?: string;
  copyright: string;
  socialLinks: SocialLink[];
};

export default function Footer({ copyright, socialLinks }: FooterProps) {
  return (
    <footer className="mt-auto w-full border-t border-gray-200 bg-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-6 px-6 py-8 text-sm md:flex-row md:px-12 lg:px-24">
        
        <div className="text-gray-500 font-medium">{copyright}</div>
        
        {socialLinks.length > 0 && (
            <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
                <a
                key={link.label}
                href={link.href}
                className="text-gray-400 transition-colors hover:text-[#b8860b]"
                >
                {link.icon ? <Icon name={link.icon} className="text-xl" /> : link.label}
                </a>
            ))}
            </div>
        )}


      </div>
    </footer>
  );
}

import { site } from "@/data/site";
import Icon from "@/components/ui/Icon";
import Image from "next/image";
import Link from "next/link";

const techLogoMap: Record<string, { src: string; alt: string; variant: "square" | "wide" }> = {
    JavaScript: {
        src: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
        alt: "JavaScript logo",
        variant: "square",
    },
    TypeScript: {
        src: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg",
        alt: "TypeScript logo",
        variant: "square",
    },
    React: {
        src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        alt: "React logo",
        variant: "square",
    },
    "Next.js": {
        src: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
        alt: "Next.js logo",
        variant: "wide",
    },
    "Node.js": {
        src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
        alt: "Node.js logo",
        variant: "wide",
    },
    "Express.js": {
        src: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
        alt: "Express.js logo",
        variant: "wide",
    },
    PostgreSQL: {
        src: "https://upload.wikimedia.org/wikipedia/commons/f/f4/R_%281%29ds.png",
        alt: "PostgreSQL logo",
        variant: "square",
    },
    MongoDB: {
        src: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Mongodb-ar21.svg",
        alt: "MongoDB logo",
        variant: "wide",
    },
    Docker: {
        src: "https://upload.wikimedia.org/wikipedia/commons/8/88/Docker_logo_%28until_2025%29.png",
        alt: "Docker logo",
        variant: "wide",
    },
};

export default function AboutSection() {
    return (
        <section id="about" className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Me */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-6">
                <h3 className="text-xl font-bold text-gray-900 border-b pb-4">About Me</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                    {site.about.description}
                </p>
                <div className="flex flex-col gap-3 mt-auto">
                    {site.about.info.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-sm text-gray-600">
                            <Icon name={item.icon} className="text-gray-400" />
                            {item.label.includes(".com") ? (
                                <Link href={`https://${item.label}`} className="hover:text-blue-600 transition-colors">
                                    {item.label}
                                </Link>
                            ) : (
                                <span>{item.label}</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-6">
                <h3 className="text-xl font-bold text-gray-900 border-b pb-4">Tech Stack</h3>
                <div className="grid grid-cols-3 gap-4">
                    {site.techStack.map((tech, idx) => {
                        const logo = techLogoMap[tech.name];

                        return (
                            <div key={idx} className="flex flex-col items-center justify-center p-3 rounded-xl border border-gray-100 bg-gray-50 hover:bg-gray-100 transition-colors text-center gap-2">
                                {logo ? (
                                    <div
                                        className={
                                            logo.variant === "wide"
                                                ? "relative h-7 w-16"
                                                : "relative h-8 w-8"
                                        }
                                    >
                                        <Image
                                            src={logo.src}
                                            alt={logo.alt}
                                            fill
                                            sizes="64px"
                                            className="object-contain"
                                        />
                                    </div>
                                ) : (
                                    <span className="text-2xl font-extrabold text-[#b8860b]">{tech.name.substring(0, 2).toUpperCase()}</span>
                                )}
                                <span className="text-xs font-medium text-gray-700 truncate w-full">{tech.name}</span>
                            </div>
                        );
                    })}
                </div>
                <div className="mt-auto pt-4 flex">
                    <Link href="/#skills" className="text-sm font-medium text-gray-900 hover:text-blue-600 flex items-center gap-1 transition-colors">
                        View All Skills <span className="text-lg">→</span>
                    </Link>
                </div>
            </div>

            {/* Core Expertise */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-6">
                <h3 className="text-xl font-bold text-gray-900 border-b pb-4">Core Expertise</h3>
                <div className="flex flex-col gap-5">
                    {site.coreExpertise.map((item, idx) => (
                        <div key={idx} className="flex gap-4 items-start">
                            <div className="bg-[#fdf0d5] text-[#b8860b] p-2 rounded-lg mt-1 shrink-0">
                                <Icon name={item.icon} className="text-lg" />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm text-gray-900 mb-1">{item.title}</h4>
                                <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
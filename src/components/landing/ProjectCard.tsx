import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  featuresLabel: string;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col h-full overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-[0_2px_15px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-gray-100 shrink-0">
        <Image
          src={project.cardImage.src}
          alt={project.cardImage.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 truncate">
          {project.title}
        </h3>
        
        <p className="line-clamp-2 text-sm text-gray-600 mb-6 flex-1">
          {project.summary}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span key={tech} className="px-2 py-1 bg-gray-50 border border-gray-100 text-gray-600 text-[10px] rounded font-medium uppercase tracking-wider">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center gap-2 text-sm font-semibold text-[#b8860b] group-hover:text-[#d4a835] transition-colors">
          View Project <span className="transform transition-transform group-hover:translate-x-1">→</span>
        </div>
      </div>
    </Link>
  );
}

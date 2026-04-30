import type { Project } from "@/data/projects";
import ProjectCard from "@/components/landing/ProjectCard";
import Link from "next/link";

type ProjectGridProps = {
  title: string;
  featuresLabel: string;
  projects: Project[];
};

export default function ProjectGrid({
  title,
  featuresLabel,
  projects,
}: ProjectGridProps) {
  return (
    <section id="projects" className="pt-8">
      <div className="flex justify-between items-center mb-10 border-b border-gray-200 pb-4">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <Link href="/#projects" className="text-sm font-medium text-gray-900 hover:text-blue-600 flex items-center gap-1 transition-colors">
              View All Projects <span className="text-lg">→</span>
          </Link>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.slice(0, 3).map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            featuresLabel={featuresLabel}
          />
        ))}
      </div>
    </section>
  );
}

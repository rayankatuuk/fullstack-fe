import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ProjectHero from "@/components/detail/ProjectHero";
import OverviewImpact from "@/components/detail/OverviewImpact";
import FeatureGrid from "@/components/detail/FeatureGrid";
import TechnicalStack from "@/components/detail/TechnicalStack";
import { getProjectBySlug, getProjectSlugs } from "@/data/projects";
import { site } from "@/data/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | ${site.name}`,
    description: project.detail.summary,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-background text-on-background">
      <Navbar
        brand={site.name}
        links={site.navLinks}
        resumeLink={site.resumeLink}
        resumeVariant="primary"
      />
      <main className="mx-auto w-full max-w-7xl flex-1 space-y-20 px-6 pb-24 pt-24 md:px-8">
        <ProjectHero title={project.title} detail={project.detail} />
        <OverviewImpact
          title={site.sections.overview}
          overview={project.detail.overview}
          impact={project.detail.impact}
          scale={project.detail.scale}
        />
        <FeatureGrid
          title={site.sections.keyFeatures}
          features={project.detail.features}
        />
        <section className="mx-auto max-w-7xl px-0">
          <TechnicalStack
            title={site.sections.technicalStack}
            stack={project.detail.technicalStack}
          />
        </section>
      </main>
      <Footer
        copyright={site.footer.copyright}
        socialLinks={site.footer.socialLinks}
      />
    </div>
  );
}

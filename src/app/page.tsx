import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/landing/Hero";
import ProjectGrid from "@/components/landing/ProjectGrid";
import AboutSection from "@/components/landing/AboutSection";
import ExperienceSection from "@/components/landing/ExperienceSection";
import CTASection from "@/components/landing/CTASection";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar
        brand={site.name}
        links={site.navLinks}
        resumeLink={site.resumeLink}
      />
      
      {/* Dark Section - Hero */}
      <section id="home" className="relative w-full bg-[#141313] text-gray-100 pb-0">
        <div className="mesh-bg absolute inset-0 opacity-40"></div>
        <div className="w-full relative z-10 flex flex-col h-full">
          {/* Content Container with padding */}
          <div className="px-6 md:px-12 lg:px-24 pt-24 pb-0">
            <Hero
              availabilityLabel={site.availabilityLabel}
              headline={site.hero.headline}
              highlight={site.hero.highlight}
              headlineSuffix={site.hero.headlineSuffix}
              description={site.hero.description}
              primaryCta={site.hero.primaryCta}
              secondaryCta={site.hero.secondaryCta}
            />
          </div>
        </div>
        {/* Border separator - bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#b8860b]"></div>
      </section>

      {/* Light Section - Main Content */}
      <main className="w-full flex-1 bg-[#f8fafc] text-gray-900 pb-12 pt-20">
        <div className="w-full px-6 md:px-12 lg:px-24 relative z-20 flex flex-col">
          <AboutSection />
          
          <ExperienceSection />
          
          <ProjectGrid
            title={site.sections.selectedWorks}
            featuresLabel={site.sections.keyFeatures}
            projects={projects}
          />
          
          <CTASection />
        </div>
      </main>

      <Footer
        brand={site.footer.brand}
        copyright={site.footer.copyright}
        socialLinks={site.footer.socialLinks}
      />
    </div>
  );
}

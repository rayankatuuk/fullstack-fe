import Image from "next/image";
import type { ProjectFeature } from "@/data/projects";
import Icon from "@/components/ui/Icon";

type FeatureGridProps = {
  title: string;
  features: ProjectFeature[];
};

const layoutClassMap: Record<ProjectFeature["layout"], string> = {
  tall: "md:col-span-8",
  compact: "md:col-span-4",
  wide: "md:col-span-12",
};

export default function FeatureGrid({ title, features }: FeatureGridProps) {
  return (
    <section className="mx-auto mb-24 max-w-7xl px-6 md:px-8">
      <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold text-on-background">
        <Icon name="star" className="text-3xl text-tertiary" />
        {title}
      </h2>
      <div className="grid auto-rows-[250px] grid-cols-1 gap-6 md:grid-cols-12">
        {features.map((feature) => (
          <div
            key={feature.title}
            className={`${layoutClassMap[feature.layout]} relative overflow-hidden rounded-lg border border-surface-variant bg-surface-container p-8`}
          >
            {feature.image ? (
              <div className="absolute inset-0 opacity-10 transition-opacity duration-500 hover:opacity-20">
                <Image
                  src={feature.image.src}
                  alt={feature.image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            ) : null}
            <div className="relative z-10 flex h-full flex-col justify-end">
              <div className="mb-auto">
                <Icon name={feature.icon} className="mb-4 text-4xl text-tertiary" />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-on-background">
                {feature.title}
              </h3>
              <p className="max-w-md text-on-surface-variant">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

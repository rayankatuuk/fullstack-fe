import Image from "next/image";
import Badge from "@/components/ui/Badge";
import Icon from "@/components/ui/Icon";
import type { ProjectDetail } from "@/data/projects";

type ProjectHeroProps = {
  title: string;
  detail: ProjectDetail;
};

export default function ProjectHero({ title, detail }: ProjectHeroProps) {
  return (
    <section className="mx-auto mb-24 grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:px-8 lg:grid-cols-2">
      <div className="space-y-6">
        <Badge
          label={detail.statusLabel}
          variant="pill"
          icon={<Icon name="verified" className="text-[16px]" />}
        />
        <h1 className="text-5xl font-extrabold leading-tight text-on-background md:text-7xl">
          {title}
        </h1>
        <p className="max-w-lg text-xl leading-relaxed text-on-surface-variant">
          {detail.summary}
        </p>
        <div className="flex flex-wrap gap-4 pt-4 text-sm">
          <div className="flex items-center gap-2 rounded-xs border border-surface-variant bg-surface-container px-4 py-2">
            <Icon name="code" className="text-tertiary" />
            <span className="font-medium text-on-surface">{detail.roleLabel}</span>
          </div>
          <div className="flex items-center gap-2 rounded-xs border border-surface-variant bg-surface-container px-4 py-2">
            <Icon name="schedule" className="text-tertiary" />
            <span className="font-medium text-on-surface">{detail.timeline}</span>
          </div>
        </div>
      </div>
      <div className="relative h-100 overflow-hidden rounded-lg border border-surface-variant bg-surface-container shadow-2xl lg:h-150">
        <Image
          src={detail.heroImage.src}
          alt={detail.heroImage.alt}
          fill
          className="object-cover opacity-80"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />
      </div>
    </section>
  );
}

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
    <section className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
      <div className="space-y-6">
        <Badge
          label={detail.statusLabel}
          variant="pill"
          icon={<Icon name="verified" className="text-[16px]" />}
        />
        <h1 className="text-4xl font-extrabold leading-tight text-on-background sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-on-surface-variant sm:text-lg">
          {detail.summary}
        </p>
        <div className="flex flex-wrap gap-3 pt-2 text-sm">
          <div className="flex items-center gap-2 rounded-lg border border-surface-variant bg-surface-container px-4 py-2">
            <Icon name="code" className="text-tertiary" />
            <span className="font-medium text-on-surface">{detail.roleLabel}</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-surface-variant bg-surface-container px-4 py-2">
            <Icon name="schedule" className="text-tertiary" />
            <span className="font-medium text-on-surface">{detail.timeline}</span>
          </div>
        </div>
      </div>
      <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-surface-variant bg-surface-container shadow-2xl lg:aspect-5/4">
        <Image
          src={detail.heroImage.src}
          alt={detail.heroImage.alt}
          fill
          className="object-cover opacity-85"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />
      </div>
    </section>
  );
}

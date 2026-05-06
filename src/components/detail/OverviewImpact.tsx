import type { ProjectDetail } from "@/data/projects";
import Icon from "@/components/ui/Icon";

type OverviewImpactProps = {
  title: string;
  overview: ProjectDetail["overview"];
  impact: ProjectDetail["impact"];
  scale: ProjectDetail["scale"];
};

export default function OverviewImpact({
  title,
  overview,
  impact,
  scale,
}: OverviewImpactProps) {
  const cards = [impact, scale];

  return (
    <section className="mx-auto w-full max-w-7xl px-0">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
        <div className="space-y-6 rounded-2xl border border-surface-variant bg-surface-container-low p-8 lg:col-span-2">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-on-background sm:text-3xl">
            <Icon name="info" className="text-tertiary" />
            {title}
          </h2>
          <p className="text-base leading-relaxed text-on-surface-variant sm:text-lg">
            {overview}
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {cards.map((card) => (
            <div
              key={card.label}
              className="flex flex-col justify-center rounded-2xl border border-surface-variant bg-surface-container p-6"
            >
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-on-surface-variant">
                {card.label}
              </h3>
              <div className="mb-1 text-4xl font-extrabold text-tertiary">
                {card.value}
              </div>
              <p className="text-sm text-on-surface">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

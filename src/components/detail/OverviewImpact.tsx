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
    <section className="mx-auto mb-24 max-w-7xl px-6 md:px-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="space-y-6 rounded-lg border border-surface-variant bg-surface-container-low p-8 md:col-span-2">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-on-background">
            <Icon name="info" className="text-tertiary" />
            {title}
          </h2>
          <p className="text-lg leading-relaxed text-on-surface-variant">
            {overview}
          </p>
        </div>
        <div className="space-y-4">
          {cards.map((card) => (
            <div
              key={card.label}
              className="flex h-full flex-col justify-center rounded-lg border border-surface-variant bg-surface-container p-6"
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

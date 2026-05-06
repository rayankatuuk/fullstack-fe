import type { ProjectStackItem } from "@/data/projects";
import Icon from "@/components/ui/Icon";

type TechnicalStackProps = {
  title: string;
  stack: ProjectStackItem[];
};

export default function TechnicalStack({ title, stack }: TechnicalStackProps) {
  return (
    <div className="space-y-6">
      <h2 className="flex items-center gap-3 text-2xl font-bold text-on-background sm:text-3xl">
        <Icon name="architecture" className="text-3xl text-tertiary" />
        {title}
      </h2>
      <ul className="space-y-4">
        {stack.map((item) => (
          <li
            key={item.title}
            className="flex items-start gap-4 rounded-2xl border border-surface-variant bg-surface-container p-5"
          >
            <div className="rounded-xl bg-surface-container-high p-2.5 text-tertiary">
              <Icon name={item.icon} />
            </div>
            <div>
              <h4 className="font-bold text-on-background">{item.title}</h4>
              <p className="mt-1 text-sm text-on-surface-variant">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

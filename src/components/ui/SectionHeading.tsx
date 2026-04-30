type SectionHeadingProps = {
  title: string;
};

export default function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <div className="flex items-center justify-between gap-8">
      <h2 className="text-3xl font-bold text-on-surface">{title}</h2>
      <div className="h-px flex-1 bg-surface-container-high" />
    </div>
  );
}

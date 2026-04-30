type TagProps = {
  label: string;
};

export default function Tag({ label }: TagProps) {
  return (
    <span className="rounded border border-outline-variant bg-surface-container-high px-2 py-1 text-xs text-on-surface">
      {label}
    </span>
  );
}

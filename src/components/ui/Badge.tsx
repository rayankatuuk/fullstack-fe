type BadgeProps = {
  label: string;
  variant?: "status" | "pill";
  icon?: React.ReactNode;
  className?: string; // Menambahkan support className
};

export default function Badge({ label, variant = "pill", icon, className }: BadgeProps) {
  const defaultClasses =
    variant === "status"
      ? "inline-flex items-center gap-2 rounded-full border border-tertiary/20 bg-tertiary-container/30 px-3 py-1 text-sm font-medium text-tertiary"
      : "inline-flex items-center gap-2 rounded-full border border-outline-variant bg-surface-container-high px-3 py-1 text-xs font-semibold uppercase tracking-wider text-tertiary";

  const finalClasses = className ? className : defaultClasses;

  return (
    <div className={`inline-flex items-center rounded-full ${finalClasses}`}>
      {icon}
      <span>{label}</span>
    </div>
  );
}

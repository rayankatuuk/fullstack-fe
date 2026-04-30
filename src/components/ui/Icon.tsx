type IconProps = {
  name: string;
  className?: string;
  decorative?: boolean;
};

export default function Icon({ name, className, decorative = true }: IconProps) {
  return (
    <span
      className={className ? `material-symbols-outlined ${className}` : "material-symbols-outlined"}
      aria-hidden={decorative ? true : undefined}
    >
      {name}
    </span>
  );
}

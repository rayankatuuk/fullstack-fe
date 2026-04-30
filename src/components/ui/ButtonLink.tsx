import Link from "next/link";

export type ButtonVariant = "primary" | "outline" | "ghost";

type ButtonLinkProps = {
  href: string;
  label: string;
  icon?: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-colors";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-on-primary hover:bg-primary-fixed-dim active:scale-[0.99]",
  outline:
    "border border-outline-variant bg-surface-container-high text-on-surface hover:bg-surface-container-highest",
  ghost:
    "border border-outline-variant text-on-surface hover:bg-surface-container-high",
};

const isExternalLink = (href: string) => href.startsWith("http");

export default function ButtonLink({
  href,
  label,
  icon,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  const classes = [baseStyles, variantStyles[variant], className]
    .filter(Boolean)
    .join(" ");

  if (isExternalLink(href)) {
    return (
      <a className={classes} href={href} rel="noreferrer" target="_blank">
        {label}
        {icon}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {label}
      {icon}
    </Link>
  );
}

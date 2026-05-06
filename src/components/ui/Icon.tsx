import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ArrowLeftRight,
  ArrowRight,
  BadgeCheck,
  Braces,
  Building2,
  CircleHelp,
  Clock,
  Code,
  CreditCard,
  Database,
  Download,
  GitBranch,
  Globe,
  Link as LinkIcon,
  Mail,
  MapPin,
  Menu,
  Network,
  Phone,
  PlaneTakeoff,
  Rocket,
  Settings,
  Shield,
  ShieldCheck,
  Smile,
  Star,
  X,
  ZapOff,
} from "lucide-react";

type IconProps = {
  name: string;
  className?: string;
  decorative?: boolean;
};

const iconMap: Record<string, LucideIcon> = {
  download: Download,
  arrow_right_alt: ArrowRight,
  code: Code,
  star: Star,
  sentiment_satisfied: Smile,
  close: X,
  menu: Menu,
  info: CircleHelp,
  verified: BadgeCheck,
  schedule: Clock,
  location_on: MapPin,
  mail: Mail,
  call: Phone,
  link: LinkIcon,
  architecture: Network,
  settings_suggest: Settings,
  web: Globe,
  database: Database,
  rocket_launch: Rocket,
  account_tree: GitBranch,
  payments: CreditCard,
  admin_panel_settings: Shield,
  data_object: Braces,
  security: ShieldCheck,
  flight_takeoff: PlaneTakeoff,
  offline_bolt: ZapOff,
  sync_alt: ArrowLeftRight,
  monitoring: Activity,
  javascript: Code,
  typescript: Code,
  react: Code,
  nextjs: Globe,
  nodejs: Code,
  express: Code,
  postgresql: Database,
  mongodb: Database,
  docker: Code,
  tokopedia: Building2,
  traveloka: Building2,
  gojek: Building2,
  bukalapak: Building2,
  blibli: Building2,
};

export default function Icon({ name, className, decorative = true }: IconProps) {
  const IconComponent = iconMap[name] ?? CircleHelp;
  const classes = className ? `h-[1em] w-[1em] ${className}` : "h-[1em] w-[1em]";

  return (
    <IconComponent
      className={classes}
      aria-hidden={decorative ? true : undefined}
      aria-label={!decorative ? name : undefined}
    />
  );
}

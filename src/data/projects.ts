export type ProjectFeature = {
  title: string;
  description: string;
  icon: string;
  image?: {
    src: string;
    alt: string;
  };
  layout: "wide" | "tall" | "compact";
};

export type ProjectStackItem = {
  title: string;
  description: string;
  icon: string;
};

export type ProjectImpact = {
  label: string;
  value: string;
  description: string;
};

export type ProjectDetail = {
  statusLabel: string;
  summary: string;
  roleLabel: string;
  timeline: string;
  heroImage: {
    src: string;
    alt: string;
  };
  heroGallery?: Array<{
    src: string;
    alt: string;
  }>;
  overview: string;
  impact: ProjectImpact;
  scale: ProjectImpact;
  features: ProjectFeature[];
  technicalStack: ProjectStackItem[];
  codePreview: {
    fileName: string;
    language: string;
    code: string;
  };
};

export type Project = {
  slug: string;
  title: string;
  roleLabel: string;
  roleDescription: string;
  summary: string;
  keyFeatures: string[];
  techStack: string[];
  icon: string;
  cardImage: {
    src: string;
    alt: string;
  };
  detail: ProjectDetail;
};

export const projects = [
  {
    slug: "prime-rajawali",
    title: "Prime Rajawali",
    roleLabel: "MLM MANAGEMENT PLATFORM · FULL STACK DEVELOPER",
    roleDescription:
      "Built a production-grade React SPA that separates public, member, and admin experiences while sharing a unified design system, role-guarded routing, and API-driven dashboards.",
    summary:
      "Production-grade React SPA for an MLM platform with role-based routing, member/admin dashboards, a theme system, and Sanctum-compatible authentication.",
    keyFeatures: [
      "Role-Based Routing & Access Control",
      "Member Dashboard Experience",
      "Admin Control Center",
      "Theme Management System",
      "Sanctum-Compatible Auth Flow",
      "Local Dev Parity for Auth",
    ],
    techStack: [
      "React",
      "Tailwind CSS",
      "Laravel",
      "MySQL",
      "Axios",
      "Lucide React",
    ],
    icon: "account_tree",
    cardImage: {
      src: "/images/primerajawali-2.png",
      alt: "Abstract dark UI dashboard with geometric network tree visualizations and soft gold glowing accents",
    },
    detail: {
      statusLabel: "Shipped",
      summary:
        "Production-grade React SPA separating public, member, and admin experiences with a unified design system and secure, cookie-based auth.",
      roleLabel: "Full Stack Developer",
      timeline: "3 Months",
      heroImage: {
        src: "/images/primerajawali-1.png",
        alt: "Abstract data visualization dashboard with glowing gold nodes and network connections on dark background",
      },
      heroGallery: [
        {
          src: "/images/primerajawali-1.png",
          alt: "Prime Rajawali login screen on desktop",
        },
        {
          src: "/images/primerajawali-2.png",
          alt: "Prime Rajawali network tree dashboard",
        },
      ],
      overview:
        "Prime Rajawali is a single-page frontend for an MLM platform that serves both members and administrators. The app delivers a public login flow, a member dashboard experience, and a robust admin control center within one codebase. The architecture emphasizes role-based routing, reusable UI modules, and API-driven data flows for network, bonus, ranking, and licensing features. Frontend focus areas include clean route boundaries for public/admin/member surfaces, fast dashboard interactions, consistent visual theming via CSS variables, and secure, cookie-based authentication that mirrors production behavior during local development. Axios is configured for CSRF handling, cookie-based auth, and image path normalization, while Vite proxy rewrites headers and cookie attributes so local development behaves like production.",
      impact: {
        label: "Impact",
        value: "<1s",
        description: "Bonus Calculation Time",
      },
      scale: {
        label: "Scale",
        value: "100k+",
        description: "Active Network Nodes",
      },
      features: [
        {
          title: "Role-Based Routing & Access Control",
          description:
            "Public routes are separated from member and admin dashboards, with guarded routes enforcing role requirements and redirect behavior.",
          icon: "account_tree",
          image: {
            src: "/images/features/network-tree.svg",
            alt: "Abstract glowing nodes connected by thin lines forming a complex network web on black background",
          },
          layout: "tall",
        },
        {
          title: "Member Dashboard Experience",
          description:
            "Dedicated pages for profile, ranking, bonus insights, licensing, and a network tree flow provide a complete self-service experience.",
          icon: "web",
          layout: "compact",
        },
        {
          title: "Admin Control Center",
          description:
            "A comprehensive admin panel for members, packages, bonuses, ranks, claims, approvals, ownership, payouts, bank settings, and Mitratrip integrations.",
          icon: "admin_panel_settings",
          image: {
            src: "/images/features/admin-panel.svg",
            alt: "Close up of code on a computer screen showing backend dashboard modules in dark mode",
          },
          layout: "wide",
        },
        {
          title: "Theme Management System",
          description:
            "Global theme context updates CSS variables with preset palettes and admin persistence for live preview and consistent branding.",
          icon: "settings_suggest",
          layout: "compact",
        },
      ],
      technicalStack: [
        {
          title: "Framework: React 19",
          description:
            "Single-page architecture focused on fast dashboard interactions and reusable UI modules.",
          icon: "web",
        },
        {
          title: "Routing: React Router 7",
          description:
            "Role-guarded routes with clear public, member, and admin boundaries.",
          icon: "account_tree",
        },
        {
          title: "Build Tooling: Vite 7",
          description:
            "Optimized local dev with proxy rewrites for auth parity and predictable QA.",
          icon: "rocket_launch",
        },
        {
          title: "Styling: Tailwind CSS v4 + CSS Variables",
          description:
            "Consistent theming with CSS variables and utility-first styling.",
          icon: "settings_suggest",
        },
        {
          title: "Networking & Auth: Axios + CSRF + Cookies",
          description:
            "Sanctum-compatible auth flow with CSRF handling and response normalization.",
          icon: "security",
        },
        {
          title: "UI Assets & Fonts: Lucide React + Manrope",
          description:
            "Consistent iconography and typography across all surfaces.",
          icon: "star",
        },
      ],
      codePreview: {
        fileName: "routes/role-guard.tsx",
        language: "tsx",
        code: `import { Navigate } from "react-router-dom";

type RoleGuardProps = {
  allowedRoles: string[];
  role: string | null;
  children: React.ReactNode;
};

export function RoleGuard({ allowedRoles, role, children }: RoleGuardProps) {
  if (!role || !allowedRoles.includes(role)) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
`,
      },
    },
  },
  {
    slug: "mitratrip",
    title: "Mitratrip",
    roleLabel: "PPOB & TRAVEL PWA · FULL STACK DEVELOPER",
    roleDescription:
      "Delivered a React-based super-app frontend that unifies payment, PPOB, and travel transactions inside a secure, mobile-first experience.",
    summary:
      "Consumer-facing super-app with protected member routes, modular transaction flows, and PWA readiness for app-like UX.",
    keyFeatures: [
      "Protected Member Experiences",
      "Payment & PPOB Catalog",
      "Travel Transactions",
      "Transaction History & Detail Views",
      "Session-Aware Dashboard",
      "PWA Ready",
    ],
    techStack: [
      "React",
      "Vite Plugin PWA",
      "Tailwind CSS",
      "Laravel",
      "MySQL",
      "Axios",
      "Lucide React",
    ],
    icon: "flight_takeoff",
    cardImage: {
      src: "/images/mitratrip-2.png",
      alt: "Sleek dark mode mobile application interface showing travel booking and transaction success screens with gold highlights",
    },
    detail: {
      statusLabel: "Shipped",
      summary:
        "React super-app frontend for payments, PPOB, and travel with protected routes and PWA installability.",
      roleLabel: "Full Stack Developer",
      timeline: "2 Months",
      heroImage: {
        src: "/images/mitratrip-1.png",
        alt: "Dark travel booking interface with gold highlights and confirmation states",
      },
      heroGallery: [
        {
          src: "/images/mitratrip-1.png",
          alt: "Mitratrip login screen on mobile",
        },
        {
          src: "/images/mitratrip-2.png",
          alt: "Mitratrip home dashboard with service grid",
        },
        {
          src: "/images/mitratrip-3.png",
          alt: "Mitratrip flight booking form",
        },
      ],
      overview:
        "Mitratrip is a consumer-facing super-app for digital payments and PPOB services. The frontend is a React SPA with a mobile-first UX, protected member routes, and a broad catalog of transactions (top up, bills, pulsa, vouchers, travel). The architecture prioritizes seamless in-app navigation, resilient session handling, and consistent UI patterns across high-frequency purchase flows. Core frontend focus areas include modular routing for many transactional surfaces, a robust API client for authenticated requests with CSRF support, PWA readiness for app-like behavior, and repeatable UI patterns for checkout, confirmations, and history.",
      impact: {
        label: "Impact",
        value: "99.9%",
        description: "Transaction Success Rate",
      },
      scale: {
        label: "Scale",
        value: "10k+",
        description: "Monthly Transactions",
      },
      features: [
        {
          title: "Protected Member Experiences",
          description:
            "Route guards ensure only authenticated users reach app surfaces, with a clear public login entry point.",
          icon: "security",
          image: {
            src: "/images/features/network-tree.svg",
            alt: "Abstract glowing nodes on a dark background representing offline workflows",
          },
          layout: "tall",
        },
        {
          title: "Payment & PPOB Catalog",
          description:
            "Dedicated flows for bills, pulsa, e-wallet top-ups, voucher games, and balance top-ups.",
          icon: "sync_alt",
          layout: "compact",
        },
        {
          title: "Travel Transactions",
          description:
            "Flight and hotel search experiences integrated into the same app shell for cross-category journeys.",
          icon: "flight_takeoff",
          image: {
            src: "/images/features/admin-panel.svg",
            alt: "Dark analytics dashboard showcasing key transaction metrics",
          },
          layout: "wide",
        },
        {
          title: "PWA Ready",
          description:
            "Vite PWA plugin with manifest, icons, and auto-update behavior for installable UX.",
          icon: "offline_bolt",
          layout: "compact",
        },
      ],
      technicalStack: [
        {
          title: "Framework: React 19",
          description:
            "Mobile-first SPA with modular transaction flows and shared UI patterns.",
          icon: "web",
        },
        {
          title: "Routing: React Router 7",
          description:
            "Protected member routes with a clear public login boundary.",
          icon: "account_tree",
        },
        {
          title: "Build Tooling: Vite 7 + PWA",
          description:
            "Installable manifest with auto-update behavior for app-like UX.",
          icon: "rocket_launch",
        },
        {
          title: "Styling: Tailwind CSS v4",
          description:
            "Consistent UI patterns for checkout, confirmations, and history flows.",
          icon: "settings_suggest",
        },
        {
          title: "Networking: Axios + CSRF",
          description:
            "Authenticated requests with CSRF handling, bearer tokens, and retry logic.",
          icon: "security",
        },
        {
          title: "UI Assets & Fonts: Lucide React + Manrope",
          description:
            "Unified iconography and typography across high-frequency purchase flows.",
          icon: "star",
        },
      ],
      codePreview: {
        fileName: "api/session-client.ts",
        language: "ts",
        code: `import axios from "axios";

export const sessionClient = axios.create({
  baseURL: "/api",
  withCredentials: true,
  headers: {
    Accept: "application/json",
  },
});

sessionClient.interceptors.response.use((response) => response, async (error) => {
  if (error.response?.status === 401) {
    window.location.href = "/login";
  }

  return Promise.reject(error);
});
`,
      },
    },
  },
] satisfies Project[];

export const getProjectSlugs = () => projects.map((project) => project.slug);

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);

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
      "Engineered a comprehensive multi-level marketing platform featuring an interactive visual network tree for real-time downline tracking, a complex automated bonus calculation engine, and a secure admin control center for holistic system management.",
    summary:
      "Engineered a comprehensive multi-level marketing platform featuring an interactive visual network tree for real-time downline tracking, a complex automated bonus calculation engine, and a secure admin control center for holistic system management.",
    keyFeatures: [
      "Interactive Network Tree",
      "Automated Bonus Engine",
      "Admin Control Center",
    ],
    techStack: ["React 19", "Laravel 12"],
    icon: "account_tree",
    cardImage: {
      src: "/images/projects/prime-rajawali-card.svg",
      alt: "Abstract dark UI dashboard with geometric network tree visualizations and soft gold glowing accents",
    },
    detail: {
      statusLabel: "Shipped",
      summary:
        "Engineered a comprehensive MLM management system for scalability and high-performance network tracking.",
      roleLabel: "Full Stack Developer",
      timeline: "8 Months",
      heroImage: {
        src: "/images/projects/prime-rajawali-hero.svg",
        alt: "Abstract data visualization dashboard with glowing gold nodes and network connections on dark background",
      },
      overview:
        "Prime Rajawali required a robust architectural overhaul to support rapid user acquisition and complex financial automation. The primary challenge was calculating multi-tier bonuses accurately in real-time without degrading system performance. We achieved this by implementing a highly optimized backend calculation engine paired with a responsive frontend network visualizer.",
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
          title: "Interactive Network Tree",
          description:
            "Built with React 19, allowing seamless zooming and panning across complex multi-level downline structures without rendering lag.",
          icon: "account_tree",
          image: {
            src: "/images/features/network-tree.svg",
            alt: "Abstract glowing nodes connected by thin lines forming a complex network web on black background",
          },
          layout: "tall",
        },
        {
          title: "Automated Bonus Engine",
          description:
            "Backend logic for real-time rank advancement and commission distribution based on complex business rules.",
          icon: "payments",
          layout: "compact",
        },
        {
          title: "Admin Control Center",
          description:
            "A comprehensive dashboard providing granular control over user roles, transaction monitoring, and system-wide settings, built with secure access controls.",
          icon: "admin_panel_settings",
          image: {
            src: "/images/features/admin-panel.svg",
            alt: "Close up of code on a computer screen showing backend dashboard modules in dark mode",
          },
          layout: "wide",
        },
      ],
      technicalStack: [
        {
          title: "Backend: Laravel 12 (PHP 8.2)",
          description:
            "Chosen for its robust ecosystem and expressive syntax, handling complex database relationships efficiently.",
          icon: "data_object",
        },
        {
          title: "Security: Laravel Sanctum",
          description:
            "Implemented stateless API token authentication for secure SPA communication.",
          icon: "security",
        },
        {
          title: "Frontend: React 19",
          description:
            "Leveraged concurrent rendering features for smooth interactions in the heavily loaded network tree view.",
          icon: "web",
        },
      ],
      codePreview: {
        fileName: "NetworkTreeController.php",
        language: "php",
        code: `public function getDownlineTree($userId)
{
    $node = Member::with('children')->findOrFail($userId);

    // Cache network heavily due to complex read ops
    return Cache::remember(
        "network_tree_{$userId}",
        now()->addMinutes(15),
        fn() => new NetworkTreeResource($node)
    );
}`,
      },
    },
  },
  {
    slug: "mitratrip",
    title: "Mitratrip",
    roleLabel: "PPOB & TRAVEL PWA · FULL STACK DEVELOPER",
    roleDescription:
      "Developed a high-reliability Progressive Web App for bill payments and travel booking. Focused on seamless offline-capable experiences and rock-solid transaction processing through complex third-party API orchestrations.",
    summary:
      "Developed a high-reliability Progressive Web App for bill payments and travel booking. Focused on seamless offline-capable experiences and rock-solid transaction processing through complex third-party API orchestrations.",
    keyFeatures: [
      "PWA Implementation",
      "Third-Party Integration (Digiflazz)",
      "Transaction Reliability",
    ],
    techStack: ["React 19", "Laravel 12", "Vite PWA"],
    icon: "flight_takeoff",
    cardImage: {
      src: "/images/projects/mitratrip-card.svg",
      alt: "Sleek dark mode mobile application interface showing travel booking and transaction success screens with gold highlights",
    },
    detail: {
      statusLabel: "Shipped",
      summary:
        "Developed a resilient travel and bill-payment PWA with reliable transactions and offline capabilities.",
      roleLabel: "Full Stack Developer",
      timeline: "6 Months",
      heroImage: {
        src: "/images/projects/mitratrip-hero.svg",
        alt: "Dark travel booking interface with gold highlights and confirmation states",
      },
      overview:
        "Mitratrip was built to support travel bookings and bill payments with heavy third-party integrations. The focus was ensuring reliable transaction orchestration, offline-first flows for repeat customers, and clear reconciliation tooling for operations teams.",
      impact: {
        label: "Impact",
        value: "99.9%",
        description: "Transaction Success Rate",
      },
      scale: {
        label: "Scale",
        value: "50k+",
        description: "Monthly Transactions",
      },
      features: [
        {
          title: "Offline-Ready Booking Flow",
          description:
            "Ensured consistent booking creation with queue-based retries and resilient caching strategies across low-connectivity regions.",
          icon: "offline_bolt",
          image: {
            src: "/images/features/network-tree.svg",
            alt: "Abstract glowing nodes on a dark background representing offline workflows",
          },
          layout: "tall",
        },
        {
          title: "Reliable Payment Orchestration",
          description:
            "Implemented robust error handling and reconciliation processes for multi-provider payments.",
          icon: "sync_alt",
          layout: "compact",
        },
        {
          title: "Operations Control Dashboard",
          description:
            "Delivered a unified admin cockpit for real-time monitoring, refunds, and exception resolution.",
          icon: "monitoring",
          image: {
            src: "/images/features/admin-panel.svg",
            alt: "Dark analytics dashboard showcasing key transaction metrics",
          },
          layout: "wide",
        },
      ],
      technicalStack: [
        {
          title: "Backend: Laravel 12 (PHP 8.2)",
          description:
            "Handled transactional orchestration, reconciliation logic, and provider integrations at scale.",
          icon: "data_object",
        },
        {
          title: "Security: Laravel Sanctum",
          description:
            "Secured payment flows with token-based auth and multi-tenant access control.",
          icon: "security",
        },
        {
          title: "Frontend: React 19 + Vite PWA",
          description:
            "Optimized load times and offline features for reliable booking experiences.",
          icon: "web",
        },
      ],
      codePreview: {
        fileName: "PaymentOrchestrator.ts",
        language: "typescript",
        code: `export async function processPayment(orderId: string) {
  const transaction = await paymentGateway.createCharge(orderId);

  await ledger.record({
    orderId,
    reference: transaction.reference,
    status: transaction.status,
  });

  return transaction;
}`,
      },
    },
  },
] satisfies Project[];

export const getProjectSlugs = () => projects.map((project) => project.slug);

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);

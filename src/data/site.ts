export type NavLink = {
  label: string;
  href: string;
  isActive?: boolean;
};

export type CtaLink = {
  label: string;
  href: string;
  icon?: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon?: string;
};

export const site = {
  name: "WebApp Enthusiast",
  title: "Rayan Katuuk | Portfolio",
  description:
    "I am Rayan Katuuk, a Programmer with 10+ years of experience in designing, developing, and delivering high-performance web applications and services.",
  availabilityLabel: "FULL STACK DEVELOPER",
  navLinks: [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Experience", href: "/#experience" },
    { label: "Projects", href: "/#projects" },
    { label: "Contact", href: "/#contact" },
  ] satisfies NavLink[],
  resumeLink: { label: "Download CV", href: "#", icon: "download" },
  hero: {
    headline: "Building Scalable",
    highlight: "Digital Solutions",
    headlineSuffix: "",
    description:
      "I am Rayan Katuuk, a Fullstack Developer with 10+ years of experience building scalable web and mobile applications, focused on clean architecture, secure integrations, and impactful digital solutions.",
    primaryCta: { label: "View My Work", href: "/#projects", icon: "arrow_right_alt" },
    secondaryCta: { label: "Download CV", href: "#", icon: "download" },
    stats: [
      { value: "10+", label: "Years Experience", icon: "star" },
      { value: "25+", label: "Projects Completed", icon: "code" },
      { value: "12+", label: "Happy Clients", icon: "sentiment_satisfied" },
    ],
  },
  about: {
    description: "Passionate about clean code, system design, and solving complex problems. I help businesses turn ideas into reliable and scalable digital products.",
    info: [
      { label: "Manado, Indonesia", icon: "location_on" },
      { label: "rayankkatuuk@gmail.com", icon: "mail" },
      { label: "+62 813 569 565 91", icon: "call" },
      { label: "linkedin.com/in/rayankatuuk", icon: "link" },
      { label: "github.com/rayankatuuk", icon: "code" },
    ]
  },
  techStack: [
    { name: "JavaScript", icon: "javascript" },
    { name: "TypeScript", icon: "typescript" },
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "Node.js", icon: "nodejs" },
    { name: "Express.js", icon: "express" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "Docker", icon: "docker" },
    { name: "Laravel", icon: "laravel" },
    { name: "MySQL", icon: "mysql" },
    { name: "Tailwind CSS", icon: "tailwind" },
  ],
  coreExpertise: [
    { title: "System Design", description: "Design scalable and maintainable systems", icon: "architecture" },
    { title: "Backend Development", description: "Building robust APIs and microservices", icon: "settings_suggest" },
    { title: "Frontend Development", description: "Creating responsive and accessible UI", icon: "web" },
    { title: "Database Design", description: "Optimized schema and query performance", icon: "database" },
    { title: "DevOps & CI/CD", description: "Automating deployments and pipelines", icon: "rocket_launch" }
  ],
  experience: [
    {
      period: "2026 - Present",
      role: "Full Stack Developer",
      company: "PT Prime Rajawali Indonesia",
      description:
        "Leading development of Prime Rajawali (MLM platform) with member and admin dashboards, role-based access, and secure transaction flows.",
      techs: ["React", "TypeScript", "Laravel", "MySQL"],
      icon: "verified"
    },
    {
      period: "Nov 2022 - Present",
      role: "Freelancer | Web/Mobile Developer",
      company: "Freelance",
      description:
        "Built billing & payment applications that streamlined transactions, reducing processing time by 40%. Developed government platforms serving 5,000+ active users and delivered React Native mobile apps that improved adoption by 25% within 3 months.",
      techs: ["TypeScript", "React", "React Native", "Tailwind", "Supabase", "Firebase", "MySQL"],
      icon: "code"
    },
    {
      period: "Dec 2020 - Nov 2022",
      role: "Full Stack Developer",
      company: "PT Indonesia Unggul Maju",
      description:
        "Designed and implemented responsive websites with ReactJS, TailwindCSS, and Laravel, reducing UI bugs by 30% and delivering projects 2 weeks ahead of schedule.",
      techs: ["Bootstrap", "Laravel", "MySQL"],
      icon: "settings_suggest"
    },
    {
      period: "Mar 2014 - Apr 2016",
      role: "Web Developer",
      company: "Balai Pelestarian Nilai Budaya Sulawesi Utara",
      description:
        "Developed cultural heritage websites for local government with 100% cross-browser compatibility and improved community engagement through accessible digital platforms.",
      techs: ["Wordpress", "PHP", "MySQL"],
      icon: "web"
    }
  ],
  credentials: {
    education: {
      title: "Bachelor’s in Management (Economics)",
      institution: "STIE Budi Utomo",
      year: "2011",
    },
    certifications: [
      {
        title: "Fullstack Developer",
        issuer: "Harisenin Bootcamp",
        year: "2025",
        href: "https://harisenin.com",
      },
      {
        title: "Fullstack Developer",
        issuer: "Kelasfullstack.id",
        year: "2025",
        href: "https://kelasfullstack.id",
      },
      {
        title: "JavaScript Algorithms & Data Structures",
        issuer: "freeCodeCamp",
        year: "2024",
        href: "https://www.freecodecamp.org",
      },
      {
        title: "Responsive Web Design",
        issuer: "freeCodeCamp",
        year: "2024",
        href: "https://www.freecodecamp.org",
      },
    ],
    languages: ["English", "Indonesian"],
  },
  cta: {
    headlinePrefix: "Let's build ",
    highlight: "something amazing",
    headlineSuffix: " together.",
    description: "I'm open to new opportunities and excited to help bring your ideas to life.",
    button: { label: "Contact Me", href: "/#contact", icon: "arrow_right_alt" },
    contacts: [
      { label: "rayankkatuuk@gmail.com", icon: "mail" },
      { label: "+62 813 569 565 91", icon: "call" },
      { label: "Manado, Indonesia", icon: "location_on" }
    ]
  },
  footer: {
    brand: "Rayan Katuuk",
    copyright: "Copyright © 2026 Rayan Katuuk. All rights reserved.",
    socialLinks: [] satisfies SocialLink[],
  },
  sections: {
    selectedWorks: "Featured Projects",
    overview: "Project Overview",
    keyFeatures: "Key Features",
    technicalStack: "Technical Stack",
  },
};

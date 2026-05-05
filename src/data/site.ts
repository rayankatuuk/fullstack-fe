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
  name: "Rayan Katuuk | Porto",
  title: "Rayan Katuuk | Portfolio",
  description:
    "Senior Programmer with 10+ years of experience in designing, developing, and delivering high-performance web applications and services.",
  availabilityLabel: "FULL STACK DEVELOPER",
  navLinks: [
    { label: "Home", href: "/", isActive: true },
    { label: "About", href: "/#about" },
    { label: "Experience", href: "/#experience" },
    { label: "Projects", href: "/#projects" },
    { label: "Skills", href: "/#skills" },
    { label: "Contact", href: "/#contact" },
  ] satisfies NavLink[],
  resumeLink: { label: "Download CV", href: "#", icon: "download" },
  hero: {
    headline: "Building Scalable",
    highlight: "Digital Solutions",
    headlineSuffix: "",
    description:
      "Senior Programmer with 10+ years of experience in designing, developing, and delivering high-performance web applications and services.",
    primaryCta: { label: "View My Work", href: "/#projects", icon: "arrow_right_alt" },
    secondaryCta: { label: "Download CV", href: "#", icon: "download" },
    stats: [
      { value: "10+", label: "Years Experience", icon: "star" },
      { value: "25+", label: "Projects Completed", icon: "code" },
      { value: "12+", label: "Happy Clients", icon: "sentiment_satisfied" },
    ],
    trustedBy: [
      { name: "tokopedia", icon: "tokopedia" },
      { name: "traveloka", icon: "traveloka" },
      { name: "gojek", icon: "gojek" },
      { name: "Bukalapak", icon: "bukalapak" },
      { name: "blibli", icon: "blibli" },
    ]
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
    { name: "Docker", icon: "docker" }
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
      period: "2021 - Present",
      role: "Senior Software Engineer",
      company: "Tokopedia",
      description: "Leading a team of engineers to build and scale core platforms used by millions of users.",
      techs: ["TypeScript", "Node.js", "Kubernetes", "PostgreSQL", "Redis"],
      icon: "tokopedia"
    },
    {
      period: "2018 - 2021",
      role: "Software Engineer",
      company: "Traveloka",
      description: "Developed high-performance features and services for flight booking platform.",
      techs: ["JavaScript", "React", "Node.js", "MySQL", "AWS"],
      icon: "traveloka"
    },
    {
      period: "2015 - 2018",
      role: "Backend Developer",
      company: "Gojek",
      description: "Built and optimized backend services for payments and logistics.",
      techs: ["PHP", "Laravel", "MySQL", "RabbitMQ", "Docker"],
      icon: "gojek"
    }
  ],
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
    copyright: "© 2026 Rayan Katuuk. All rights reserved.",
    socialLinks: [] satisfies SocialLink[],
  },
  sections: {
    selectedWorks: "Featured Projects",
    overview: "Project Overview",
    keyFeatures: "Key Features",
    technicalStack: "Technical Stack",
  },
};

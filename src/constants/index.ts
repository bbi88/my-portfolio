export interface Project {
  id: string;
  title: string;
  category: string;
  techStack: string[];
  description: string;
  image?: string;
}

export interface Expertise {
  id: string;
  title: string;
  description: string;
  icon: string;
  tech: string[];
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  step: number;
}

export const expertise: Expertise[] = [
  {
    id: "1",
    title: "Frontend Development",
    description: "Building responsive, performant user interfaces with modern React and Next.js. Focus on clean code and user experience.",
    icon: "Code",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "2",
    title: "Backend Development",
    description: "Creating robust server-side solutions with Node.js and modern APIs. Emphasis on reliability and maintainability.",
    icon: "Server",
    tech: ["Node.js", "Express", "PostgreSQL", "REST APIs", "GraphQL"],
  },
  {
    id: "3",
    title: "Full-Stack Solutions",
    description: "End-to-end development from concept to deployment. Ensuring seamless integration between frontend and backend.",
    icon: "Layers",
    tech: ["Next.js", "TypeScript", "Node.js", "Database Design"],
  },
  {
    id: "4",
    title: "UI/UX Implementation",
    description: "Translating designs into pixel-perfect, accessible interfaces. Committed to clear communication and quality results.",
    icon: "Palette",
    tech: ["Figma", "Tailwind CSS", "Framer Motion", "Responsive Design"],
  },
  {
    id: "5",
    title: "Communication & Reliability",
    description: "Strong focus on transparent communication, meeting deadlines, and understanding client needs in international environments.",
    icon: "MessagesSquare",
    tech: ["Transparent Reporting", "Deadline Driven", "Remote Collaboration", "Adaptability"],
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    category: "Web Application",
    techStack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    description: "A high-performance e-commerce platform serving 10,000+ daily active users with sub-200ms page loads.",
  },
  {
    id: "2",
    title: "FinTech Dashboard",
    category: "SaaS Platform",
    techStack: ["React", "Node.js", "MongoDB", "AWS"],
    description: "Real-time financial analytics dashboard with advanced data visualization and reporting capabilities.",
  },
  {
    id: "3",
    title: "Mobile Health App",
    category: "Mobile Application",
    techStack: ["React Native", "Firebase", "GraphQL"],
    description: "Cross-platform mobile application for healthcare providers with HIPAA-compliant data handling.",
  },
  {
    id: "4",
    title: "AI-Powered Analytics",
    category: "Enterprise Solution",
    techStack: ["Python", "TensorFlow", "FastAPI", "Docker"],
    description: "Machine learning platform for predictive analytics with automated insights generation.",
  },
  {
    id: "5",
    title: "Design System",
    category: "Design & Development",
    techStack: ["Figma", "Storybook", "React", "TypeScript"],
    description: "Comprehensive design system and component library for consistent UI across multiple products.",
  },
  {
    id: "6",
    title: "API Gateway",
    category: "Infrastructure",
    techStack: ["Kubernetes", "Go", "Redis", "Microservices"],
    description: "High-throughput API gateway handling millions of requests per day with 99.99% uptime.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: "1",
    title: "Discovery",
    description: "I take time to understand your business goals, target audience, and technical requirements. Clear communication is my priority from day one.",
    step: 1,
  },
  {
    id: "2",
    title: "Design",
    description: "I create wireframes and prototypes aligned with your vision. You'll see progress regularly and can provide feedback throughout.",
    step: 2,
  },
  {
    id: "3",
    title: "Development",
    description: "I build your product with modern technologies, writing clean and maintainable code. You'll have access to see the work as it progresses.",
    step: 3,
  },
  {
    id: "4",
    title: "Quality Assurance",
    description: "I test thoroughly across devices and browsers to ensure everything works flawlessly. Quality results matter to me.",
    step: 4,
  },
  {
    id: "5",
    title: "Launch",
    description: "I deploy to production and provide documentation. I'm available for support and continuous improvement after launch.",
    step: 5,
  },
];

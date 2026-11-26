export interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  highlights: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: "quill",
    number: "01",
    title: "QUILL",
    category: "AI product engineering",
    description:
      "An AI-powered campus and assessment platform built around document intelligence, retrieval, and asynchronous workflows.",
    technologies: [
      "Next.js",
      "Hono",
      "PostgreSQL",
      "Redis",
      "Gemini",
      "Pinecone",
      "BullMQ",
    ],
    highlights: [
      "Five distinct user roles",
      "AI assessment generation and grading",
      "RAG with hybrid retrieval and reranking",
      "Document processing and real-time communication",
    ],
    link: "https://github.com/salillakra/quill",
  },
  {
    id: "agile-turn",
    number: "02",
    title: "AGILE TURN",
    category: "AI recruitment systems",
    description:
      "An AI-assisted recruitment suite for resume intelligence, candidate discovery, interview workflows, and reporting.",
    technologies: [
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "BullMQ",
      "FastAPI",
    ],
    highlights: [
      "Resume parsing and semantic search",
      "Explainable candidate scoring",
      "Recruitment and interview workflows",
      "GCP deployment with PostgreSQL and Redis",
    ],
  },
  {
    id: "esummit-26",
    number: "03",
    title: "E-SUMMIT 26",
    category: "Production platform",
    description:
      "The official event platform for Entrepreneurship Development Cell, BIT Mesra, built and shipped with a team of three developers.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "React Query",
      "WebSockets",
    ],
    highlights: [
      "11K+ page views",
      "Authentication, OAuth, and RBAC",
      "Admin, moderator, and analytics dashboards",
      "Real-time admin and moderator chat",
    ],
    link: "https://esummit.edcbitmesra.in",
  },
  {
    id: "forge",
    number: "04",
    title: "FORGE",
    category: "Distributed systems",
    description:
      "A Go-based workflow engine for durable, observable execution across scheduled jobs, webhooks, and programmable steps.",
    technologies: ["Go", "NATS JetStream", "PostgreSQL", "Docker", "SSE"],
    highlights: [
      "DAG-based workflow execution",
      "Durable state and automatic retries",
      "Cron scheduling and webhook triggers",
      "Live execution monitoring",
    ],
  },
  {
    id: "pantheon-25",
    number: "05",
    title: "PANTHEON 25",
    category: "Product engineering",
    description:
      "A production technology festival platform with event management workflows and live leaderboard functionality.",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "GSAP", "Tailwind CSS"],
    highlights: [
      "8K+ users associated with the platform",
      "Live leaderboard",
      "Database-backed event workflows",
      "Scalable full-stack architecture",
    ],
    link: "https://pantheon25.com",
  },
];

export interface Service {
  number: string
  title: string
  description: string
  items: string[]
  technologies: string[]
}

export const services: Service[] = [
  { number: '01', title: 'DIGITAL EXPERIENCES', description: 'Interfaces with a point of view — fast, responsive, and built to make the right impression.', items: ['Website development', 'Landing pages', 'Brand websites', 'Interactive web experiences'], technologies: ['Next.js', 'React', 'GSAP', 'Three.js'] },
  { number: '02', title: 'PRODUCT ENGINEERING', description: 'From first useful version to dependable product. Architecture that stays legible as the thing grows.', items: ['SaaS development', 'MVP development', 'Full-stack applications', 'Admin dashboards'], technologies: ['TypeScript', 'PostgreSQL', 'Prisma', 'React Native'] },
  { number: '03', title: 'BACKEND SYSTEMS', description: 'Quietly solid infrastructure for the parts users never see but every product depends on.', items: ['API architecture', 'Database design', 'Authentication and RBAC', 'Jobs, queues, and real-time systems'], technologies: ['Node.js', 'Hono', 'FastAPI', 'Redis'] },
  { number: '04', title: 'AI & AUTOMATION', description: 'Useful intelligence, not demo theatre. AI features and workflows connected to how your business actually operates.', items: ['LLM integrations', 'Document processing', 'AI-powered workflows', 'Business process automation'], technologies: ['Gemini API', 'RAG', 'Vector DBs', 'Python'] },
]

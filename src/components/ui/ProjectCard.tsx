import type { Project } from '@/data/projects'
import { ArrowUpRight, ExternalLink } from 'lucide-react'

function ProjectArt({ project }: { project: Project }) {
  return (
    <div className={`project-art project-art-${project.number} relative aspect-[16/9] w-full overflow-hidden border border-white/[0.1]`} aria-label={`${project.title} visual placeholder`}>
      <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:36px_36px]" />
      <div className="absolute inset-[9%] border border-white/10" />
      <div className="absolute left-[14%] top-[16%] font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">{project.category}</div>
      <div className="absolute bottom-[11%] left-[8%] right-[8%] flex items-end justify-between">
        <span className="font-display text-[clamp(32px,7vw,96px)] font-bold leading-[.8] tracking-[-.08em] text-white/[0.12]">{project.number}</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-lime/65">Production / {project.number}</span>
      </div>
      {project.number === '01' && <><div className="absolute right-[15%] top-[24%] h-[37%] w-[27%] rotate-12 border border-lime/45" /><div className="absolute right-[21%] top-[31%] h-[37%] w-[27%] -rotate-12 border border-lime/25" /></>}
      {project.number === '02' && <><div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/25" /><div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-lime/60" /></>}
      {project.number === '03' && <><div className="absolute right-[15%] top-[25%] h-[45%] w-[45%] border border-white/20" /><div className="absolute right-[21%] top-[31%] h-[45%] w-[45%] border border-white/10" /></>}
      <div className="absolute inset-0 bg-gradient-to-br from-lime/[0.07] via-transparent to-transparent" />
    </div>
  )
}

export function ProjectCard({ project, index: _index }: { project: Project; index?: number }) {
  return (
    <article className="group grid border-t border-white/[0.1] py-8 lg:grid-cols-[72px_minmax(0,1fr)_240px] lg:gap-8 lg:py-12">
      <span className="hidden font-mono text-5xl font-bold leading-none text-white/[0.12] lg:block">{project.number}</span>
      <div>
        <div className="mb-4 flex items-center gap-3 lg:hidden"><span className="font-mono text-xl text-lime">{project.number}</span><span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">{project.category}</span></div>
        <div className="mb-3 hidden font-mono text-[10px] uppercase tracking-[0.18em] text-lime lg:block">{project.category}</div>
        <h3 className="font-display text-[clamp(32px,4vw,64px)] font-bold leading-[.95] tracking-[-0.06em] text-paper transition-colors group-hover:text-lime">{project.title}</h3>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/50 sm:text-base">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">{project.technologies.map((technology) => <span key={technology} className="border border-white/[0.12] px-2 py-1 font-mono text-[9px] uppercase tracking-[0.08em] text-white/45">{technology}</span>)}</div>
        <div className="mt-7 lg:hidden"><ProjectArt project={project} /></div>
      </div>
      <div className="mt-7 flex flex-col justify-between gap-5 lg:mt-0 lg:pt-8">
        <ul className="space-y-2">{project.highlights.map((highlight) => <li key={highlight} className="flex gap-2 text-xs leading-relaxed text-white/50"><span className="text-lime">+</span>{highlight}</li>)}</ul>
        {project.link && <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-lime transition-transform group-hover:translate-x-1">View project <ArrowUpRight size={14} /></a>}
      </div>
      <div className="col-span-full mt-8 hidden lg:block"><ProjectArt project={project} /></div>
    </article>
  )
}

export default ProjectCard
export { ProjectArt }

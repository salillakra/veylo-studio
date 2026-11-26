'use client'

import { useEffect, useRef } from "react"
import { projects } from "@/data/projects"
import { ProjectCard } from "@/components/ui/ProjectCard"

export function SelectedWorkClient() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ctx: { revert: () => void } | undefined

    const initGSAP = async () => {
      const { gsap } = await import("gsap")
      const { ScrollTrigger } = await import("gsap/ScrollTrigger")
      gsap.registerPlugin(ScrollTrigger)

      if (!containerRef.current) return

      const rows = containerRef.current.querySelectorAll<HTMLElement>(".project-row")

      ctx = gsap.context(() => {
        rows.forEach((row, i) => {
          gsap.fromTo(
            row,
            { opacity: 0, y: 48 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              delay: i * 0.08,
              scrollTrigger: {
                trigger: row,
                start: "top 88%",
                toggleActions: "play none none none",
              },
            }
          )
        })
      }, containerRef)
    }

    initGSAP()

    return () => {
      ctx?.revert()
    }
  }, [])

  return (
    <div ref={containerRef} className="mt-14 lg:mt-20">
      {projects.map((project, index) => (
        <div key={project.id} className="project-row">
          <ProjectCard project={project} index={index} />
        </div>
      ))}
    </div>
  )
}

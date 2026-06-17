import { useState, useEffect, useRef } from "react"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Венские вафли",
    category: "Мягкие, в коробах",
    location: "от 5 кг",
    year: "ХИТ",
    image: "https://cdn.poehali.dev/projects/15905451-8fd8-4c75-a44f-756607361b5f/files/3c9cf0f9-364a-4bac-84b6-cae278289b9f.jpg",
  },
  {
    id: 2,
    title: "Вафельные трубочки",
    category: "Хрустящие, с начинкой",
    location: "от 3 кг",
    year: "",
    image: "https://cdn.poehali.dev/projects/15905451-8fd8-4c75-a44f-756607361b5f/files/72bd9c45-9380-4826-9e79-672e7dff34e1.jpg",
  },
  {
    id: 3,
    title: "Вафли в шоколаде",
    category: "Глазированные батончики",
    location: "от 4 кг",
    year: "НОВИНКА",
    image: "https://cdn.poehali.dev/projects/15905451-8fd8-4c75-a44f-756607361b5f/files/adce41a6-80f0-4718-959a-5591f9a490ff.jpg",
  },
  {
    id: 4,
    title: "Вафельные рожки",
    category: "Для мороженого",
    location: "от 1000 шт",
    year: "",
    image: "https://cdn.poehali.dev/projects/15905451-8fd8-4c75-a44f-756607361b5f/files/042c44c5-cefa-4bb8-87ca-18ff42cf88c7.jpg",
  },
]

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [revealedImages, setRevealedImages] = useState<Set<number>>(new Set())
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = imageRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1) {
              setRevealedImages((prev) => new Set(prev).add(projects[index].id))
            }
          }
        })
      },
      { threshold: 0.2 },
    )

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-32 md:py-29 bg-secondary/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Наша продукция</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">Каталог вафель</h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            Запросить полный прайс
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div ref={(el) => (imageRefs.current[index] = el)} className="relative overflow-hidden aspect-[4/3] mb-6">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredId === project.id ? "scale-105" : "scale-100"
                  }`}
                />
                <div
                  className="absolute inset-0 bg-primary origin-top"
                  style={{
                    transform: revealedImages.has(project.id) ? "scaleY(0)" : "scaleY(1)",
                    transition: "transform 1.5s cubic-bezier(0.76, 0, 0.24, 1)",
                  }}
                />
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-medium mb-2 group-hover:underline underline-offset-4">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {project.category} · {project.location}
                  </p>
                </div>
                <span className="text-muted-foreground/60 text-sm">{project.year}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
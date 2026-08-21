import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Icon from "@/components/ui/icon"
import { HighlightedText } from "./HighlightedText"

const categories = [
  {
    id: "cups",
    label: "Стаканчики",
    description: "Хрустящие вафельные стаканчики для мороженого — плотные, ароматные, разной формы и размера.",
    image: "https://cdn.poehali.dev/projects/15905451-8fd8-4c75-a44f-756607361b5f/files/d3f9b333-5d95-4558-a5b3-326f3ad59f92.jpg",
    unit: "от 500 шт",
    items: ["Ванильный стандарт", "Шоколадный край", "Большой XL", "Пломбирный", "Хрустящий"],
  },
  {
    id: "cones",
    label: "Рожки",
    description: "Классические сахарные рожки и яркие цветные — под любой формат продажи мороженого.",
    image: "https://cdn.poehali.dev/projects/15905451-8fd8-4c75-a44f-756607361b5f/files/6b473ad9-ba77-4622-bdd0-b6c8f0030870.jpg",
    unit: "от 500 шт",
    items: ["Сахарный рожок", "Мини-рожок", "Цветной микс", "С шоколадной глазурью", "Гигант"],
  },
  {
    id: "sheets",
    label: "Коржи",
    description: "Тонкие вафельные коржи для тортов и десертов — квадратные, круглые, медовые и шоколадные.",
    image: "https://cdn.poehali.dev/projects/15905451-8fd8-4c75-a44f-756607361b5f/files/218723aa-ca43-411a-b561-51ed49d16735.jpg",
    unit: "от 100 шт",
    items: ["Квадратные классические", "Круглые для тортов", "Медовые", "Шоколадные", "Тонкие десертные"],
  },
  {
    id: "tartlets",
    label: "Тарталетки",
    description: "Хрустящие тарталетки для закусок и десертов — от повседневных до праздничных подач.",
    image: "https://cdn.poehali.dev/projects/15905451-8fd8-4c75-a44f-756607361b5f/files/bb382ef9-c791-4f03-a58d-a7f3cdd393da.jpg",
    unit: "от 200 шт",
    items: ["Для закусок", "Сладкие песочные", "Мини-фуршетные", "Икорные", "Праздничные"],
  },
]

export function Catalog() {
  const [active, setActive] = useState(categories[0].id)
  const activeCategory = categories.find((c) => c.id === active) ?? categories[0]

  return (
    <section id="projects" className="py-24 md:py-32 bg-secondary/40">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">Наша продукция</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              Каталог <HighlightedText>Варюня</HighlightedText>
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors group"
          >
            Запросить полный прайс
            <Icon name="ArrowUpRight" size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <Tabs value={active} onValueChange={setActive}>
          <TabsList className="bg-white/70 border border-border p-1.5 h-auto rounded-full flex flex-wrap gap-1 mb-12 w-fit mx-auto md:mx-0">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat.id}
                value={cat.id}
                className="rounded-full px-5 py-2.5 text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-none"
              >
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((cat) => (
            <TabsContent key={cat.id} value={cat.id} className="mt-0">
              <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-start">
                <div className="lg:col-span-2 relative overflow-hidden rounded-2xl aspect-[4/3]">
                  <img src={cat.image} alt={cat.label} className="w-full h-full object-cover" />
                  <span className="absolute top-4 left-4 bg-white/90 text-foreground text-xs font-semibold px-3 py-1.5 rounded-full">
                    {cat.unit}
                  </span>
                </div>

                <div className="lg:col-span-3">
                  <p className="text-muted-foreground leading-relaxed mb-6 max-w-xl">{cat.description}</p>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {cat.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 bg-white rounded-xl border border-border px-4 py-4 hover:border-primary/50 hover:shadow-sm transition-all"
                      >
                        <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <Icon name="CookieIcon" fallback="Cookie" size={18} className="text-primary" />
                        </div>
                        <span className="text-sm font-medium text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

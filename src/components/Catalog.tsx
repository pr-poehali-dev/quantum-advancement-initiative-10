import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Icon from "@/components/ui/icon"
import { HighlightedText } from "./HighlightedText"

const categories = [
  {
    id: "cups",
    label: "Стаканчики",
    description: "Хрустящие вафельные стаканчики для мороженого — воздушные, ароматные, разного объёма и цвета.",
    image: "https://cdn.poehali.dev/projects/15905451-8fd8-4c75-a44f-756607361b5f/files/d3f9b333-5d95-4558-a5b3-326f3ad59f92.jpg",
    unit: "от 500 шт",
    items: [
      { name: "Классические ароматные", image: "https://cdn.poehali.dev/projects/15905451-8fd8-4c75-a44f-756607361b5f/files/27a27774-7621-4c5a-8473-a1b09aef825b.jpg" },
      { name: "Мини-формат 100 мл", image: "https://cdn.poehali.dev/projects/15905451-8fd8-4c75-a44f-756607361b5f/files/7fe387b9-8cc4-49fa-926c-e6722f350c41.jpg" },
      { name: "Большого объёма 155 мл", image: "https://cdn.poehali.dev/projects/15905451-8fd8-4c75-a44f-756607361b5f/files/b1566710-0f2a-4e68-aa2d-162096be170c.jpg" },
      { name: "Шоколадные", image: "https://cdn.poehali.dev/projects/15905451-8fd8-4c75-a44f-756607361b5f/files/d959b38a-c203-4c0e-9361-5362afbf6d27.jpg" },
      { name: "Розовые", image: "https://cdn.poehali.dev/projects/15905451-8fd8-4c75-a44f-756607361b5f/files/a9f7897c-2e6c-451d-a480-38d8a2124f92.jpg" },
    ],
  },
  {
    id: "cones",
    label: "Рожки",
    description: "Сахарные вафельные рожки классического и большого размера — хрустящие, ароматные, без сахара в составе теста.",
    image: "https://cdn.poehali.dev/projects/15905451-8fd8-4c75-a44f-756607361b5f/files/6b473ad9-ba77-4622-bdd0-b6c8f0030870.jpg",
    unit: "от 500 шт",
    items: [
      { name: "Сахарные классические", image: "https://cdn.poehali.dev/projects/15905451-8fd8-4c75-a44f-756607361b5f/files/69041708-08b2-49ae-8df2-9e202ca4968c.jpg" },
      { name: "Сахарные большие", image: "https://cdn.poehali.dev/projects/15905451-8fd8-4c75-a44f-756607361b5f/files/71fc4c3a-12b5-46c6-a8a4-5d0a2e0a87ef.jpg" },
      { name: "Комбо-набор рожки и стаканчики", image: "https://cdn.poehali.dev/projects/15905451-8fd8-4c75-a44f-756607361b5f/files/2fac7952-0ec2-4bf0-92b0-271632d21386.jpg" },
    ],
  },
  {
    id: "sheets",
    label: "Коржи",
    description: "Вафельные коржи для тортов и десертов — круглые классические, с какао и декоративных форм.",
    image: "https://cdn.poehali.dev/projects/15905451-8fd8-4c75-a44f-756607361b5f/files/218723aa-ca43-411a-b561-51ed49d16735.jpg",
    unit: "от 100 шт",
    items: [
      { name: "Круглые классические", image: "https://cdn.poehali.dev/projects/15905451-8fd8-4c75-a44f-756607361b5f/files/ae520b1d-e97b-4a08-8cd0-ebf5cbca79cf.jpg" },
      { name: "Шоколадные с какао", image: "https://cdn.poehali.dev/projects/15905451-8fd8-4c75-a44f-756607361b5f/files/36b8acbd-aab3-4e97-8210-642e022125fe.jpg" },
      { name: "Разноцветные", image: "https://cdn.poehali.dev/projects/15905451-8fd8-4c75-a44f-756607361b5f/files/7cb37681-b6ef-49ac-9066-061111951a53.jpg" },
      { name: "Цветочек", image: "https://cdn.poehali.dev/projects/15905451-8fd8-4c75-a44f-756607361b5f/files/8fba512f-f56e-4e2d-a07d-80bd21a0cf51.jpg" },
      { name: "Сердечко", image: "https://cdn.poehali.dev/projects/15905451-8fd8-4c75-a44f-756607361b5f/files/ab8182d1-b2b3-4e57-bfd2-0c60a0deec90.jpg" },
    ],
  },
  {
    id: "tartlets",
    label: "Тарталетки",
    description: "Воздушные хрустящие тарталетки без сахара для закусок и десертов — разных форм и объёма.",
    image: "https://cdn.poehali.dev/projects/15905451-8fd8-4c75-a44f-756607361b5f/files/bb382ef9-c791-4f03-a58d-a7f3cdd393da.jpg",
    unit: "от 200 шт",
    items: [
      { name: "Корзинка", image: "https://cdn.poehali.dev/projects/15905451-8fd8-4c75-a44f-756607361b5f/files/dd05d60d-d579-4aa8-bcd8-c4555ac3bff4.jpg" },
      { name: "Лукошко", image: "https://cdn.poehali.dev/projects/15905451-8fd8-4c75-a44f-756607361b5f/files/eb021420-8c2b-4b55-81fb-ebff7c7f97c8.jpg" },
      { name: "Солнышко", image: "https://cdn.poehali.dev/projects/15905451-8fd8-4c75-a44f-756607361b5f/files/3d4a84ea-fe35-4eae-9ea8-8241c42781fc.jpg" },
      { name: "Лодочки", image: "https://cdn.poehali.dev/projects/15905451-8fd8-4c75-a44f-756607361b5f/files/86bd58dd-9654-465e-a77b-53e4068c0d9a.jpg" },
      { name: "Орешек", image: "https://cdn.poehali.dev/projects/15905451-8fd8-4c75-a44f-756607361b5f/files/5b9d1db2-97c0-4d14-89c1-32b65a0f4d38.jpg" },
    ],
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
              <div className="flex items-center justify-between gap-4 mb-6">
                <p className="text-muted-foreground leading-relaxed max-w-xl">{cat.description}</p>
                <span className="shrink-0 bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full">
                  {cat.unit}
                </span>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="bg-white rounded-2xl border border-border overflow-hidden hover:border-primary/50 hover:shadow-md transition-all"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="px-4 py-3">
                      <span className="text-sm font-medium text-foreground">{item.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
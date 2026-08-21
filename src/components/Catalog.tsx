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
      { name: "Классические ароматные", image: "https://cdn.poehali.dev/projects/15905451-8fd8-4c75-a44f-756607361b5f/files/88ea1fe8-30cc-47d5-bfbc-993c905fab84.jpg" },
      { name: "Мини-формат 100 мл", image: "https://cdn.poehali.dev/projects/15905451-8fd8-4c75-a44f-756607361b5f/files/072e6b8d-60ee-4c94-bcb2-264c3f4a585f.jpg" },
      { name: "Большого объёма 155 мл", image: "https://cdn.poehali.dev/projects/15905451-8fd8-4c75-a44f-756607361b5f/files/f5386001-9a30-4a10-b454-bb3a8ab8a4c1.jpg" },
      { name: "Шоколадные", image: "https://cdn.poehali.dev/projects/15905451-8fd8-4c75-a44f-756607361b5f/files/8494b6b0-ab64-4f83-9c0d-590ed44bc723.jpg" },
      { name: "Розовые", image: "https://cdn.poehali.dev/projects/15905451-8fd8-4c75-a44f-756607361b5f/files/95336cf2-99f5-4325-8c02-5bd84b3a238c.jpg" },
    ],
  },
  {
    id: "cones",
    label: "Рожки",
    description: "Сахарные вафельные рожки классического и большого размера — хрустящие, ароматные, без сахара в составе теста.",
    image: "https://cdn.poehali.dev/projects/15905451-8fd8-4c75-a44f-756607361b5f/files/6b473ad9-ba77-4622-bdd0-b6c8f0030870.jpg",
    unit: "от 500 шт",
    items: [
      { name: "Сахарные классические", image: "https://cdn.poehali.dev/projects/15905451-8fd8-4c75-a44f-756607361b5f/files/f0e10617-0f7d-4131-8df5-1d180bea73c8.jpg" },
      { name: "Сахарные большие", image: "https://cdn.poehali.dev/projects/15905451-8fd8-4c75-a44f-756607361b5f/files/299bcb6c-4256-4a88-bdc7-d35cf8c9f990.jpg" },
      { name: "Комбо-набор рожки и стаканчики", image: "https://cdn.poehali.dev/projects/15905451-8fd8-4c75-a44f-756607361b5f/files/2e91faf6-7658-45e7-b738-9646d58102c8.jpg" },
    ],
  },
  {
    id: "sheets",
    label: "Коржи",
    description: "Вафельные коржи для тортов и десертов — круглые классические, с какао и декоративных форм.",
    image: "https://cdn.poehali.dev/projects/15905451-8fd8-4c75-a44f-756607361b5f/files/218723aa-ca43-411a-b561-51ed49d16735.jpg",
    unit: "от 100 шт",
    items: [
      { name: "Круглые классические", image: "https://cdn.poehali.dev/projects/15905451-8fd8-4c75-a44f-756607361b5f/files/ea1d48e0-10ea-46d7-afcd-e45ae3585014.jpg" },
      { name: "Шоколадные с какао", image: "https://cdn.poehali.dev/projects/15905451-8fd8-4c75-a44f-756607361b5f/files/f4d9bff7-e64c-4b09-94f3-0854b78a73f7.jpg" },
      { name: "Разноцветные", image: "https://cdn.poehali.dev/projects/15905451-8fd8-4c75-a44f-756607361b5f/files/4abfc52b-244b-4992-a00d-59c9b9099515.jpg" },
      { name: "Цветочек", image: "https://cdn.poehali.dev/projects/15905451-8fd8-4c75-a44f-756607361b5f/files/f6f8aa2f-a975-4fda-b3b2-0686347f50a5.jpg" },
      { name: "Сердечко", image: "https://cdn.poehali.dev/projects/15905451-8fd8-4c75-a44f-756607361b5f/files/4c0b80cf-71dc-4928-8868-541167913ca8.jpg" },
    ],
  },
  {
    id: "tartlets",
    label: "Тарталетки",
    description: "Воздушные хрустящие тарталетки без сахара для закусок и десертов — разных форм и объёма.",
    image: "https://cdn.poehali.dev/projects/15905451-8fd8-4c75-a44f-756607361b5f/files/bb382ef9-c791-4f03-a58d-a7f3cdd393da.jpg",
    unit: "от 200 шт",
    items: [
      { name: "Корзинка", image: "https://cdn.poehali.dev/projects/15905451-8fd8-4c75-a44f-756607361b5f/files/4d78f0a8-c6bf-40a9-a906-a659ac14387f.jpg" },
      { name: "Лукошко", image: "https://cdn.poehali.dev/projects/15905451-8fd8-4c75-a44f-756607361b5f/files/4e47c448-66cf-43cc-aaa9-c16d30e637eb.jpg" },
      { name: "Солнышко", image: "https://cdn.poehali.dev/projects/15905451-8fd8-4c75-a44f-756607361b5f/files/41dea84a-24db-4f61-b78d-0f9bb9ccd1d5.jpg" },
      { name: "Лодочки", image: "https://cdn.poehali.dev/projects/15905451-8fd8-4c75-a44f-756607361b5f/files/8368a09f-9854-4f57-a84d-b51b1b037054.jpg" },
      { name: "Орешек", image: "https://cdn.poehali.dev/projects/15905451-8fd8-4c75-a44f-756607361b5f/files/2c003a77-397f-4c51-95c4-1542720ba3b8.jpg" },
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
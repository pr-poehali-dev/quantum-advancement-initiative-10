import { useState } from "react"
import { ArrowRight } from "lucide-react"
import Icon from "@/components/ui/icon"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const marketplaces = ["Wildberries", "Ozon", "Яндекс Маркет", "Другой маркетплейс"]
const problemTypes = [
  "Брак товара",
  "Товар не соответствует описанию",
  "Задержка доставки",
  "Товар не пришёл",
  "Повреждена упаковка",
  "Другое",
]

export function MarketplaceFeedback() {
  const [marketplace, setMarketplace] = useState("")
  const [orderNumber, setOrderNumber] = useState("")
  const [problemType, setProblemType] = useState("")
  const [name, setName] = useState("")
  const [contact, setContact] = useState("")
  const [comment, setComment] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Проблема с заказом — ${marketplace || "маркетплейс"}`)
    const body = encodeURIComponent(
      `Маркетплейс: ${marketplace}\nНомер заказа: ${orderNumber}\nТип проблемы: ${problemType}\nИмя: ${name}\nКонтакт: ${contact}\n\nОписание проблемы:\n${comment}${
        file ? `\n\nК обращению приложено фото: ${file.name} (прикрепите его к письму вручную)` : ""
      }`,
    )
    window.location.href = `mailto:calmarwaffles@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <section id="marketplace-feedback" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-6">Маркетплейсы</p>
          <h2 className="text-6xl font-bold leading-[1.1] tracking-tight mb-6 text-balance lg:text-8xl">
            Обратная связь по маркетплейсам
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
            Купили нашу продукцию на Wildberries, Ozon или другой площадке и столкнулись с проблемой — брак, не тот товар, задержка доставки? Расскажите нам, разберёмся.
          </p>
        </div>

        {submitted ? (
          <div className="max-w-xl py-10 px-8 bg-secondary/60 rounded-3xl text-center">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Icon name="Check" size={28} className="text-primary" />
            </div>
            <p className="text-foreground text-lg font-semibold mb-2">Открываем почту...</p>
            <p className="text-muted-foreground text-sm">Отправьте письмо — мы разберём обращение в течение дня.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-2xl bg-secondary/40 rounded-3xl p-6 md:p-10 flex flex-col gap-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground">Маркетплейс</label>
                <Select value={marketplace} onValueChange={setMarketplace} required>
                  <SelectTrigger className="bg-white h-12 rounded-xl">
                    <SelectValue placeholder="Выберите площадку" />
                  </SelectTrigger>
                  <SelectContent>
                    {marketplaces.map((m) => (
                      <SelectItem key={m} value={m}>
                        {m}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground">Тип проблемы</label>
                <Select value={problemType} onValueChange={setProblemType} required>
                  <SelectTrigger className="bg-white h-12 rounded-xl">
                    <SelectValue placeholder="Выберите проблему" />
                  </SelectTrigger>
                  <SelectContent>
                    {problemTypes.map((p) => (
                      <SelectItem key={p} value={p}>
                        {p}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-foreground">Номер заказа</label>
              <input
                type="text"
                placeholder="Например, 123456789"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
                required
                className="w-full bg-white border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground">Ваше имя</label>
                <input
                  type="text"
                  placeholder="Как к вам обращаться"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-white border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground">Телефон или почта</label>
                <input
                  type="text"
                  placeholder="Для связи с вами"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  required
                  className="w-full bg-white border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-foreground">Опишите проблему</label>
              <Textarea
                placeholder="Расскажите подробнее, что случилось"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
                rows={4}
                className="w-full bg-white border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-foreground">Приложить фото (по желанию)</label>
              <label className="flex items-center gap-3 w-full bg-white border border-dashed border-border rounded-xl px-4 py-3 text-sm text-muted-foreground cursor-pointer hover:border-primary transition-colors">
                <Icon name="Paperclip" size={18} className="text-muted-foreground shrink-0" />
                <span className="truncate">{file ? file.name : "Выберите файл с фото"}</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                />
              </label>
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl text-sm font-semibold tracking-wide hover:bg-primary/90 transition-colors duration-300 group mt-2 self-start"
            >
              Отправить обращение
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

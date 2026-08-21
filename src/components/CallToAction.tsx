import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { HighlightedText } from "./HighlightedText"
import Icon from "@/components/ui/icon"

export function CallToAction() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent("Заявка на прайс-лист с сайта")
    const body = encodeURIComponent(`Имя: ${name}\nТелефон: ${phone}\n\nПрошу выслать прайс-лист на вафельную продукцию.`)
    window.location.href = `mailto:calmarwaffles@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-32 md:py-29 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary-foreground/70 text-sm font-semibold tracking-[0.3em] uppercase mb-8">Оставить заявку</p>

          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8 text-balance">
            Готовы заказать
            <br />
            вафли <HighlightedText>оптом</HighlightedText>?
          </h2>

          <p className="text-primary-foreground/85 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
            Оставьте контакт — вышлем актуальный прайс-лист «Варюня» и рассчитаем стоимость под ваш объём.
          </p>

          {submitted ? (
            <div className="max-w-md mx-auto py-10 px-8 bg-white rounded-3xl shadow-xl text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Check" size={28} className="text-primary" />
              </div>
              <p className="text-foreground text-lg font-semibold mb-2">Открываем почту...</p>
              <p className="text-muted-foreground text-sm">Отправьте письмо — мы ответим в течение дня.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white rounded-3xl shadow-xl p-6 md:p-8 flex flex-col gap-4 text-left">
              <div className="relative">
                <Icon name="User" size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Ваше имя"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-secondary/60 border border-border rounded-xl pl-11 pr-4 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
              <div className="relative">
                <Icon name="Phone" size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="tel"
                  placeholder="Телефон"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full bg-secondary/60 border border-border rounded-xl pl-11 pr-4 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl text-sm font-semibold tracking-wide hover:bg-primary/90 transition-colors duration-300 group mt-1"
              >
                Получить прайс-лист
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="text-muted-foreground text-xs text-center">Нажимая кнопку, вы соглашаетесь на обработку персональных данных</p>
            </form>
          )}

          <div className="mt-10">
            <a
              href="tel:+79103229182"
              className="inline-flex items-center justify-center gap-2 border border-primary-foreground/30 rounded-full px-8 py-4 text-sm font-medium tracking-wide hover:bg-white/10 transition-colors duration-300"
            >
              +7 (910) 322-91-82
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
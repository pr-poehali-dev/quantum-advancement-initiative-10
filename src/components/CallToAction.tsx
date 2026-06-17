import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { HighlightedText } from "./HighlightedText"

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
    <section id="contact" className="py-32 md:py-29 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary-foreground/60 text-sm tracking-[0.3em] uppercase mb-8">Оставить заявку</p>

          <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium leading-[1.1] tracking-tight mb-8 text-balance">
            Готовы заказать
            <br />
            вафли <HighlightedText>оптом</HighlightedText>?
          </h2>

          <p className="text-primary-foreground/70 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
            Оставьте контакт — вышлем актуальный прайс-лист и рассчитаем стоимость под ваш объём.
          </p>

          {submitted ? (
            <div className="max-w-md mx-auto py-8 px-6 border border-primary-foreground/20 text-center">
              <p className="text-primary-foreground text-lg font-medium mb-2">Открываем почту...</p>
              <p className="text-primary-foreground/60 text-sm">Отправьте письмо — мы ответим в течение дня.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-4">
              <input
                type="text"
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-transparent border border-primary-foreground/30 px-5 py-4 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground transition-colors"
              />
              <input
                type="tel"
                placeholder="Телефон"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full bg-transparent border border-primary-foreground/30 px-5 py-4 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground transition-colors"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-3 bg-primary-foreground text-foreground px-8 py-4 text-sm tracking-wide hover:bg-primary-foreground/90 transition-colors duration-300 group"
              >
                Получить прайс-лист
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="text-primary-foreground/30 text-xs">Нажимая кнопку, вы соглашаетесь на обработку персональных данных</p>
            </form>
          )}

          <div className="mt-10">
            <a
              href="tel:+79103229182"
              className="inline-flex items-center justify-center gap-2 border border-primary-foreground/30 px-8 py-4 text-sm tracking-wide hover:bg-primary-foreground/10 transition-colors duration-300"
            >
              +7 (910) 322-91-82
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
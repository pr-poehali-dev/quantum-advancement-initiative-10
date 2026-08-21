import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { HighlightedText } from "./HighlightedText"
import Icon from "@/components/ui/icon"

export function CallToAction() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const formatPhone = (value: string) => {
    let digits = value.replace(/\D/g, "")
    if (digits.startsWith("8")) digits = "7" + digits.slice(1)
    if (!digits.startsWith("7")) digits = "7" + digits
    digits = digits.slice(0, 11)

    const rest = digits.slice(1)
    let result = "+7"
    if (rest.length > 0) result += ` (${rest.slice(0, 3)}`
    if (rest.length >= 3) result += `) ${rest.slice(3, 6)}`
    if (rest.length >= 6) result += `-${rest.slice(6, 8)}`
    if (rest.length >= 8) result += `-${rest.slice(8, 10)}`
    return result
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length < phone.length && phone.endsWith(")")) {
      setPhone(phone.slice(0, -3).trimEnd())
      return
    }
    setPhone(formatPhone(e.target.value))
  }

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
                  placeholder="+7 (___) ___-__-__"
                  value={phone}
                  onChange={handlePhoneChange}
                  onFocus={() => !phone && setPhone("+7")}
                  required
                  maxLength={18}
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
        </div>
      </div>
    </section>
  )
}
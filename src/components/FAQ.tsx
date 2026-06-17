import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Какой минимальный объём заказа?",
    answer:
      "Минимальная партия зависит от вида продукции — от 1 короба. Для регулярных поставок и крупных сетей действуют специальные условия. Точный минимум по каждой позиции уточняйте у менеджера.",
  },
  {
    question: "Какие сроки доставки?",
    answer:
      "По Москве и области отгружаем в течение 1-2 дней после заказа. В регионы — от 2 до 7 дней транспортными компаниями. Все вафли поставляются с актуальными сроками годности.",
  },
  {
    question: "Можно ли заказать вафли под своей маркой?",
    answer:
      "Да, мы работаем по схеме private label. Производим вафли по вашей рецептуре или нашим проверенным рецептам и фасуем в упаковку с вашим брендом. Обсудим объёмы и условия индивидуально.",
  },
  {
    question: "Какие документы вы предоставляете?",
    answer:
      "На каждую партию предоставляем полный пакет: декларации соответствия, сертификаты качества и удостоверения. Все документы готовы для розничной торговли и сетевого ритейла.",
  },
  {
    question: "Какие способы оплаты доступны?",
    answer:
      "Работаем по безналичному расчёту с НДС и без. Для постоянных клиентов возможна отсрочка платежа. Заключаем официальный договор поставки.",
  },
  {
    question: "Как сделать оптовый заказ?",
    answer:
      "Оставьте заявку через форму или позвоните нам. Менеджер вышлет актуальный прайс-лист, поможет подобрать ассортимент и рассчитает стоимость с доставкой под ваш объём.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
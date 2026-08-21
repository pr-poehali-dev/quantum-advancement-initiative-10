import { TelegramIcon, VkIcon, MaxIcon } from "./icons/MessengerIcons"
import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer id="footer" className="py-16 md:py-24 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="/" className="inline-block mb-6">
              <img src="/images/varyunya-logo.png" alt="Варюня" className="h-12 w-auto" />
            </a>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Дистрибьютор качественной вафельной продукции: стаканчиков, рожков, тарталеток и коржей. Стабильные поставки и выгодные цены для бизнеса.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-medium mb-4">Компания</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#projects" className="hover:text-foreground transition-colors">
                  Каталог
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-foreground transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground transition-colors">
                  Условия
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium mb-4">Связь</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="mailto:calmarwaffles@gmail.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Icon name="Mail" size={16} />
                  calmarwaffles@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+79103229182" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Icon name="Phone" size={16} />
                  +7 (910) 322-91-82
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <TelegramIcon className="w-4 h-4" />
                  Телеграм
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <VkIcon className="w-4 h-4" />
                  ВКонтакте
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <MaxIcon className="w-4 h-4" />
                  МАКС
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2026 Варюня. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
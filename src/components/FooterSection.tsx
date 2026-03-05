import { Send } from "lucide-react";

const FooterSection = () => (
  <footer className="bg-hero text-hero-foreground">
    <div className="container-main px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid md:grid-cols-4 gap-10 mb-12">
        {/* Col 1 */}
        <div>
          <span className="text-2xl font-bold mb-4 block">Поток</span>
          <p className="text-sm text-hero-foreground/60 mb-4">Присоединяйтесь</p>
          <div className="flex gap-3">
            <a href="#" className="w-9 h-9 rounded-lg bg-hero-foreground/10 flex items-center justify-center hover:bg-hero-foreground/20 transition-colors">
              <Send size={16} />
            </a>
            <a href="#" className="w-9 h-9 rounded-lg bg-hero-foreground/10 flex items-center justify-center hover:bg-hero-foreground/20 transition-colors text-xs font-bold">
              VK
            </a>
            <a href="#" className="w-9 h-9 rounded-lg bg-hero-foreground/10 flex items-center justify-center hover:bg-hero-foreground/20 transition-colors text-xs font-bold">
              hh
            </a>
          </div>
          <div className="mt-4 inline-block bg-hero-foreground/10 rounded-lg px-3 py-1.5 text-xs text-hero-foreground/70">
            Sk Участник
          </div>
        </div>

        {/* Col 2 */}
        <div className="space-y-3">
          <a href="#" className="block text-sm text-hero-foreground/70 hover:text-hero-foreground transition-colors">Инвесторам</a>
          <a href="#" className="block text-sm text-hero-foreground/70 hover:text-hero-foreground transition-colors">Заемщикам</a>
          <a href="#" className="block text-sm text-hero-foreground/70 hover:text-hero-foreground transition-colors">Партнерам</a>
        </div>

        {/* Col 3 */}
        <div className="space-y-3">
          <a href="#" className="block text-sm text-hero-foreground/70 hover:text-hero-foreground transition-colors">FAQ</a>
          <a href="#" className="block text-sm text-hero-foreground/70 hover:text-hero-foreground transition-colors">Блог</a>
          <a href="#" className="block text-sm text-hero-foreground/70 hover:text-hero-foreground transition-colors">Контакты</a>
          <a href="#" className="block text-sm text-hero-foreground/70 hover:text-hero-foreground transition-colors">Документы</a>
        </div>

        {/* Col 4 */}
        <div className="space-y-3 text-sm text-hero-foreground/70">
          <a href="mailto:ok@potok.digital" className="block hover:text-hero-foreground transition-colors">ok@potok.digital</a>
          <a href="#" className="block hover:text-hero-foreground transition-colors">Поддержка в Telegram</a>
          <a href="#" className="block hover:text-hero-foreground transition-colors">Для предложений по рекламе</a>
          <a href="#" className="block hover:text-hero-foreground transition-colors">Порядок направления обращений</a>
        </div>
      </div>

      {/* Legal */}
      <div className="border-t border-hero-foreground/10 pt-8 space-y-3">
        <p className="text-xs text-hero-foreground/40 leading-relaxed">
          ООО «ПОТОК ДИДЖИТАЛ», ул. Ольховская, д. 4, к. 1, офис 128, Москва, 105066. Тел: 8 (999) 924-37-35
        </p>
        <p className="text-xs text-hero-foreground/40 leading-relaxed">
          ООО «Поток.Диджитал» включено Банком России в реестр операторов инвестиционных платформ.
        </p>
        <p className="text-xs text-hero-foreground/40 leading-relaxed">
          Инвестиции связаны с риском. Стоимость инвестиций может как расти, так и снижаться. Прошлые результаты не гарантируют доходности в будущем.
        </p>

        <div className="flex flex-wrap gap-3 pt-4">
          {["App Store", "Google Play", "AppGallery", "RuStore"].map((s) => (
            <span key={s} className="text-xs bg-hero-foreground/10 text-hero-foreground/60 rounded-lg px-4 py-2">
              {s}
            </span>
          ))}
        </div>

        <p className="text-xs text-hero-foreground/30 pt-4">© 2025 Поток</p>
      </div>
    </div>
  </footer>
);

export default FooterSection;

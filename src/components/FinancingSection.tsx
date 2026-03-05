const products = [
  {
    title: "Беззалоговый займ",
    active: true,
    desc: "Быстрое финансирование для оборотки и роста. Без залога, прозрачные условия.",
    who: "Ритейл, SaaS, производство, сервисы",
    params: ["от 1 до 50 млн ₽", "Срок 3–12 мес", "Без залога", "Быстрый анализ"],
  },
  {
    title: "Финансирование в капитал",
    active: true,
    desc: "Привлечение капитала без жестких условий фондов. Мы на стороне бизнеса.",
    who: "Компании, готовые ускориться, нанять команду, выйти на новые рынки",
    params: ["Чек от 5 млн ₽", "Оценка по рынку", "Прозрачный процесс", "Без давления по доле"],
  },
  {
    title: "Залоговый займ",
    active: false,
    desc: "Финансирование под залог имущества или оборудования с пониженной ставкой.",
    who: "Производственные компании, компании с активами",
    params: [],
  },
  {
    title: "ЦФА / облигации",
    active: false,
    desc: "Структурированные инструменты для привлечения денег дешевле и гибче.",
    who: "Зрелые компании с выручкой от 100 млн",
    params: [],
  },
  {
    title: "Конвертируемое финансирование",
    active: false,
    desc: "Займ с возможностью конвертации в долю. Гибкий инструмент для растущих компаний.",
    who: "Стартапы и растущие компании перед раундом",
    params: [],
  },
  {
    title: "Займ с погашением из выручки",
    active: false,
    desc: "Возврат привязан к вашей выручке. Платите больше, когда бизнес растет.",
    who: "Сезонный бизнес, e-commerce, подписные модели",
    params: [],
  },
];

const FinancingSection = () => {
  const scrollToForm = () => {
    document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-section-alt">
      <div className="container-main">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-center">Формы финансирования</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Вы выбираете формат, мы подбираем условия под рост бизнеса. Мы разбираем документы один раз и предлагаем оптимальный формат.
        </p>

        <div className="flex gap-5 overflow-x-auto pb-4 snap-x">
          {products.map((p, i) => (
            <div
              key={i}
              className="min-w-[280px] max-w-[320px] flex-shrink-0 snap-start bg-card rounded-xl border border-border overflow-hidden flex flex-col"
            >
              <div className={`h-1.5 ${p.active ? "bg-card-accent-border" : "bg-muted"}`} />
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="font-bold text-foreground text-lg">{p.title}</h3>
                  {!p.active && (
                    <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full">Скоро</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
                <p className="text-xs text-muted-foreground mb-4">
                  <span className="font-medium text-foreground">Кому подходит:</span> {p.who}
                </p>
                {p.params.length > 0 && (
                  <ul className="text-sm space-y-1 mb-6">
                    {p.params.map((param, j) => (
                      <li key={j} className="text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                        {param}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-auto">
                  {p.active ? (
                    <button
                      onClick={scrollToForm}
                      className="w-full bg-gold hover:bg-gold-hover text-accent-foreground font-semibold py-2.5 rounded-lg transition-colors text-sm"
                    >
                      Оставить заявку
                    </button>
                  ) : (
                    <button disabled className="w-full bg-muted text-muted-foreground font-medium py-2.5 rounded-lg text-sm cursor-not-allowed">
                      Скоро будет
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinancingSection;

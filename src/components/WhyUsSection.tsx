const rows = [
  {
    criterion: "Полка продуктов",
    potok: "Полный спектр (долг, гибрид, капитал)",
    banks: "В основном долг (кредиты)",
    vc: "Только капитал / гибриды",
  },
  {
    criterion: "Скорость и процесс",
    potok: "Онлайн, автоматизированный подбор, оперативные сроки",
    banks: "Длительно, бумажный документооборот",
    vc: "Очень длительно, индивидуальные переговоры",
  },
  {
    criterion: "Доступность",
    potok: "Максимальная, решение на основе данных",
    banks: "Низкая, требуются залог и поручительства",
    vc: "Очень низкая, только для tech-компаний",
  },
  {
    criterion: "Стоимость капитала",
    potok: "Рыночные ставки, рыночная оценка",
    banks: "Рыночная процентная ставка",
    vc: "Низкая оценка бизнеса, высокие требования",
  },
  {
    criterion: "Безопасность",
    potok: "Лицензии ЦБ + Инфраструктура Мосбиржи",
    banks: "Высокая (лицензия ЦБ)",
    vc: "Регулирование сделок, но не инфраструктуры",
  },
];

const WhyUsSection = () => (
  <section className="section-padding bg-section-alt">
    <div className="container-main">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-center">Почему выбирают нас</h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
        Все инструменты — от займа до капитала — в одном окне. Без бюрократии и жестких условий инвесторов.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-4 px-3 font-medium text-muted-foreground">Критерий</th>
              <th className="text-left py-4 px-3 font-bold text-gold">«Поток»</th>
              <th className="text-left py-4 px-3 font-medium text-muted-foreground">Банки</th>
              <th className="text-left py-4 px-3 font-medium text-muted-foreground">Венчурные фонды</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-b border-border/50">
                <td className="py-4 px-3 font-medium text-foreground">{r.criterion}</td>
                <td className="py-4 px-3 text-foreground font-medium bg-gold/5">{r.potok}</td>
                <td className="py-4 px-3 text-muted-foreground">{r.banks}</td>
                <td className="py-4 px-3 text-muted-foreground">{r.vc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default WhyUsSection;

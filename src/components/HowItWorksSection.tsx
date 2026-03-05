const steps = [
  { num: "1", title: "Заявка", desc: "Загрузите необходимые документы по компании и оставьте свои контактные данные." },
  { num: "2", title: "Анализ вашего бизнеса", desc: "Поток индивидуально рассматривает вашу заявку и автоматически рассчитывает допустимый лимит и условия." },
  { num: "3", title: "Быстрое предоставление", desc: "Решение в течение суток. Деньги поступают на счет после подписания договора." },
  { num: "4", title: "Гибкая модель возврата", desc: "Выбирайте удобный график погашения. Без скрытых комиссий и штрафов за досрочное погашение." },
];

const HowItWorksSection = () => (
  <section className="section-padding bg-background">
    <div className="container-main">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Как это работает</h2>
      <div className="grid md:grid-cols-4 gap-8">
        {steps.map((s) => (
          <div key={s.num} className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-accent-foreground font-bold text-lg mb-4">
              {s.num}
            </div>
            <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;

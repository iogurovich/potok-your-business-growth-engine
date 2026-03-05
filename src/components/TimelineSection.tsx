import { useState } from "react";

const years = [
  {
    year: "2016",
    text: "Fintech-компания, запущенная в 2016 году как внутренний стартап Альфа-банка.",
  },
  {
    year: "2019",
    text: "Юрий Попов и Антон Еременко выкупают у банка контрольный пакет, а Поток превращается в самостоятельную инвестиционную платформу.",
  },
  {
    year: "2020",
    text: "Начало работы над скорингом n-score. Юрий и Антон сами выступают в роли инвесторов. Поток становится резидентом Сколково.",
  },
  {
    year: "2021",
    text: "Лидер среди инвестиционных платформ по объему операций. Разрабатываем уникальные IT-технологии онлайн-скоринга.",
  },
  {
    year: "2022",
    text: "Поток становится официальным партнером Московской Биржи. Новый уровень надежности и прозрачности.",
  },
];

const TimelineSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="section-padding bg-section-alt overflow-hidden">
      <div className="container-main">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">
          Ключевые точки развития Потока
        </h2>

        <div className="relative mb-12">
          {/* Large background year */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            <span className="text-[12rem] md:text-[16rem] font-extrabold text-foreground/[0.03] leading-none">
              {years[active].year}
            </span>
          </div>

          <div className="relative z-10 max-w-2xl mx-auto text-center py-12">
            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
              <div className="w-full h-40 bg-muted rounded-xl mb-6 flex items-center justify-center">
                <span className="text-4xl font-bold text-muted-foreground/30">{years[active].year}</span>
              </div>
              <p className="text-foreground leading-relaxed text-lg">{years[active].text}</p>
            </div>
          </div>
        </div>

        {/* Year nav */}
        <div className="flex justify-center gap-2 md:gap-4">
          {years.map((y, i) => (
            <button
              key={y.year}
              onClick={() => setActive(i)}
              className={`px-4 py-2 rounded-lg font-semibold text-sm transition-colors ${
                i === active
                  ? "bg-gold text-accent-foreground"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {y.year}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;

import { Building2, TrendingUp, Users } from "lucide-react";

const pains = [
  {
    icon: Building2,
    text: "Банк требует залог, поручительство и горы документов, а решение тянется неделями",
  },
  {
    icon: TrendingUp,
    text: "Вы растете, но свободных денег на масштабирование нет, а кредитная история не помогает",
  },
  {
    icon: Users,
    text: "Инвесторы предлагают деньги, но хотят контроль и большую долю в бизнесе",
  },
];

const PainPointsSection = () => (
  <section className="section-padding bg-background">
    <div className="container-main">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Знакомо?</h2>
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {pains.map((p, i) => (
          <div key={i} className="bg-secondary rounded-xl p-8 flex flex-col items-start gap-4">
            <div className="bg-hero rounded-lg p-3">
              <p.icon size={24} className="text-gold" />
            </div>
            <p className="text-foreground/80 leading-relaxed">{p.text}</p>
          </div>
        ))}
      </div>
      <div className="bg-gold rounded-xl p-6 md:p-8 text-center">
        <p className="text-accent-foreground font-semibold text-lg md:text-xl leading-relaxed">
          Поток решает эти проблемы. Мы подбираем формат финансирования под ваш бизнес, а&nbsp;не&nbsp;наоборот.
        </p>
      </div>
    </div>
  </section>
);

export default PainPointsSection;

import { Shield, Award } from "lucide-react";
import officeImg from "@/assets/office-building.jpg";

const metrics = [
  { value: "10 лет", desc: "работаем с бизнесом" },
  { value: "34,9 млрд ₽", desc: "выдали займов с 2016 года" },
  { value: "24 часа", desc: "рассмотрение заявки" },
  { value: "Минимум документов", desc: "Выписка, паспорта и простая анкета" },
];

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-hero">
      <div className="container-main px-4 sm:px-6 lg:px-8 pt-10 pb-0">
        {/* Badges */}
        <div className="flex flex-wrap gap-3 mb-10">
          <div className="flex items-center gap-2 bg-hero-foreground/10 rounded-full px-4 py-2 text-xs text-hero-foreground/90">
            <Award size={16} className="text-gold" />
            Официальный партнер Московской Биржи
          </div>
          <div className="flex items-center gap-2 bg-hero-foreground/10 rounded-full px-4 py-2 text-xs text-hero-foreground/90">
            <Shield size={16} className="text-gold" />
            Регистрация в реестре ЦБ
          </div>
        </div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-10 items-center pb-16">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-hero-foreground leading-tight mb-6">
              Финансирование для развития вашего бизнеса
            </h1>
            <p className="text-lg text-hero-foreground/70 mb-8 max-w-lg">
              Финансирование для компаний, готовых расти — от оборотного займа до инвестиций в капитал.
            </p>
            <button
              onClick={scrollToForm}
              className="bg-gold hover:bg-gold-hover text-accent-foreground font-semibold px-8 py-3.5 rounded-lg transition-colors text-base"
            >
              Оставить заявку
            </button>
          </div>
          <div className="hidden md:block">
            <img src={officeImg} alt="Современный офис" className="rounded-2xl w-full object-cover max-h-[380px]" />
          </div>
        </div>
      </div>

      {/* Metrics strip */}
      <div className="bg-hero-foreground/5 border-t border-hero-foreground/10">
        <div className="container-main px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((m, i) => (
            <div key={i} className="text-center md:text-left">
              <div className="text-xl lg:text-2xl font-bold text-gold mb-1">{m.value}</div>
              <div className="text-sm text-hero-foreground/60">{m.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

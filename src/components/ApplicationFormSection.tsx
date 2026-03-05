import { useState } from "react";

const ApplicationFormSection = () => {
  const [agreed, setAgreed] = useState(false);

  return (
    <section id="application-form" className="section-padding bg-background">
      <div className="container-main">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
          Подобрать формат финансирования
        </h2>

        <div className="max-w-lg mx-auto bg-hero rounded-2xl p-8 md:p-10 shadow-xl">
          <h3 className="text-2xl font-bold text-hero-foreground mb-8">Оставить заявку</h3>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Имя"
              className="w-full bg-hero-foreground/10 border border-hero-foreground/20 rounded-lg px-4 py-3 text-hero-foreground placeholder:text-hero-foreground/40 focus:outline-none focus:ring-2 focus:ring-gold/50"
            />
            <input
              type="tel"
              placeholder="Телефон"
              className="w-full bg-hero-foreground/10 border border-hero-foreground/20 rounded-lg px-4 py-3 text-hero-foreground placeholder:text-hero-foreground/40 focus:outline-none focus:ring-2 focus:ring-gold/50"
            />
            <input
              type="text"
              placeholder="Планируемая сумма инвестиций"
              className="w-full bg-hero-foreground/10 border border-hero-foreground/20 rounded-lg px-4 py-3 text-hero-foreground placeholder:text-hero-foreground/40 focus:outline-none focus:ring-2 focus:ring-gold/50"
            />

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={agreed}
                onChange={() => setAgreed(!agreed)}
                className="mt-1 accent-gold"
              />
              <span className="text-sm text-hero-foreground/60">
                Согласие на{" "}
                <a href="#" className="text-gold underline">обработку персональных данных</a>
              </span>
            </label>

            <button
              type="submit"
              disabled={!agreed}
              className="w-full bg-gold hover:bg-gold-hover disabled:opacity-50 disabled:cursor-not-allowed text-accent-foreground font-semibold py-3.5 rounded-lg transition-colors"
            >
              Отправить
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ApplicationFormSection;

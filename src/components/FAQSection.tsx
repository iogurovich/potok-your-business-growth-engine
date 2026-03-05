import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Какие документы нужны?", a: "Минимальный набор: презентация, финансовая модель и бизнес-план. Все загружается в одном окне." },
  { q: "Сколько занимает рассмотрение?", a: "Обычно 24–48 часов." },
  { q: "Какие компании подходят?", a: "Малый и средний бизнес с растущей выручкой, готовый к займу, капиталу или гибридным инструментам." },
  { q: "Что если бизнес сезонный?", a: "Гибкие условия возврата: платите процент от выручки, нагрузка растет или снижается автоматически." },
  { q: "Как определяется оценка доли?", a: "На основе финансовых показателей, рынка и стратегии роста компании." },
  { q: "Кто принимает решение о доле и условиях?", a: "Согласовывается совместно с вашим менеджером Поток. Все прозрачно и на стороне бизнеса." },
  { q: "Можно ли сочетать несколько продуктов?", a: "Да, единый процесс онбординга позволяет комбинировать займ, капитал и конвертируемые инструменты." },
];

const FAQSection = () => (
  <section className="section-padding bg-section-alt">
    <div className="container-main max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Часто задаваемые вопросы</h2>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`q-${i}`} className="bg-card border border-border rounded-xl px-6 overflow-hidden">
            <AccordionTrigger className="text-foreground font-medium text-left hover:no-underline py-5">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;

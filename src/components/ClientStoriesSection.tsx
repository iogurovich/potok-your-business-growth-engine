import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const clients = [
  'ООО "РОУЗВИЛЬ"',
  'ООО "Химическая компания ЛИК"',
  'ООО "ТУРИНФО ГРУППА"',
  'ИП Дементьев "ОКО365"',
  'ООО "РЫБПРОМХОЗ"',
];

const ClientStoriesSection = () => {
  const [offset, setOffset] = useState(0);
  const maxOffset = Math.max(0, clients.length - 3);

  return (
    <section className="section-padding bg-background">
      <div className="container-main">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Истории наших клиентов</h2>

        <div className="relative">
          <button
            onClick={() => setOffset(Math.max(0, offset - 1))}
            disabled={offset === 0}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border shadow-md flex items-center justify-center disabled:opacity-30 hover:bg-secondary transition-colors"
          >
            <ChevronLeft size={20} className="text-foreground" />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex gap-5 transition-transform duration-300"
              style={{ transform: `translateX(-${offset * 33.33}%)` }}
            >
              {clients.map((c, i) => (
                <div key={i} className="min-w-[calc(33.33%-14px)] flex-shrink-0 max-md:min-w-[80%]">
                  <div className="bg-secondary rounded-2xl overflow-hidden">
                    <div className="p-4">
                      <span className="text-sm font-semibold text-destructive">{c}</span>
                    </div>
                    <div className="aspect-video bg-muted flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-hero/80 flex items-center justify-center">
                        <Play size={24} className="text-hero-foreground ml-1" />
                      </div>
                    </div>
                    <div className="p-4">
                      <button className="w-full bg-card border border-border text-foreground font-medium py-2.5 rounded-lg text-sm hover:bg-secondary transition-colors">
                        Смотреть видео
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => setOffset(Math.min(maxOffset, offset + 1))}
            disabled={offset >= maxOffset}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border shadow-md flex items-center justify-center disabled:opacity-30 hover:bg-secondary transition-colors"
          >
            <ChevronRight size={20} className="text-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientStoriesSection;

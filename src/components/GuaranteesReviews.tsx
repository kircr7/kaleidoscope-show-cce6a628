import { FileCheck, ShieldCheck, Clock, RefreshCw, Star } from "lucide-react";

const guarantees = [
  {
    icon: FileCheck,
    title: "Строго по ГОСТ",
    description:
      "100% соблюдение масштабов (1:1), правильная фальцовка под формат томов А4.",
  },
  {
    icon: ShieldCheck,
    title: "Конфиденциальность (NDA)",
    description:
      "Гарантируем неразглашение коммерческой тайны и сохранность ваших чертежей.",
  },
  {
    icon: Clock,
    title: "Сроки горят — мы печатаем",
    description:
      "Выдача готовой проектной документации точно в согласованный срок, возможна печать день в день.",
  },
  {
    icon: RefreshCw,
    title: "Контроль качества",
    description:
      "Бесплатная перепечатка за наш счёт при обнаружении любого брака (полосы, съехавший масштаб).",
  },
];

const YandexLogo = () => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10"
    aria-hidden="true"
  >
    <rect width="32" height="32" rx="8" fill="#FC3F1D" />
    <path
      d="M17.5 7H14v12.5h2.1c2.5 0 4.1-1.6 4.1-4.1V11c0-2.5-1.6-4-3.7-4zM17.4 16c0 1.2-.6 1.9-1.8 1.9h-.1V9h.1c1.2 0 1.8.7 1.8 1.9v5.1zM9.9 7h2.3v13H9.9V7z"
      fill="white"
    />
  </svg>
);

const GuaranteesReviews = () => {
  return (
    <section className="py-16 sm:py-24 px-3 sm:px-4">
      <div className="container max-w-6xl mx-auto">
        {/* Guarantees */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Гарантии и отзывы
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base">
            Работаем с проектными организациями, строителями и проектировщиками — понимаем стандарты и сроки B2B.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {guarantees.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl bg-card border border-border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_8px_40px_-12px_hsla(var(--primary),0.12)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[hsla(195,80%,45%,0.08)] via-transparent to-[hsla(330,80%,50%,0.06)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center mb-4 transition-colors group-hover:border-primary/30">
                    <Icon className="w-6 h-6 text-foreground" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Yandex Reviews Widget */}
        <div className="mt-12 sm:mt-16">
          <div className="relative max-w-3xl mx-auto rounded-3xl bg-card border border-border p-6 sm:p-10 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[hsla(220,80%,55%,0.12)] blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[hsla(340,80%,55%,0.10)] blur-[80px] rounded-full pointer-events-none" />

            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              <div className="flex-shrink-0">
                <YandexLogo />
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                  <span className="text-foreground font-bold text-lg sm:text-xl">
                    Рейтинг на Яндекс Картах
                  </span>
                  <span className="text-foreground font-black text-lg sm:text-xl">5.0</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                      strokeWidth={0}
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Реальные отзывы клиентов о печати проектной документации
                </p>
              </div>

              <div className="flex-shrink-0">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-bold text-black bg-foreground hover:bg-foreground/90 transition-colors active:scale-95"
                >
                  Читать отзывы клиентов
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteesReviews;

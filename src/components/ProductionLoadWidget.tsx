import { useEffect, useRef, useState } from "react";

const TARGET_LOAD = 82;
const TARGET_SQM = 1450;
const NEXT_SLOT = "14:30";

/** Плавный счётчик с easing, стартует по появлению в вьюпорте */
function useCountUp(target: number, active: boolean, duration = 1600) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(target * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);

  return value;
}

const ProductionLoadWidget = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [load, setLoad] = useState(TARGET_LOAD);
  const [sqmTarget, setSqmTarget] = useState(TARGET_SQM);

  // Появление в вьюпорте
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setInView(true),
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // «Живая» загрузка: ±1–2% раз в 15–30 сек
  useEffect(() => {
    if (!inView) return;
    let timeout: ReturnType<typeof setTimeout>;
    const schedule = () => {
      timeout = setTimeout(() => {
        setLoad((prev) => {
          const delta = (Math.random() < 0.5 ? -1 : 1) * (Math.random() < 0.5 ? 1 : 2);
          return Math.min(94, Math.max(68, prev + delta));
        });
        schedule();
      }, 15000 + Math.random() * 15000);
    };
    schedule();
    return () => clearTimeout(timeout);
  }, [inView]);

  // Медленный рост отпечатанных м²
  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => {
      setSqmTarget((prev) => prev + Math.round(1 + Math.random() * 4));
    }, 9000);
    return () => clearInterval(id);
  }, [inView]);

  const animatedLoad = useCountUp(load, inView, 1800);
  const animatedSqm = useCountUp(sqmTarget, inView, 2000);

  const radius = 88;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - animatedLoad / 100);

  return (
    <section className="px-3 sm:px-4 py-12 sm:py-20">
      <div
        ref={ref}
        className="container max-w-5xl mx-auto rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm"
      >
        <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-10 md:gap-16 p-8 sm:p-12 items-center">
          {/* Кольцевой индикатор */}
          <div className="relative mx-auto w-[200px] h-[200px]">
            <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
              <circle
                cx="100"
                cy="100"
                r={radius}
                fill="none"
                stroke="currentColor"
                strokeWidth="6"
                className="text-border/70"
              />
              <circle
                cx="100"
                cy="100"
                r={radius}
                fill="none"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                className="text-primary transition-[stroke-dashoffset] duration-1000 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl sm:text-5xl font-bold tracking-tight tabular-nums text-foreground">
                {Math.round(animatedLoad)}
                <span className="text-xl align-top text-muted-foreground">%</span>
              </span>
              <span className="mt-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                загрузка
              </span>
            </div>
          </div>

          {/* Текстовая часть */}
          <div className="space-y-8 text-center md:text-left">
            <div>
              <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                Текущая загрузка производства
              </p>
              <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Производство работает в штатном режиме
              </h2>
            </div>

            <div className="h-px w-full bg-border/60" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Отпечатано за сегодня
                </p>
                <p className="mt-2 text-3xl font-bold tracking-tight tabular-nums text-foreground">
                  {Math.round(animatedSqm).toLocaleString("ru-RU")}
                  <span className="ml-1.5 text-base font-medium text-muted-foreground">м²</span>
                </p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Формат работ
                </p>
                <p className="mt-2 text-3xl font-bold tracking-tight text-foreground">
                  А0<span className="text-muted-foreground">–</span>А4
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-3 rounded-full border border-border/60 bg-background/60 px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-sm text-muted-foreground">
                Ближайшее окно для старта печати:{" "}
                <span className="font-semibold text-foreground tabular-nums">{NEXT_SLOT}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductionLoadWidget;

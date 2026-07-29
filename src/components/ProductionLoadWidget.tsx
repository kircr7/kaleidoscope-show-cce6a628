import { useEffect, useRef, useState } from "react";

/** Базовая загрузка: плавный рост 65% → 80% с 10:00 до 19:00 */
function baseLoadForHour(h: number, m: number) {
  const t = h + m / 60;
  if (t <= 10) return 65;
  if (t >= 19) return 80;
  return 65 + ((t - 10) / 9) * 15;
}


/** Диапазоны вечерних значений по форматам (листы) */
const FORMATS = [
  { key: "A4", label: "А4", min: 7000, max: 12000 },
  { key: "A3", label: "А3", min: 2500, max: 5500 },
  { key: "A2", label: "А2", min: 1200, max: 2000 },
  { key: "A1", label: "А1", min: 1000, max: 1500 },
  { key: "A0", label: "А0", min: 800, max: 1200 },
] as const;

/** Детерминированный псевдослучайный генератор по числовому сиду */
function seeded(seed: number) {
  let s = (seed * 2654435761) % 2147483647;
  if (s <= 0) s += 2147483646;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

/**
 * Блок дней: значения меняются местами раз в 2–3 дня.
 * Считаем номер дня от эпохи и группируем в блоки переменной длины.
 */
function dayBlock(now: Date) {
  const day = Math.floor(
    new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime() / 86400000
  );
  // блоки по 2 или 3 дня, чередование зависит от самого дня
  let block = 0;
  let cursor = 0;
  const rnd = seeded(1234);
  while (cursor <= day % 3650) {
    cursor += rnd() < 0.5 ? 2 : 3;
    block++;
  }
  return block + Math.floor(day / 3650) * 1000;
}

/** Форматы, значения которых меняются раз в 2–3 дня */
const ROTATING = new Set(["A2", "A1", "A0"]);

/** Вечерние цели по форматам: А4 и А3 фиксированы, А2/А1/А0 меняются раз в 2–3 дня */
function eveningTargets(now: Date) {
  const rndRot = seeded(dayBlock(now) + 77);
  const rndFixed = seeded(4242);
  const out: Record<string, number> = {};
  for (const f of FORMATS) {
    const rnd = ROTATING.has(f.key) ? rndRot : rndFixed;
    const raw = f.min + rnd() * (f.max - f.min);
    out[f.key] = Math.round(raw / 10) * 10;
  }
  return out;
}

/** Доля рабочего дня (10:00 → 17:00), пройденная к текущему моменту */
function dayProgress(now: Date) {
  const minutes = (now.getHours() - 10) * 60 + now.getMinutes();
  const total = 7 * 60; // 10:00 → 17:00
  return Math.min(1, Math.max(0, minutes / total));
}



/** Текущие значения по форматам: доля дня × вечерняя цель */
function sheetsForNow(now: Date) {
  const targets = eveningTargets(now);
  const p = dayProgress(now);
  const out: Record<string, number> = {};
  for (const f of FORMATS) {
    out[f.key] = Math.round((targets[f.key] * p) / 10) * 10;
  }
  return out;
}

/** Ближайшее окно: текущее время + 30 минут */
function nextSlot(now: Date) {
  const d = new Date(now.getTime() + 30 * 60 * 1000);
  return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
}

/** Плавный счётчик: первый раз считает от 0, далее плавно доходит от текущего значения */
function useCountUp(target: number, active: boolean, duration = 1600) {
  const [value, setValue] = useState(0);
  const valueRef = useRef(0);

  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const from = valueRef.current;
    const delta = target - from;
    if (Math.abs(delta) < 0.001) return;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const next = from + delta * eased;
      valueRef.current = next;
      setValue(next);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);

  return value;
}

const FORMAT_ACCENTS: Record<string, string> = {
  A4: "from-sky-500/25 to-cyan-400/10 text-sky-300 border-sky-400/30",
  A3: "from-violet-500/25 to-fuchsia-400/10 text-violet-300 border-violet-400/30",
  A2: "from-emerald-500/25 to-teal-400/10 text-emerald-300 border-emerald-400/30",
  A1: "from-amber-500/25 to-orange-400/10 text-amber-300 border-amber-400/30",
  A0: "from-rose-500/25 to-pink-400/10 text-rose-300 border-rose-400/30",
};

const FormatStat = ({
  label,
  target,
  active,
  accent,
}: {
  label: string;
  target: number;
  active: boolean;
  accent: string;
}) => {
  const value = useCountUp(target, active, 2000);
  return (
    <div
      className={`flex flex-col items-center rounded-xl border bg-gradient-to-br p-3 transition-transform duration-300 hover:-translate-y-0.5 ${accent}`}
    >
      <span className="text-[11px] uppercase tracking-[0.2em] opacity-90">{label}</span>
      <span className="mt-1 text-xl sm:text-2xl font-bold tracking-tight tabular-nums text-foreground">
        {Math.round(value).toLocaleString("ru-RU")}
      </span>
    </div>
  );
};


const ProductionLoadWidget = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [mounted, setMounted] = useState(false);
  const baseRef = useRef(75);
  const [load, setLoad] = useState(75);
  const [sheets, setSheets] = useState<Record<string, number>>({
    A4: 0,
    A3: 0,
    A2: 0,
    A1: 0,
    A0: 0,
  });
  const [slot, setSlot] = useState("--:--");

  // Инициализация по локальному времени пользователя
  useEffect(() => {
    const now = new Date();
    const base = baseLoadForHour(now.getHours(), now.getMinutes());
    baseRef.current = base;
    setLoad(base);
    setSheets(sheetsForNow(now));
    setSlot(nextSlot(now));
    setMounted(true);
  }, []);

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

  // «Живая» загрузка: небольшие колебания ±1% вокруг базового значения текущего часа
  useEffect(() => {
    if (!inView) return;
    let timeout: ReturnType<typeof setTimeout>;
    const schedule = () => {
      timeout = setTimeout(() => {
        const now = new Date();
        const base = baseLoadForHour(now.getHours(), now.getMinutes());
        baseRef.current = base;
        const delta = Math.random() < 0.5 ? -1 : 0;
        setLoad(Math.min(80, Math.max(65, Math.round(base) + delta)));
        schedule();
      }, 15000 + Math.random() * 5000);
    };
    schedule();
    return () => clearTimeout(timeout);
  }, [inView]);


  // Медленный рост количества листов и обновление окна печати
  useEffect(() => {
    if (!inView) return;
    let timeout: ReturnType<typeof setTimeout>;
    const schedule = () => {
      timeout = setTimeout(() => {
        setSheets((prev) => ({
          A4: prev.A4 + 6 + Math.round(Math.random() * 8),
          A3: prev.A3 + 3 + Math.round(Math.random() * 4),
          A2: prev.A2 + 1 + Math.round(Math.random() * 2),
          A1: prev.A1 + 1 + Math.round(Math.random() * 2),
          A0: prev.A0 + Math.round(Math.random()),
        }));
        setSlot(nextSlot(new Date()));
        schedule();
      }, 40000 + Math.random() * 20000);
    };
    schedule();
    return () => clearTimeout(timeout);
  }, [inView]);

  const active = inView && mounted;
  const animatedLoad = useCountUp(load, active, 1800);

  const radius = 76;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - animatedLoad / 100);

  // Цвет: изумрудно-зелёная гамма, слегка темнеет с ростом загрузки
  const ratio = Math.min(1, Math.max(0, (animatedLoad - 65) / (80 - 65)));
  const hue = 158 - 8 * ratio;
  const mainColor = `hsl(${hue} 62% 45%)`;
  const lightColor = `hsl(${hue} 58% 60%)`;

  return (
    <section id="production-load" className="px-3 sm:px-4 py-12 sm:py-20">
      <div
        ref={ref}
        className="container max-w-5xl mx-auto relative overflow-hidden rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm"
      >
        <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-10 md:gap-16 p-8 sm:p-12 items-center relative">
          {/* Кольцевой индикатор */}
          <div className="relative mx-auto w-[200px] h-[200px]">
            <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90 overflow-visible">
              <defs>
                <linearGradient id="loadGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor={lightColor} />
                  <stop offset="100%" stopColor={mainColor} />
                </linearGradient>
              </defs>
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
                stroke="url(#loadGrad)"
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                style={{ filter: `drop-shadow(0 0 6px ${mainColor}80)` }}
                className="transition-[stroke-dashoffset] duration-1000 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span
                className="text-4xl sm:text-5xl font-bold tracking-tight tabular-nums transition-colors duration-1000"
                style={{ color: lightColor }}
              >
                {Math.round(animatedLoad)}
                <span className="text-xl align-top">%</span>
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
              <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-foreground via-sky-200 to-violet-200 bg-clip-text text-transparent">
                Работаем в штатном режиме и принимаем заказы
              </h2>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-sky-500/50 via-violet-500/40 to-transparent" />


            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Отпечатано за сегодня, листов
              </p>
              <div className="mt-4 grid grid-cols-3 sm:grid-cols-5 gap-3">
                {FORMATS.map((f) => (
                  <FormatStat
                    key={f.key}
                    label={f.label}
                    target={sheets[f.key] ?? 0}
                    active={active}
                    accent={FORMAT_ACCENTS[f.key]}
                  />
                ))}
              </div>
            </div>

            <div className="inline-flex items-center gap-3 rounded-full border border-emerald-400/40 bg-gradient-to-r from-emerald-500/15 to-teal-400/10 px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>



              <span className="text-sm text-muted-foreground">
                Ближайшее окно для старта печати:{" "}
                <span className="font-semibold text-foreground tabular-nums">{slot}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductionLoadWidget;

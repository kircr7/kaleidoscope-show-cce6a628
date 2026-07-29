import { useState, useEffect } from 'react';

/** Базовая загрузка: плавный рост 65% → 80% с 10:00 до 19:00 */
function baseLoadForHour(h: number, m: number) {
  const t = h + m / 60;
  if (t <= 10) return 65;
  if (t >= 19) return 80;
  return 65 + ((t - 10) / 9) * 15;
}

const FloatingLoadButton = () => {
  const [load, setLoad] = useState(65);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const base = baseLoadForHour(now.getHours(), now.getMinutes());
      const delta = Math.random() < 0.5 ? -1 : 0;
      setLoad(Math.min(80, Math.max(65, Math.round(base) + delta)));
    };
    update();
    const id = setInterval(update, 20000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="fixed bottom-20 sm:bottom-5 left-3 sm:left-5 z-[90] flex items-center group font-sans animate-fade-in">
      <a
        href="/#production-load"
        aria-label={`Загруженность производства ${load}%`}
        className="relative flex items-center justify-center h-12 px-5 overflow-hidden rounded-full bg-[hsl(0,0%,8%)] border border-emerald-400/40 text-white text-xs font-bold shadow-[0_0_15px_rgba(16,185,129,0.35)] hover:shadow-[0_0_25px_rgba(16,185,129,0.55)] hover:scale-105 transition-all duration-500"
      >
        <span
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-emerald-500/60 to-emerald-400/30 transition-[width] duration-[1200ms] ease-out"
          style={{ width: `${load}%` }}
        />
        <span className="relative whitespace-nowrap">Загруженность</span>
      </a>

      <span className="absolute left-full ml-3 bg-white/95 backdrop-blur text-slate-700 text-xs font-semibold py-2 px-3.5 rounded-xl shadow-lg transition-all duration-500 pointer-events-none whitespace-nowrap border border-slate-100 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0">
        Работаем и принимаем заказы · {load}%
        <span className="absolute top-1/2 -left-1 -mt-1 w-2 h-2 bg-white border-l border-b border-slate-100 transform rotate-45" />
      </span>

    </div>
  );
};

export default FloatingLoadButton;

import { useEffect, useState } from "react";

/** Базовая загрузка: плавный рост 65% → 80% с 10:00 до 19:00 */
function baseLoadForHour(h: number, m: number) {
  const t = h + m / 60;
  if (t <= 10) return 65;
  if (t >= 19) return 80;
  return 65 + ((t - 10) / 9) * 15;
}

const LoadStatusBadge = ({ className = "" }: { className?: string }) => {
  const [load, setLoad] = useState<number | null>(null);

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
    <a
      href="/#production-load"
      className={`group relative inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-white/50 transition-all duration-300 hover:bg-white/[0.06] hover:text-white active:scale-95 ${className}`}
    >
      <span className="relative flex h-2 w-2 flex-shrink-0">
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
      </span>
      <span className="whitespace-nowrap">Загруженность</span>

      {/* Подсказка при наведении */}
      <span className="pointer-events-none absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-lg border border-emerald-400/30 bg-[hsl(0,0%,8%)]/95 px-3 py-1.5 text-[11px] font-medium text-emerald-200 opacity-0 shadow-lg backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        Сейчас работаем и принимаем заказы
      </span>

    </a>
  );

};

export default LoadStatusBadge;

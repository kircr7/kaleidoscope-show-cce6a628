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
      className={`inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1.5 transition-colors hover:bg-emerald-500/20 ${className}`}
    >
      <span className="relative flex h-2 w-2 flex-shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
      </span>
      <span className="text-[11px] font-medium text-emerald-200 whitespace-nowrap">
        Работаем и принимаем заказы
        {load !== null && (
          <span className="ml-1 tabular-nums text-emerald-300/80">· {load}%</span>
        )}
      </span>
    </a>
  );
};

export default LoadStatusBadge;

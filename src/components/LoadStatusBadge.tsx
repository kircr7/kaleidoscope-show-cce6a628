const LoadStatusBadge = ({ className = "" }: { className?: string }) => {


  return (
    <a
      href="/#production-load"
      className={`group relative inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-white/50 transition-all duration-300 hover:bg-white/[0.06] hover:text-white active:scale-95 ${className}`}
    >
      <span className="whitespace-nowrap">Загруженность</span>



      {/* Подсказка при наведении */}
      <span className="pointer-events-none absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-lg border border-emerald-400/30 bg-[hsl(0,0%,8%)]/95 px-3 py-1.5 text-[11px] font-medium text-emerald-200 opacity-0 shadow-lg backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        Сейчас работаем и принимаем заказы
      </span>

    </a>
  );

};

export default LoadStatusBadge;

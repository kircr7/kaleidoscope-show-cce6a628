import CentralIcon from "./CentralIcon";
import IconCarousel from "./IconCarousel";

const CarouselSection = () => {
  return (
    <section className="w-full max-w-6xl mx-auto py-8 md:py-14 relative -mt-4 z-0">
      {/* Soft radial glow from center icon */}
      <div
        className="absolute pointer-events-none z-0"
        style={{
          top: "40%",
          left: "50%",
          width: "400%",
          height: "450%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, hsl(0 0% 22% / 0.6) 0%, hsl(0 0% 16% / 0.25) 35%, hsl(0 0% 12% / 0.1) 55%, transparent 85%)",
        }}
      />
      <div className="relative h-72 md:h-96 flex items-center justify-center py-10">
        {/* Left half - small icons flowing INTO center */}
        <div className="absolute left-0 top-0 bottom-0 w-1/2 flex items-center overflow-hidden overflow-y-visible">
          {/* Fade mask: visible on left, fades out on right (behind center icon) */}
          <div
            className="w-full h-full flex items-center"
            style={{
              maskImage: "linear-gradient(to right, white 20%, white 60%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to right, white 20%, white 60%, transparent 100%)",
            }}
          >
            <IconCarousel side="small" />
          </div>
        </div>

        {/* Right half - large icons flowing OUT of center */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 flex items-center overflow-hidden">
          <div
            className="w-full h-full flex items-center"
            style={{
              maskImage: "linear-gradient(to right, transparent 0%, white 30%, white 80%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, white 30%, white 80%, transparent 100%)",
            }}
          >
            <IconCarousel side="large" />
          </div>
        </div>

        {/* Center icon on top */}
        <div
          className="relative z-20 opacity-0"
          style={{
            animation: "scale-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 400ms forwards",
          }}
        >
          <CentralIcon />
        </div>
      </div>

      {/* Labels */}
      <div
        className="relative w-full -mt-2 opacity-0"
        style={{
          animation: "reveal-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 800ms forwards",
        }}
      >
        <div className="flex justify-between items-start px-2 sm:px-8">
          <span className="text-[11px] sm:text-sm text-white flex-1 text-center">Ваши файлы</span>
          <span className="text-[11px] sm:text-sm text-white flex-1 text-center font-bold">
            <span className="inline-block" style={{ color: "hsl(210, 85%, 55%)", animation: "sparkle 5s ease-in-out infinite" }}>✦</span> <span className="hidden sm:inline">Типография</span> ПринтПРО <span className="inline-block" style={{ color: "hsl(210, 85%, 55%)", animation: "sparkle 5s ease-in-out 2.5s infinite" }}>✦</span>
          </span>
          <span className="text-[11px] sm:text-sm text-white flex-1 text-center">Готовая продукция</span>
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;

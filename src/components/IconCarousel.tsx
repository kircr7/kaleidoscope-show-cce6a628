import { FileText, FileType, FileSpreadsheet, Image, Type, FileCode } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// =============================================
// 🖼️ КАРТИНКИ ДЛЯ БОЛЬШИХ КАРТОЧЕК
// Чтобы заменить картинку:
// 1. Положите новый файл в папку src/assets/
// 2. Замените путь в нужном import ниже
// =============================================
import outputBlueprint from "@/assets/output-blueprint.jpg";  // Картинка для "Чертежи"
import outputDocs from "@/assets/output-docs.jpg";            // Картинка для "Документы"
import outputPoster from "@/assets/output-poster.jpg";        // Картинка для "Постеры"
import outputPlan from "@/assets/output-plan.jpg";            // Картинка для "Планы"
import outputSpec from "@/assets/output-spec.jpg";            // Картинка для "Спецификации"
import outputSection from "@/assets/output-section.jpg";      // Картинка для "Разрезы"

interface SmallItem {
  icon: LucideIcon;
  label: string;
}

interface LargeItem {
  image: string;
  label: string;
}

const smallItems: SmallItem[] = [
  { icon: FileText, label: "PDF" },
  { icon: FileCode, label: "DWG" },
  { icon: FileType, label: "Word" },
  { icon: FileSpreadsheet, label: "Excel" },
  { icon: Image, label: "JPEG" },
  { icon: Type, label: "TXT" },
  { icon: FileCode, label: "SVG" },
  { icon: Image, label: "PNG" },
];

// =============================================
// 📝 НАЗВАНИЯ И КАРТИНКИ БОЛЬШИХ КАРТОЧЕК
// Чтобы изменить название — поменяйте label
// Чтобы изменить картинку — поменяйте image
// =============================================
const largeItems: LargeItem[] = [
  { image: outputBlueprint, label: "Чертежи" },
  { image: outputPlan, label: "Планы" },
  { image: outputDocs, label: "Документация" },
  { image: outputPoster, label: "Проектная" },
  { image: outputSpec, label: "Рабочая" },
  { image: outputSection, label: "Исполнительная" },
];

interface Props {
  side: "small" | "large";
}

const IconCarousel = ({ side }: Props) => {
  const isSmall = side === "small";
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isDragging = React.useRef(false);
  const startX = React.useRef(0);
  const scrollLeft = React.useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (containerRef.current?.offsetLeft || 0);
    scrollLeft.current = containerRef.current?.scrollLeft || 0;
    if (containerRef.current) containerRef.current.style.animationPlayState = "paused";
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - (containerRef.current.offsetLeft || 0);
    containerRef.current.style.transform = `translateX(${x - startX.current}px)`;
  };
  const handleMouseUp = () => {
    isDragging.current = false;
    if (containerRef.current) containerRef.current.style.animationPlayState = "";
  };

  if (isSmall) {
    const track = [...smallItems, ...smallItems, ...smallItems, ...smallItems];
    return (
      <div
        ref={containerRef}
        className="flex items-center gap-3 md:gap-4 animate-carousel-to-right cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {track.map((item, i) => (
          <div key={i} className="flex-shrink-0 transition-transform duration-300 hover:scale-[2] hover:z-30 relative">
            <div className="w-20 h-28 md:w-24 md:h-34 rounded-lg bg-black border border-[hsl(0_0%_30%)]/50 p-1.5 flex flex-col gap-1.5 shadow-lg shadow-black/50">
              <div className="flex-1 rounded border border-[hsl(0_0%_30%)]/60 flex items-center justify-center">
                <item.icon className="w-7 h-7 md:w-9 md:h-9 text-[hsl(0_0%_55%)]" strokeWidth={0.7} />
              </div>
              <div className="rounded border border-[hsl(0_0%_30%)]/60 py-1.5 flex items-center justify-center">
                <span className="text-[9px] md:text-xs text-[hsl(0_0%_60%)] tracking-wider">{item.label}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  const track = [...largeItems, ...largeItems, ...largeItems, ...largeItems];
  return (
    <div
      ref={containerRef}
      className="flex items-center gap-3 md:gap-4 animate-carousel-from-center cursor-grab active:cursor-grabbing"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {track.map((item, i) => (
        <div key={i} className="flex-shrink-0 transition-transform duration-300 hover:scale-[2] hover:z-30 relative">
          <div className="w-36 h-32 md:w-44 md:h-40 bg-[hsl(0_0%_4%)] border border-[hsl(0_0%_15%)]/30 p-1.5 shadow-xl shadow-black/50 flex flex-col">
            <div className="flex-1 overflow-hidden">
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs md:text-sm text-white tracking-wider font-light text-center py-1.5">
              {item.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IconCarousel;

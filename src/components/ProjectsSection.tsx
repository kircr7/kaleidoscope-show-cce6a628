import React, { useState, useRef, useEffect, TouchEvent } from "react";
import { ChevronLeft, ChevronRight, X, Pause, Play } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";
import work7 from "@/assets/work-7.jpg";
import work8 from "@/assets/work-8.jpg";
import work9 from "@/assets/work-9.jpg";
import work10 from "@/assets/work-10.jpg";
import work11 from "@/assets/work-11.jpg";
import work12 from "@/assets/work-12.jpg";
import execDoc1 from "@/assets/exec-doc-1.webp";
import execDoc2 from "@/assets/exec-doc-2.webp";
import execDoc3 from "@/assets/exec-doc-3.webp";
import execDoc4 from "@/assets/exec-doc-4.webp";
import execDoc5 from "@/assets/exec-doc-5.webp";
import execDoc6 from "@/assets/exec-doc-6.webp";
import projDoc1 from "@/assets/proj-doc-1.webp";
import projDoc2 from "@/assets/proj-doc-2.webp";
import projDoc3 from "@/assets/proj-doc-3.webp";
import projDoc4 from "@/assets/proj-doc-4.webp";
import projDoc5 from "@/assets/proj-doc-5.webp";
import projDoc6 from "@/assets/proj-doc-6.webp";
import projDoc7 from "@/assets/proj-doc-7.webp";
import binding1 from "@/assets/binding-1.webp";
import binding2 from "@/assets/binding-2.webp";
import binding3 from "@/assets/binding-3.webp";
import binding4 from "@/assets/binding-4.webp";
import binding5 from "@/assets/binding-5.webp";
import binding6 from "@/assets/binding-6.webp";
import binding7 from "@/assets/binding-7.webp";
import binding8 from "@/assets/binding-8.webp";
import workDoc1 from "@/assets/work-doc-1.webp";
import workDoc2 from "@/assets/work-doc-2.webp";
import workDoc3 from "@/assets/work-doc-3.webp";
import workDoc4 from "@/assets/work-doc-4.webp";
import workDoc5 from "@/assets/work-doc-5.webp";
import drawings1 from "@/assets/drawings-1.webp";
import drawings2 from "@/assets/drawings-2.webp";
import drawings3 from "@/assets/drawings-3.webp";
import drawings4 from "@/assets/drawings-4.webp";
import drawings5 from "@/assets/drawings-5.webp";
import drawings6 from "@/assets/drawings-6.webp";
import drawings7 from "@/assets/drawings-7.webp";
import folding1 from "@/assets/folding-1.webp";
import folding2 from "@/assets/folding-2.webp";
import folding3 from "@/assets/folding-3.webp";
import folding4 from "@/assets/folding-4.webp";

interface Project {
  images: string[];
  title: string;
  tags: string[];
  altBase: string;
}

const projects: Project[] = [
  { images: [projDoc2, projDoc3, projDoc4, projDoc1, projDoc5, projDoc6, projDoc7], title: "Печать проектной документации", tags: ["А1", "Фальцовка"], altBase: "Печать проектной документации А1 с фальцовкой — распечатать проектную документацию" },
  { images: [workDoc1, workDoc2, workDoc3, workDoc4, workDoc5], title: "Печать рабочей документации", tags: ["А0", "ЧБ"], altBase: "Печать рабочей документации А0 чб — распечатать рабочую документацию (рабочку)" },
  { images: [execDoc1, execDoc2, execDoc3, execDoc4, execDoc5, execDoc6], title: "Исполнительная документация", tags: ["А3", "Брошюровка"], altBase: "Печать исполнительной документации А3 с брошюровкой — распечатать исполнительную" },
  { images: [drawings1, drawings2, drawings3, drawings4, drawings5, drawings6, drawings7], title: "Печать чертежей", tags: ["А1", "Цвет"], altBase: "Цветная печать чертежа А1 — распечатать чертеж в типографии" },
  { images: [binding1, binding2, binding3, binding4, binding5, binding6, binding7, binding8], title: "Брошюровка на пластиковую пружину", tags: ["А4", "Пружина"], altBase: "Брошюровка документации А4 на пластиковую пружину — печать А4 чб и цвет" },
  { images: [folding1, folding2, folding3, folding4], title: "Фальцовка чертежей", tags: ["А0", "Фальцовка"], altBase: "Фальцовка чертежа А0 по ГОСТ — печать А0 и фальцовка" },
];

const SWIPE_THRESHOLD = 40;

interface ImageSliderProps {
  images: string[];
  title: string;
  altBase: string;
  onImageClick: (index: number) => void;
  rounded?: string;
  aspect?: string;
  showDots?: boolean;
}

const ImageSlider = ({
  images,
  title,
  altBase,
  onImageClick,
  rounded = "",
  aspect = "aspect-[4/3]",
  showDots = true,
}: ImageSliderProps) => {
  const [index, setIndex] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [hovering, setHovering] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const lastX = useRef(0);
  const lastT = useRef(0);
  const velocity = useRef(0); // px/ms
  const axisLocked = useRef<"x" | "y" | null>(null);
  const isTouch = useRef(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [autoPlay, setAutoPlay] = useState(true);

  const hasMultiple = images.length > 1;

  // Автопрокрутка: пауза при наведении/свайпе, отключается кнопкой
  useEffect(() => {
    if (!hasMultiple || !autoPlay || hovering || dragging) return;
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => window.clearInterval(id);
  }, [hasMultiple, autoPlay, hovering, dragging, images.length]);

  const go = (delta: number) => {
    setIndex((prev) => Math.max(0, Math.min(images.length - 1, prev + delta)));
  };


  const onTouchStart = (e: TouchEvent) => {
    if (!hasMultiple) return;
    const t = e.touches[0];
    isTouch.current = true;
    setHovering(false);
    touchStartX.current = t.clientX;
    touchStartY.current = t.clientY;
    lastX.current = t.clientX;
    lastT.current = performance.now();
    velocity.current = 0;
    axisLocked.current = null;
    setDragging(true);
  };


  const onTouchMove = (e: TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const t = e.touches[0];
    const dx = t.clientX - touchStartX.current;
    const dy = t.clientY - touchStartY.current;

    if (axisLocked.current === null) {
      if (Math.abs(dx) < 6 && Math.abs(dy) < 6) return;
      axisLocked.current = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
    }
    if (axisLocked.current === "y") return;

    const now = performance.now();
    const dt = now - lastT.current;
    if (dt > 0) velocity.current = (t.clientX - lastX.current) / dt;
    lastX.current = t.clientX;
    lastT.current = now;

    // сопротивление на краях
    const atEdge = (dx > 0 && index === 0) || (dx < 0 && index === images.length - 1);
    setDragX(atEdge ? dx * 0.3 : dx);
  };

  const onTouchEnd = () => {
    if (touchStartX.current === null) return;
    const width = containerRef.current?.offsetWidth || 1;
    const dx = dragX;
    const v = velocity.current;
    const shouldSwipe = Math.abs(dx) > Math.min(SWIPE_THRESHOLD, width * 0.18) || Math.abs(v) > 0.4;
    if (shouldSwipe && axisLocked.current === "x") go(dx < 0 ? 1 : -1);
    touchStartX.current = null;
    touchStartY.current = null;
    axisLocked.current = null;
    setDragging(false);
    setDragX(0);
  };

  // Как на Avito: экран делится на зоны по числу фото, переключение — по зонам,
  // сам слайд едет медленно и плавно через CSS-переход.
  // Смена зоны применяется с небольшой задержкой (debounce) + гистерезисом,
  // чтобы быстрые движения мыши не вызывали дёрганый fade.
  const zoneTimer = useRef<number | null>(null);
  const pendingZone = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (zoneTimer.current) window.clearTimeout(zoneTimer.current);
    };
  }, []);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hasMultiple || isTouch.current) return;
    setHovering(true);
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const zoneWidth = rect.width / images.length;
    const ratio = Math.max(0, Math.min(0.9999, x / rect.width));
    let zone = Math.floor(ratio * images.length);

    // Гистерезис: у самой границы зоны остаёмся на текущем кадре
    const offsetInZone = x - zone * zoneWidth;
    const edge = zoneWidth * 0.18;
    if (
      Math.abs(zone - index) === 1 &&
      (offsetInZone < edge || offsetInZone > zoneWidth - edge)
    ) {
      zone = index;
    }

    if (zone === index) {
      pendingZone.current = null;
      if (zoneTimer.current) {
        window.clearTimeout(zoneTimer.current);
        zoneTimer.current = null;
      }
      return;
    }

    if (pendingZone.current === zone) return;
    pendingZone.current = zone;
    if (zoneTimer.current) window.clearTimeout(zoneTimer.current);
    zoneTimer.current = window.setTimeout(() => {
      if (pendingZone.current !== null) setIndex(pendingZone.current);
      pendingZone.current = null;
      zoneTimer.current = null;
    }, 120);
  };

  const onMouseLeave = () => {
    if (isTouch.current) return;
    if (zoneTimer.current) {
      window.clearTimeout(zoneTimer.current);
      zoneTimer.current = null;
    }
    pendingZone.current = null;
    setHovering(false);
    if (!autoPlay) setIndex(0);
  };


  return (
    <div
      ref={containerRef}
      className={`relative ${aspect} overflow-hidden ${rounded} bg-black/40 group/slider touch-pan-y select-none`}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onTouchCancel={onTouchEnd}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {hovering ? (
        <button
          type="button"
          onClick={() => onImageClick(index)}
          className="absolute inset-0 block h-full w-full cursor-zoom-in"
          aria-label={`Открыть фото ${index + 1}`}
        >
          <img
            src={images[index]}
            alt={`${altBase} — фото ${index + 1}`}
            className="absolute inset-0 h-full w-full object-cover select-none"
            draggable={false}
          />
        </button>


      ) : (
        <div
          className="flex h-full will-change-transform"
          style={{
            transform: `translate3d(calc(-${index * 100}% + ${dragX}px), 0, 0)`,
            transition: dragging
              ? "none"
              : isTouch.current
                ? "transform 1800ms cubic-bezier(0.22, 0.61, 0.36, 1)"
                : "transform 5200ms cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {images.map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => onImageClick(i)}
              className="w-full h-full flex-shrink-0 block cursor-zoom-in"
              aria-label={`Открыть фото ${i + 1}`}
            >
              <img
                src={src}
                alt={`${altBase} — фото ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover pointer-events-none select-none"
                draggable={false}
              />
            </button>
          ))}
        </div>
      )}

      {hasMultiple && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setAutoPlay((v) => !v);
          }}
          aria-label={autoPlay ? "Остановить автопрокрутку" : "Включить автопрокрутку"}
          className="absolute top-2 right-2 z-20 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm border border-white/15 text-white/80 flex items-center justify-center opacity-0 group-hover/slider:opacity-100 focus-visible:opacity-100 transition hover:bg-black/70"
        >
          {autoPlay ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
        </button>
      )}


      {hasMultiple && showDots && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 pointer-events-none">
          {images.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-5 bg-white" : "w-1.5 bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

interface LightboxProps {
  project: Project | null;
  startIndex: number;
  onClose: () => void;
}

const Lightbox = ({ project, startIndex, onClose }: LightboxProps) => {
  const [index, setIndex] = useState(startIndex);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    setIndex(startIndex);
  }, [startIndex, project]);

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + project.images.length) % project.images.length);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % project.images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [project]);

  if (!project) return null;

  const go = (delta: number) =>
    setIndex((i) => (i + delta + project.images.length) % project.images.length);

  const hasMultiple = project.images.length > 1;

  return (
    <Dialog open={!!project} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-[96vw] sm:max-w-5xl w-full p-0 border-0 bg-transparent shadow-none [&>button]:hidden">
        <div className="relative w-full">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-2 right-2 sm:-top-12 sm:right-0 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/40 sm:bg-black/70 backdrop-blur-sm border border-white/10 sm:border-white/20 text-white/80 sm:text-white flex items-center justify-center hover:bg-black/70 transition"
            aria-label="Закрыть"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <div
            className="relative w-full bg-black/80 rounded-2xl overflow-hidden"
            onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchStartX.current === null) return;
              const diff = e.changedTouches[0].clientX - touchStartX.current;
              if (Math.abs(diff) > SWIPE_THRESHOLD) go(diff < 0 ? 1 : -1);
              touchStartX.current = null;
            }}
          >
            <img
              src={project.images[index]}
              alt={`${project.altBase} — фото ${index + 1}`}
              className="w-full max-h-[85vh] object-contain"
            />

            {hasMultiple && (
              <>
                <button
                  type="button"
                  onClick={() => go(-1)}
                  className="absolute left-1 sm:left-3 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-11 sm:h-11 rounded-full bg-black/30 sm:bg-black/60 backdrop-blur-sm border border-white/10 sm:border-white/20 text-white/70 sm:text-white flex items-center justify-center hover:bg-black/80 transition"
                  aria-label="Предыдущее фото"
                >
                  <ChevronLeft className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  className="absolute right-1 sm:right-3 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-11 sm:h-11 rounded-full bg-black/30 sm:bg-black/60 backdrop-blur-sm border border-white/10 sm:border-white/20 text-white/70 sm:text-white flex items-center justify-center hover:bg-black/80 transition"
                  aria-label="Следующее фото"
                >
                  <ChevronRight className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                </button>

                <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-black/50 sm:bg-black/60 backdrop-blur-sm text-white/90 text-[11px] sm:text-xs font-medium">
                  {index + 1} / {project.images.length}
                </div>
              </>
            )}
          </div>

          <p className="mt-3 text-center text-white/90 text-sm sm:text-base font-medium">
            {project.title}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const ProjectCard = ({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (project: Project, index: number) => void;
}) => (
  <article
    data-project-card
    className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] flex-shrink-0 w-[80%] max-w-[360px] sm:w-auto sm:max-w-none snap-center"
  >
    <ImageSlider
      images={project.images}
      title={project.title}
      altBase={project.altBase}
      onImageClick={(i) => onOpen(project, i)}
      aspect="aspect-[4/3]"
    />
    <div className="p-4 sm:p-5">
      <h3 className="text-base sm:text-lg font-semibold text-foreground">
        {project.title}
      </h3>
    </div>
  </article>
);

const ProjectsSection = () => {
  const [active, setActive] = useState<{ project: Project; index: number } | null>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const cards = Array.from(scroller.querySelectorAll<HTMLElement>("[data-project-card]"));
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const idx = cards.indexOf(visible.target as HTMLElement);
          if (idx >= 0) setActiveCard(idx);
        }
      },
      { root: scroller, threshold: [0.5, 0.75, 1] }
    );
    cards.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  const scrollToCard = (idx: number) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const cards = scroller.querySelectorAll<HTMLElement>("[data-project-card]");
    cards[idx]?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-24 px-3 sm:px-4 scroll-mt-24">
      <div className="container max-w-6xl mx-auto">
        <div
          className="mb-6 sm:mb-12 opacity-0"
          style={{ animation: "reveal-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 100ms forwards" }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Наши выполненные проекты
          </h2>
          <p className="mt-3 text-muted-foreground text-base sm:text-lg max-w-2xl">
            Примеры работ, которые мы напечатали для наших клиентов
          </p>
        </div>

        <div className="relative">
          <div
            ref={scrollerRef}
            className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible snap-x snap-mandatory -mx-3 sm:mx-0 px-3 sm:px-0 pb-2 sm:pb-0 scrollbar-hide opacity-0"
            style={{ animation: "reveal-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 200ms forwards" }}
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                onOpen={(p, i) => setActive({ project: p, index: i })}
              />
            ))}
          </div>

          {/* Mobile-only: dots + counter */}
          <div className="mt-4 flex items-center justify-center gap-3 sm:hidden">
            <div className="flex gap-1.5">
              {projects.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => scrollToCard(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === activeCard ? "w-6 bg-primary" : "w-1.5 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Перейти к проекту ${i + 1}`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground tabular-nums">
              {activeCard + 1} / {projects.length}
            </span>
          </div>
        </div>
      </div>

      <Lightbox
        project={active?.project ?? null}
        startIndex={active?.index ?? 0}
        onClose={() => setActive(null)}
      />
    </section>
  );
};

export default ProjectsSection;

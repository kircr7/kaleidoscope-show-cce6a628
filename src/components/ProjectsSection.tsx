import React, { useState, useRef, useEffect, TouchEvent } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
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
  const [progress, setProgress] = useState(0); // плавная позиция 0..images.length-1
  const targetProgress = useRef(0);
  const rafId = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const hasMultiple = images.length > 1;

  const go = (delta: number) => {
    const next = (index + delta + images.length) % images.length;
    setIndex(next);
    targetProgress.current = next;
  };

  const onTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > SWIPE_THRESHOLD) go(diff < 0 ? 1 : -1);
    touchStartX.current = null;
  };

  // Плавная анимация к целевой позиции (easing через lerp в rAF)
  useEffect(() => {
    const tick = () => {
      setProgress((prev) => {
        const diff = targetProgress.current - prev;
        if (Math.abs(diff) < 0.001) {
          rafId.current = null;
          return targetProgress.current;
        }
        const next = prev + diff * 0.08; // меньше = плавнее/медленнее
        rafId.current = requestAnimationFrame(tick);
        return next;
      });
    };
    if (rafId.current === null) {
      rafId.current = requestAnimationFrame(tick);
    }
    return () => {
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
        rafId.current = null;
      }
    };
  }, []);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hasMultiple) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(0.9999, x / rect.width));
    const target = ratio * (images.length - 1);
    targetProgress.current = target;
    const newIndex = Math.round(target);
    if (newIndex !== index) setIndex(newIndex);
    if (rafId.current === null) {
      const tick = () => {
        setProgress((prev) => {
          const diff = targetProgress.current - prev;
          if (Math.abs(diff) < 0.001) {
            rafId.current = null;
            return targetProgress.current;
          }
          const next = prev + diff * 0.08;
          rafId.current = requestAnimationFrame(tick);
          return next;
        });
      };
      rafId.current = requestAnimationFrame(tick);
    }
  };

  const onMouseLeave = () => {
    targetProgress.current = 0;
    setIndex(0);
  };

  return (
    <div
      className={`relative ${aspect} overflow-hidden ${rounded} bg-black/40 group/slider`}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div
        className="flex h-full will-change-transform"
        style={{ transform: `translate3d(-${progress * 100}%, 0, 0)` }}
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

import { useState, useRef, useEffect, TouchEvent } from "react";
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

interface Project {
  images: string[];
  title: string;
  tags: string[];
}

const projects: Project[] = [
  { images: [work1, work7], title: "Печать проектной документации", tags: ["А1", "Фальцовка"] },
  { images: [work2, work8, work9], title: "Рабочие чертежи", tags: ["А0", "ЧБ"] },
  { images: [work3, work10], title: "Исполнительная документация", tags: ["А3", "Брошюровка"] },
  { images: [work4, work11], title: "Архитектурные планы", tags: ["А1", "Цвет"] },
  { images: [work5, work12], title: "Инженерные схемы", tags: ["А2", "Фальцовка"] },
  { images: [work6], title: "Генеральный план", tags: ["А0", "Цвет"] },
];

const SWIPE_THRESHOLD = 40;

interface ImageSliderProps {
  images: string[];
  title: string;
  onImageClick: (index: number) => void;
  rounded?: string;
  aspect?: string;
  showDots?: boolean;
}

const ImageSlider = ({
  images,
  title,
  onImageClick,
  rounded = "",
  aspect = "aspect-[4/3]",
  showDots = true,
}: ImageSliderProps) => {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const hasMultiple = images.length > 1;

  const go = (delta: number) =>
    setIndex((i) => (i + delta + images.length) % images.length);

  const onTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > SWIPE_THRESHOLD) go(diff < 0 ? 1 : -1);
    touchStartX.current = null;
  };

  return (
    <div
      className={`relative ${aspect} overflow-hidden ${rounded} bg-black/40 group/slider`}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
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
              alt={`${title} — фото ${i + 1}`}
              loading="lazy"
              className="w-full h-full object-cover"
              draggable={false}
            />
          </button>
        ))}
      </div>

      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm border border-white/15 text-white flex items-center justify-center opacity-0 group-hover/slider:opacity-100 hover:bg-black/70 transition-opacity"
            aria-label="Предыдущее фото"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm border border-white/15 text-white flex items-center justify-center opacity-0 group-hover/slider:opacity-100 hover:bg-black/70 transition-opacity"
            aria-label="Следующее фото"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {showDots && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIndex(i);
                  }}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-5 bg-white" : "w-1.5 bg-white/50 hover:bg-white/70"
                  }`}
                  aria-label={`Перейти к фото ${i + 1}`}
                />
              ))}
            </div>
          )}
        </>
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
            className="absolute -top-2 right-0 sm:-top-12 sm:right-0 z-10 w-10 h-10 rounded-full bg-black/70 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center hover:bg-black/90 transition"
            aria-label="Закрыть"
          >
            <X className="w-5 h-5" />
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
              alt={`${project.title} — фото ${index + 1}`}
              className="w-full max-h-[85vh] object-contain"
            />

            {hasMultiple && (
              <>
                <button
                  type="button"
                  onClick={() => go(-1)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center hover:bg-black/80 transition"
                  aria-label="Предыдущее фото"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center hover:bg-black/80 transition"
                  aria-label="Следующее фото"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs font-medium">
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
  <article className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] flex-shrink-0 w-[78vw] sm:w-auto snap-center">
    <ImageSlider
      images={project.images}
      title={project.title}
      onImageClick={(i) => onOpen(project, i)}
    />
    <div className="p-4 sm:p-5">
      <h3 className="text-base sm:text-lg font-semibold text-foreground leading-snug">
        {project.title}
      </h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/[0.06] border border-white/10 text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </article>
);

const ProjectsSection = () => {
  const [active, setActive] = useState<{ project: Project; index: number } | null>(null);

  return (
    <section className="py-12 sm:py-16 md:py-24 px-3 sm:px-4">
      <div className="container max-w-6xl mx-auto">
        <div
          className="mb-8 sm:mb-12 opacity-0"
          style={{ animation: "reveal-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 100ms forwards" }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Наши выполненные проекты
          </h2>
          <p className="mt-3 text-muted-foreground text-base sm:text-lg max-w-2xl">
            Примеры работ, которые мы напечатали для наших клиентов
          </p>
        </div>

        <div
          className="flex md:grid md:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory -mx-3 sm:-mx-4 px-3 sm:px-4 md:mx-0 md:px-0 pb-2 md:pb-0 scrollbar-hide opacity-0"
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

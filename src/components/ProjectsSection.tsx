import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";

interface Project {
  image: string;
  title: string;
  tags: string[];
}

const projects: Project[] = [
  { image: work1, title: "Печать проектной документации", tags: ["А1", "Фальцовка"] },
  { image: work2, title: "Рабочие чертежи", tags: ["А0", "ЧБ"] },
  { image: work3, title: "Исполнительная документация", tags: ["А3", "Брошюровка"] },
  { image: work4, title: "Архитектурные планы", tags: ["А1", "Цвет"] },
  { image: work5, title: "Инженерные схемы", tags: ["А2", "Фальцовка"] },
  { image: work6, title: "Генеральный план", tags: ["А0", "Цвет"] },
];

const ProjectCard = ({ project }: { project: Project }) => (
  <article className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] flex-shrink-0 w-[78vw] sm:w-auto snap-center">
    <div className="aspect-[4/3] overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
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

        {/* Mobile: horizontal scroll, Desktop: grid */}
        <div
          className="flex md:grid md:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory -mx-3 sm:-mx-4 px-3 sm:px-4 md:mx-0 md:px-0 pb-2 md:pb-0 scrollbar-hide opacity-0"
          style={{ animation: "reveal-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 200ms forwards" }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

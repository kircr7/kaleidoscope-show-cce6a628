import { Printer, BookOpen, FolderOpen } from "lucide-react";

const outputs = [
  { label: "Готовые чертежи", icon: Printer },
  { label: "Брошюры", icon: BookOpen },
  { label: "Комплекты документов", icon: FolderOpen },
];

const OutputCards = () => {
  return (
    <div className="flex items-center gap-2 md:gap-3">
      {outputs.map((item, i) => (
        <div
          key={i}
          className="flex flex-col items-center gap-1.5"
        >
          <div className="w-16 h-12 md:w-24 md:h-16 rounded-lg border border-border/40 bg-secondary/20 flex items-center justify-center transition-transform duration-200 hover:scale-105 active:scale-95">
            <item.icon className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground" strokeWidth={1.2} />
          </div>
          <span className="text-[8px] md:text-[10px] text-muted-foreground tracking-wide text-center leading-tight max-w-16 md:max-w-24">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default OutputCards;

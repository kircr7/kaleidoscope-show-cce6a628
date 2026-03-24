import { FileText, Ruler, PenTool, ClipboardList, FileCheck, BookOpen } from "lucide-react";

const items = [
  { icon: FileText, label: "Чертежи" },
  { icon: Ruler, label: "Планы" },
  { icon: PenTool, label: "Схемы" },
  { icon: ClipboardList, label: "Сметы" },
  { icon: FileCheck, label: "Акты" },
  { icon: BookOpen, label: "Тех.задания" },
];

const InputIcons = () => {
  return (
    <div className="flex items-center gap-3 md:gap-4">
      {items.map((item, i) => (
        <div
          key={i}
          className="flex flex-col items-center gap-1.5"
        >
          <div className="w-12 h-14 md:w-16 md:h-20 rounded-lg border border-border/60 bg-secondary/30 flex items-center justify-center backdrop-blur-sm transition-transform duration-200 hover:scale-105 active:scale-95">
            <item.icon className="w-5 h-5 md:w-7 md:h-7 text-muted-foreground" strokeWidth={1.2} />
          </div>
          <span className="text-[9px] md:text-[11px] text-muted-foreground tracking-wide">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default InputIcons;

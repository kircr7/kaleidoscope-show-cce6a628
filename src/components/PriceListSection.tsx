import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const bwPrices = [
  { format: "A4", size: "210×297 мм", under100: "5 ₽", over100: "4 ₽" },
  { format: "A3", size: "297×420 мм", under100: "19 ₽", over100: "15 ₽" },
  { format: "A2", size: "420×594 мм", under100: "38 ₽", over100: "30 ₽" },
  { format: "A1", size: "594×841 мм", under100: "64 ₽", over100: "50 ₽" },
  { format: "A0", size: "841×1189 мм", under100: "118 ₽", over100: "95 ₽" },
];

const colorPrices = [
  { format: "A4", size: "210×297 мм", under100: "10 ₽", over100: "8 ₽" },
  { format: "A3", size: "297×420 мм", under100: "29 ₽", over100: "23 ₽" },
  { format: "A2", size: "420×594 мм", under100: "48 ₽", over100: "38 ₽" },
  { format: "A1", size: "594×841 мм", under100: "84 ₽", over100: "67 ₽" },
  { format: "A0", size: "841×1189 мм", under100: "128 ₽", over100: "102 ₽" },
];

const services = [
  { name: "Фальцовка по ГОСТ", desc: "Сложение в формат А4", price: "от 5 ₽/лист" },
  { name: "Брошюровка на пружину", desc: "До 100 листов", price: "от 100 ₽" },
  { name: "Твердый переплет", desc: "Для томов проектной документации", price: "от 600 ₽" },
];

const PriceCard = ({
  item,
  variant,
  expandedFormat,
  onExpand,
}: {
  item: typeof bwPrices[0];
  variant: "bw" | "color";
  expandedFormat: string | null;
  onExpand: (format: string | null) => void;
}) => {
  const isOpen = expandedFormat === item.format;
  const isBw = variant === "bw";

  return (
    <div
      className={`group relative rounded-2xl border p-5 sm:p-6 cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
        isBw
          ? "bg-card/40 backdrop-blur-sm border-border/30 hover:border-border/60 hover:bg-card/70"
          : "border-white/20 hover:border-white/40 hover:shadow-lg hover:shadow-purple-500/10"
      }`}
      style={
        !isBw
          ? {
              background:
                "linear-gradient(135deg, hsla(280,70%,40%,0.85), hsla(330,80%,45%,0.85), hsla(20,90%,50%,0.85), hsla(50,85%,50%,0.85))",
              backgroundSize: "300% 300%",
              animation: "gradient-morph 8s ease infinite",
            }
          : undefined
      }
      onMouseEnter={() => onExpand(item.format)}
      onMouseLeave={() => onExpand(null)}
    >
      <div className="flex items-baseline justify-between mb-1">
        <span
          className={`text-2xl sm:text-3xl font-bold tracking-tight ${
            isBw ? "text-foreground" : "text-white"
          }`}
        >
          {item.format}
        </span>
        <span className={`text-xs ${isBw ? "text-muted-foreground" : "text-white/70"}`}>
          {item.size}
        </span>
      </div>

      <div
        className="overflow-hidden transition-all duration-400 ease-out"
        style={{
          maxHeight: isOpen ? "120px" : "0px",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div
          className={`pt-4 mt-3 space-y-2 border-t ${
            isBw ? "border-border/20" : "border-white/20"
          }`}
        >
          <div className="flex justify-between items-center">
            <span className={`text-sm ${isBw ? "text-muted-foreground" : "text-white/80"}`}>
              До 100 листов
            </span>
            <span
              className={`text-base font-semibold ${
                isBw ? "text-foreground" : "text-white"
              }`}
            >
              {item.under100}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className={`text-sm ${isBw ? "text-muted-foreground" : "text-white/80"}`}>
              От 100 листов
            </span>
            <span
              className={`text-base font-semibold ${
                isBw ? "text-emerald-400" : "text-yellow-200 drop-shadow-sm"
              }`}
            >
              {item.over100}
            </span>
          </div>
        </div>
      </div>

      {!isOpen && (
        <p
          className={`text-xs mt-2 transition-opacity ${
            isBw ? "text-gray-400" : "text-white/50"
          }`}
        >
          Нажмите для просмотра цен
        </p>
      )}
    </div>
  );
};

const ServiceCard = ({ item }: { item: typeof services[0] }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative rounded-2xl border border-border/30 bg-card/40 backdrop-blur-sm p-5 sm:p-6 cursor-pointer transition-all duration-300 hover:border-border/60 hover:bg-card/70 hover:-translate-y-1"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered((v) => !v)}
    >
      <span className="text-lg sm:text-xl font-bold text-foreground tracking-tight">{item.name}</span>

      <div
        className="overflow-hidden transition-all duration-400 ease-out"
        style={{
          maxHeight: hovered ? "120px" : "0px",
          opacity: hovered ? 1 : 0,
        }}
      >
        <div className="pt-3 border-t border-border/20 mt-3 space-y-1.5">
          <p className="text-sm text-muted-foreground">{item.desc}</p>
          <p className="text-lg font-semibold text-foreground">{item.price}</p>
        </div>
      </div>

      {!hovered && (
        <p className="text-xs text-muted-foreground/60 mt-2">Наведите для просмотра</p>
      )}
    </div>
  );
};

const PriceListSection = () => {
  const [expandedBw, setExpandedBw] = useState<string | null>(null);
  const [expandedColor, setExpandedColor] = useState<string | null>(null);



  return (
    <section id="pricelist" className="py-16 sm:py-24 px-3 sm:px-4">
      <div className="container max-w-4xl mx-auto">
        <h2
          className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-foreground text-center mb-10 sm:mb-14 opacity-0"
          style={{ animation: "reveal-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 100ms forwards" }}
        >
          Прайс-лист
        </h2>

        <div
          className="opacity-0"
          style={{ animation: "reveal-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 250ms forwards" }}
        >
          <Tabs defaultValue="bw" className="w-full">
            <TabsList className="w-full bg-secondary/60 backdrop-blur-sm border border-border/30 rounded-xl h-12 p-1 mb-8">
              <TabsTrigger
                value="bw"
                className="flex-1 rounded-lg text-sm data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-md transition-all"
              >
                Черно-белая
              </TabsTrigger>
              <TabsTrigger
                value="color"
                className="flex-1 rounded-lg text-sm data-[state=active]:text-white data-[state=active]:shadow-md transition-all [&[data-state=active]]:border-0"
                style={{
                  background: undefined,
                }}
              >
                <style>{`
                  [data-state="active"][value="color"] {
                    background: linear-gradient(135deg, hsla(280,70%,40%,0.85), hsla(330,80%,45%,0.85), hsla(20,90%,50%,0.85), hsla(50,85%,50%,0.85)) !important;
                    background-size: 300% 300% !important;
                    animation: gradient-morph 8s ease infinite !important;
                  }
                `}</style>
                Цветная
              </TabsTrigger>
              <TabsTrigger
                value="services"
                className="flex-1 rounded-lg text-sm data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-md transition-all"
              >
                Сборка
              </TabsTrigger>
            </TabsList>

            <TabsContent value="bw" className="mt-0">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                {bwPrices.map((item) => (
                  <PriceCard key={item.format} item={item} variant="bw" expandedFormat={expandedBw} onExpand={setExpandedBw} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="color" className="mt-0">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                {colorPrices.map((item) => (
                  <PriceCard key={item.format} item={item} variant="color" expandedFormat={expandedColor} onExpand={setExpandedColor} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="services" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                {services.map((item) => (
                  <ServiceCard key={item.name} item={item} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default PriceListSection;

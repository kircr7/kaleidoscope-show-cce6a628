import { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const bwPrices = [
  { format: "A4", size: "210×297 мм", under100: "5 ₽", over100: "4 ₽" },
  { format: "A3", size: "297×420 мм", under100: "14 ₽", over100: "11 ₽" },
  { format: "A2", size: "420×594 мм", under100: "30 ₽", over100: "24 ₽" },
  { format: "A1", size: "594×841 мм", under100: "50 ₽", over100: "40 ₽" },
  { format: "A0", size: "841×1189 мм", under100: "100 ₽", over100: "80 ₽" },
];

const colorPrices = [
  { format: "A4", size: "210×297 мм", under100: "10 ₽", over100: "8 ₽" },
  { format: "A3", size: "297×420 мм", under100: "24 ₽", over100: "19 ₽" },
  { format: "A2", size: "420×594 мм", under100: "40 ₽", over100: "32 ₽" },
  { format: "A1", size: "594×841 мм", under100: "70 ₽", over100: "56 ₽" },
  { format: "A0", size: "841×1189 мм", under100: "110 ₽", over100: "88 ₽" },
];

const foldingPrices = [
  { format: "A3", price: "5 ₽" },
  { format: "A2", price: "8 ₽" },
  { format: "A1", price: "14 ₽" },
  { format: "A0", price: "18 ₽" },
];

const services = [
  { name: "Фальцовка по ГОСТ", desc: "Сложение в формат А4", price: "folding" },
  { name: "Брошюровка на пружину", desc: "До 510 листов", price: "binding" },
  { name: "Твердый переплет", desc: "Для томов проектной документации", price: "600 ₽" },
];

const PriceCard = ({
  item,
  variant,
}: {
  item: typeof bwPrices[0];
  variant: "bw" | "color";
}) => {
  const isBw = variant === "bw";

  return (
    <div
      className={`group relative rounded-2xl border p-3 sm:p-4 transition-all duration-300 hover:-translate-y-1 ${
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
    >
      <div className="flex items-baseline justify-between mb-2">
        <span
          className={`text-xl sm:text-2xl font-bold tracking-tight ${
            isBw ? "text-foreground" : "text-white"
          }`}
        >
          {item.format}
        </span>
        <span className={`text-xs ${isBw ? "text-muted-foreground" : "text-white/70"}`}>
          {item.size}
        </span>
      </div>

      <div className={`pt-2 space-y-1.5 border-t ${isBw ? "border-border/20" : "border-white/20"}`}>
        <div className="flex justify-between items-center">
          <span className={`text-xs ${isBw ? "text-muted-foreground/60" : "text-white/50"}`}>обычная цена</span>
          <span className={`text-sm font-semibold ${isBw ? "text-foreground" : "text-white"}`}>
            {item.under100}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className={`text-xs ${isBw ? "text-muted-foreground/60" : "text-white/50"}`}>от 100 листов</span>
          <span
            className={`text-sm font-semibold ${
              isBw ? "text-emerald-400" : "text-yellow-200 drop-shadow-sm"
            }`}
          >
            {item.over100}
          </span>
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ item }: { item: typeof services[0] }) => {
  const [foldingIndex, setFoldingIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const isFolding = item.price === "folding";

  useEffect(() => {
    if (!isFolding) return;
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setFoldingIndex((prev) => (prev + 1) % foldingPrices.length);
        setAnimating(false);
      }, 500);
    }, 2500);
    return () => clearInterval(interval);
  }, [isFolding]);

  return (
    <div
      className="group relative rounded-2xl border border-border/30 bg-card/40 backdrop-blur-sm p-3 sm:p-4 transition-all duration-300 hover:border-border/60 hover:bg-card/70 hover:-translate-y-1 h-full flex flex-col justify-between"
    >
      <span className="text-lg sm:text-xl font-bold text-foreground tracking-tight">{item.name}</span>
      <div className="pt-2 border-t border-border/20 mt-2 space-y-1">
        <p className="text-sm text-muted-foreground">{item.desc}</p>
        {isFolding ? (
          <div className="h-7 overflow-hidden relative">
            <div
              className="flex items-center gap-2 absolute inset-x-0 transition-all duration-500 ease-in-out"
              style={{
                transform: animating ? 'translateY(-100%)' : 'translateY(0)',
                opacity: animating ? 0 : 1,
              }}
            >
              <span className="text-lg font-semibold text-foreground">{foldingPrices[foldingIndex].format}</span>
              <span className="text-muted-foreground">—</span>
              <span className="text-lg font-semibold text-emerald-400">{foldingPrices[foldingIndex].price}</span>
            </div>
          </div>
        ) : item.price === "binding" ? (
          <p className="text-base font-semibold">
            <span className="text-foreground">А4 — </span><span className="text-emerald-400">100 ₽</span>
            <span className="text-muted-foreground"> / </span>
            <span className="text-foreground">А3 — </span><span className="text-emerald-400">200 ₽</span>
          </p>
        ) : (
          <p className="text-lg font-semibold text-emerald-400">{item.price}</p>
        )}
      </div>
    </div>
  );
};

const PriceListSection = () => {



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
                className="flex-1 rounded-lg text-sm color-tab-trigger data-[state=active]:text-white data-[state=active]:shadow-md transition-all [&[data-state=active]]:border-0"
              >
                <style>{`
                  .color-tab-trigger[data-state="active"] {
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
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 items-start">
                {bwPrices.map((item) => (
                  <PriceCard key={item.format} item={item} variant="bw" />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="color" className="mt-0">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 items-start">
                {colorPrices.map((item) => (
                  <PriceCard key={item.format} item={item} variant="color" />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="services" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 items-start">
                {services.map((item) => (
                  <ServiceCard key={item.name} item={item} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <p
          className="text-center text-sm text-muted-foreground/70 mt-6 opacity-0"
          style={{ animation: "reveal-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 400ms forwards" }}
        >
          * Цены не являются окончательными. При объёмных и регулярных заказах предоставляется скидка.
        </p>
      </div>
    </section>
  );
};

export default PriceListSection;

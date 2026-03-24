import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const bwPrices = [
  { format: "A4", under100: "5 ₽", over100: "4 ₽" },
  { format: "A3", under100: "19 ₽", over100: "15 ₽" },
  { format: "A2", under100: "38 ₽", over100: "30 ₽" },
  { format: "A1", under100: "64 ₽", over100: "50 ₽" },
  { format: "A0", under100: "118 ₽", over100: "95 ₽" },
];

const colorPrices = [
  { format: "A4", under100: "10 ₽", over100: "8 ₽" },
  { format: "A3", under100: "29 ₽", over100: "23 ₽" },
  { format: "A2", under100: "48 ₽", over100: "38 ₽" },
  { format: "A1", under100: "84 ₽", over100: "67 ₽" },
  { format: "A0", under100: "128 ₽", over100: "102 ₽" },
];

const services = [
  { name: "Фальцовка по ГОСТ", desc: "Сложение в формат А4", price: "от 5 ₽/лист" },
  { name: "Брошюровка на пружину", desc: "До 100 листов", price: "от 100 ₽" },
  { name: "Твердый переплет", desc: "Для томов проектной документации", price: "от 600 ₽" },
];

const PrintTable = ({ data }: { data: typeof bwPrices }) => (
  <div className="overflow-x-auto -mx-2">
    <table className="w-full min-w-[360px] text-sm sm:text-base">
      <thead>
        <tr className="border-b border-border/40">
          <th className="text-left py-3 px-4 text-muted-foreground font-medium">Формат</th>
          <th className="text-right py-3 px-4 text-muted-foreground font-medium">До 100 А4</th>
          <th className="text-right py-3 px-4 text-muted-foreground font-medium">От 100 А4</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr
            key={row.format}
            className="border-b border-border/20 transition-colors duration-200 hover:bg-accent/30"
          >
            <td className="py-3.5 px-4 font-medium text-foreground">{row.format}</td>
            <td className="py-3.5 px-4 text-right text-muted-foreground">{row.under100}</td>
            <td className="py-3.5 px-4 text-right font-semibold text-emerald-400">{row.over100}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const PriceListSection = () => {
  return (
    <section className="py-16 sm:py-24 px-3 sm:px-4">
      <div className="container max-w-3xl mx-auto">
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
            <TabsList className="w-full bg-secondary/60 backdrop-blur-sm border border-border/30 rounded-xl h-12 p-1 mb-6">
              <TabsTrigger
                value="bw"
                className="flex-1 rounded-lg text-sm data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-md transition-all"
              >
                Черно-белая
              </TabsTrigger>
              <TabsTrigger
                value="color"
                className="flex-1 rounded-lg text-sm data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-md transition-all"
              >
                Цветная
              </TabsTrigger>
              <TabsTrigger
                value="services"
                className="flex-1 rounded-lg text-sm data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-md transition-all"
              >
                Сборка
              </TabsTrigger>
            </TabsList>

            <div className="rounded-2xl bg-card/50 backdrop-blur-sm border border-border/20 p-2 sm:p-4">
              <TabsContent value="bw" className="mt-0">
                <PrintTable data={bwPrices} />
              </TabsContent>

              <TabsContent value="color" className="mt-0">
                <PrintTable data={colorPrices} />
              </TabsContent>

              <TabsContent value="services" className="mt-0">
                <div className="overflow-x-auto -mx-2">
                  <table className="w-full min-w-[400px] text-sm sm:text-base">
                    <thead>
                      <tr className="border-b border-border/40">
                        <th className="text-left py-3 px-4 text-muted-foreground font-medium">Услуга</th>
                        <th className="text-left py-3 px-4 text-muted-foreground font-medium hidden sm:table-cell">Описание</th>
                        <th className="text-right py-3 px-4 text-muted-foreground font-medium">Цена</th>
                      </tr>
                    </thead>
                    <tbody>
                      {services.map((s) => (
                        <tr
                          key={s.name}
                          className="border-b border-border/20 transition-colors duration-200 hover:bg-accent/30"
                        >
                          <td className="py-3.5 px-4">
                            <span className="font-medium text-foreground">{s.name}</span>
                            <span className="block sm:hidden text-xs text-muted-foreground mt-0.5">{s.desc}</span>
                          </td>
                          <td className="py-3.5 px-4 text-muted-foreground hidden sm:table-cell">{s.desc}</td>
                          <td className="py-3.5 px-4 text-right font-semibold text-foreground whitespace-nowrap">{s.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default PriceListSection;

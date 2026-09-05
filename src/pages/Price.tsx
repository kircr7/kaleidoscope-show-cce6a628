import Navbar from "@/components/Navbar";
import PriceListSection from "@/components/PriceListSection";
import OrderSection from "@/components/OrderSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Building2, FileSpreadsheet, Receipt } from "lucide-react";

const Price = () => {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden relative">
      <SEO
        title="Цены на печать чертежей и проектной документации в Москве"
        description="Прайс-лист на инженерную печать чертежей А0, А1, А2, А3, А4. Стоимость цветной и ч/б распечатки, фальцовки и брошюровки для юрлиц. Минимальный заказ 500 ₽."
        canonicalPath="/price"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Цены на печать чертежей и проектной документации в Москве",
          url: "https://printprro.ru/price",
          isPartOf: { "@id": "https://printprro.ru/#business" },
        }}
      />
      <Navbar />

      <main className="pt-24 sm:pt-32">
        <PriceListSection headingAs="h1" />

        {/* Corporate clients banner */}
        <section className="px-3 sm:px-4 pb-8">
          <div className="container max-w-4xl mx-auto">
            <div
              className="relative rounded-2xl border border-cyan-400/25 bg-card/40 backdrop-blur-md p-6 sm:p-8 overflow-hidden"
              style={{
                background:
                  "linear-gradient(120deg, hsla(195,80%,45%,0.12), hsla(220,80%,50%,0.10), hsla(330,80%,45%,0.08))",
                backgroundSize: "200% 200%",
                animation: "gradient-morph 12s ease infinite",
              }}
            >
              <h2 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight mb-4">
                Для корпоративных клиентов
              </h2>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="flex items-start gap-3">
                  <Receipt className="w-5 h-5 text-cyan-300 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Безналичный расчёт с НДС</p>
                    <p className="text-xs text-muted-foreground mt-1">Выставляем счета, закрывающие документы в день заказа</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileSpreadsheet className="w-5 h-5 text-cyan-300 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Работаем по ЭДО</p>
                    <p className="text-xs text-muted-foreground mt-1">Договоры и акты через системы электронного документооборота</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-cyan-300 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Скидки за объём</p>
                    <p className="text-xs text-muted-foreground mt-1">При регулярных и объёмных заказах — индивидуальные условия</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <OrderSection />
      </main>

      <Footer />
    </div>
  );
};

export default Price;

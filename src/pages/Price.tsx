import Navbar from "@/components/Navbar";
import PriceListSection from "@/components/PriceListSection";
import OrderSection from "@/components/OrderSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

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

        <OrderSection />
      </main>

      <Footer />
    </div>
  );
};

export default Price;

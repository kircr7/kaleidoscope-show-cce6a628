import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import OrderSection from "@/components/OrderSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import NotFound from "@/pages/NotFound";
import { formats } from "@/data/formats";
import { Check } from "lucide-react";

const FormatPage = () => {
  const { format: slug } = useParams();
  const data = formats.find((f) => f.slug === slug);

  if (!data) return <NotFound />;

  const canonicalPath = `/pechat-${data.slug}`;

  return (
    <div className="min-h-screen bg-black overflow-x-hidden relative">
      <SEO
        title={data.title}
        description={data.description}
        keywords={data.keywords}
        canonicalPath={canonicalPath}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: data.title,
          url: `https://printprro.ru${canonicalPath}`,
          isPartOf: { "@id": "https://printprro.ru/#business" },
        }}
      />
      <Navbar />

      <main className="pt-24 sm:pt-32">
        {/* Заголовок и цены */}
        <section className="py-10 sm:py-16 px-3 sm:px-4">
          <div className="container max-w-6xl mx-auto">
            <p className="text-sm uppercase tracking-widest text-[hsl(45,90%,55%)] mb-3">
              Формат {data.format} · {data.size}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-10 sm:mb-14">
              {data.h1}
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl">
              {/* Ч/б печать */}
              <div className="rounded-2xl border border-border/30 bg-card/40 backdrop-blur-sm p-5 sm:p-6 hover:border-border/60 hover:bg-card/70 transition-all duration-300">
                <h2 className="text-lg font-semibold text-foreground mb-4">
                  Чёрно-белая печать {data.format}
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-baseline border-b border-border/20 pb-3">
                    <span className="text-sm text-muted-foreground">Розница</span>
                    <span className="text-2xl font-bold text-foreground">{data.prices.bw.retail}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm text-muted-foreground">
                      Опт от {data.prices.bw.threshold} шт
                    </span>
                    <span className="text-2xl font-bold text-emerald-400">{data.prices.bw.wholesale}</span>
                  </div>
                </div>
              </div>

              {/* Цветная печать */}
              <div
                className="rounded-2xl border border-white/20 p-5 sm:p-6 hover:border-white/40 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, hsla(280,70%,40%,0.85), hsla(330,80%,45%,0.85), hsla(20,90%,50%,0.85), hsla(50,85%,50%,0.85))",
                  backgroundSize: "300% 300%",
                  animation: "gradient-morph 8s ease infinite",
                }}
              >
                <h2 className="text-lg font-semibold text-white mb-4">
                  Цветная печать {data.format}
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-baseline border-b border-white/20 pb-3">
                    <span className="text-sm text-white/60">Розница</span>
                    <span className="text-2xl font-bold text-white">{data.prices.color.retail}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm text-white/60">
                      Опт от {data.prices.color.threshold} шт
                    </span>
                    <span className="text-2xl font-bold text-yellow-200 drop-shadow-sm">
                      {data.prices.color.wholesale}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {["Точная цветопередача", "Плотная бумага 80 г/м²", "Фальцовка по ГОСТ", "Скидка 20% при заказе от 2000 ₽"].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <Check size={14} className="text-emerald-400 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SEO-текст */}
        <section className="py-8 sm:py-12 px-3 sm:px-4">
          <div className="container max-w-3xl mx-auto space-y-5">
            {data.seoText.map((paragraph, i) => (
              <p key={i} className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* Калькулятор и форма заказа */}
        <OrderSection />
      </main>

      <Footer />
    </div>
  );
};

export default FormatPage;

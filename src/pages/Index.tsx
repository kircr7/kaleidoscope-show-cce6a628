import CarouselSection from "@/components/CarouselSection";
import Navbar from "@/components/Navbar";
import AnimatedHeroWorks from "@/components/AnimatedHeroWorks";
import OrderSection from "@/components/OrderSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ServicesSection from "@/components/ServicesSection";
import { Crosshair, FileCheck, Clock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden relative">
      <SEO 
        title="Печать чертежей и проектной документации А0-А4 | ПринтПРО" 
        description="Срочно распечатать проект, исполнительную, рабочую и техническую документацию. Печать форматов А0, А1, А2, А3, А4. Строго по ГОСТ. Типография ПринтПРО."
        keywords="печать чертежей, печать проектной документации, печать проектов, печать исполнительной документации, печать рабочей документации, печать технической документации, печать А4, печать А3, печать А2, печать А1, печать А0, распечатать проект, распечатать чертежи"
      />
      <Navbar />

      {/* Hero + Carousel unified section */}
      <section className="pt-16 md:pt-24 px-3 sm:px-4">
        <div className="container max-w-6xl mx-auto text-center relative z-10">
          <h1
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-balance text-foreground opacity-0"
            style={{ animation: "reveal-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0ms forwards" }}
          >
            Инженерная печать
            <br />
            чертежей и документации
          </h1>
          <p
            className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 px-2"
            style={{ animation: "reveal-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 150ms forwards" }}
          >
            Печать проектной, рабочей и исполнительной документации любого формата — от A4 до A0
          </p>
        </div>
        <CarouselSection />
      </section>

      {/* Purpose section */}
      <section className="pt-8 sm:pt-12 md:pt-16 pb-12 sm:pb-20 md:pb-32 px-3 sm:px-4">
        <div className="container max-w-6xl mx-auto">
          <div
            className="flex flex-col md:flex-row items-start gap-6 md:gap-16 opacity-0"
            style={{ animation: "reveal-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 100ms forwards" }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight leading-tight text-foreground md:max-w-md flex-shrink-0">
              Точность печати
              <br />
              для точных проектов
            </h2>
            <div className="space-y-6">
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-md">
                Мы специализируемся на печати чертежей, проектной документации, рабочей документации и исполнительной документации. Гарантируем высокое качество и соблюдение сроков.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Crosshair className="w-5 h-5 text-foreground" />
                  <span>Масштаб 1:1</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <FileCheck className="w-5 h-5 text-foreground" />
                  <span>Строго по ГОСТ</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Clock className="w-5 h-5 text-foreground" />
                  <span>Точно в срок</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />

      <AnimatedHeroWorks />

      <OrderSection />
      <Footer />
      
    </div>
  );
};

export default Index;

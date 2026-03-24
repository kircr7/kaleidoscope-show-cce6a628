import { Printer, Scan, Map, BookOpen, BookMarked, Layers } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: 'Широкоформатная печать',
      description: 'Печать чертежей, схем и графиков от А4 до А0+. Точная цветопередача и идеальное соблюдение масштабов (1:1) строго по ГОСТ.',
      icon: <Printer className="w-8 h-8 text-blue-400" />,
      gradient: 'linear-gradient(to right, hsl(210, 80%, 55%) 0%, hsl(230, 70%, 60%) 100%)',
    },
    {
      id: 2,
      title: 'Сканирование',
      description: 'Оцифровка проектной документации и архивов в высоком разрешении. Сканирование длинномерных и нестандартных форматов.',
      icon: <Scan className="w-8 h-8 text-emerald-400" />,
      gradient: 'linear-gradient(to right, hsl(160, 70%, 40%) 0%, hsl(180, 60%, 45%) 100%)',
    },
    {
      id: 3,
      title: 'Фальцовка (сложение)',
      description: 'Автоматическое сложение широкоформатных листов (А0, А1, А2, А3) до формата А4 или А3 для последующей подшивки в тома или папки.',
      icon: <Map className="w-8 h-8 text-purple-400" />,
      gradient: 'linear-gradient(to right, hsl(270, 60%, 55%) 0%, hsl(290, 50%, 60%) 100%)',
    },
    {
      id: 4,
      title: 'Брошюровка',
      description: 'Сборка рабочей и проектной документации на пластиковую пружину. Аккуратный вид и удобство использования.',
      icon: <BookOpen className="w-8 h-8 text-amber-400" />,
      gradient: 'linear-gradient(to right, hsl(38, 85%, 55%) 0%, hsl(25, 80%, 55%) 100%)',
    },
    {
      id: 5,
      title: 'Твердый переплет',
      description: 'Надежный канальный переплет для диссертаций, дипломов и важных томов исполнительной документации. Презентабельно и долговечно.',
      icon: <BookMarked className="w-8 h-8 text-rose-400" />,
      gradient: 'linear-gradient(to right, hsl(350, 70%, 55%) 0%, hsl(330, 60%, 55%) 100%)',
    },
    {
      id: 6,
      title: 'Ламинирование',
      description: 'Покрытие документов глянцевой пленкой. Защита важных схем и генпланов от влаги, грязи и износа на стройплощадке.',
      icon: <Layers className="w-8 h-8 text-teal-400" />,
      gradient: 'linear-gradient(to right, hsl(175, 70%, 40%) 0%, hsl(200, 70%, 50%) 100%)',
    }
  ];

  return (
    <section id="services" className="relative pt-8 sm:pt-12 pb-16 sm:pb-24 bg-white font-sans overflow-hidden">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 text-emerald-600 text-xs font-black uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            Наши возможности
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight mb-6">
            С чем мы можем вам помочь?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
            Выполняем полный цикл постпечатной обработки. От вывода первого листа из плоттера до сшитого тома проектной документации.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-2xl p-[1.5px] transition-all duration-500 hover:-translate-y-2"
              style={{ background: service.gradient }}
            >
              {/* Glow blur behind card */}
              <div
                className="absolute inset-0 -z-10 rounded-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                style={{
                  background: service.gradient,
                  filter: 'blur(28px)',
                  transform: 'scale(0.82) translateY(16px)',
                }}
              />

              {/* Glass inner card */}
              <div
                className="relative rounded-2xl p-6 sm:p-8 h-full overflow-hidden"
                style={{
                  backgroundColor: 'hsla(0, 0%, 100%, 0.85)',
                  backdropFilter: 'blur(16px)',
                }}
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-black/5 border border-black/10 flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-black mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <a 
            href="#calculator" 
            className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-black text-white rounded-full font-black uppercase tracking-widest text-xs sm:text-sm hover:scale-105 hover:bg-slate-800 transition-all duration-300 shadow-[0_0_40px_rgba(0,0,0,0.15)] active:scale-95"
          >
            Рассчитать стоимость
          </a>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;

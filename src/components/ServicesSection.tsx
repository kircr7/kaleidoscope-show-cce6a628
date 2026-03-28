import { Printer, ScanLine, FoldVertical, BookOpenCheck, BookLock, ShieldCheck } from 'lucide-react';
import scannerImg from '@/assets/scanner.png';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: 'Широкоформатная печать',
      description: 'Печать чертежей, схем и графиков от А4 до А0+. Точная цветопередача и идеальное соблюдение масштабов (1:1) строго по ГОСТ.',
      icon: Printer,
    },
    {
      id: 2,
      title: 'Сканирование',
      description: 'Оцифровка проектной документации и архивов в высоком разрешении. Сканирование длинномерных и нестандартных форматов.',
      icon: ScanLine,
      image: scannerImg,
    },
    {
      id: 3,
      title: 'Фальцовка (сложение)',
      description: 'Автоматическое сложение широкоформатных листов (А0, А1, А2, А3) до формата А4 или А3 для последующей подшивки в тома или папки.',
      icon: FoldVertical,
    },
    {
      id: 4,
      title: 'Брошюровка',
      description: 'Сборка рабочей и проектной документации на пластиковую пружину. Аккуратный вид и удобство использования.',
      icon: BookOpenCheck,
    },
    {
      id: 5,
      title: 'Твердый переплет',
      description: 'Надежный канальный переплет для диссертаций, дипломов и важных томов исполнительной документации. Презентабельно и долговечно.',
      icon: BookLock,
    },
    {
      id: 6,
      title: 'Ламинирование',
      description: 'Покрытие документов глянцевой пленкой. Защита важных схем и генпланов от влаги, грязи и износа на стройплощадке.',
      icon: ShieldCheck,
    }
  ];

  return (
    <section id="services" className="relative py-16 sm:py-24 bg-white font-sans overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 text-amber-600 text-xs font-black uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            Наши возможности
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight mb-6">
            С чем мы можем вам помочь?
          </h2>
          <p className="text-base sm:text-lg text-gray-500 font-light leading-relaxed">
            Выполняем полный цикл постпечатной обработки. От вывода первого листа из плоттера до сшитого тома проектной документации.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group relative rounded-2xl bg-neutral-900 border border-neutral-800 transition-all duration-400 ease-out hover:-translate-y-1.5 hover:border-amber-500/40 hover:shadow-[0_8px_40px_-12px_rgba(245,158,11,0.15)] overflow-hidden flex flex-col ${service.image ? '' : 'p-6 sm:p-8'}`}
            >
              {service.image ? (
                <>
                  <div className="w-full h-40 sm:h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500"
                    />
                  </div>
                  <div className="p-6 sm:p-8 pt-4 sm:pt-5">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-amber-500/15 group-hover:border-amber-500/30 transition-all duration-400">
                    <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-amber-400" strokeWidth={1.8} />
                    <div className="absolute inset-0 rounded-xl bg-amber-400/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed font-light">
                    {service.description}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <a
            href="#calculator"
            className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-amber-500 text-black rounded-full font-black uppercase tracking-widest text-xs sm:text-sm hover:scale-105 hover:bg-amber-400 transition-all duration-300 shadow-[0_0_40px_rgba(245,158,11,0.2)] active:scale-95"
          >
            Рассчитать стоимость
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

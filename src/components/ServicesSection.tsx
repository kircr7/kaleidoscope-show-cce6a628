import { Printer, ScanLine, FoldVertical, BookOpenCheck, BookLock, ShieldCheck } from 'lucide-react';
import scannerImg from '@/assets/scanner.png';
import falcovkaImg from '@/assets/falcovka.png';
import broshyurovkaImg from '@/assets/broshyurovka.png';
import perepletImg from '@/assets/pereplet.png';
import laminationImg from '@/assets/lamination.png';
import printerImg from '@/assets/printer.png';

const splitTitle = (title: string) => {
  const words = title.split(' ');
  if (words.length === 1) {
    const mid = Math.ceil(title.length / 2);
    return { left: title.slice(0, mid), right: title.slice(mid) };
  }
  const mid = Math.ceil(words.length / 2);
  return {
    left: words.slice(0, mid).join(' '),
    right: words.slice(mid).join(' '),
  };
};

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: 'Печать проектов',
      description: 'Печать чертежей, схем и графиков от А4 до А0+. Точная цветопередача и идеальное соблюдение масштабов (1:1) строго по ГОСТ.',
      icon: Printer,
      image: printerImg,
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
      image: falcovkaImg,
    },
    {
      id: 4,
      title: 'Брошюровка',
      description: 'Сборка рабочей и проектной документации на пластиковую пружину. Аккуратный вид и удобство использования.',
      icon: BookOpenCheck,
      image: broshyurovkaImg,
    },
    {
      id: 5,
      title: 'Твердый переплет',
      description: 'Надежный канальный переплет для диссертаций, дипломов и важных томов исполнительной документации. Презентабельно и долговечно.',
      icon: BookLock,
      image: perepletImg,
    },
    {
      id: 6,
      title: 'Ламинирование',
      description: 'Покрытие документов глянцевой пленкой. Защита важных схем и генпланов от влаги, грязи и износа на стройплощадке.',
      icon: ShieldCheck,
      image: laminationImg,
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
          {services.map((service) => {
            const { left, right } = splitTitle(service.title);
            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-neutral-900 border border-neutral-800 transition-all duration-400 ease-out hover:-translate-y-1.5 hover:border-amber-500/40 hover:shadow-[0_8px_40px_-12px_rgba(245,158,11,0.15)] overflow-hidden flex flex-col"
              >
                {/* Image with centered title overlay */}
                <div className="relative w-full h-40 sm:h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  {/* Dark overlay for text readability */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
                  {/* Title centered on image, splits and flies out on hover */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight text-center whitespace-nowrap flex gap-2">
                      <span className="inline-block transition-all duration-700 ease-in-out group-hover:-translate-x-[200px] group-hover:opacity-0">
                        {left}
                      </span>
                      <span className="inline-block transition-all duration-700 ease-in-out group-hover:translate-x-[200px] group-hover:opacity-0">
                        {right}
                      </span>
                    </h3>
                  </div>
                </div>
                {/* Description */}
                <div className="p-6 sm:p-8 pt-4 sm:pt-5">
                  <p className="text-sm text-gray-400 leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
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

import { useState, useEffect, useMemo } from 'react';

// =====================================================
// 🖼️ КАРТИНКИ СЕКЦИИ "НАШИ РАБОТЫ"
// Чтобы заменить картинки на свои:
// 1. Положите свои файлы в папку src/assets/
// 2. Замените импорты ниже на свои файлы
// 3. Обновите массив imageUrls
// =====================================================
import work1 from "@/assets/work-1.jpg";   // Картинка 1
import work2 from "@/assets/work-2.jpg";   // Картинка 2
import work3 from "@/assets/work-3.jpg";   // Картинка 3
import work4 from "@/assets/work-4.jpg";   // Картинка 4
import work5 from "@/assets/work-5.jpg";   // Картинка 5
import work6 from "@/assets/work-6.jpg";   // Картинка 6

const AnimatedHeroWorks = () => {
  const words = [
    "печати чертежей",
    "проектной документации",
    "рабочей документации",
    "исполнительной документации"
  ];

  // Массив картинок — добавляйте или убирайте по желанию
  const imageUrls = [work1, work2, work3, work4, work5, work6];

  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((current) => (current + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  const altTexts = [
    "Печать чертежей формата А1 с фальцовкой",
    "Распечатать проектную документацию А0",
    "Печать рабочей документации А3",
    "Распечатать исполнительную документацию А2",
    "Печать технической документации А4",
    "Распечатать чертежи А1 для строительного проекта",
    "Печать проектов формата А0 по ГОСТ",
    "Распечатать рабочую документацию А3 с фальцовкой",
    "Печать исполнительной документации А2",
    "Распечатать техническую документацию А4",
    "Печать А1 — проектная документация",
    "Распечатать А0 — чертежи и проекты",
  ];

  const floatingImages = useMemo(() => {
    const count = 12;
    const isMobile = window.innerWidth < 640;
    const sizes = isMobile
      ? [180, 220, 200, 250, 190, 230, 210, 260, 195, 240, 215, 225]
      : [320, 450, 380, 520, 340, 480, 400, 560, 360, 500, 420, 470];
    return Array.from({ length: count }).map((_, i) => {
      const angle = (i / count) * Math.PI * 2;
      const radius = i % 2 === 0 ? 70 : 50;
      const startX = Math.cos(angle) * radius;
      const startY = Math.sin(angle) * radius;

      return {
        id: i,
        src: imageUrls[i % imageUrls.length],
        alt: altTexts[i],
        startX: `${startX}vw`,
        startY: `${startY}vh`,
        size: sizes[i],
        delay: -(i / count) * 50,
        duration: 40 + (i % 3) * 8,
      };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section id="works" className="relative w-full bg-black overflow-hidden" style={{ minHeight: '100vh' }}>
      <style>{`
        @keyframes recedeIntoDistance {
          0% {
            transform: translate(calc(var(--start-x) * 2), calc(var(--start-y) * 2)) scale(1.15);
            opacity: 0;
            filter: blur(0px);
          }
          4% {
            opacity: 0.75;
          }
          10% {
            transform: translate(calc(var(--start-x) * 1.8), calc(var(--start-y) * 1.8)) scale(1.04);
            opacity: 0.7;
            filter: blur(0px);
          }
          25% {
            transform: translate(calc(var(--start-x) * 1.5), calc(var(--start-y) * 1.5)) scale(0.88);
            opacity: 0.6;
            filter: blur(0.5px);
          }
          50% {
            transform: translate(calc(var(--start-x) * 1.0), calc(var(--start-y) * 1.0)) scale(0.62);
            opacity: 0.45;
            filter: blur(2px);
          }
          75% {
            transform: translate(calc(var(--start-x) * 0.5), calc(var(--start-y) * 0.5)) scale(0.35);
            opacity: 0.25;
            filter: blur(6px);
          }
          90% {
            opacity: 0.1;
            filter: blur(12px);
          }
          100% {
            transform: translate(0, 0) scale(0.08);
            opacity: 0;
            filter: blur(16px);
          }
        }

        @keyframes textFadeSlide {
          0% { opacity: 0; transform: translateY(20px); }
          15%, 85% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-20px); }
        }
      `}</style>

      {/* Floating images container */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {floatingImages.map((img) => (
          <img
            key={img.id}
            src={img.src}
            alt={img.alt}
            className="absolute rounded-2xl object-cover shadow-2xl"
            style={{
              width: `${img.size}px`,
              height: `${img.size * 0.7}px`,
              '--start-x': img.startX,
              '--start-y': img.startY,
              animation: `recedeIntoDistance ${img.duration}s linear ${img.delay}s infinite`,
            } as React.CSSProperties}
          />
        ))}
        {/* Center darkening for text readability */}
        <div
          className="absolute rounded-full"
          style={{
            width: '60vw',
            height: '60vh',
            background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 40%, transparent 70%)',
          }}
        />
      </div>

      {/* Central text content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-3 sm:px-4" style={{ minHeight: '100vh' }}>
        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
          <span>Профессиональный подход к</span>{' '}
          <span className="relative inline-block">
            <span className="grid" style={{ gridArea: '1/1' }}>
              {words.map((word, index) => (
                <span
                  key={word}
                  className="col-start-1 row-start-1 transition-none"
                  style={{
                    color: 'hsl(45, 90%, 55%)',
                    animation: wordIndex === index ? 'textFadeSlide 3s ease-in-out forwards' : 'none',
                    opacity: wordIndex === index ? undefined : 0,
                  }}
                >
                  {word}
                </span>
              ))}
            </span>
          </span>
        </h2>

        <p className="mt-4 sm:mt-6 text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl px-2">
          Выполняем работы любой сложности с соблюдением ГОСТ и СНиП. Гарантия качества на всех этапах.
        </p>


      </div>
    </section>
  );
};

export default AnimatedHeroWorks;

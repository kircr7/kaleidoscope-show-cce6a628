import React, { useState } from 'react';
import { MapPin, Phone, Mail, FileText } from 'lucide-react';
import logoImg from '@/assets/logo.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  const specs = [
    "Чертежи",
    "Проектная документация",
    "Рабочая документация",
    "Исполнительная документация"
  ];

  return (
    <footer id="footer" className="relative bg-[hsl(0,0%,4%)] text-[hsl(var(--foreground))] overflow-hidden">
      {/* Декоративная сетка */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(0,0%,50%) 1px, transparent 1px), linear-gradient(90deg, hsl(0,0%,50%) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 container max-w-6xl mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">

          {/* Блок 1: О компании */}
          <div className="md:col-span-4 space-y-5">
            <div className="group flex items-center gap-3 cursor-default">
              <img src={logoImg} alt="ПринтПРО — типография инженерной печати" className="h-7 brightness-0 invert opacity-80" />
            </div>

            <p className="text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
              Центр инженерной печати. Профессиональная работа с технической документацией любого объема и сложности.
            </p>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[hsl(var(--muted-foreground))] mb-3">
                Специализация:
              </p>
              <ul className="space-y-2">
                {specs.map(spec => (
                  <li key={spec} className="flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))]">
                    <FileText size={14} className="text-[hsl(45,90%,55%)] flex-shrink-0" />
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Блок 2: Контакты */}
          <div className="md:col-span-3 space-y-5">
            <h4 className="text-base font-semibold text-[hsl(var(--foreground))]">Наши контакты</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm text-[hsl(var(--muted-foreground))]">
                <MapPin size={16} className="text-[hsl(45,90%,55%)] mt-0.5 flex-shrink-0" />
                г. Москва, ул. Свободы, д. 35, стр. 5
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone size={16} className="text-[hsl(45,90%,55%)] flex-shrink-0" />
                <a href="tel:+79851547772" className="text-white hover:text-white/80 transition-colors">
                  +7 (985) 154-77-72
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail size={16} className="text-[hsl(45,90%,55%)] flex-shrink-0" />
                <a href="mailto:printprro@gmail.com" className="text-white hover:text-white/80 transition-colors">
                  printprro@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Блок 3: Карта */}
          <div className="md:col-span-5 space-y-5">
            <h4 className="text-base font-semibold text-[hsl(var(--foreground))]">Мы на карте</h4>
            <div
              className="relative rounded-xl overflow-hidden border border-[hsl(var(--border))] cursor-grab"
              style={{
                perspective: "1000px",
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className="transition-transform duration-200 ease-out"
                style={{
                  transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                }}
              >
                <div className="relative bg-[hsl(var(--card))] p-3">
                  <p className="text-xs font-semibold text-[hsl(var(--foreground))] mb-2">ПринтПро</p>
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?display-text=%D0%A2%D0%B8%D0%BF%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F&ll=37.456444%2C55.843636&mode=search&oid=150374193660&ol=biz&sctx=ZAAAAAgBEAAaKAoSCTav6qwWukJAEQgfSrTk60tAEhIJdM%2B6RsuBXj8RWwuz0M5pRj8iBgABAgMEBSgKOABAv5IHSAFqAnJ1nQHNzMw9oAEAqAEAvQG%2FbA92wgEG%2FLOAmLAEggIbKChjYXRlZ29yeV9pZDooMTg0MTA3MTM0KSkpigIJMTg0MTA3MTM0kgIAmgIMZGVza3RvcC1tYXBzqgJRMjA1NzI4ODUyNjA4LDQ1NDMyNDAzNDEsNjAwMjE0NiwxNDkxMzY5Nzk3OTEsMTA2MzU5MzcxNjM3LDkwNzIxODI1MTY4LDM4MDM4NzQ1NDUx&sll=37.453837%2C55.843636&source=serp_navig&sspn=0.013146%2C0.004829&text=%7B%22text%22%3A%22%D0%A2%D0%B8%D0%BF%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F%22%2C%22what%22%3A%5B%7B%22attr_name%22%3A%22category_id%22%2C%22attr_values%22%3A%5B%22184107134%22%5D%7D%5D%7D&z=16.66"
                    width="100%"
                    height="220"
                    frameBorder="0"
                    allowFullScreen
                    className="rounded-lg"
                    style={{ filter: "invert(0.9) hue-rotate(180deg) contrast(0.85)" }}
                    title="Карта офиса ПринтПро"
                  />
                </div>
                {/* Блик */}
                <div
                  className="absolute inset-0 pointer-events-none rounded-xl opacity-10"
                  style={{
                    background: `radial-gradient(circle at ${50 + rotate.y * 2}% ${50 + rotate.x * 2}%, hsla(0,0%,100%,0.3), transparent 60%)`,
                  }}
                />
              </div>
            </div>
            <a
              href="https://yandex.ru/maps/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs text-[hsl(45,90%,55%)] hover:underline transition-colors"
            >
              Открыть большую карту →
            </a>
          </div>
        </div>

        {/* Нижняя планка */}
        <div className="mt-10 sm:mt-12 pt-6 border-t border-[hsl(var(--border))] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[hsl(var(--muted-foreground))] text-center md:text-left space-y-1">
            <p>© {currentYear} ИП Стрыгина Екатерина Александровна (Типография «ПринтПРО»)</p>
            <p>ИНН: 245907557883 · ОГРНИП: 326246800000141</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-center">
            <a href="/blog" className="text-xs text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors">
              Блог
            </a>
            <a href="/privacy" className="text-xs text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors">
              Политика конфиденциальности
            </a>
            <a href="/terms" className="text-xs text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors">
              Условия обслуживания
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

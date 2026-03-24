import React, { useState, useEffect } from 'react';

const FloatingTelegram = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Показываем подсказку сразу при появлении
      setTimeout(() => setShowTooltip(true), 300);
      // Убираем подсказку через 5 секунд
      setTimeout(() => setShowTooltip(false), 5300);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-20 sm:bottom-5 right-3 sm:right-5 z-[90] flex items-center group font-sans animate-fade-in"
    >
      {/* Подсказка */}
      <span
        className={`absolute right-full mr-3 bg-white/95 backdrop-blur text-slate-700 text-xs font-semibold py-2 px-3.5 rounded-xl shadow-lg transition-all duration-500 pointer-events-none whitespace-nowrap border border-slate-100 ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
        }`}
      >
        Скинуть чертежи
        <span className="absolute top-1/2 -right-1 -mt-1 w-2 h-2 bg-white border-r border-t border-slate-100 transform rotate-45"></span>
      </span>

      <a
        href="https://t.me/printprro"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-[#2AABEE] text-white rounded-full shadow-[0_0_15px_rgba(42,171,238,0.4)] hover:shadow-[0_0_25px_rgba(42,171,238,0.6)] hover:scale-110 transition-all duration-500 animate-[glow-pulse_6s_ease-in-out_infinite]"
        aria-label="Написать в Telegram ПринтПРО"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ml-[-1px] mt-[1px]"
        >
          <path
            d="M20.665 4.70898L17.702 18.718C17.481 19.721 16.883 19.974 16.036 19.497L11.431 16.104L9.213 18.232C8.968 18.477 8.761 18.684 8.271 18.684L8.599 13.992L17.133 6.29098C17.504 5.96098 17.052 5.77998 16.559 6.10898L6.02 12.738L1.474 11.315C0.485 11.008 0.468 10.323 1.681 9.85198L19.431 3.01198C20.252 2.70498 20.971 3.18998 20.665 4.70898Z"
            fill="currentColor"
          />
        </svg>
      </a>
    </div>
  );
};

export default FloatingTelegram;

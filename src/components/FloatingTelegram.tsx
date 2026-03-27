import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

const FloatingPhone = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => setShowTooltip(true), 300);
      setTimeout(() => setShowTooltip(false), 5300);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-20 sm:bottom-5 right-3 sm:right-5 z-[90] flex items-center group font-sans animate-fade-in"
    >
      <span
        className={`absolute right-full mr-3 bg-white/95 backdrop-blur text-slate-700 text-xs font-semibold py-2 px-3.5 rounded-xl shadow-lg transition-all duration-500 pointer-events-none whitespace-nowrap border border-slate-100 ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
        }`}
      >
        Позвоните нам
        <span className="absolute top-1/2 -right-1 -mt-1 w-2 h-2 bg-white border-r border-t border-slate-100 transform rotate-45"></span>
      </span>

      <a
        href="tel:+79851547772"
        className="flex items-center justify-center w-12 h-12 bg-emerald-500 text-white rounded-full shadow-[0_0_15px_rgba(16,185,129,0.4)] hover:shadow-[0_0_25px_rgba(16,185,129,0.6)] hover:scale-110 transition-all duration-500 animate-[glow-pulse_6s_ease-in-out_infinite]"
        aria-label="Позвоните нам"
      >
        <Phone className="w-5 h-5" />
      </a>
    </div>
  );
};

export default FloatingPhone;

import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-[100] p-3 pointer-events-none">
      <div className="max-w-2xl mx-auto bg-black/80 backdrop-blur-md text-white/60 rounded-xl px-4 py-3 flex items-center justify-between gap-4 pointer-events-auto border border-white/5 animate-in slide-in-from-bottom-4 fade-in duration-500">
        <div className="flex items-center gap-3 min-w-0">
          <Cookie className="w-4 h-4 text-white/30 shrink-0" />
          <p className="text-[11px] leading-relaxed">
            Мы используем cookie для улучшения работы сайта.{' '}
            <Link to="/privacy" className="text-white/50 hover:text-white/80 underline underline-offset-2 transition-colors">
              Подробнее
            </Link>
          </p>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={acceptCookies}
            className="bg-white/10 hover:bg-white/15 text-white/70 px-4 py-1.5 rounded-lg text-[11px] font-medium transition-all active:scale-95"
          >
            Ок
          </button>
          <button
            onClick={acceptCookies}
            className="p-1.5 text-white/20 hover:text-white/50 rounded-lg transition-colors"
            aria-label="Закрыть"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;

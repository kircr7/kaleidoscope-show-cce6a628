import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.svg';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith('/') && !href.includes('#')) {
      navigate(href);
    } else if (href.startsWith('/#')) {
      const hash = href.slice(1);
      if (location.pathname === '/') {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/' + hash);
      }
    } else if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const navLinks = [
    { name: 'Услуги', href: '/#services' },
    { name: 'Цены', href: '/#pricelist' },
    { name: 'Блог', href: '/blog' },
    { name: 'Контакты', href: '/#footer' },
  ];

  return (
    <>
      {/* Desktop floating top nav */}
      <nav
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-1 rounded-full border border-white/[0.08] transition-all duration-700 max-w-[calc(100%-2rem)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
        style={{
          background: 'hsla(0, 0%, 8%, 0.75)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          padding: '6px 6px 6px 8px',
        }}
      >
        <a href="#" className="px-2 py-1 rounded-full flex items-center flex-shrink-0">
          <img src={logo} alt="ПринтПРО — печать чертежей" className="h-5 lg:h-6 brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
        </a>

        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className="px-3 lg:px-5 py-2 rounded-full text-xs font-medium text-white/50 hover:text-white hover:bg-white/[0.06] transition-all duration-300 active:scale-95 whitespace-nowrap"
          >
            {link.name}
          </a>
        ))}

        {/* CTA with gradient border */}
        <a
          href="/#calculator"
          onClick={(e) => handleNavClick(e, '/#calculator')}
          className="relative group ml-1 flex-shrink-0 rounded-full p-[1.5px] cta-glow-wrap"
          style={{ background: 'linear-gradient(to right, #22d3ee, #3b82f6, #ec4899)' }}
        >
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 blur-md opacity-0 cta-glow" />
          <span className="relative block px-4 lg:px-6 py-2.5 rounded-full text-xs font-bold text-white whitespace-nowrap" style={{ background: 'hsl(0, 0%, 8%)' }}>
            Сделать заказ
          </span>
        </a>
      </nav>

      {/* Mobile top bar */}
      <nav
        className={`fixed top-3 left-1/2 -translate-x-1/2 z-50 md:hidden w-[calc(100%-2rem)] max-w-sm transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
      >
        <div
          className="flex items-center justify-between px-3 py-2 rounded-full border border-white/[0.08]"
          style={{
            background: 'hsla(0, 0%, 8%, 0.8)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
        >
          <a href="#" className="px-1 py-0.5 flex items-center">
            <img src={logo} alt="ПринтПРО" className="h-5 brightness-0 invert opacity-70" />
          </a>

          <div className="flex items-center gap-1">
            <a href="/#calculator" onClick={(e) => handleNavClick(e, '/#calculator')} className="relative group cta-glow-wrap">
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 blur-md opacity-0 cta-glow" />
              <span className="relative block px-4 py-2 rounded-full text-[11px] font-bold text-white bg-[hsl(0,0%,8%)] m-[1.5px]">
                Сделать заказ
              </span>
            </a>

            <button
              className="p-2 text-white/50 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      <div className={`md:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-xl transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => { handleNavClick(e, link.href); setIsMobileMenuOpen(false); }}
              className="text-lg font-bold text-white/60 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="w-12 h-px bg-white/10" />
          <a href="tel:+79851547772" className="text-sm text-white/30 font-medium">
            +7 (985) 154-77-72
          </a>
        </div>
      </div>

      <style>{`
        @keyframes cta-glow-pulse {
          0%, 100% { opacity: 0; }
          50% { opacity: 0.45; }
        }
        .cta-glow {
          animation: cta-glow-pulse 4s ease-in-out infinite;
        }
        .cta-glow-wrap:hover .cta-glow {
          animation: none;
          opacity: 0.6;
        }
      `}</style>
    </>
  );
};

export default Navbar;

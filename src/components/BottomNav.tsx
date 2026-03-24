const navLinks = [
  { label: "Услуги", href: "#services" },
  { label: "Наши работы", href: "#works" },
  { label: "О нас", href: "#about" },
  { label: "Контакты", href: "#contacts" },
];

const BottomNav = () => {
  return (
    <nav
      className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-xl"
    >
      <div
        className="relative flex items-center justify-between px-4 py-1.5 rounded-lg border border-[hsl(0_0%_20%)]/40 transition-shadow duration-500 hover:shadow-[inset_0_0_30px_hsla(45,90%,55%,0.04),inset_0_0_60px_hsla(45,90%,55%,0.02)]"
        style={{
          background: "hsla(0, 0%, 8%, 0.65)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      >
        {/* Logo left */}
        <a
          href="#"
          className="text-xs font-bold text-white tracking-wide transition-all duration-300 hover:drop-shadow-[0_0_12px_hsla(0,0%,100%,0.5)]"
        >
          ПринтПРО
        </a>

        {/* Links right */}
        <div className="flex items-center gap-1 md:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative px-2.5 py-1 text-[11px] text-[hsl(0_0%_60%)] rounded-lg transition-all duration-300 hover:text-white hover:bg-[hsl(0_0%_100%)]/[0.06] active:scale-95"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;

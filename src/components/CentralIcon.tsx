import { useState, useEffect } from 'react';

const WORDS = ["КАЧЕСТВО", "ЦЕНА", "СРОКИ", "ГАРАНТИЯ", "ОПЫТ"];

const CentralIcon = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show first word
    const showTimer = setTimeout(() => setVisible(true), 300);

    const interval = setInterval(() => {
      setVisible(false); // fade out
      setTimeout(() => {
        setWordIndex(prev => (prev + 1) % WORDS.length);
        setVisible(true); // fade in new word
      }, 800);
    }, 4000);

    return () => { clearInterval(interval); clearTimeout(showTimer); };
  }, []);

  return (
    <div className="relative w-44 h-44 md:w-56 md:h-56 flex-shrink-0 z-10">
      {/* Black frame */}
      <div
        className="absolute inset-0 rounded-[2rem] border border-border/30"
        style={{
          background: "hsl(0 0% 4%)",
          boxShadow: "0 8px 32px hsl(0 0% 0% / 0.5), inset 0 1px 0 hsl(0 0% 100% / 0.05)",
        }}
      />

      {/* Inner gradient blobs */}
      <div className="absolute inset-3 md:inset-4 rounded-[1.25rem] overflow-hidden">
        <div className="absolute inset-0" style={{
          background: "radial-gradient(circle at 30% 70%, hsl(340, 80%, 50%), transparent 60%), radial-gradient(circle at 70% 30%, hsl(220, 80%, 55%), transparent 60%), radial-gradient(circle at 50% 50%, hsl(190, 70%, 45%), transparent 50%)",
          backgroundSize: "200% 200%",
          animation: "gradient-morph 6s ease infinite",
        }} />
        <div className="absolute w-[120%] h-[120%] -left-[10%] -top-[10%]" style={{
          background: "radial-gradient(circle at 40% 60%, hsl(350, 75%, 55%), transparent 50%)",
          animation: "blob-move-1 8s ease-in-out infinite",
        }} />
        <div className="absolute w-[120%] h-[120%] -left-[10%] -top-[10%]" style={{
          background: "radial-gradient(circle at 60% 40%, hsl(210, 85%, 50%), transparent 50%)",
          animation: "blob-move-2 10s ease-in-out infinite",
        }} />
        <div className="absolute w-[120%] h-[120%] -left-[10%] -top-[10%]" style={{
          background: "radial-gradient(circle at 50% 80%, hsl(170, 70%, 45%), transparent 45%)",
          animation: "blob-move-3 12s ease-in-out infinite",
        }} />
      </div>

      {/* Center word */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <span
          className="text-lg md:text-2xl font-black tracking-[0.12em] text-white transition-all duration-700 ease-in-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0) scale(1)" : "translateY(6px) scale(0.95)",
            filter: visible ? "blur(0px)" : "blur(4px)",
          }}
        >
          {WORDS[wordIndex]}
        </span>
      </div>

      {/* Outer glow */}
      <div
        className="absolute -inset-4 rounded-[2.5rem] opacity-20 blur-xl -z-10"
        style={{
          background: "radial-gradient(circle, hsl(340, 80%, 50%), hsl(210, 85%, 50%), transparent)",
        }}
      />
    </div>
  );
};

export default CentralIcon;

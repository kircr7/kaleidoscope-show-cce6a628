import { useEffect, useState } from "react";
import { Settings2, X } from "lucide-react";

// Глобальные настройки плавности слайдера (читаются в rAF — без ререндеров)
export interface SliderTuneParams {
  base: number;        // базовая жёсткость lerp (0.01..0.2)
  easeMin: number;     // минимальный множитель у цели (0.1..1)
  easeCurve: number;   // степень easing (1=линейно, 2=квадрат, 3=куб)
  snapThreshold: number; // порог «приклеивания» к цели
}

const STORAGE_KEY = "slider-tune-v1";
const DEFAULTS: SliderTuneParams = {
  base: 0.05,
  easeMin: 0.35,
  easeCurve: 2,
  snapThreshold: 0.0005,
};

// Мутируемый объект — слайдеры читают его напрямую внутри rAF
export const sliderTune: SliderTuneParams = (() => {
  if (typeof window === "undefined") return { ...DEFAULTS };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return { ...DEFAULTS, ...JSON.parse(raw) };
  } catch {}
  return { ...DEFAULTS };
})();

const Row = ({
  label,
  value,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
}) => (
  <label className="block">
    <div className="flex justify-between items-center text-xs text-white/80 mb-1">
      <span>{label}</span>
      <span className="tabular-nums text-white/60">{value.toFixed(3)}</span>
    </div>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(parseFloat(e.target.value))}
      className="w-full accent-primary"
    />
  </label>
);

const SliderTuner = () => {
  const [open, setOpen] = useState(false);
  const [, force] = useState(0);

  // Сохраняем в localStorage при изменениях
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(sliderTune));
    } catch {}
  });

  const update = (patch: Partial<SliderTuneParams>) => {
    Object.assign(sliderTune, patch);
    force((n) => n + 1);
  };

  const reset = () => {
    Object.assign(sliderTune, DEFAULTS);
    force((n) => n + 1);
  };

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-20 right-4 z-50 w-11 h-11 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-white/80 hover:text-white hover:bg-black/90 flex items-center justify-center shadow-lg transition"
        aria-label="Настроить плавность слайдера"
        title="Настроить плавность"
      >
        <Settings2 className="w-5 h-5" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-20 right-4 z-50 w-72 rounded-2xl bg-black/85 backdrop-blur-md border border-white/15 shadow-2xl text-white p-4">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-semibold">Плавность слайдера</h4>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="w-7 h-7 rounded-full hover:bg-white/10 flex items-center justify-center"
          aria-label="Закрыть"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-3">
        <Row
          label="База lerp (жёсткость)"
          value={sliderTune.base}
          min={0.01}
          max={0.2}
          step={0.005}
          onChange={(v) => update({ base: v })}
        />
        <Row
          label="Минимум у цели"
          value={sliderTune.easeMin}
          min={0.1}
          max={1}
          step={0.05}
          onChange={(v) => update({ easeMin: v })}
        />
        <Row
          label="Кривая easing"
          value={sliderTune.easeCurve}
          min={1}
          max={4}
          step={0.1}
          onChange={(v) => update({ easeCurve: v })}
        />
        <Row
          label="Порог приклеивания"
          value={sliderTune.snapThreshold}
          min={0.0001}
          max={0.01}
          step={0.0001}
          onChange={(v) => update({ snapThreshold: v })}
        />
      </div>

      <div className="mt-4 flex items-center justify-between text-xs">
        <button
          type="button"
          onClick={reset}
          className="px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/15 transition"
        >
          Сбросить
        </button>
        <span className="text-white/40">наведите на карточку →</span>
      </div>
    </div>
  );
};

export default SliderTuner;

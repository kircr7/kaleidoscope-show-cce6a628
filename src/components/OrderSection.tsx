import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Trash2, Printer, ShoppingCart, Send, Phone, User, CheckCircle, Ruler, ShieldCheck, Truck, Plus, Minus, Link2, Paperclip, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Switch } from '@/components/ui/switch';
import emailjs from '@emailjs/browser';

interface CartItem {
  id: number;
  label: string;
  format: string;
  unitPrice: number;
  quantity: number;
  isService: boolean;
}

const PRICES: Record<string, { bw: number; color: number; label: string }> = {
  A4: { bw: 5, color: 10, label: 'A4 (210×297 мм)' },
  A3: { bw: 14, color: 24, label: 'A3 (297×420 мм)' },
  A2: { bw: 30, color: 40, label: 'A2 (420×594 мм)' },
  A1: { bw: 50, color: 70, label: 'A1 (594×841 мм)' },
  A0: { bw: 100, color: 110, label: 'A0 (841×1189 мм)' },
};

const FOLDING_PRICES: Record<string, number> = {
  A4: 0,
  A3: 5,
  A2: 8,
  A1: 14,
  A0: 18,
};

const SERVICES = [
  { id: 'bindingA4', label: 'Брошюровка в А4', price: 100 },
  { id: 'bindingA3', label: 'Брошюровка в А3', price: 200 },
  { id: 'hardcover', label: 'Твердый переплет', price: 600 },
  { id: 'lamination', label: 'Ламинация', price: 100 },
];

const OrderSection = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [format, setFormat] = useState('A1');
  const [isColor, setIsColor] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [customer, setCustomer] = useState({ name: '', phone: '' });
  const [fileLink, setFileLink] = useState('');
  const [orderFileLink, setOrderFileLink] = useState('');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const orderFormRef = useRef<HTMLFormElement>(null);
  const fileFormRef = useRef<HTMLFormElement>(null);
  const [fileCustomer, setFileCustomer] = useState({ name: '', phone: '' });
  const [fileConsent, setFileConsent] = useState(true);
  const [fileStatus, setFileStatus] = useState('');
  const [consent, setConsent] = useState(true);
  const [status, setStatus] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [foldingEnabled, setFoldingEnabled] = useState(false);
  const [showFoldingReminder, setShowFoldingReminder] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const addPrintToCart = () => {
    const unitPrice = isColor ? PRICES[format].color : PRICES[format].bw;
    setCart(prev => [...prev, {
      id: Date.now(),
      label: `${PRICES[format].label} (${isColor ? 'Цвет' : 'ЧБ'})`,
      format,
      unitPrice,
      quantity,
      isService: false,
    }]);
    setQuantity(1);
  };

  const addServiceToCart = (service: typeof SERVICES[0]) => {
    setCart(prev => [...prev, {
      id: Date.now() + Math.random(),
      label: service.label,
      format: '',
      unitPrice: service.price,
      quantity: 1,
      isService: true,
    }]);
  };

  const removeItem = (id: number) => setCart(cart.filter(item => item.id !== id));

  const updateQuantity = (id: number, delta: number) => {
    setCart(prev => prev.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const getFoldingPrice = (item: CartItem) => {
    if (item.isService) return 0;
    return FOLDING_PRICES[item.format] || 0;
  };

  const getItemTotal = (item: CartItem) => {
    const folding = (!item.isService && foldingEnabled) ? getFoldingPrice(item) : 0;
    return (item.unitPrice + folding) * item.quantity;
  };

  const stats = useMemo(() => {
    const subtotal = cart.reduce((acc, item) => acc + getItemTotal(item), 0);
    const discount = subtotal * 0.20;
    return { subtotal, discount, total: subtotal - discount };
  }, [cart, foldingEnabled]);

  const sendOrder = async (e: React.FormEvent) => {
    e.preventDefault();

    // Remind about folding if not enabled and cart has non-A4 prints
    if (!foldingEnabled && !showFoldingReminder && cart.some(item => !item.isService && item.format !== 'A4')) {
      setShowFoldingReminder(true);
      return;
    }
    setShowFoldingReminder(false);

    if (!consent) {
      alert('Необходимо согласие на обработку персональных данных');
      return;
    }
    if (customer.phone.replace(/\D/g, '').length < 11) {
      alert('Пожалуйста, введите полный номер телефона');
      return;
    }

    if (!orderFormRef.current) {
      alert('Форма не готова к отправке. Обновите страницу и попробуйте снова.');
      return;
    }

    setStatus('sending');

    try {
      await emailjs.sendForm(
        'service_5lojlb2',
        'template_86or1it',
        orderFormRef.current,
        'ShGXdndtWKIL7zvcD',
      );
      setStatus('success');
    } catch (error) {
      console.error('Ошибка отправки:', error);
      alert('Упс! Произошла ошибка. Пожалуйста, напишите нам на printprro@gmail.com или в Telegram.');
      setStatus('');
    }
  };

  const sendFiles = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fileConsent) {
      alert('Необходимо согласие на обработку персональных данных');
      return;
    }
    if (!fileLink && !uploadedFile) {
      alert('Прикрепите файл или укажите ссылку');
      return;
    }
    if (fileCustomer.phone.replace(/\D/g, '').length < 11) {
      alert('Пожалуйста, введите полный номер телефона');
      return;
    }
    if (!fileFormRef.current) return;

    setFileStatus('sending');
    try {
      await emailjs.sendForm(
        'service_5lojlb2',
        'template_86or1it',
        fileFormRef.current,
        'ShGXdndtWKIL7zvcD',
      );
      setFileStatus('success');
    } catch (error) {
      console.error('Ошибка отправки файла:', error);
      alert('Ошибка отправки. Попробуйте через Telegram.');
      setFileStatus('');
    }
  };

  return (
    <section id="calculator" className="relative py-12 sm:py-20 md:py-32 px-3 sm:px-4 bg-white overflow-hidden">
      <div className="relative z-10 container max-w-7xl mx-auto overflow-hidden">
        <div
          className="relative rounded-2xl opacity-0"
          style={{ animation: 'reveal-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 100ms forwards' }}
        >
          {/* Rotating border effect */}
          <div
            className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl pointer-events-none"
            style={{ width: 'calc(100% + 2px)', height: 'calc(100% + 2px)' }}
          >
            <div
              className="absolute inset-0"
              style={{ backgroundImage: 'linear-gradient(0deg, hsl(0,0%,100%) -50%, hsl(0,0%,40%) 100%)' }}
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-border-rotate pointer-events-none"
              style={{
                width: '200%',
                height: '10rem',
                transformOrigin: 'center',
                backgroundImage: 'linear-gradient(0deg, hsla(0,0%,100%,0) 0%, hsl(277,95%,60%) 40%, hsl(277,95%,60%) 60%, hsla(0,0%,40%,0) 100%)',
              }}
            />
          </div>

          {/* Main card body */}
          <div
            className="relative overflow-hidden rounded-2xl border border-white/20"
            style={{
              backgroundColor: 'hsla(240,15%,9%,0.55)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              backgroundImage: `
                radial-gradient(at 0% 64%, hsla(263,93%,56%,0.15) 0px, transparent 85%),
                radial-gradient(at 41% 94%, hsla(284,100%,84%,0.1) 0px, transparent 85%),
                radial-gradient(at 100% 99%, hsla(306,100%,57%,0.1) 0px, transparent 85%)
              `,
              boxShadow: '0px -16px 24px 0px rgba(255,255,255,0.1) inset, 0 8px 32px rgba(0,0,0,0.2)',
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* ЛЕВАЯ ПАНЕЛЬ */}
              <div className="relative p-5 sm:p-8 md:p-12 flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0 lg:border-r" style={{ borderColor: 'hsl(240,9%,17%)' }} />

                <div className="relative z-10">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight tracking-tight text-white">
                    Отправьте файлы <br className="hidden sm:block" /> удобным вам способом.
                  </h2>
                  <p className="mt-3 sm:mt-4 text-sm md:text-base leading-relaxed max-w-sm" style={{ color: 'hsl(0,0%,83%)' }}>
                    Не тратьте время на расчеты. Наш менеджер сам проверит файлы и назовет точную цену.
                  </p>

                  <a
                    href="https://t.me/printprro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 sm:mt-6 inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 active:scale-[0.97] hover:bg-[hsla(266,92%,58%,0.15)] hover:shadow-[0_0_20px_hsla(266,92%,58%,0.3)]"
                    style={{
                      border: '2px solid hsl(266,92%,58%)',
                      color: 'hsl(266,92%,78%)',
                      backgroundColor: 'transparent',
                    }}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.665 4.70898L17.702 18.718C17.481 19.721 16.883 19.974 16.036 19.497L11.431 16.104L9.213 18.232C8.968 18.477 8.761 18.684 8.271 18.684L8.599 13.992L17.133 6.29098C17.504 5.96098 17.052 5.77998 16.559 6.10898L6.02 12.738L1.474 11.315C0.485 11.008 0.468 10.323 1.681 9.85198L19.431 3.01198C20.252 2.70498 20.971 3.18998 20.665 4.70898Z" />
                    </svg>
                    Написать в Telegram
                  </a>
                </div>

                {/* File upload form */}
                <div className="relative z-10 mt-8">
                   <div className="h-px w-full mb-6" style={{ backgroundColor: 'hsl(240,9%,20%)' }} />
                  {fileStatus === 'success' ? (
                    <div className="text-center py-6">
                      <CheckCircle className="w-10 h-10 mx-auto mb-3" style={{ color: 'hsl(120,60%,60%)' }} />
                      <p className="text-sm font-bold text-white">Файлы отправлены!</p>
                      <p className="text-xs mt-1" style={{ color: 'hsl(0,0%,60%)' }}>Мы свяжемся с вами в ближайшее время.</p>
                      <button
                        type="button"
                        onClick={() => { setFileStatus(''); setFileLink(''); setFileCustomer({ name: '', phone: '' }); setUploadedFile(null); if (fileInputRef.current) fileInputRef.current.value = ''; }}
                        className="mt-3 text-xs font-bold"
                        style={{ color: 'hsl(266,92%,68%)' }}
                      >
                        Отправить ещё →
                      </button>
                    </div>
                  ) : (
                    <form ref={fileFormRef} onSubmit={sendFiles} encType="multipart/form-data" className="space-y-3">
                      <div className="relative">
                        <Link2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: 'hsl(0,0%,50%)' }} />
                        <input
                          type="text"
                          name="file_link"
                          placeholder="Ссылка на файлы (Яндекс.Диск, Облако)"
                          value={fileLink}
                          onChange={e => setFileLink(e.target.value)}
                          className="w-full pl-11 p-3.5 rounded-2xl outline-none text-sm text-white placeholder:opacity-40 transition-all duration-200 hover:border-[hsl(266,92%,58%)] focus:border-[hsl(266,92%,58%)] hover:bg-[hsla(240,15%,18%,0.9)]"
                          style={{ backgroundColor: 'hsla(240,15%,15%,0.8)', border: '1px solid hsl(240,9%,17%)' }}
                        />
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-px" style={{ backgroundColor: 'hsl(240,9%,20%)' }} />
                        <span className="text-[11px] font-medium" style={{ color: 'hsl(0,0%,40%)' }}>или</span>
                        <div className="flex-1 h-px" style={{ backgroundColor: 'hsl(240,9%,20%)' }} />
                      </div>
                      <div>
                        <input
                          ref={fileInputRef}
                          type="file"
                          name="order_file"
                          accept=".pdf,.zip,.rar,.dwg"
                          className="hidden"
                          onChange={e => {
                            const file = e.target.files?.[0];
                            if (file && file.size <= 50 * 1024 * 1024) {
                              setUploadedFile(file);
                            } else if (file) {
                              alert('Файл слишком большой. Максимум 50 МБ.');
                              e.target.value = '';
                            }
                          }}
                        />
                        {uploadedFile ? (
                          <div
                            className="flex items-center justify-between p-3 rounded-2xl"
                            style={{ backgroundColor: 'hsla(240,15%,15%,0.8)', border: '1px solid hsl(240,9%,17%)' }}
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              <Paperclip className="w-4 h-4 flex-shrink-0" style={{ color: 'hsl(266,92%,68%)' }} />
                              <span className="text-sm text-white truncate">{uploadedFile.name}</span>
                              <span className="text-[10px] flex-shrink-0" style={{ color: 'hsl(0,0%,50%)' }}>
                                ({(uploadedFile.size / 1024 / 1024).toFixed(1)} МБ)
                              </span>
                            </div>
                            <button
                              type="button"
                              onClick={() => { setUploadedFile(null); if (fileInputRef.current) fileInputRef.current.value = ''; }}
                              className="p-1 hover:bg-white/10 rounded-full transition-colors flex-shrink-0"
                            >
                              <X className="w-3.5 h-3.5 text-white/50" />
                            </button>
                          </div>
                        ) : (
                          <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="w-full p-3 rounded-2xl text-sm font-semibold transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2 hover:border-[hsl(266,92%,58%)] hover:bg-[hsla(266,92%,58%,0.08)] hover:text-white"
                            style={{
                              backgroundColor: 'hsla(240,15%,15%,0.5)',
                              border: '1px dashed hsl(240,9%,25%)',
                              color: 'hsl(0,0%,70%)',
                            }}
                          >
                            <Paperclip className="w-4 h-4" />
                            Загрузить файл (до 50 МБ)
                          </button>
                        )}
                      </div>

                      {(fileLink || uploadedFile) && (
                        <>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="relative">
                              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: 'hsl(0,0%,50%)' }} />
                              <input
                                required
                                name="customer_name"
                                placeholder="Ваше имя"
                                value={fileCustomer.name}
                                onChange={e => setFileCustomer({ ...fileCustomer, name: e.target.value })}
                                className="w-full pl-11 p-3.5 rounded-2xl outline-none text-sm text-white placeholder:opacity-40 transition-all duration-200 hover:border-[hsl(266,92%,58%)] focus:border-[hsl(266,92%,58%)] hover:bg-[hsla(240,15%,18%,0.9)]"
                                style={{ backgroundColor: 'hsla(240,15%,15%,0.8)', border: '1px solid hsl(240,9%,17%)' }}
                              />
                            </div>
                            <div className="relative">
                              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: 'hsl(0,0%,50%)' }} />
                              <input
                                required
                                name="customer_phone"
                                type="tel"
                                placeholder="+7 (___) ___-__-__"
                                value={fileCustomer.phone}
                                onChange={e => {
                                  let digits = e.target.value.replace(/\D/g, '');
                                  if (digits.startsWith('8')) digits = '7' + digits.slice(1);
                                  if (!digits.startsWith('7') && digits.length > 0) digits = '7' + digits;
                                  digits = digits.slice(0, 11);
                                  let formatted = '';
                                  if (digits.length > 0) formatted = '+' + digits[0];
                                  if (digits.length > 1) formatted += ' (' + digits.slice(1, 4);
                                  if (digits.length > 4) formatted += ') ' + digits.slice(4, 7);
                                  if (digits.length > 7) formatted += '-' + digits.slice(7, 9);
                                  if (digits.length > 9) formatted += '-' + digits.slice(9, 11);
                                  setFileCustomer({ ...fileCustomer, phone: formatted });
                                }}
                                maxLength={18}
                                className="w-full pl-11 p-3.5 rounded-2xl outline-none text-sm text-white placeholder:opacity-40 transition-all duration-200 hover:border-[hsl(266,92%,58%)] focus:border-[hsl(266,92%,58%)] hover:bg-[hsla(240,15%,18%,0.9)]"
                                style={{ backgroundColor: 'hsla(240,15%,15%,0.8)', border: '1px solid hsl(240,9%,17%)' }}
                              />
                            </div>
                          </div>
                          <input type="hidden" name="order_details" value="Клиент отправил файлы через форму" />
                          <input type="hidden" name="total_price" value="—" />
                          <label className="flex items-start gap-2.5 cursor-pointer select-none">
                            <input
                              type="checkbox"
                              checked={fileConsent}
                              onChange={e => setFileConsent(e.target.checked)}
                              className="mt-1 w-4 h-4 rounded cursor-pointer bg-transparent"
                              style={{ accentColor: 'hsl(266,92%,58%)' }}
                              required
                            />
                            <span className="text-[11px] leading-relaxed" style={{ color: 'hsl(0,0%,100%)' }}>
                              Даю согласие на обработку персональных данных согласно{' '}
                              <Link to="/privacy" className="underline" style={{ color: 'hsl(266,92%,68%)' }}>
                                Политике конфиденциальности
                              </Link>{' '}
                              и принимаю{' '}
                              <Link to="/terms" className="underline" style={{ color: 'hsl(266,92%,68%)' }}>
                                Условия обслуживания
                              </Link>.
                            </span>
                          </label>

                          <button
                            type="submit"
                            disabled={fileStatus === 'sending'}
                            className="w-full text-white py-3.5 rounded-full font-bold uppercase text-sm tracking-wider transition-all duration-200 active:scale-[0.97] disabled:opacity-50 flex items-center justify-center gap-2 hover:shadow-[0_0_24px_hsla(266,92%,58%,0.5)] hover:brightness-110"
                            style={{
                              backgroundImage: 'linear-gradient(0deg, rgba(94,58,238,1) 0%, rgba(197,107,240,1) 100%)',
                              boxShadow: 'inset 0 -2px 25px -4px hsl(0,0%,100%)',
                            }}
                          >
                            {fileStatus === 'sending' ? 'Отправка...' : <><Send className="w-4 h-4" /> Отправить файл</>}
                          </button>
                        </>
                      )}
                    </form>
                  )}
                </div>

                <div className="relative z-10 mt-10 space-y-4">
                  {[
                    { icon: <Ruler className="w-5 h-5 text-blue-400" />, title: 'Строго по ГОСТ', desc: 'Идеальное соблюдение масштабов 1:1 и фальцовка под подшивку.', gradient: 'from-blue-500/20 to-blue-600/5' },
                    { icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />, title: 'Конфиденциально (NDA)', desc: 'Ваши чертежи и сметы надежно защищены от третьих лиц.', gradient: 'from-emerald-500/20 to-emerald-600/5' },
                    { icon: <Truck className="w-5 h-5 text-amber-400" />, title: 'Доставка по Москве', desc: 'Аккуратно упакуем и привезем документацию в офис или на стройплощадку.', gradient: 'from-amber-500/20 to-amber-600/5' },
                  ].map((item, i) => (
                   <div key={i} className="flex items-start gap-4 p-3 -mx-3 rounded-2xl transition-all duration-200 hover:bg-white/[0.04] cursor-default group/feature">
                      <div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.gradient} border border-white/10 flex items-center justify-center shrink-0 transition-all duration-200 group-hover/feature:scale-110 group-hover/feature:border-white/20`}
                        style={{ backgroundColor: 'hsla(240,15%,15%,0.6)' }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-white">{item.title}</h4>
                        <p className="text-xs mt-0.5" style={{ color: 'hsl(0,0%,83%)' }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ПРАВАЯ ПАНЕЛЬ: Калькулятор */}
              <div className="text-white">
                <div className="p-4 sm:p-5" style={{ borderBottom: '1px solid hsl(240,9%,17%)' }}>
                  <h3 className="text-base font-black mb-4 flex items-center gap-2 uppercase tracking-tight" style={{ color: 'hsl(0,0%,83%)' }}>
                    <Printer className="w-4 h-4" /> Калькулятор цены
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-[1.4fr_1fr] gap-3 mb-3">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase ml-1" style={{ color: 'hsl(0,0%,60%)' }}>Формат чертежа</label>
                      <div className="relative" ref={dropdownRef}>
                        <button
                          type="button"
                          onClick={() => setDropdownOpen(!dropdownOpen)}
                          className="w-full p-2.5 text-sm rounded-xl outline-none font-medium text-left flex items-center justify-between transition-all"
                          style={{
                            backgroundColor: 'hsla(240,15%,15%,0.8)',
                            border: `1px solid ${dropdownOpen ? 'hsl(266,92%,58%)' : 'hsl(240,9%,17%)'}`,
                            color: 'hsl(0,0%,83%)',
                          }}
                        >
                          <span>{PRICES[format].label} · {isColor ? PRICES[format].color : PRICES[format].bw} ₽</span>
                          <svg
                            className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                            style={{ color: 'hsl(0,0%,60%)' }}
                            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {dropdownOpen && (
                          <div
                            className="absolute z-50 w-full mt-1 rounded-xl overflow-hidden animate-scale-in"
                            style={{
                              backgroundColor: 'hsla(240,15%,11%,0.95)',
                              border: '1px solid hsl(240,9%,20%)',
                              backdropFilter: 'blur(20px)',
                              WebkitBackdropFilter: 'blur(20px)',
                              boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px hsla(266,92%,58%,0.1)',
                            }}
                          >
                            {Object.keys(PRICES).map(k => (
                              <button
                                key={k}
                                type="button"
                                onClick={() => { setFormat(k); setDropdownOpen(false); }}
                                className="w-full text-left px-3.5 py-2.5 text-sm font-medium transition-all flex justify-between items-center"
                                style={{
                                  color: format === k ? 'hsl(266,92%,78%)' : 'hsl(0,0%,83%)',
                                  backgroundColor: format === k ? 'hsla(266,92%,58%,0.15)' : 'transparent',
                                }}
                                onMouseEnter={(e) => {
                                  if (format !== k) e.currentTarget.style.backgroundColor = 'hsla(240,15%,20%,0.6)';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.backgroundColor = format === k ? 'hsla(266,92%,58%,0.15)' : 'transparent';
                                }}
                              >
                                <span>{PRICES[k].label}</span>
                                <span style={{ color: 'hsl(0,0%,50%)' }}>{isColor ? PRICES[k].color : PRICES[k].bw} ₽</span>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase ml-1" style={{ color: 'hsl(0,0%,60%)' }}>Цветность</label>
                      <div className="flex p-1 rounded-lg" style={{ backgroundColor: 'hsla(240,15%,15%,0.6)', border: '1px solid hsl(240,9%,17%)' }}>
                        <button
                          onClick={() => setIsColor(false)}
                          className="flex-1 py-2 rounded-lg text-xs font-bold transition-all"
                          style={{
                            backgroundColor: !isColor ? 'hsla(266,92%,58%,0.2)' : 'transparent',
                            color: !isColor ? 'hsl(266,92%,58%)' : 'hsl(0,0%,60%)',
                          }}
                        >ЧБ</button>
                        <button
                          onClick={() => setIsColor(true)}
                          className="flex-1 py-2 rounded-lg text-xs font-bold transition-all"
                          style={{
                            backgroundColor: isColor ? 'hsla(266,92%,58%,0.2)' : 'transparent',
                            color: isColor ? 'hsl(266,92%,58%)' : 'hsl(0,0%,60%)',
                          }}
                        >Цвет</button>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 sm:gap-3 mb-4">
                    <div
                      className="flex items-center rounded-lg px-2 transition-all duration-200 hover:border-[hsl(240,9%,25%)]"
                      style={{ backgroundColor: 'hsla(240,15%,15%,0.8)', border: '1px solid hsl(240,9%,17%)' }}
                    >
                      <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-xl font-light p-2 transition-colors" style={{ color: 'hsl(0,0%,60%)' }}>−</button>
                      <input
                        type="number"
                        min={1}
                        max={9999}
                        value={quantity}
                        onChange={(e) => {
                          const val = parseInt(e.target.value, 10);
                          if (!isNaN(val) && val >= 1 && val <= 9999) setQuantity(val);
                          else if (e.target.value === '') setQuantity(1);
                        }}
                        className="w-12 text-center font-bold text-sm outline-none bg-transparent text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      />
                      <button onClick={() => setQuantity(quantity + 1)} className="text-xl font-light p-2 transition-colors" style={{ color: 'hsl(0,0%,60%)' }}>+</button>
                    </div>
                    <button
                      onClick={addPrintToCart}
                      className="flex-1 text-white py-3 rounded-full font-bold uppercase text-sm tracking-wider transition-all duration-200 active:scale-[0.97] hover:shadow-[0_0_24px_hsla(266,92%,58%,0.5)] hover:brightness-110"
                      style={{
                        backgroundImage: 'linear-gradient(0deg, rgba(94,58,238,1) 0%, rgba(197,107,240,1) 100%)',
                        boxShadow: 'inset 0 -2px 25px -4px hsl(0,0%,100%)',
                      }}
                    >
                      В корзину
                    </button>
                  </div>

                  {/* Services as separate add-to-cart items */}
                  <div>
                    <label className="text-[10px] font-bold uppercase ml-1 mb-2 block" style={{ color: 'hsl(0,0%,60%)' }}>Дополнительные услуги</label>
                    <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                      {SERVICES.map(service => (
                        <button
                          key={service.id}
                          onClick={() => addServiceToCart(service)}
                          className="text-left p-2.5 sm:p-3 rounded-xl text-[11px] sm:text-xs font-semibold transition-all duration-200 active:scale-[0.97] flex justify-between items-center hover:bg-[hsla(266,92%,58%,0.1)] hover:border-[hsl(266,92%,58%,0.4)] hover:scale-[1.02]"
                          style={{
                            backgroundColor: 'hsla(240,15%,15%,0.5)',
                            border: '1px solid hsl(240,9%,17%)',
                            color: 'hsl(0,0%,83%)',
                          }}
                        >
                          <div>
                            {service.label}
                            <span className="block opacity-60">{service.price} ₽</span>
                          </div>
                          <Plus className="w-4 h-4 flex-shrink-0" style={{ color: 'hsl(266,92%,68%)' }} />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Корзина и форма */}
                <div className="p-4 sm:p-6">
                  {status !== 'success' ? (
                    <>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                        <h3 className="font-bold flex items-center gap-2 text-sm uppercase tracking-widest text-white/70">
                          <ShoppingCart className="w-4 h-4" /> Ваш заказ
                        </h3>
                        <div
                          className="flex items-center gap-3 select-none px-3 py-2 rounded-xl transition-all duration-200 hover:bg-[hsla(240,15%,18%,0.7)] hover:border-[hsl(240,9%,25%)] cursor-pointer"
                          style={{
                            backgroundColor: 'hsla(240,15%,15%,0.5)',
                            border: '1px solid hsl(240,9%,17%)',
                          }}
                        >
                          <span
                            className="text-[10px] sm:text-xs font-black uppercase tracking-wide"
                            style={{ color: foldingEnabled ? 'hsl(120,60%,70%)' : 'hsl(0,0%,83%)' }}
                          >
                            Фальцовка по ГОСТ
                          </span>
                          <input
                            type="checkbox"
                            className="switch"
                            checked={foldingEnabled}
                            onChange={(e) => setFoldingEnabled(e.target.checked)}
                          />
                        </div>
                      </div>

                      <div className="space-y-3 mb-8">
                        {cart.map(item => {
                          const folding = (!item.isService && foldingEnabled) ? getFoldingPrice(item) : 0;
                          const unitWithFolding = item.unitPrice + folding;
                          const lineTotal = unitWithFolding * item.quantity;

                          return (
                            <div
                              key={item.id}
                              className="flex justify-between items-center p-3 rounded-xl group transition-all duration-200 hover:bg-[hsla(240,15%,18%,0.7)] hover:border-[hsl(240,9%,25%)]"
                              style={{ backgroundColor: 'hsla(240,15%,15%,0.5)', border: '1px solid hsl(240,9%,17%)' }}
                            >
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-semibold text-white">{item.label}</div>
                                <div className="text-[10px] mt-0.5 font-medium" style={{ color: 'hsl(0,0%,50%)' }}>
                                  {folding > 0 ? (
                                    <span>
                                      {item.unitPrice} ₽ + {folding} ₽ <span style={{ color: 'hsl(266,92%,68%)' }}>(фальцовка)</span> = {unitWithFolding} ₽ за шт.
                                    </span>
                                  ) : (
                                    <span>{item.unitPrice} ₽ за шт.</span>
                                  )}
                                </div>
                              </div>
                              <div className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
                                <div className="flex items-center rounded-lg" style={{ border: '1px solid hsl(240,9%,17%)' }}>
                                  <button onClick={() => updateQuantity(item.id, -1)} className="p-1 sm:p-1.5 transition-colors rounded-l-lg hover:bg-white/5">
                                    <Minus className="w-3 h-3" style={{ color: 'hsl(0,0%,60%)' }} />
                                  </button>
                                  <span className="px-1.5 sm:px-2.5 text-xs sm:text-sm font-bold min-w-[24px] text-center text-white">{item.quantity}</span>
                                  <button onClick={() => updateQuantity(item.id, 1)} className="p-1 sm:p-1.5 transition-colors rounded-r-lg hover:bg-white/5">
                                    <Plus className="w-3 h-3" style={{ color: 'hsl(0,0%,60%)' }} />
                                  </button>
                                </div>
                                <span className="text-xs sm:text-sm font-bold text-white w-12 sm:w-16 text-right">{lineTotal} ₽</span>
                                <button onClick={() => removeItem(item.id)} className="p-1.5 sm:p-2 hover:bg-red-500/10 rounded-full transition-colors">
                                  <Trash2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-red-400/70" />
                                </button>
                              </div>
                            </div>
                          );
                        })}
                        {cart.length === 0 && (
                          <p className="text-center py-10 italic rounded-3xl text-white/50" style={{ border: '2px dashed hsla(0,0%,100%,0.15)' }}>
                            Смета пуста. Добавьте чертежи или услуги выше.
                          </p>
                        )}
                      </div>


                      {cart.length > 0 && (
                        <form ref={orderFormRef} onSubmit={sendOrder} encType="multipart/form-data" className="space-y-3 pt-4" style={{ borderTop: '1px solid hsl(240,9%,17%)' }}>

                          <div className="relative">
                            <Link2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: 'hsl(0,0%,50%)' }} />
                            <input
                              type="text"
                              placeholder="Ссылка на файлы для печати"
                              value={orderFileLink}
                              onChange={e => setOrderFileLink(e.target.value)}
                              className="w-full pl-11 p-4 rounded-2xl outline-none text-sm text-white placeholder:opacity-40 transition-all duration-200 hover:border-[hsl(266,92%,58%)] focus:border-[hsl(266,92%,58%)] hover:bg-[hsla(240,15%,18%,0.9)]"
                              style={{ backgroundColor: 'hsla(240,15%,15%,0.8)', border: '1px solid hsl(240,9%,17%)' }}
                            />
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="relative">
                              <User className="absolute left-4 top-4 w-4 h-4" style={{ color: 'hsl(0,0%,50%)' }} />
                              <input
                                required
                                name="customer_name"
                                placeholder="Ваше имя"
                                value={customer.name}
                                onChange={e => setCustomer({ ...customer, name: e.target.value })}
                                className="w-full pl-11 p-4 rounded-2xl outline-none text-sm text-white placeholder:opacity-40 transition-all duration-200 hover:border-[hsl(266,92%,58%)] focus:border-[hsl(266,92%,58%)] hover:bg-[hsla(240,15%,18%,0.9)]"
                                style={{ backgroundColor: 'hsla(240,15%,15%,0.8)', border: '1px solid hsl(240,9%,17%)' }}
                              />
                            </div>
                            <div className="relative">
                              <Phone className="absolute left-4 top-4 w-4 h-4" style={{ color: 'hsl(0,0%,50%)' }} />
                              <input
                                required
                                name="customer_phone"
                                type="tel"
                                placeholder="+7 (___) ___-__-__"
                                value={customer.phone}
                                onChange={e => {
                                  let digits = e.target.value.replace(/\D/g, '');
                                  if (digits.startsWith('8')) digits = '7' + digits.slice(1);
                                  if (!digits.startsWith('7') && digits.length > 0) digits = '7' + digits;
                                  digits = digits.slice(0, 11);
                                  let formatted = '';
                                  if (digits.length > 0) formatted = '+' + digits[0];
                                  if (digits.length > 1) formatted += ' (' + digits.slice(1, 4);
                                  if (digits.length > 4) formatted += ') ' + digits.slice(4, 7);
                                  if (digits.length > 7) formatted += '-' + digits.slice(7, 9);
                                  if (digits.length > 9) formatted += '-' + digits.slice(9, 11);
                                  setCustomer({ ...customer, phone: formatted });
                                }}
                                maxLength={18}
                                className="w-full pl-11 p-4 rounded-2xl outline-none text-sm text-white placeholder:opacity-40"
                                style={{ backgroundColor: 'hsla(240,15%,15%,0.8)', border: '1px solid hsl(240,9%,17%)' }}
                              />
                              {customer.phone.length > 0 && customer.phone.replace(/\D/g, '').length < 11 && (
                                <span className="text-[10px] text-red-400/80 mt-1 ml-1 block">Введите 11 цифр номера</span>
                              )}
                            </div>
                          </div>

                          <input
                            type="hidden"
                            name="order_details"
                            value={cart.map((item, index) => {
                              const folding = (!item.isService && foldingEnabled) ? getFoldingPrice(item) : 0;
                              const perUnit = item.unitPrice + folding;
                              const foldingNote = folding > 0 ? ` (вкл. фальцовку ${folding} ₽)` : '';
                              return `${index + 1}. ${item.label}${foldingNote} — ${item.quantity} шт. × ${perUnit} ₽ = ${perUnit * item.quantity} руб.`;
                            }).join('\n')}
                          />
                          <input type="hidden" name="total_price" value={String(Math.round(stats.total))} />
                          <input
                            type="hidden"
                            name="file_link"
                            value={orderFileLink || 'Не указано'}
                          />

                          <label className="flex items-start gap-2.5 cursor-pointer select-none mt-1">
                            <input
                              type="checkbox"
                              checked={consent}
                              onChange={e => setConsent(e.target.checked)}
                              className="mt-1 w-4 h-4 rounded cursor-pointer bg-transparent"
                              style={{ accentColor: 'hsl(266,92%,58%)' }}
                              required
                            />
                            <span className="text-[11px] leading-relaxed" style={{ color: 'hsl(0,0%,100%)' }}>
                              Отправляя заявку, я даю согласие на обработку моих персональных данных согласно{' '}
                              <Link to="/privacy" className="underline transition-colors" style={{ color: 'hsl(266,92%,68%)' }}>
                                Политике конфиденциальности
                              </Link>{' '}
                              и принимаю{' '}
                              <Link to="/terms" className="underline transition-colors" style={{ color: 'hsl(266,92%,68%)' }}>
                                Условия обслуживания
                              </Link>.
                            </span>
                          </label>

                          {showFoldingReminder && (
                            <div
                              className="p-3 rounded-xl mt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 animate-fade-in"
                              style={{
                                backgroundColor: 'hsla(45,100%,50%,0.12)',
                                border: '1px solid hsla(45,100%,50%,0.3)',
                              }}
                            >
                              <p className="text-xs font-semibold" style={{ color: 'hsl(45,100%,75%)' }}>
                                ⚠️ Вы не добавили фальцовку по ГОСТ. Продолжить без неё?
                              </p>
                              <div className="flex gap-2 shrink-0">
                                <button
                                  type="button"
                                  onClick={() => { setFoldingEnabled(true); setShowFoldingReminder(false); }}
                                  className="px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase"
                                  style={{ backgroundColor: 'hsla(266,92%,58%,0.3)', color: 'hsl(266,92%,78%)' }}
                                >
                                  Добавить
                                </button>
                                <button
                                  type="submit"
                                  className="px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase text-white/60"
                                  style={{ backgroundColor: 'hsla(0,0%,100%,0.1)' }}
                                >
                                  Без неё
                                </button>
                              </div>
                            </div>
                          )}

                          <div
                            className="text-white p-4 sm:p-5 rounded-2xl mt-4 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4"
                            style={{
                              backgroundImage: 'linear-gradient(135deg, rgba(94,58,238,0.9) 0%, rgba(197,107,240,0.8) 100%)',
                              boxShadow: 'inset 0 -2px 25px -4px rgba(255,255,255,0.15), 0 8px 32px rgba(94,58,238,0.3)',
                            }}
                          >
                            <div>
                              <div className="flex items-center gap-1.5 bg-white/20 px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase mb-2 w-fit tracking-wider">
                                Скидка 20% на первый заказ
                              </div>
                              <div className="flex items-baseline gap-2">
                                <span className="text-2xl font-black">{Math.round(stats.total)} ₽</span>
                                <span className="text-white/40 line-through font-semibold text-sm">{Math.round(stats.subtotal)} ₽</span>
                              </div>
                            </div>
                            <button
                              type="submit"
                              disabled={status === 'sending'}
                              className="w-full sm:w-auto bg-white px-8 py-3.5 rounded-full font-bold uppercase text-sm tracking-wider flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.97] disabled:opacity-50 hover:shadow-[0_0_24px_hsla(0,0%,100%,0.4)] hover:scale-[1.03]"
                              style={{ color: 'hsl(266,92%,40%)' }}
                            >
                              {status === 'sending' ? 'Отправка...' : <><Send className="w-4 h-4" /> Оформить заказ</>}
                            </button>
                          </div>
                        </form>
                      )}
                    </>
                  ) : (
                    <div className="py-12 px-6 text-center">
                      <div
                        className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                        style={{ backgroundColor: 'hsla(266,92%,58%,0.15)', border: '1px solid hsla(266,92%,58%,0.3)' }}
                      >
                        <CheckCircle className="w-12 h-12" style={{ color: 'hsl(266,92%,68%)' }} />
                      </div>
                      <h3 className="text-2xl font-black mb-3 uppercase tracking-tight text-white">Заявка принята!</h3>
                      <p className="leading-relaxed max-w-sm mx-auto font-medium" style={{ color: 'hsl(0,0%,83%)' }}>
                        Спасибо, <strong className="text-white">{customer.name}</strong>. Мы свяжемся с вами в течение 5 минут по номеру <strong className="text-white">{customer.phone}</strong>.
                      </p>
                      <button
                        onClick={() => { setStatus(''); setCart([]); setCustomer({ name: '', phone: '' }); setFileLink(''); setUploadedFile(null); }}
                        className="inline-block mt-8 text-sm font-bold transition-colors"
                        style={{ color: 'hsl(266,92%,68%)' }}
                      >
                        Сделать новый расчет →
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;

import React, { useState, useMemo } from 'react';
import { Trash2, Printer, ShoppingCart, Send, Phone, User, CheckCircle, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const PRINT_PRICES: Record<string, { bw: number; color: number; label: string }> = {
  A4: { bw: 5, color: 10, label: 'A4 (210х297 мм)' },
  A3: { bw: 19, color: 29, label: 'A3 (с фальцовкой)' },
  A2: { bw: 38, color: 48, label: 'A2 (с фальцовкой)' },
  A1: { bw: 64, color: 84, label: 'A1 (с фальцовкой)' },
  A0: { bw: 118, color: 128, label: 'A0 (с фальцовкой)' },
};

const SERVICE_PRICES: { id: string; label: string; price: number }[] = [
  { id: 'bindingA4', label: 'Брошюровка в А4', price: 100 },
  { id: 'bindingA3', label: 'Брошюровка в А3', price: 200 },
  { id: 'hardcover', label: 'Твердый переплет', price: 600 },
  { id: 'lamination', label: 'Ламинация', price: 100 },
];

interface CartItem {
  id: number;
  label: string;
  unitPrice: number;
  quantity: number;
}

const PriceCalculator = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [format, setFormat] = useState('A1');
  const [isColor, setIsColor] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [customer, setCustomer] = useState({ name: '', phone: '' });
  const [consent, setConsent] = useState(true);
  const [status, setStatus] = useState('');

  const addPrintToCart = () => {
    const unitPrice = isColor ? PRINT_PRICES[format].color : PRINT_PRICES[format].bw;
    const newItem: CartItem = {
      id: Date.now(),
      label: `${PRINT_PRICES[format].label} (${isColor ? 'Цвет' : 'ЧБ'})`,
      unitPrice,
      quantity,
    };
    setCart(prev => [...prev, newItem]);
    setQuantity(1);
  };

  const addServiceToCart = (service: typeof SERVICE_PRICES[0]) => {
    setCart(prev => [...prev, {
      id: Date.now() + Math.random(),
      label: service.label,
      unitPrice: service.price,
      quantity: 1,
    }]);
  };

  const removeItem = (id: number) => setCart(cart.filter(item => item.id !== id));

  const updateQuantity = (id: number, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id !== id) return item;
      const newQty = Math.max(1, item.quantity + delta);
      return { ...item, quantity: newQty };
    }));
  };

  const stats = useMemo(() => {
    const subtotal = cart.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);
    const discount = subtotal * 0.20;
    return { subtotal, discount, total: subtotal - discount };
  }, [cart]);

  const sendOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      alert('Необходимо согласие на обработку персональных данных');
      return;
    }

    setStatus('sending');

    const orderDetailsText = cart.map((item, index) =>
      `${index + 1}. ${item.label} — ${item.quantity} шт. × ${item.unitPrice} ₽ = ${item.unitPrice * item.quantity} руб.`
    ).join('\n');

    const templateParams = {
      customer_name: customer.name,
      customer_phone: customer.phone,
      order_details: orderDetailsText,
      total_price: Math.round(stats.total),
    };

    try {
      await emailjs.send('service_5lojlb2', 'template_86or1it', templateParams, 'ShGXdndtWKIL7zvcD');
      setStatus('success');
    } catch (error) {
      console.error('Ошибка отправки:', error);
      alert('Упс! Произошла ошибка при отправке заявки. Пожалуйста, напишите нам на printprro@gmail.com или позвоните +7 (985) 154-77-72.');
      setStatus('');
    }
  };

  return (
    <section id="calculator" className="py-20 md:py-32 px-4 bg-black">
      <div className="container max-w-5xl mx-auto">
        <div
          className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 text-black opacity-0"
          style={{ animation: 'reveal-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 100ms forwards' }}
        >
          {/* Configurator */}
          <div className="p-8 border-b border-slate-100 bg-slate-50/50">
            <h2 className="text-xl font-black mb-6 flex items-center gap-2 uppercase tracking-tight text-slate-800">
              <Printer className="w-6 h-6" /> Конфигуратор заказа
            </h2>

            {/* Print format selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">Размер чертежа</label>
                <select
                  value={format}
                  onChange={(e) => setFormat(e.target.value)}
                  className="w-full p-3 border border-slate-200 rounded-xl bg-white shadow-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                >
                  {Object.keys(PRINT_PRICES).map(k => (
                    <option key={k} value={k}>
                      {PRINT_PRICES[k].label} — {isColor ? PRINT_PRICES[k].color : PRINT_PRICES[k].bw} ₽/лист
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">Тип печати</label>
                <div className="flex bg-slate-100 p-1 rounded-xl">
                  <button
                    onClick={() => setIsColor(false)}
                    className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${!isColor ? 'bg-white shadow text-blue-600' : 'text-slate-500'}`}
                  >ЧБ</button>
                  <button
                    onClick={() => setIsColor(true)}
                    className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${isColor ? 'bg-white shadow text-blue-600' : 'text-slate-500'}`}
                  >Цвет</button>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mb-6">
              <div className="flex items-center bg-white border border-slate-200 rounded-xl px-3 shadow-sm">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-2xl font-light p-2 active:scale-95 transition-transform">−</button>
                <span className="mx-3 font-bold text-sm w-5 text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="text-2xl font-light p-2 active:scale-95 transition-transform">+</button>
              </div>
              <button
                onClick={addPrintToCart}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold uppercase text-sm tracking-wider transition-all active:scale-95 shadow-lg"
              >
                Добавить в список
              </button>
            </div>

            {/* Services as separate items */}
            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase ml-1 mb-2 block">Дополнительные услуги</label>
              <div className="grid grid-cols-2 gap-2">
                {SERVICE_PRICES.map(service => (
                  <button
                    key={service.id}
                    onClick={() => addServiceToCart(service)}
                    className="text-left p-3 rounded-xl text-xs font-semibold border bg-white text-slate-600 border-slate-200 hover:border-blue-300 transition-all active:scale-95 flex justify-between items-center"
                  >
                    <div>
                      {service.label}
                      <span className="block text-slate-400">{service.price} ₽</span>
                    </div>
                    <Plus className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Cart & Checkout */}
          <div className="p-8">
            {status !== 'success' ? (
              <>
                <h3 className="font-bold text-slate-300 mb-4 flex items-center gap-2 text-sm uppercase tracking-widest">
                  <ShoppingCart className="w-4 h-4" /> Ваш расчет
                </h3>

                <div className="space-y-3 mb-8">
                  {cart.map(item => (
                    <div key={item.id} className="flex justify-between items-center bg-slate-50 p-3 rounded-xl border border-slate-100 group">
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-slate-800">{item.label}</div>
                        <div className="text-[10px] text-slate-400 font-medium mt-0.5">{item.unitPrice} ₽ за шт.</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center bg-white border border-slate-200 rounded-lg">
                          <button onClick={() => updateQuantity(item.id, -1)} className="p-1.5 hover:bg-slate-50 rounded-l-lg transition-colors">
                            <Minus className="w-3 h-3 text-slate-500" />
                          </button>
                          <span className="px-2.5 text-sm font-bold min-w-[28px] text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="p-1.5 hover:bg-slate-50 rounded-r-lg transition-colors">
                            <Plus className="w-3 h-3 text-slate-500" />
                          </button>
                        </div>
                        <span className="text-sm font-bold w-16 text-right">{item.unitPrice * item.quantity} ₽</span>
                        <button onClick={() => removeItem(item.id)} className="p-2 hover:bg-red-50 rounded-full transition-colors">
                          <Trash2 className="w-3.5 h-3.5 text-red-400" />
                        </button>
                      </div>
                    </div>
                  ))}
                  {cart.length === 0 && (
                    <p className="text-slate-300 text-center py-10 italic border-2 border-dashed border-slate-200 rounded-3xl">
                      Список пуст. Добавьте чертежи или услуги выше.
                    </p>
                  )}
                </div>

                {cart.length > 0 && (
                  <form onSubmit={sendOrder} className="space-y-3 border-t border-slate-100 pt-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="relative">
                        <User className="absolute left-4 top-4 w-4 h-4 text-slate-400" />
                        <input
                          required
                          placeholder="Ваше имя"
                          value={customer.name}
                          onChange={e => setCustomer({ ...customer, name: e.target.value })}
                          className="w-full pl-11 p-4 border border-slate-200 rounded-2xl outline-none focus:border-blue-500 bg-slate-50/50 transition-all"
                        />
                      </div>
                      <div className="relative">
                        <Phone className="absolute left-4 top-4 w-4 h-4 text-slate-400" />
                        <input
                          required
                          type="tel"
                          placeholder="Номер телефона"
                          value={customer.phone}
                          onChange={e => setCustomer({ ...customer, phone: e.target.value })}
                          className="w-full pl-11 p-4 border border-slate-200 rounded-2xl outline-none focus:border-blue-500 bg-slate-50/50 transition-all"
                        />
                      </div>
                    </div>

                    <label className="flex items-start gap-2.5 cursor-pointer select-none mt-1">
                      <input
                        type="checkbox"
                        checked={consent}
                        onChange={e => setConsent(e.target.checked)}
                        className="mt-1 w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500 cursor-pointer"
                        required
                      />
                      <span className="text-[11px] text-slate-500 leading-relaxed">
                        Отправляя заявку, я даю согласие на обработку моих персональных данных в соответствии с{' '}
                        <Link to="/privacy" className="underline hover:text-blue-600 transition-colors">
                          Политикой конфиденциальности
                        </Link>{' '}
                        и принимаю{' '}
                        <Link to="/terms" className="underline hover:text-blue-600 transition-colors">
                          Условия обслуживания
                        </Link>.
                      </span>
                    </label>

                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-5 rounded-2xl mt-4 shadow-xl">
                      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <div>
                          <div className="flex items-center gap-1.5 bg-white/20 px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase mb-2 w-fit tracking-wider">
                            Скидка 20% на первый заказ
                          </div>
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-black">{Math.round(stats.total)} ₽</span>
                            <span className="text-white/40 line-through font-semibold text-sm">{Math.round(stats.subtotal)} ₽</span>
                          </div>
                          <p className="text-[11px] text-white/50 mt-0.5 font-medium italic">Экономия составила {Math.round(stats.discount)} ₽</p>
                        </div>
                        <button
                          type="submit"
                          disabled={status === 'sending'}
                          className="w-full sm:w-auto bg-white text-blue-700 hover:bg-blue-50 px-8 py-3.5 rounded-xl font-bold uppercase text-sm tracking-wider flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-50"
                        >
                          {status === 'sending' ? 'Отправляем...' : <><Send className="w-4 h-4" /> Оформить</>}
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </>
            ) : (
              <div className="py-12 px-6 text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-blue-600 w-12 h-12" />
                </div>
                <h3 className="text-2xl font-black mb-3 uppercase tracking-tight text-slate-800">Заказ в обработке!</h3>
                <p className="text-slate-500 leading-relaxed max-w-sm mx-auto font-medium">
                  Спасибо за доверие, <strong className="text-slate-800">{customer.name}</strong>. Мы уже получили ваш расчет и перезвоним вам в ближайшее время.
                </p>
                <div className="mt-8 p-4 bg-slate-50 rounded-2xl border border-slate-100 inline-block">
                  <span className="text-xs font-bold text-slate-400 uppercase block mb-1 tracking-widest">Ваш контактный номер</span>
                  <span className="text-lg font-black tracking-wider text-slate-800">{customer.phone}</span>
                </div>
                <button
                  onClick={() => { setStatus(''); setCart([]); setCustomer({ name: '', phone: '' }); }}
                  className="block mx-auto mt-8 text-sm font-bold text-blue-600 hover:underline transition-colors"
                >
                  Вернуться к новому расчету
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceCalculator;

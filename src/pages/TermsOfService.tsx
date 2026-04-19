import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEO from '@/components/SEO';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <SEO
        title="Условия обслуживания (оферта) | Типография ПринтПРО"
        description="Публичная оферта типографии ПринтПРО на оказание услуг печати и постпечатной обработки документации: требования к файлам, сроки, оплата."
        canonicalPath="/terms"
      />
      <Navbar />

      <main className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4">
        <div className="container max-w-3xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Вернуться на главную
          </Link>

          <article className="prose prose-invert prose-lg max-w-none prose-headings:text-[hsl(var(--foreground))] prose-headings:font-bold prose-h1:text-2xl sm:prose-h1:text-3xl md:prose-h1:text-4xl prose-h2:text-xl sm:prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-[hsl(var(--muted-foreground))] prose-p:text-base prose-p:leading-relaxed prose-p:mb-4 prose-ul:list-disc prose-ul:pl-6 prose-ul:my-4 prose-ul:space-y-2 prose-li:text-[hsl(var(--muted-foreground))] prose-li:text-base prose-li:leading-relaxed prose-li:marker:text-[hsl(45,90%,55%)] prose-strong:text-[hsl(var(--foreground))] prose-strong:font-semibold prose-hr:border-[hsl(var(--border))]">
            <h1>Условия обслуживания (Публичная оферта)</h1>

            <p className="lead">
              Настоящий документ является официальным предложением (публичной офертой) типографии «ПринтПРО» (ИП Стрыгина Е.А.) заключить договор на оказание услуг по печати и постпечатной обработке документации.
            </p>

            <h2>1. Предмет соглашения</h2>
            <p>
              Исполнитель обязуется оказать Заказчику полиграфические услуги (печать чертежей, проектной, рабочей и исполнительной документации, фальцовка, брошюровка), а Заказчик обязуется оплатить эти услуги согласно действующему прайс-листу (калькулятору).
            </p>

            <h2>2. Требования к предоставляемым макетам и файлам</h2>
            <p>
              <strong>Внимание:</strong> ответственность за содержание макета лежит исключительно на Заказчике.
            </p>
            <ul>
              <li><strong>Форматы:</strong> Предпочтительным форматом для печати является <strong>PDF</strong>. Печать из исходных файлов САПР (AutoCAD, Компас и др.) возможна, но Исполнитель не гарантирует 100% совпадение отображения (толщины линий, слетевшие шрифты, скрытые слои).</li>
              <li><strong>Шрифты:</strong> Все шрифты в файлах должны быть переведены в кривые или встроены в PDF-документ.</li>
              <li><strong>Масштаб:</strong> Файлы должны быть подготовлены в масштабе 1:1 к нужному формату печати.</li>
              <li><strong>Ошибки:</strong> Исполнитель не вносит правки в макеты Заказчика (включая исправление орфографических ошибок, изменение данных в штампах). Претензии по ошибкам, присутствовавшим в исходном файле, не принимаются.</li>
            </ul>

            <h2>3. Цветопередача</h2>
            <p>
              Заказчик уведомлен и согласен с тем, что цвет на экране монитора может отличаться от цвета готовой печатной продукции.
            </p>

            <h2>4. Порядок выполнения и сдача-приемка работ</h2>
            <p>
              4.1. Сроки выполнения заказа согласовываются индивидуально после проверки файлов менеджером.<br/>
              4.2. Приемка заказа осуществляется в момент его передачи Заказчику (или курьеру).<br/>
              4.3. Претензии по качеству печати (наличие полос, неровная фальцовка или обрезка) принимаются в течение <strong>3 (трех) рабочих дней</strong> с момента получения заказа. Перепечатка брака по вине Исполнителя осуществляется бесплатно.
            </p>

            <h2>5. Оплата и возврат</h2>
            <p>
              5.1. Услуги оказываются на условиях 100% предоплаты, если иное не оговорено индивидуальным договором.<br/>
              5.2. Возврат денежных средств за уже напечатанную продукцию надлежащего качества (выполненную строго по файлу Заказчика) не производится.
            </p>

            <hr />

            <p className="text-sm">
              <strong>Реквизиты Исполнителя:</strong><br/>
              ИП Стрыгина Екатерина Александровна (Типография «ПринтПРО»)<br/>
              ИНН: 245907557883<br/>
              ОГРНИП: 326246800000141<br/>
              Фактический адрес: г. Москва, ул. Свободы, д. 35, стр. 5<br/>
              Телефон: +7 (985) 154-77-72<br/>
              Email: printprro@gmail.com
            </p>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;

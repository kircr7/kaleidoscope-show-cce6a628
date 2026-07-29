import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { S as SEO } from "./SEO-DxOSIxlI.js";
import { N as Navbar, F as Footer } from "./Footer-CHDzmtRz.js";
import "vite-react-ssg";
import "react";
const TermsOfService = () => {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-black overflow-x-hidden", children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Условия обслуживания (оферта) | Типография ПринтПРО",
        description: "Публичная оферта типографии ПринтПРО на оказание услуг печати и постпечатной обработки документации: требования к файлам, сроки, оплата.",
        canonicalPath: "/terms"
      }
    ),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("main", { className: "pt-24 sm:pt-32 pb-16 sm:pb-24 px-4", children: /* @__PURE__ */ jsxs("div", { className: "container max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/",
          className: "inline-flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors mb-8",
          children: [
            /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
            "Вернуться на главную"
          ]
        }
      ),
      /* @__PURE__ */ jsxs("article", { className: "prose prose-invert prose-lg max-w-none prose-headings:text-[hsl(var(--foreground))] prose-headings:font-bold prose-h1:text-2xl sm:prose-h1:text-3xl md:prose-h1:text-4xl prose-h2:text-xl sm:prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-[hsl(var(--muted-foreground))] prose-p:text-base prose-p:leading-relaxed prose-p:mb-4 prose-ul:list-disc prose-ul:pl-6 prose-ul:my-4 prose-ul:space-y-2 prose-li:text-[hsl(var(--muted-foreground))] prose-li:text-base prose-li:leading-relaxed prose-li:marker:text-[hsl(45,90%,55%)] prose-strong:text-[hsl(var(--foreground))] prose-strong:font-semibold prose-hr:border-[hsl(var(--border))]", children: [
        /* @__PURE__ */ jsx("h1", { children: "Условия обслуживания (Публичная оферта)" }),
        /* @__PURE__ */ jsx("p", { className: "lead", children: "Настоящий документ является официальным предложением (публичной офертой) типографии «ПринтПРО» (ИП Стрыгина Е.А.) заключить договор на оказание услуг по печати и постпечатной обработке документации." }),
        /* @__PURE__ */ jsx("h2", { children: "1. Предмет соглашения" }),
        /* @__PURE__ */ jsx("p", { children: "Исполнитель обязуется оказать Заказчику полиграфические услуги (печать чертежей, проектной, рабочей и исполнительной документации, фальцовка, брошюровка), а Заказчик обязуется оплатить эти услуги согласно действующему прайс-листу (калькулятору)." }),
        /* @__PURE__ */ jsx("h2", { children: "2. Требования к предоставляемым макетам и файлам" }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Внимание:" }),
          " ответственность за содержание макета лежит исключительно на Заказчике."
        ] }),
        /* @__PURE__ */ jsxs("ul", { children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Форматы:" }),
            " Предпочтительным форматом для печати является ",
            /* @__PURE__ */ jsx("strong", { children: "PDF" }),
            ". Печать из исходных файлов САПР (AutoCAD, Компас и др.) возможна, но Исполнитель не гарантирует 100% совпадение отображения (толщины линий, слетевшие шрифты, скрытые слои)."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Шрифты:" }),
            " Все шрифты в файлах должны быть переведены в кривые или встроены в PDF-документ."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Масштаб:" }),
            " Файлы должны быть подготовлены в масштабе 1:1 к нужному формату печати."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Ошибки:" }),
            " Исполнитель не вносит правки в макеты Заказчика (включая исправление орфографических ошибок, изменение данных в штампах). Претензии по ошибкам, присутствовавшим в исходном файле, не принимаются."
          ] })
        ] }),
        /* @__PURE__ */ jsx("h2", { children: "3. Цветопередача" }),
        /* @__PURE__ */ jsx("p", { children: "Заказчик уведомлен и согласен с тем, что цвет на экране монитора может отличаться от цвета готовой печатной продукции." }),
        /* @__PURE__ */ jsx("h2", { children: "4. Порядок выполнения и сдача-приемка работ" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "4.1. Сроки выполнения заказа согласовываются индивидуально после проверки файлов менеджером.",
          /* @__PURE__ */ jsx("br", {}),
          "4.2. Приемка заказа осуществляется в момент его передачи Заказчику (или курьеру).",
          /* @__PURE__ */ jsx("br", {}),
          "4.3. Претензии по качеству печати (наличие полос, неровная фальцовка или обрезка) принимаются в течение ",
          /* @__PURE__ */ jsx("strong", { children: "3 (трех) рабочих дней" }),
          " с момента получения заказа. Перепечатка брака по вине Исполнителя осуществляется бесплатно."
        ] }),
        /* @__PURE__ */ jsx("h2", { children: "5. Оплата и возврат" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "5.1. Услуги оказываются на условиях 100% предоплаты, если иное не оговорено индивидуальным договором.",
          /* @__PURE__ */ jsx("br", {}),
          "5.2. Возврат денежных средств за уже напечатанную продукцию надлежащего качества (выполненную строго по файлу Заказчика) не производится."
        ] }),
        /* @__PURE__ */ jsx("hr", {}),
        /* @__PURE__ */ jsxs("p", { className: "text-sm", children: [
          /* @__PURE__ */ jsx("strong", { children: "Реквизиты Исполнителя:" }),
          /* @__PURE__ */ jsx("br", {}),
          "ИП Стрыгина Екатерина Александровна (Типография «ПринтПРО»)",
          /* @__PURE__ */ jsx("br", {}),
          "ИНН: 245907557883",
          /* @__PURE__ */ jsx("br", {}),
          "ОГРНИП: 326246800000141",
          /* @__PURE__ */ jsx("br", {}),
          "Фактический адрес: г. Москва, ул. Свободы, д. 35, стр. 5",
          /* @__PURE__ */ jsx("br", {}),
          "Телефон: +7 (985) 154-77-72",
          /* @__PURE__ */ jsx("br", {}),
          "Email: printprro@gmail.com"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  TermsOfService as default
};

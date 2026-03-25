import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { articles } from "@/data/articles";
import { blogPosts } from "@/data/blogPosts";
import { ArrowLeft, Calendar, Printer } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  // Check articles first, then legacy blogPosts
  const article = articles.find((a) => a.slug === slug);
  const legacyPost = !article ? blogPosts.find((p) => p.slug === slug) : null;

  if (!article && !legacyPost) return <Navigate to="/blog" replace />;

  // Render legacy markdown-like content
  const renderLegacyContent = (content: string) => {
    return content.split("\n").map((line, i) => {
      const trimmed = line.trim();
      if (!trimmed) return <br key={i} />;
      if (trimmed.startsWith("### ")) {
        return (
          <h3 key={i} className="text-lg sm:text-xl font-bold text-[hsl(var(--foreground))] mt-8 mb-3">
            {trimmed.slice(4)}
          </h3>
        );
      }
      if (trimmed.startsWith("## ")) {
        return (
          <h2 key={i} className="text-xl sm:text-2xl font-bold text-[hsl(var(--foreground))] mt-10 mb-4">
            {trimmed.slice(3)}
          </h2>
        );
      }
      if (trimmed.startsWith("- ")) {
        const text = trimmed.slice(2);
        return (
          <li key={i} className="text-[hsl(var(--muted-foreground))] text-base leading-relaxed ml-4 list-disc"
            dangerouslySetInnerHTML={{ __html: text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-[hsl(var(--foreground))] font-semibold">$1</strong>') }}
          />
        );
      }
      if (/^\d+\.\s/.test(trimmed)) {
        const text = trimmed.replace(/^\d+\.\s/, "");
        return (
          <li key={i} className="text-[hsl(var(--muted-foreground))] text-base leading-relaxed ml-4 list-decimal"
            dangerouslySetInnerHTML={{ __html: text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-[hsl(var(--foreground))] font-semibold">$1</strong>') }}
          />
        );
      }
      return (
        <p key={i} className="text-[hsl(var(--muted-foreground))] text-base leading-relaxed mb-3"
          dangerouslySetInnerHTML={{ __html: trimmed.replace(/\*\*(.*?)\*\*/g, '<strong class="text-[hsl(var(--foreground))] font-semibold">$1</strong>') }}
        />
      );
    });
  };

  const title = article ? article.seoTitle : legacyPost!.title;
  const description = article ? article.seoDescription : legacyPost!.excerpt;
  const category = article ? article.category : legacyPost!.category;
  const date = article ? article.date : legacyPost!.date;
  const image = article ? article.image : legacyPost!.image;
  const h1 = article ? article.h1 : legacyPost!.title;

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <SEO
        title={`${title} | ПринтПРО`}
        description={description}
        keywords={`${category}, печать чертежей, проектная документация`}
      />
      <Navbar />

      <main className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4">
        <article className="container max-w-3xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Назад к блогу
          </Link>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[hsl(45,90%,55%)/0.15] text-[hsl(45,90%,55%)] border border-[hsl(45,90%,55%)/0.2]">
                {category}
              </span>
              <span className="flex items-center gap-1 text-sm text-[hsl(var(--muted-foreground))]">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(date).toLocaleDateString("ru-RU", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[hsl(var(--foreground))] leading-tight">
              {h1}
            </h1>
          </div>

          <div className="rounded-2xl overflow-hidden border border-[hsl(var(--border))] mb-10">
            <img
              src={image}
              alt={h1}
              className="w-full aspect-[2/1] object-cover"
            />
          </div>

          {/* Content */}
          {article ? (
            <div
              className="prose prose-invert prose-lg max-w-none prose-headings:text-[hsl(var(--foreground))] prose-headings:font-bold prose-h2:text-xl sm:prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-[hsl(var(--muted-foreground))] prose-p:text-base prose-p:leading-relaxed prose-p:mb-4 prose-ul:list-disc prose-ul:pl-6 prose-ul:my-4 prose-ul:space-y-2 prose-ol:list-decimal prose-ol:pl-6 prose-ol:my-4 prose-ol:space-y-2 prose-li:text-[hsl(var(--muted-foreground))] prose-li:text-base prose-li:leading-relaxed prose-li:marker:text-[hsl(45,90%,55%)] prose-strong:text-[hsl(var(--foreground))] prose-strong:font-bold prose-b:text-[hsl(var(--foreground))] prose-b:font-bold"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          ) : (
            <div className="prose-custom">
              {renderLegacyContent(legacyPost!.content)}
            </div>
          )}

          {/* CTA */}
          <div className="mt-16 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(0,0%,6%)] p-6 sm:p-10 text-center">
            <Printer className="w-10 h-10 text-[hsl(45,90%,55%)] mx-auto mb-4" />
            <h3 className="text-xl sm:text-2xl font-bold text-[hsl(var(--foreground))] mb-3">
              Нужна печать чертежей?
            </h3>
            <p className="text-[hsl(var(--muted-foreground))] mb-6 max-w-md mx-auto">
              Распечатаем строго по ГОСТу. Быстрый расчет стоимости онлайн.
            </p>
            <Link
              to="/#calculator"
              className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-[hsl(45,90%,55%)] text-black rounded-full font-black uppercase tracking-widest text-xs sm:text-sm hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(245,158,11,0.2)] active:scale-95"
            >
              Рассчитать стоимость
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;

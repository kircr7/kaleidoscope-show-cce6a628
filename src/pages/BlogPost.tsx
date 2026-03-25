import { useParams, Link, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { blogPosts } from "@/data/blogPosts";
import { ArrowLeft, Calendar, Printer } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  // Simple markdown-like rendering for ## and ### headers, lists, **bold**
  const renderContent = (content: string) => {
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

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <SEO
        title={`${post.title} | ПринтПРО`}
        description={post.excerpt}
        keywords={`${post.category}, печать чертежей, проектная документация`}
      />
      <Navbar />

      <main className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4">
        <article className="container max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Назад к блогу
          </Link>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[hsl(45,90%,55%)/0.15] text-[hsl(45,90%,55%)] border border-[hsl(45,90%,55%)/0.2]">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-sm text-[hsl(var(--muted-foreground))]">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(post.date).toLocaleDateString("ru-RU", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[hsl(var(--foreground))] leading-tight">
              {post.title}
            </h1>
          </div>

          {/* Hero image */}
          <div className="rounded-2xl overflow-hidden border border-[hsl(var(--border))] mb-10">
            <img
              src={post.image}
              alt={post.title}
              className="w-full aspect-[2/1] object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose-custom">
            {renderContent(post.content)}
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(0,0%,6%)] p-6 sm:p-10 text-center">
            <Printer className="w-10 h-10 text-[hsl(45,90%,55%)] mx-auto mb-4" />
            <h3 className="text-xl sm:text-2xl font-bold text-[hsl(var(--foreground))] mb-3">
              Нужна печать чертежей?
            </h3>
            <p className="text-[hsl(var(--muted-foreground))] mb-6 max-w-md mx-auto">
              Распечатаем строго по ГОСТу. Рассчитайте стоимость онлайн за 30 секунд.
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

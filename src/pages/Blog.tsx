import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { articles } from "@/data/articles";
import { blogPosts } from "@/data/blogPosts";
import { ArrowRight, Calendar } from "lucide-react";

const allPosts = [
  ...articles.map((a) => ({
    slug: a.slug,
    title: a.h1,
    excerpt: a.excerpt,
    category: a.category,
    image: a.image,
    date: a.date,
    source: "articles" as const,
  })),
  ...blogPosts.map((p) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    category: p.category,
    image: p.image,
    date: p.date,
    source: "blog" as const,
  })),
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);


  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <SEO
        title="Блог о печати чертежей и проектной документации | ПринтПРО"
        description="Полезные статьи о печати чертежей, требованиях ГОСТ, подготовке файлов и переплёте проектной документации."
        keywords="печать чертежей блог, ГОСТ чертежи, подготовка файлов печать, переплёт документации"
      />
      <Navbar />

      <main className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4">
        <div className="container max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[hsl(var(--border))] text-[hsl(45,90%,55%)] text-xs font-black uppercase tracking-widest mb-5">
              <span className="w-2 h-2 rounded-full bg-[hsl(45,90%,55%)] animate-pulse" />
              Блог
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[hsl(var(--foreground))]">
              Полезные материалы
            </h1>
            <p className="mt-4 text-[hsl(var(--muted-foreground))] text-base sm:text-lg max-w-xl mx-auto">
              Статьи о печати, стандартах ГОСТ и работе с проектной документацией
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {allPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group relative rounded-2xl border border-[hsl(var(--border))] bg-[hsl(0,0%,6%)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(45,90%,55%)/0.3] hover:shadow-[0_8px_40px_-12px_rgba(245,158,11,0.15)]"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[hsl(45,90%,55%)/0.15] text-[hsl(45,90%,55%)] border border-[hsl(45,90%,55%)/0.2]">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-[hsl(var(--muted-foreground))]">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString("ru-RU", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>

                  <h2 className="text-base font-bold text-[hsl(var(--foreground))] mb-2 leading-snug group-hover:text-[hsl(45,90%,55%)] transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>

                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[hsl(45,90%,55%)] group-hover:gap-2.5 transition-all">
                    Читать далее <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;

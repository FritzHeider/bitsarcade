import Link from "next/link";
import { blogPosts } from "@/lib/copy";
import { Badge } from "@/components/ui/badge";

export const BlogPreview = () => {
  return (
    <section aria-labelledby="blog-heading">
      <div className="container space-y-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.28em] text-primary">Insights</p>
            <h2 id="blog-heading" className="text-3xl font-display font-semibold text-foreground">
              From the BitsArcade studio
            </h2>
          </div>
          <Link href="/blog" className="text-sm font-semibold text-primary">
            View all posts →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.slug} className="group rounded-2xl border border-border bg-card/80 p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-glow">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
                <Badge variant="outline">Playbook</Badge>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground group-hover:text-primary">{post.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="mt-4 inline-flex items-center text-sm font-semibold text-primary">
                Read article →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

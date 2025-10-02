import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

export const metadata = {
  title: "Blog",
  description: "Stories and playbooks from the BitsArcade team."
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="container py-24">
      <div className="mx-auto max-w-3xl space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-primary">Insights</p>
        <h1 className="text-4xl font-display font-semibold text-foreground">BitsArcade Journal</h1>
        <p className="text-muted-foreground">
          Operator tactics, motion design notes, and infrastructure deep dives for modern wagering teams.
        </p>
      </div>
      <div className="mt-16 space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="rounded-2xl border border-border bg-card/80 p-8 shadow-soft">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div className="space-y-2">
                <time className="text-xs uppercase tracking-[0.2em] text-muted-foreground" dateTime={post.frontmatter.date}>
                  {new Date(post.frontmatter.date).toLocaleDateString()}
                </time>
                <h2 className="text-2xl font-display font-semibold text-foreground">{post.frontmatter.title}</h2>
                <p className="text-sm text-muted-foreground">{post.frontmatter.description}</p>
              </div>
              <Link href={`/blog/${post.slug}`} className="text-sm font-semibold text-primary">
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

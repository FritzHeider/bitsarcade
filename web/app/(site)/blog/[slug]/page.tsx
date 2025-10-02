import { notFound } from "next/navigation";
import { getAllPosts, getBlogPost } from "@/lib/mdx";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug).catch(() => null);
  if (!post) return {};
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug).catch(() => null);
  if (!post) return notFound();

  return (
    <article className="container prose prose-slate dark:prose-invert max-w-3xl py-24">
      <h1 className="font-display text-4xl font-semibold">{post.frontmatter.title}</h1>
      <p className="text-sm text-muted-foreground">
        {new Date(post.frontmatter.date).toLocaleDateString()}
      </p>
      <div className="mt-10 space-y-6 text-base leading-7 text-muted-foreground">{post.content}</div>
    </article>
  );
}

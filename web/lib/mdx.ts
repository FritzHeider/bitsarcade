import fs from "node:fs/promises";
import path from "node:path";
import { compileMDX } from "next-mdx-remote/rsc";

export interface BlogFrontmatter {
  title: string;
  date: string;
  description: string;
}

const contentDir = path.join(process.cwd(), "content", "blog");

export async function getBlogSlugs() {
  const entries = await fs.readdir(contentDir);
  return entries.filter((file) => file.endsWith(".mdx")).map((file) => file.replace(/\.mdx$/, ""));
}

export async function getBlogPost(slug: string) {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  const source = await fs.readFile(filePath, "utf8");

  const { content, frontmatter } = await compileMDX<BlogFrontmatter>({
    source,
    options: { parseFrontmatter: true }
  });

  return { content, frontmatter, slug };
}

export async function getAllPosts() {
  const slugs = await getBlogSlugs();
  const posts = await Promise.all(slugs.map((slug) => getBlogPost(slug)));
  return posts.sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));
}

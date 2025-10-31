import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  draft: boolean;
  content: string;
}

const contentDirectory = path.join(process.cwd(), 'content', 'blog');

// Process markdown content and inject Canva embeds
function processContent(rawContent: string, canvaEmbed?: string): string {
  let content = rawContent;
  
  // If Canva embed exists, insert it at the beginning or after first paragraph
  if (canvaEmbed && canvaEmbed.trim()) {
    // Try to insert after first paragraph, otherwise at the beginning
    const firstParaMatch = content.match(/^(.+?\n\n)/);
    if (firstParaMatch) {
      content = content.replace(firstParaMatch[0], firstParaMatch[0] + canvaEmbed + '\n\n');
    } else {
      content = canvaEmbed + '\n\n' + content;
    }
  }
  
  return content;
}

// Get all blog posts from a specific category
export async function getCategoryPosts(category: string): Promise<BlogPost[]> {
  const categoryPath = path.join(contentDirectory, category);
  
  if (!fs.existsSync(categoryPath)) {
    return [];
  }

  const fileNames = fs.readdirSync(categoryPath);
  const posts: BlogPost[] = [];

  for (const fileName of fileNames) {
    if (!fileName.endsWith('.md')) continue;

    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(categoryPath, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content: rawContent } = matter(fileContents);

    // Process content with Canva embed support
    const processedMarkdown = processContent(rawContent, data.canvaEmbed);

    // Process markdown to HTML (supports HTML in markdown)
    const processedContent = await remark()
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeRaw)
      .use(rehypeStringify)
      .process(processedMarkdown);

    // Skip draft posts
    if (data.draft === true) {
      continue;
    }

    posts.push({
      slug,
      title: data.title,
      date: data.date,
      category: data.category,
      excerpt: data.excerpt || '',
      draft: data.draft || false,
      content: processedContent.toString(),
    });
  }

  // Sort by date, newest first
  return posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

// Get a single blog post
export async function getPost(category: string, slug: string): Promise<BlogPost | null> {
  const filePath = path.join(contentDirectory, category, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content: rawContent } = matter(fileContents);

  // Process content with Canva embed support
  const processedMarkdown = processContent(rawContent, data.canvaEmbed);

  // Process markdown to HTML (supports HTML in markdown)
  const processedContent = await remark()
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(processedMarkdown);

  return {
    slug,
    title: data.title,
    date: data.date,
    category: data.category,
    excerpt: data.excerpt || '',
    draft: data.draft || false,
    content: processedContent.toString(),
  };
}

// Get all blog posts across all categories
export async function getAllPosts(): Promise<BlogPost[]> {
  const categories = fs.readdirSync(contentDirectory, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  const allPosts: BlogPost[] = [];

  for (const category of categories) {
    const posts = await getCategoryPosts(category);
    allPosts.push(...posts);
  }

  // Sort by date, newest first
  return allPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

// Get all categories
export function getCategories(): string[] {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }
  return fs.readdirSync(contentDirectory, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
}


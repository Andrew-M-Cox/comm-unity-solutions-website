import type { Metadata } from "next";
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getPost } from '@/lib/markdown';
import { categoryMetadata } from '@/lib/categories';
import { getCategoryPosts } from '@/lib/markdown';

export async function generateStaticParams() {
  const params = [];
  const categories = Object.keys(categoryMetadata);
  
  for (const categorySlug of categories) {
    // Include drafts for building, but they'll still return 404 when accessed
    const posts = await getCategoryPosts(categorySlug, true);
    for (const post of posts) {
      params.push({
        category: categorySlug,
        slug: post.slug,
      });
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ category: string; slug: string }> }): Promise<Metadata> {
  const { category: categorySlug, slug } = await params;
  const post = await getPost(categorySlug, slug);
  
  if (!post) {
    return {
      title: "Post Not Found - CommUnity Solutions",
    };
  }
  
  return {
    title: `${post.title} - CommUnity Solutions Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category: categorySlug, slug } = await params;
  const category = categoryMetadata[categorySlug];
  const post = await getPost(categorySlug, slug);

  if (!category || !post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className={`${category.color} border-b-2`}>
        <div className="container-custom py-12">
          <Link href={`/blog/${categorySlug}`} className="text-gray-600 hover:text-gray-900 mb-4 inline-block transition-colors">
            ← Back to {category.title}
          </Link>
          <div className="flex items-center gap-3 mb-4">
            {category.icon.startsWith('/') ? (
              <Image 
                src={category.icon} 
                alt={category.title}
                width={48}
                height={48}
                className="rounded-lg object-cover"
                unoptimized
              />
            ) : (
              <span className="text-3xl">{category.icon}</span>
            )}
            <span className={`font-semibold ${category.textColor}`}>{category.title}</span>
          </div>
        </div>
      </div>

      <article className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">{post.title}</h1>
            <div className="text-gray-600">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
          </header>

          <div 
            className="prose prose-lg max-w-none
              prose-headings:text-gray-900 prose-headings:font-semibold
              prose-p:text-gray-700 prose-p:leading-relaxed
              prose-ul:text-gray-700 prose-li:my-2
              prose-strong:text-gray-900 prose-strong:font-semibold
              prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline
              [&_.lead]:text-xl [&_.lead]:text-gray-600 [&_.lead]:font-medium [&_.lead]:mb-8"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-16 pt-8 border-t border-gray-200">
            <Link href={`/blog/${categorySlug}`} className="text-primary-600 font-semibold hover:text-primary-700 transition-colors inline-flex items-center">
              ← Back to {category.title}
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

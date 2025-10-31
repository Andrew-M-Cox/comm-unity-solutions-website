import type { Metadata } from "next";
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getCategoryPosts } from '@/lib/markdown';
import { categoryMetadata } from '@/lib/categories';

export async function generateStaticParams() {
  return Object.keys(categoryMetadata).map((category) => ({
    category,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = categoryMetadata[categorySlug];
  
  if (!category) {
    return {
      title: "Category Not Found - CommUnity Solutions",
    };
  }
  
  return {
    title: `${category.title} - CommUnity Solutions Blog`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: categorySlug } = await params;
  const category = categoryMetadata[categorySlug];

  if (!category) {
    notFound();
  }

  const posts = await getCategoryPosts(categorySlug);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className={`${category.color} border-b-2`}>
        <div className="container-custom py-16">
          <Link href="/blog" className="text-gray-600 hover:text-gray-900 mb-4 inline-block transition-colors">
            ← Back to Blog
          </Link>
          <div className="flex items-center gap-4 mb-4">
            {category.icon.startsWith('/') ? (
              <Image 
                src={category.icon} 
                alt={category.title}
                width={80}
                height={80}
                className="rounded-lg object-cover"
                unoptimized
              />
            ) : (
              <span className="text-5xl">{category.icon}</span>
            )}
            <div>
              <h1 className={`text-5xl font-bold ${category.textColor} mb-2`}>
                {category.title}
              </h1>
              <p className="text-xl text-gray-700">
                {category.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="blog-card bg-white">
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-3">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-900 hover:text-primary-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${categorySlug}/${post.slug}`}
                  className="text-primary-600 font-semibold hover:text-primary-700 transition-colors inline-flex items-center"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

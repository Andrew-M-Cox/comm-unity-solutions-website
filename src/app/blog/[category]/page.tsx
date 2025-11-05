import type { Metadata } from "next";
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getCategoryPosts } from '@/lib/markdown';
import { categoryMetadata } from '@/lib/categories';

export async function generateStaticParams() {
  // Generate params for all categories regardless of whether they have non-draft posts
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
        {posts.length === 0 ? (
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-lg p-12 border-2" style={{ borderColor: '#8ae9d8' }}>
              <div className="mb-6">
                <svg
                  className="mx-auto"
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#8ae9d8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 6V12L16 14"
                    stroke="#2F3EA4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#2F3EA4' }}>
                Coming Soon
              </h2>
              <p className="text-lg mb-6 leading-relaxed" style={{ color: '#000000' }}>
                I'm working on fresh insights and practical guidance for this topic. Check back soon for new articles!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/blog" className="btn-secondary">
                  Explore Other Topics
                </Link>
                <Link href="/contact" className="btn-primary">
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from "next";
import { categoryMetadata } from '@/lib/categories';

export const metadata: Metadata = {
  title: "CommUnity Solutions - Blog",
  description: "Expert insights on communication intelligence for progressive churches and faith-based organizations",
};

const blogCategories = Object.entries(categoryMetadata).map(([slug, metadata]) => ({
  slug,
  ...metadata,
}));

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="container-custom py-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Expert insights on communication intelligence for progressive churches and faith-based organizations
          </p>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/blog/${category.slug}`}
              className={`blog-card ${category.color} border-2`}
            >
              <div className="p-6">
                <div className="mb-4">
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
                </div>
                <h2 className={`text-2xl font-semibold mb-3 ${category.textColor}`}>
                  {category.title}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {category.description}
                </p>
                <span className={`inline-flex items-center font-semibold ${category.textColor}`}>
                  Explore posts →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

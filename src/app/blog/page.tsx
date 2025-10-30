import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CommUnity Solutions - Blog",
  description: "Expert insights on communication intelligence for progressive churches and faith-based organizations",
};

const blogCategories = [
  {
    slug: 'org-visioning',
    title: 'Org Visioning',
    description: 'Forming organization-wide communication strategies and vision alignment',
    icon: '🎯',
    color: 'bg-blue-50 border-blue-200',
    textColor: 'text-blue-700',
  },
  {
    slug: 'fundraising-stewardship',
    title: 'Fundraising & Stewardship',
    description: 'Effective communication strategies for fundraising and stewardship campaigns',
    icon: '💰',
    color: 'bg-green-50 border-green-200',
    textColor: 'text-green-700',
  },
  {
    slug: 'software-tips-tactics',
    title: 'Software Tips & Tactics',
    description: 'Practical guides for church management software and communication tools',
    icon: '💻',
    color: 'bg-purple-50 border-purple-200',
    textColor: 'text-purple-700',
  },
  {
    slug: 'social-media',
    title: 'Social Media',
    description: 'Church and faith-based organization social media strategies and best practices',
    icon: '📱',
    color: 'bg-pink-50 border-pink-200',
    textColor: 'text-pink-700',
  },
  {
    slug: 'communication-strategies',
    title: 'Communication Strategies',
    description: 'How to prioritize and manage multiple projects and groups within your congregation',
    icon: '📢',
    color: 'bg-orange-50 border-orange-200',
    textColor: 'text-orange-700',
  },
  {
    slug: 'language-tactics',
    title: 'Language Tactics',
    description: 'Effective language and messaging for faith-based communication',
    icon: '✍️',
    color: 'bg-indigo-50 border-indigo-200',
    textColor: 'text-indigo-700',
  },
  {
    slug: 'working-with-ai',
    title: 'Working with AI',
    description: 'Leveraging AI tools for church communication and content creation',
    icon: '🤖',
    color: 'bg-teal-50 border-teal-200',
    textColor: 'text-teal-700',
  },
];

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
                <div className="text-5xl mb-4">{category.icon}</div>
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

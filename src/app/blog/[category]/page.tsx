import type { Metadata } from "next";
import { notFound } from 'next/navigation';
import Link from 'next/link';

const categoryData: Record<string, {
  title: string;
  description: string;
  icon: string;
  color: string;
  textColor: string;
  posts: Array<{
    slug: string;
    title: string;
    excerpt: string;
    date: string;
  }>;
}> = {
  'org-visioning': {
    title: 'Org Visioning',
    description: 'Forming organization-wide communication strategies and vision alignment',
    icon: '🎯',
    color: 'bg-blue-50 border-blue-200',
    textColor: 'text-blue-700',
    posts: [
      {
        slug: 'establishing-communication-vision',
        title: 'Establishing Your Communication Vision',
        excerpt: 'Learn how to develop a comprehensive communication vision that aligns with your church\'s mission and values. This foundational guide walks you through the process of creating a unified communication strategy.',
        date: '2024-01-15',
      },
      {
        slug: 'aligning-teams-around-vision',
        title: 'Aligning Teams Around Your Vision',
        excerpt: 'Practical strategies for ensuring all staff and volunteers understand and embody your communication vision. Discover frameworks for cross-departmental alignment and shared understanding.',
        date: '2024-01-10',
      },
      {
        slug: 'vision-implementation-roadmap',
        title: 'Vision Implementation Roadmap',
        excerpt: 'A step-by-step guide to implementing your communication vision across all channels and touchpoints. Learn how to prioritize initiatives and measure success.',
        date: '2024-01-05',
      },
    ],
  },
  'fundraising-stewardship': {
    title: 'Fundraising & Stewardship',
    description: 'Effective communication strategies for fundraising and stewardship campaigns',
    icon: '💰',
    color: 'bg-green-50 border-green-200',
    textColor: 'text-green-700',
    posts: [
      {
        slug: 'stewardship-campaign-messaging',
        title: 'Crafting Effective Stewardship Campaign Messaging',
        excerpt: 'Learn how to communicate the importance of giving in ways that resonate with your congregation. Discover language that inspires generosity without feeling transactional.',
        date: '2024-01-18',
      },
      {
        slug: 'year-end-fundraising-strategies',
        title: 'Year-End Fundraising Communication Strategies',
        excerpt: 'Maximize your year-end giving with strategic communication timing and messaging. Explore proven approaches for connecting with donors during peak giving seasons.',
        date: '2024-01-12',
      },
      {
        slug: 'digital-giving-campaigns',
        title: 'Digital Giving Campaign Best Practices',
        excerpt: 'How to leverage digital channels for effective fundraising campaigns. From email sequences to social media strategies, learn what works in online stewardship communication.',
        date: '2024-01-08',
      },
    ],
  },
  'software-tips-tactics': {
    title: 'Software Tips & Tactics',
    description: 'Practical guides for church management software and communication tools',
    icon: '💻',
    color: 'bg-purple-50 border-purple-200',
    textColor: 'text-purple-700',
    posts: [
      {
        slug: 'church-management-software-overview',
        title: 'Church Management Software: A Complete Overview',
        excerpt: 'Navigate the landscape of church management software options. Compare features, pricing, and find the right solution for your organization\'s size and needs.',
        date: '2024-01-20',
      },
      {
        slug: 'maximizing-communication-tools',
        title: 'Maximizing Your Communication Tools',
        excerpt: 'Get the most out of your existing communication software. Learn advanced features and integrations that can streamline your church\'s communication workflow.',
        date: '2024-01-14',
      },
      {
        slug: 'automation-for-churches',
        title: 'Automation Strategies for Churches',
        excerpt: 'Save time and improve consistency with communication automation. Discover which tasks to automate and how to maintain a personal touch in automated communications.',
        date: '2024-01-09',
      },
    ],
  },
  'social-media': {
    title: 'Social Media',
    description: 'Church and faith-based organization social media strategies and best practices',
    icon: '📱',
    color: 'bg-pink-50 border-pink-200',
    textColor: 'text-pink-700',
    posts: [
      {
        slug: 'progressive-church-social-media',
        title: 'Social Media Strategy for Progressive Churches',
        excerpt: 'Build an authentic social media presence that reflects your church\'s progressive values. Learn how to engage meaningfully with your community while staying true to your mission.',
        date: '2024-01-22',
      },
      {
        slug: 'content-calendar-planning',
        title: 'Content Calendar Planning for Churches',
        excerpt: 'Create a content calendar that balances worship, community, and social justice themes. Discover planning frameworks that help you maintain consistency and relevance.',
        date: '2024-01-16',
      },
      {
        slug: 'engaging-faith-communities-online',
        title: 'Engaging Faith Communities Online',
        excerpt: 'Practical tactics for building community and engagement on social media platforms. Learn what types of content resonate with faith communities and how to foster meaningful conversations.',
        date: '2024-01-11',
      },
    ],
  },
  'communication-strategies': {
    title: 'Communication Strategies',
    description: 'How to prioritize and manage multiple projects and groups within your congregation',
    icon: '📢',
    color: 'bg-orange-50 border-orange-200',
    textColor: 'text-orange-700',
    posts: [
      {
        slug: 'prioritizing-communication-projects',
        title: 'Prioritizing Communication Projects',
        excerpt: 'When you have multiple groups, ministries, and initiatives, how do you decide what to communicate and when? Learn frameworks for prioritizing communication efforts effectively.',
        date: '2024-01-19',
      },
      {
        slug: 'multi-channel-communication',
        title: 'Multi-Channel Communication Coordination',
        excerpt: 'Manage communication across newsletters, social media, websites, and in-person channels without losing consistency or overwhelming your team. Discover coordination strategies.',
        date: '2024-01-13',
      },
      {
        slug: 'team-communication-workflows',
        title: 'Team Communication Workflows',
        excerpt: 'Create efficient workflows for your communication team that prevent bottlenecks and ensure timely delivery. Learn how to structure processes for small and large teams.',
        date: '2024-01-07',
      },
    ],
  },
  'language-tactics': {
    title: 'Language Tactics',
    description: 'Effective language and messaging for faith-based communication',
    icon: '✍️',
    color: 'bg-indigo-50 border-indigo-200',
    textColor: 'text-indigo-700',
    posts: [
      {
        slug: 'inclusive-language-guidelines',
        title: 'Inclusive Language Guidelines for Churches',
        excerpt: 'Learn how to use language that welcomes all members of your community. Explore guidelines for inclusive communication that honors diverse identities and experiences.',
        date: '2024-01-21',
      },
      {
        slug: 'progressive-theology-messaging',
        title: 'Communicating Progressive Theology',
        excerpt: 'How to articulate progressive theological perspectives in accessible, compelling ways. Discover frameworks for explaining complex theological concepts to diverse audiences.',
        date: '2024-01-17',
      },
      {
        slug: 'crisis-communication-language',
        title: 'Language for Crisis Communication',
        excerpt: 'When your church faces difficult situations, the words you choose matter. Learn how to communicate with compassion, transparency, and hope during challenging times.',
        date: '2024-01-06',
      },
    ],
  },
  'working-with-ai': {
    title: 'Working with AI',
    description: 'Leveraging AI tools for church communication and content creation',
    icon: '🤖',
    color: 'bg-teal-50 border-teal-200',
    textColor: 'text-teal-700',
    posts: [
      {
        slug: 'ai-for-church-content',
        title: 'AI Tools for Church Content Creation',
        excerpt: 'Explore how AI can assist with writing newsletters, social media posts, and other church communications while maintaining authenticity and your unique voice.',
        date: '2024-01-23',
      },
      {
        slug: 'ai-ethics-faith-orgs',
        title: 'AI Ethics for Faith Organizations',
        excerpt: 'Consider the ethical implications of using AI in church communication. Learn how to use AI tools responsibly and transparently while honoring your values.',
        date: '2024-01-15',
      },
      {
        slug: 'ai-workflow-integration',
        title: 'Integrating AI into Your Communication Workflow',
        excerpt: 'Practical steps for incorporating AI tools into your existing communication processes. Learn what tasks benefit most from AI assistance and how to maintain quality control.',
        date: '2024-01-04',
      },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(categoryData).map((category) => ({
    category,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = categoryData[categorySlug];
  
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
  const category = categoryData[categorySlug];

  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className={`${category.color} border-b-2`}>
        <div className="container-custom py-16">
          <Link href="/blog" className="text-gray-600 hover:text-gray-900 mb-4 inline-block transition-colors">
            ← Back to Blog
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{category.icon}</span>
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
          {category.posts.map((post) => (
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

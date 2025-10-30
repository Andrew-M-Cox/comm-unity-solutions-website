import type { Metadata } from "next";
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const categoryData: Record<string, {
  title: string;
  icon: string;
  color: string;
  textColor: string;
  posts: Record<string, {
    title: string;
    content: string;
    date: string;
  }>;
}> = {
  'org-visioning': {
    title: 'Org Visioning',
    icon: '/icons/org-visioning.jpeg',
    color: 'bg-blue-50',
    textColor: 'text-blue-700',
    posts: {
      'establishing-communication-vision': {
        title: 'Establishing Your Communication Vision',
        date: '2024-01-15',
        content: `
          <p class="lead">Every great communication strategy begins with a clear vision. For progressive churches and faith-based organizations, this vision must align with your mission, values, and the communities you serve.</p>
          
          <h2>Why a Communication Vision Matters</h2>
          <p>Your communication vision serves as the North Star for all your messaging, campaigns, and engagement efforts. It helps ensure consistency across channels and aligns your team around shared goals.</p>
          
          <h2>Key Elements of a Communication Vision</h2>
          <ul>
            <li><strong>Your Mission:</strong> How does communication serve your broader organizational mission?</li>
            <li><strong>Your Audience:</strong> Who are you communicating with, and what do they need to hear?</li>
            <li><strong>Your Values:</strong> What principles guide your communication style and messaging?</li>
            <li><strong>Your Goals:</strong> What outcomes do you want your communication to achieve?</li>
          </ul>
          
          <h2>Getting Started</h2>
          <p>Start by gathering key stakeholders—staff, leadership, and active volunteers—for a visioning session. Use facilitated conversations to explore what communication means to your organization and how it supports your mission.</p>
          
          <p>Document your vision in a clear, accessible format that your team can reference regularly. Make it visible in your workspace and revisit it during strategic planning sessions.</p>
        `,
      },
      'aligning-teams-around-vision': {
        title: 'Aligning Teams Around Your Vision',
        date: '2024-01-10',
        content: `
          <p class="lead">A communication vision is only effective if everyone understands and embodies it. Here's how to ensure your entire team is aligned.</p>
          
          <h2>Share the Vision Widely</h2>
          <p>Don't keep your communication vision locked in a document. Share it in staff meetings, volunteer orientations, and leadership gatherings. Make it a living part of your organizational culture.</p>
          
          <h2>Create Visual Guides</h2>
          <p>Transform your vision into visual guides, checklists, or quick reference cards that team members can use when creating content or communicating on behalf of your organization.</p>
          
          <h2>Regular Check-ins</h2>
          <p>Schedule regular check-ins to discuss how your communication aligns with your vision. Use these sessions to celebrate successes and address any misalignments.</p>
        `,
      },
      'vision-implementation-roadmap': {
        title: 'Vision Implementation Roadmap',
        date: '2024-01-05',
        content: `
          <p class="lead">Turning your communication vision into reality requires a clear roadmap. Here's a step-by-step approach to implementation.</p>
          
          <h2>Phase 1: Foundation</h2>
          <p>Establish your vision document, create visual guides, and ensure all team members understand the vision.</p>
          
          <h2>Phase 2: Integration</h2>
          <p>Integrate your vision into existing communication channels and workflows. Update templates, style guides, and processes to reflect your vision.</p>
          
          <h2>Phase 3: Expansion</h2>
          <p>Expand your communication efforts using your vision as a guide. Launch new initiatives that align with your vision.</p>
          
          <h2>Measuring Success</h2>
          <p>Define key metrics that help you evaluate whether your communication aligns with your vision. Track consistency, engagement, and alignment over time.</p>
        `,
      },
    },
  },
  'fundraising-stewardship': {
    title: 'Fundraising & Stewardship',
    icon: '/icons/fundraising-stewardship.jpeg',
    color: 'bg-green-50',
    textColor: 'text-green-700',
    posts: {
      'stewardship-campaign-messaging': {
        title: 'Crafting Effective Stewardship Campaign Messaging',
        date: '2024-01-18',
        content: `
          <p class="lead">Effective stewardship communication invites generosity without feeling transactional. Here's how to craft messages that inspire giving.</p>
          
          <h2>Focus on Impact</h2>
          <p>Instead of asking for money, communicate the impact of generosity. Share stories of how giving transforms lives and communities.</p>
          
          <h2>Language That Resonates</h2>
          <p>Use language that connects giving to your mission and values. Frame stewardship as a form of participation in your shared work.</p>
          
          <h2>Transparency and Trust</h2>
          <p>Be transparent about how funds are used. Regular updates on the impact of giving build trust and encourage continued generosity.</p>
        `,
      },
      'year-end-fundraising-strategies': {
        title: 'Year-End Fundraising Communication Strategies',
        date: '2024-01-12',
        content: `
          <p class="lead">Year-end giving represents a significant opportunity for churches. Strategic communication can maximize your impact.</p>
          
          <h2>Timing Matters</h2>
          <p>Plan your year-end communication calendar carefully. Start early, but don't overwhelm. Space out your messages strategically.</p>
          
          <h2>Create Urgency, Not Pressure</h2>
          <p>Communicate deadlines and goals clearly, but maintain a tone of invitation rather than pressure. Focus on the opportunity to make a difference.</p>
          
          <h2>Multi-Channel Approach</h2>
          <p>Use email, social media, and in-person communication to reach your community. Consistent messaging across channels reinforces your campaign.</p>
        `,
      },
      'digital-giving-campaigns': {
        title: 'Digital Giving Campaign Best Practices',
        date: '2024-01-08',
        content: `
          <p class="lead">Digital channels offer powerful opportunities for stewardship communication. Here's how to leverage them effectively.</p>
          
          <h2>Email Sequences</h2>
          <p>Design email sequences that tell a story over time. Each message should build on the previous one and move readers toward action.</p>
          
          <h2>Social Media Integration</h2>
          <p>Use social media to share impact stories and create community around giving. Visual content and testimonials are particularly effective.</p>
          
          <h2>Making Giving Easy</h2>
          <p>Ensure your digital giving process is simple and accessible. Remove barriers to giving by streamlining your donation flow.</p>
        `,
      },
    },
  },
  'software-tips-tactics': {
    title: 'Software Tips & Tactics',
    icon: '/icons/software-tips-tactics.jpeg',
    color: 'bg-purple-50',
    textColor: 'text-purple-700',
    posts: {
      'church-management-software-overview': {
        title: 'Church Management Software: A Complete Overview',
        date: '2024-01-20',
        content: `
          <p class="lead">The right church management software can transform your communication and operations. Here's how to choose wisely.</p>
          
          <h2>Key Features to Consider</h2>
          <p>Look for software that integrates communication tools, member management, and giving platforms. The best solutions offer seamless workflows.</p>
          
          <h2>Popular Options</h2>
          <p>Explore options like Breeze, Planning Center, and ChurchTrac. Each offers different strengths depending on your organization's size and needs.</p>
          
          <h2>Making the Decision</h2>
          <p>Consider your budget, team size, and specific needs. Don't be afraid to request demos and talk to other churches using the software.</p>
        `,
      },
      'maximizing-communication-tools': {
        title: 'Maximizing Your Communication Tools',
        date: '2024-01-14',
        content: `
          <p class="lead">You likely have more tools available than you're using. Here's how to unlock their full potential.</p>
          
          <h2>Explore Integrations</h2>
          <p>Many church management platforms offer integrations with email marketing, social media, and other tools. Connect your systems for seamless workflows.</p>
          
          <h2>Use Automation Wisely</h2>
          <p>Automate routine communications while maintaining personal touches. Balance efficiency with authenticity.</p>
          
          <h2>Regular Training</h2>
          <p>Invest in regular training for your team. Software providers often offer webinars and resources—take advantage of them.</p>
        `,
      },
      'automation-for-churches': {
        title: 'Automation Strategies for Churches',
        date: '2024-01-09',
        content: `
          <p class="lead">Strategic automation can free up time for meaningful work while maintaining personal connections.</p>
          
          <h2>What to Automate</h2>
          <p>Automate routine tasks like welcome emails, event reminders, and follow-up messages. These are perfect candidates for automation.</p>
          
          <h2>Maintaining Personal Touch</h2>
          <p>Even automated messages should feel personal. Use templates that allow personalization and always provide opportunities for personal follow-up.</p>
          
          <h2>Testing and Refinement</h2>
          <p>Monitor your automated communications and refine them based on engagement and feedback. Automation should improve over time.</p>
        `,
      },
    },
  },
  'social-media': {
    title: 'Social Media',
    icon: '/icons/social-media.jpeg',
    color: 'bg-pink-50',
    textColor: 'text-pink-700',
    posts: {
      'progressive-church-social-media': {
        title: 'Social Media Strategy for Progressive Churches',
        date: '2024-01-22',
        content: `
          <p class="lead">Building an authentic social media presence that reflects your progressive values requires intention and strategy.</p>
          
          <h2>Authentic Voice</h2>
          <p>Your social media should sound like your church—not generic or corporate. Share your unique perspective and values authentically.</p>
          
          <h2>Community Engagement</h2>
          <p>Social media is about building community, not just broadcasting. Respond to comments, ask questions, and create space for dialogue.</p>
          
          <h2>Balancing Content</h2>
          <p>Mix worship content, community highlights, social justice advocacy, and everyday moments. Show the full picture of your church community.</p>
        `,
      },
      'content-calendar-planning': {
        title: 'Content Calendar Planning for Churches',
        date: '2024-01-16',
        content: `
          <p class="lead">A content calendar helps you maintain consistency and balance your messaging across themes and seasons.</p>
          
          <h2>Planning Ahead</h2>
          <p>Plan content around your church calendar, liturgical seasons, and community events. This helps you stay organized and relevant.</p>
          
          <h2>Content Mix</h2>
          <p>Balance different types of content: inspirational, educational, community-focused, and advocacy. Vary your formats too—text, images, videos.</p>
          
          <h2>Flexibility</h2>
          <p>Leave room for spontaneous content that responds to current events or community needs. Your calendar should guide, not constrain.</p>
        `,
      },
      'engaging-faith-communities-online': {
        title: 'Engaging Faith Communities Online',
        date: '2024-01-11',
        content: `
          <p class="lead">Meaningful engagement on social media requires understanding what resonates with faith communities.</p>
          
          <h2>Storytelling</h2>
          <p>Stories connect people. Share stories of transformation, community, and impact. These resonate deeply with faith communities.</p>
          
          <h2>Visual Content</h2>
          <p>Images and videos are powerful tools. Use high-quality visuals that reflect your church's personality and values.</p>
          
          <h2>Creating Dialogue</h2>
          <p>Encourage conversation by asking questions, responding to comments, and creating opportunities for community members to share their experiences.</p>
        `,
      },
    },
  },
  'communication-strategies': {
    title: 'Communication Strategies',
    icon: '/icons/communication-strategies.jpeg',
    color: 'bg-orange-50',
    textColor: 'text-orange-700',
    posts: {
      'prioritizing-communication-projects': {
        title: 'Prioritizing Communication Projects',
        date: '2024-01-19',
        content: `
          <p class="lead">With limited resources and multiple groups, prioritization is essential for effective church communication.</p>
          
          <h2>Impact vs. Effort Matrix</h2>
          <p>Use an impact vs. effort matrix to prioritize communication projects. Focus on high-impact, manageable efforts first.</p>
          
          <h2>Strategic Alignment</h2>
          <p>Prioritize projects that align with your mission and strategic goals. Every communication effort should serve your broader purpose.</p>
          
          <h2>Stakeholder Input</h2>
          <p>Involve key stakeholders in prioritization discussions. Their input helps ensure you're focusing on what matters most.</p>
        `,
      },
      'multi-channel-communication': {
        title: 'Multi-Channel Communication Coordination',
        date: '2024-01-13',
        content: `
          <p class="lead">Coordinating communication across multiple channels requires careful planning and clear processes.</p>
          
          <h2>Channel Strategy</h2>
          <p>Different channels serve different purposes. Email for detailed information, social media for engagement, website for comprehensive resources.</p>
          
          <h2>Consistency</h2>
          <p>Maintain consistent messaging across channels while adapting format and tone to each platform's strengths.</p>
          
          <h2>Coordination Tools</h2>
          <p>Use project management tools, shared calendars, and communication platforms to coordinate efforts across your team.</p>
        `,
      },
      'team-communication-workflows': {
        title: 'Team Communication Workflows',
        date: '2024-01-07',
        content: `
          <p class="lead">Efficient workflows prevent bottlenecks and ensure timely delivery of communication materials.</p>
          
          <h2>Clear Processes</h2>
          <p>Document your communication processes clearly. Who approves what? What's the timeline? How do requests flow?</p>
          
          <h2>Templates and Resources</h2>
          <p>Create templates and resource libraries that make it easy for team members to create consistent content quickly.</p>
          
          <h2>Regular Reviews</h2>
          <p>Review and refine your workflows regularly. What's working? What's creating bottlenecks? Continuous improvement is key.</p>
        `,
      },
    },
  },
  'language-tactics': {
    title: 'Language Tactics',
    icon: '/icons/language-tactics.jpeg',
    color: 'bg-indigo-50',
    textColor: 'text-indigo-700',
    posts: {
      'inclusive-language-guidelines': {
        title: 'Inclusive Language Guidelines for Churches',
        date: '2024-01-21',
        content: `
          <p class="lead">Inclusive language welcomes all members of your community and honors diverse identities and experiences.</p>
          
          <h2>Principles of Inclusive Language</h2>
          <p>Use language that is welcoming, respectful, and acknowledges the diversity of your community. Avoid assumptions about gender, ability, or background.</p>
          
          <h2>Gender-Inclusive Language</h2>
          <p>Use gender-neutral or expansive language when possible. Avoid defaulting to masculine language or assuming gender roles.</p>
          
          <h2>Accessibility</h2>
          <p>Use clear, accessible language that welcomes people of all abilities and backgrounds. Avoid jargon and explain terms when necessary.</p>
          
          <h2>Ongoing Learning</h2>
          <p>Language evolves, and so should your guidelines. Stay open to feedback and continuous learning about inclusive communication.</p>
        `,
      },
      'progressive-theology-messaging': {
        title: 'Communicating Progressive Theology',
        date: '2024-01-17',
        content: `
          <p class="lead">Articulating progressive theological perspectives requires clarity, accessibility, and authenticity.</p>
          
          <h2>Making Complex Ideas Accessible</h2>
          <p>Break down complex theological concepts into accessible language. Use metaphors, stories, and examples that resonate with diverse audiences.</p>
          
          <h2>Honoring Diverse Perspectives</h2>
          <p>Progressive theology often involves acknowledging multiple perspectives. Communicate in ways that honor diverse viewpoints while maintaining your core values.</p>
          
          <h2>Authentic Voice</h2>
          <p>Don't water down your theology, but do communicate it in ways that invite rather than exclude. Authenticity matters more than perfection.</p>
        `,
      },
      'crisis-communication-language': {
        title: 'Language for Crisis Communication',
        date: '2024-01-06',
        content: `
          <p class="lead">Crisis communication requires special attention to language that offers compassion, transparency, and hope.</p>
          
          <h2>Compassion First</h2>
          <p>Lead with compassion. Acknowledge pain, uncertainty, and the impact of difficult situations on your community.</p>
          
          <h2>Transparency</h2>
          <p>Be transparent about what you know, what you don't know, and what you're doing to address the situation. Trust is built through honesty.</p>
          
          <h2>Hope Without Minimizing</h2>
          <p>Offer hope without minimizing the reality of the situation. Acknowledge difficulty while pointing toward ways forward.</p>
          
          <h2>Clear Action Steps</h2>
          <p>Provide clear information about what comes next. Uncertainty is hard; clarity helps, even when the path forward is difficult.</p>
        `,
      },
    },
  },
  'working-with-ai': {
    title: 'Working with AI',
    icon: '/icons/working-with-ai.jpeg',
    color: 'bg-teal-50',
    textColor: 'text-teal-700',
    posts: {
      'ai-for-church-content': {
        title: 'AI Tools for Church Content Creation',
        date: '2024-01-23',
        content: `
          <p class="lead">AI can be a powerful assistant for church communication, but it requires thoughtful use to maintain authenticity.</p>
          
          <h2>Where AI Helps</h2>
          <p>AI excels at generating drafts, brainstorming ideas, and handling routine content. Use it as a starting point, not a final product.</p>
          
          <h2>Maintaining Your Voice</h2>
          <p>Always edit AI-generated content to reflect your church's unique voice and values. AI shouldn't replace your authentic perspective.</p>
          
          <h2>Best Practices</h2>
          <p>Use AI for ideation, first drafts, and routine tasks. Human creativity, theological insight, and authentic voice should always guide the final product.</p>
        `,
      },
      'ai-ethics-faith-orgs': {
        title: 'AI Ethics for Faith Organizations',
        date: '2024-01-15',
        content: `
          <p class="lead">Using AI in faith contexts requires careful consideration of ethical implications and alignment with your values.</p>
          
          <h2>Transparency</h2>
          <p>Be transparent about when and how you use AI. Your community deserves to know how content is created.</p>
          
          <h2>Human Oversight</h2>
          <p>Maintain human oversight of all AI-generated content. Technology should serve your mission, not replace your judgment.</p>
          
          <h2>Values Alignment</h2>
          <p>Consider whether AI use aligns with your values. Does it serve your community? Does it honor human dignity and creativity?</p>
        `,
      },
      'ai-workflow-integration': {
        title: 'Integrating AI into Your Communication Workflow',
        date: '2024-01-04',
        content: `
          <p class="lead">Integrating AI effectively requires understanding what it does well and where human creativity is essential.</p>
          
          <h2>Workflow Integration</h2>
          <p>Identify specific tasks where AI can save time: first drafts, email templates, social media scheduling, and routine content.</p>
          
          <h2>Quality Control</h2>
          <p>Establish quality control processes that ensure AI-assisted content meets your standards for accuracy, authenticity, and theological soundness.</p>
          
          <h2>Team Training</h2>
          <p>Train your team on effective AI use. Help them understand when and how to use AI tools while maintaining your church's voice and values.</p>
        `,
      },
    },
  },
};

export async function generateStaticParams() {
  const params = [];
  for (const [categorySlug, category] of Object.entries(categoryData)) {
    for (const postSlug of Object.keys(category.posts)) {
      params.push({
        category: categorySlug,
        slug: postSlug,
      });
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ category: string; slug: string }> }): Promise<Metadata> {
  const { category: categorySlug, slug } = await params;
  const category = categoryData[categorySlug];
  const post = category?.posts[slug];
  
  if (!category || !post) {
    return {
      title: "Post Not Found - CommUnity Solutions",
    };
  }
  
  return {
    title: `${post.title} - CommUnity Solutions Blog`,
    description: post.content.substring(0, 160).replace(/<[^>]*>/g, ''),
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category: categorySlug, slug } = await params;
  const category = categoryData[categorySlug];
  const post = category?.posts[slug];

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

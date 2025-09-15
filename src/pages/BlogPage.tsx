import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const blogPosts = [
  {
    id: '1',
    title: 'Introducing Multi-Language Document Parsing',
    excerpt: 'We\'re excited to announce support for documents in 50+ languages, including CJK languages with specialized OCR models.',
    author: 'Alex Chen',
    date: '2024-03-15',
    readTime: '5 min read',
    category: 'Product Updates',
    slug: 'multi-language-document-parsing',
    featured: true,
  },
  {
    id: '2',
    title: 'How We Achieve 99.9% Uptime: A Deep Dive into Our Infrastructure',
    excerpt: 'Learn about the architectural decisions and monitoring systems that keep Parscade running reliably at scale.',
    author: 'Sarah Rodriguez',
    date: '2024-03-10',
    readTime: '8 min read',
    category: 'Engineering',
    slug: 'achieving-uptime-infrastructure-deep-dive',
    featured: false,
  },
  {
    id: '3',
    title: 'The State of Document Processing in 2024',
    excerpt: 'Our annual report on document processing trends, including AI adoption rates and industry-specific insights.',
    author: 'Marcus Johnson',
    date: '2024-03-05',
    readTime: '12 min read',
    category: 'Industry Report',
    slug: 'state-of-document-processing-2024',
    featured: true,
  },
  {
    id: '4',
    title: 'Building Confidence: How Our AI Models Score Data Accuracy',
    excerpt: 'An in-depth look at how we calculate confidence scores and help you make decisions about human validation.',
    author: 'Emily Zhang',
    date: '2024-02-28',
    readTime: '6 min read',
    category: 'AI & ML',
    slug: 'building-confidence-ai-data-accuracy',
    featured: false,
  },
  {
    id: '5',
    title: 'Customer Spotlight: How TechFlow Automated Invoice Processing',
    excerpt: 'See how TechFlow reduced their invoice processing time from 4 hours to 15 minutes using Parscade\'s API.',
    author: 'Alex Chen',
    date: '2024-02-20',
    readTime: '4 min read',
    category: 'Customer Stories',
    slug: 'customer-spotlight-techflow-invoice-automation',
    featured: false,
  },
  {
    id: '6',
    title: 'Security Best Practices for Document Processing APIs',
    excerpt: 'Essential security considerations when integrating document processing into your applications.',
    author: 'Emily Zhang',
    date: '2024-02-15',
    readTime: '7 min read',
    category: 'Security',
    slug: 'security-best-practices-document-apis',
    featured: false,
  },
];

const categories = ['All', 'Product Updates', 'Engineering', 'AI & ML', 'Security', 'Customer Stories', 'Industry Report'];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const otherPosts = blogPosts.filter(post => !post.featured || post.id !== featuredPost?.id);

  return (
    <>
      <Helmet>
        <title>Blog - Insights & Updates | Parscade</title>
        <meta 
          name="description" 
          content="Stay updated with the latest insights, product updates, and industry trends in document processing and AI. Technical deep-dives and customer stories from the Parscade team." 
        />
        <meta name="keywords" content="parscade blog, document processing insights, AI trends, product updates, technical articles" />
        <link rel="canonical" href="https://parscade.com/blog" />
        
        <meta property="og:title" content="Blog - Insights & Updates | Parscade" />
        <meta property="og:description" content="Stay updated with the latest insights, product updates, and industry trends in document processing and AI." />
        <meta property="og:url" content="https://parscade.com/blog" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container-section">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Insights &{' '}
              <span className="bg-gradient-to-r from-primary-500 to-secondary-600 bg-clip-text text-transparent">
                Updates
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed">
              Stay up to date with the latest product updates, technical deep-dives, and insights from the world of document processing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-white">
          <div className="container-section">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center justify-center mb-8">
                <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
                  Featured Article
                </span>
              </div>
              
              <Card hover className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="aspect-video bg-gradient-to-br from-primary-500 to-secondary-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-6xl font-bold opacity-20">
                      {featuredPost.category.charAt(0)}
                    </span>
                  </div>
                  
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center space-x-4 text-sm text-slate-500 mb-4">
                      <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-medium">
                        {featuredPost.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    
                    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                      {featuredPost.title}
                    </h2>
                    
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500">By {featuredPost.author}</span>
                      <Button variant="primary" size="sm" asChild>
                        <Link to={`/blog/${featuredPost.slug}`}>
                          Read Article
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-12 bg-slate-50 border-y border-slate-200">
        <div className="container-section">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 bg-white">
        <div className="container-section">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card hover className="h-full flex flex-col">
                  <CardHeader>
                    <div className="aspect-video bg-gradient-to-br from-primary-500 to-secondary-600 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-white text-4xl font-bold opacity-20">
                        {post.category.charAt(0)}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-xs text-slate-500 mb-3">
                      <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded-full font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <CardTitle className="text-lg mb-2 line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="flex-grow flex flex-col">
                    <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">By {post.author}</span>
                      <Button variant="outline" size="sm" asChild>
                        <Link to={`/blog/${post.slug}`}>
                          Read More
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-500">No posts found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-gradient-to-r from-primary-500 to-secondary-600">
        <div className="container-section">
          <motion.div
            className="text-center text-white max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Never miss an update
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Subscribe to our newsletter to get the latest insights, product updates, and industry trends delivered to your inbox.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow px-4 py-3 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
                required
              />
              <Button variant="secondary" size="lg" className="bg-white text-primary-600 hover:bg-slate-50">
                Subscribe
              </Button>
            </form>
            
            <p className="text-sm text-white/70 mt-4">
              No spam, unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
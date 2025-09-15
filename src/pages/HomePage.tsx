import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, FileText, Database, Webhook, Eye, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { PipelineCarousel } from '@/components/PipelineCarousel';

const features = [
  {
    icon: FileText,
    title: 'Neural Document Processing',
    description: 'Advanced AI models understand context, layout, and semantics to extract perfect data from any document format.',
    gradient: 'from-accent-electric to-primary-500',
  },
  {
    icon: Database,
    title: 'Quantum Schema Engine',
    description: 'Define complex data structures with our next-gen schema builder. Type-safe extraction with validation.',
    gradient: 'from-primary-500 to-secondary-500',
  },
  {
    icon: CheckCircle,
    title: 'AI Confidence Matrix',
    description: 'Field-level confidence scoring with intelligent human-in-the-loop workflows for critical data points.',
    gradient: 'from-accent-neon to-accent-electric',
  },
  {
    icon: Webhook,
    title: 'Hyper-Speed Delivery',
    description: 'Real-time webhooks and lightning-fast APIs deliver parsed data to your systems in milliseconds.',
    gradient: 'from-secondary-500 to-accent-plasma',
  },
  {
    icon: Shield,
    title: 'Fortress Security',
    description: 'Military-grade encryption with zero data retention. Your documents are processed and immediately vaporized.',
    gradient: 'from-accent-gold to-primary-600',
  },
  {
    icon: Eye,
    title: 'Omniscient Analytics',
    description: 'Real-time monitoring with predictive insights. See everything, optimize everything, control everything.',
    gradient: 'from-primary-600 to-accent-electric',
  },
];

const integrations = [
  { name: 'AWS S3', icon: '☁️' },
  { name: 'Google Cloud', icon: '🌐' },
  { name: 'Azure Blob', icon: '💎' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Webhooks', icon: '⚡' },
  { name: 'Kafka', icon: '🚀' },
  { name: 'Redis', icon: '💨' },
];

const testimonials = [
  {
    quote: "Parscade didn't just automate our document processing—it revolutionized our entire data pipeline. We're processing 10x more documents with 99.8% accuracy.",
    author: "Dr. Sarah Chen",
    role: "Chief Data Officer",
    company: "NeuralFlow Systems",
    avatar: "SC",
  },
  {
    quote: "The AI confidence scoring is pure genius. We can trust automated processing for 95% of our documents and only review the edge cases. Game-changing efficiency.",
    author: "Marcus Rodriguez",
    role: "VP of Engineering",
    company: "DataVault Corp",
    avatar: "MR",
  },
  {
    quote: "Integration took 15 minutes. Seriously. Their API is so intuitive that our junior developers were parsing invoices on day one. Incredible developer experience.",
    author: "Emily Zhang",
    role: "Lead Developer",
    company: "StreamlineAI",
    avatar: "EZ",
  },
];

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Parscade - Neural Document Processing Platform</title>
        <meta 
          name="description" 
          content="Revolutionary AI-powered document parsing with neural networks, quantum schemas, and fortress-grade security. Transform any document into structured data instantly." 
        />
        <meta name="keywords" content="AI document parsing, neural networks, quantum schemas, document processing, data extraction" />
        <link rel="canonical" href="https://parscade.com/" />
        
        <meta property="og:title" content="Parscade - Neural Document Processing Platform" />
        <meta property="og:description" content="Revolutionary AI-powered document parsing with neural networks, quantum schemas, and fortress-grade security." />
        <meta property="og:url" content="https://parscade.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://parscade.com/og/og-default.png" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Parscade - Neural Document Processing Platform" />
        <meta name="twitter:description" content="Revolutionary AI-powered document parsing with neural networks, quantum schemas, and fortress-grade security." />
        <meta name="twitter:image" content="https://parscade.com/og/og-default.png" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Gradient background similar to reference */}
        <div className="absolute inset-0 gradient-hero" />

        <div className="container-section relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main headline */}
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Parse documents. Ship data.
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p 
              className="text-xl md:text-2xl text-white/90 leading-relaxed mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transform complex data workflows into seamless, automated processes
              so you can focus on outcomes, not infrastructure.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button variant="secondary" size="lg">
                Get a demo
              </Button>
              <Button variant="primary" size="lg" asChild>
                <Link to="/docs/getting-started">
                  Start now
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pipeline Carousel Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
        <div className="container-section relative z-10">
          <SectionHeader
            subtitle="Neural Pipeline"
            title="Four Stages to Data Perfection"
            description="Watch our AI-powered pipeline transform chaos into structured perfection in real-time."
            electric
          />
          
          <div className="mt-20">
            <PipelineCarousel />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 neural-bg" />
        <div className="container-section relative z-10">
          <SectionHeader
            subtitle="Quantum Features"
            title="Beyond Traditional Document Processing"
            description="Experience the next generation of AI-powered data extraction with features that redefine what's possible."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <Card hover cyber className="h-full group">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center flex-shrink-0 shadow-glow group-hover:animate-cyber-pulse`}>
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-3" electric>
                          {feature.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-relaxed text-gray-300">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Transformation */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-800 to-dark-950" />
        <div className="container-section relative z-10">
          <SectionHeader
            subtitle="Data Transformation"
            title="From Chaos to Perfection"
            description="Witness the power of neural document processing as unstructured chaos becomes structured perfection."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-20 items-center">
            {/* Before */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border-red-500/30">
                <CardHeader>
                  <CardTitle className="flex items-center text-red-400">
                    <div className="w-4 h-4 bg-red-500 rounded-full mr-3 animate-pulse" />
                    Before: Unstructured Chaos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-dark-900/50 p-6 rounded-xl border border-red-500/20 font-mono text-sm">
                    <div className="text-gray-400 mb-4">// Raw document content</div>
                    <div className="space-y-2 text-red-300">
                      <div>Invoice #INV-2024-0123</div>
                      <div>Date: March 15, 2024</div>
                      <div>Amount: $1,250.00</div>
                      <div>Vendor: Acme Corp...</div>
                      <div className="text-gray-500">// Scattered, unstructured data</div>
                      <div className="text-gray-500">// Manual processing required</div>
                      <div className="text-gray-500">// Error-prone extraction</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Transformation Arrow */}
            <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <motion.div
                className="flex items-center space-x-4"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-accent-electric to-primary-500 flex items-center justify-center shadow-electric animate-spin-slow">
                  <ArrowRight className="w-8 h-8 text-dark-950" />
                </div>
              </motion.div>
            </div>

            {/* After */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-green-900/20 to-blue-900/20 border-accent-electric/30">
                <CardHeader>
                  <CardTitle className="flex items-center text-accent-electric">
                    <div className="w-4 h-4 bg-accent-electric rounded-full mr-3 animate-pulse" />
                    After: Structured Perfection
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-dark-900/50 p-6 rounded-xl border border-accent-electric/20 font-mono text-sm">
                    <div className="text-gray-400 mb-4">// Neural-parsed JSON</div>
                    <pre className="text-accent-electric leading-relaxed">
{`{
  "invoice_number": "INV-2024-0123",
  "date": "2024-03-15",
  "amount": 1250.00,
  "vendor": "Acme Corp",
  "confidence": 0.998,
  "processing_time": "1.2s"
}`}
                    </pre>
                    <div className="text-accent-neon mt-4 text-xs">
                      ✓ 99.8% confidence • ⚡ 1.2s processing • 🔒 Zero retention
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-32 relative">
        <div className="absolute inset-0 cyber-grid" />
        <div className="container-section relative z-10">
          <SectionHeader
            subtitle="Quantum Integrations"
            title="Connect to Your Entire Universe"
            description="Seamlessly integrate with every system in your tech stack through our neural API network."
          />
          
          <div className="mt-20">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {integrations.map((integration, index) => (
                <motion.div
                  key={integration.name}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, rotateY: 10 }}
                >
                  <Card hover cyber className="text-center h-24 flex items-center justify-center">
                    <div className="space-y-2">
                      <div className="text-3xl group-hover:animate-bounce">
                        {integration.icon}
                      </div>
                      <div className="text-xs text-gray-400 font-medium">
                        {integration.name}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-950" />
        <div className="container-section relative z-10">
          <SectionHeader
            subtitle="Neural Testimonials"
            title="Trusted by Data Visionaries"
            description="See what industry leaders say about our revolutionary document processing platform."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-20">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <Card hover cyber className="h-full">
                  <CardContent>
                    <blockquote className="text-gray-300 leading-relaxed mb-8 text-lg">
                      "{testimonial.quote}"
                    </blockquote>
                    <footer className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-100">{testimonial.author}</div>
                        <div className="text-gray-400 text-sm">
                          {testimonial.role}, {testimonial.company}
                        </div>
                      </div>
                    </footer>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 via-secondary-600/20 to-accent-electric/20" />
        <div className="absolute inset-0 neural-bg" />
        
        <div className="container-section relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-display font-black mb-8">
              <span className="bg-gradient-to-r from-accent-electric via-primary-400 to-secondary-400 bg-clip-text text-transparent">
                Ready to Transform
              </span>
              <br />
              <span className="bg-gradient-to-r from-secondary-400 via-accent-neon to-accent-gold bg-clip-text text-transparent">
                Your Documents?
              </span>
            </h2>
            
            <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join the neural revolution. Process millions of documents with superhuman accuracy and lightning speed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="neon" size="xl" glow>
                <Zap className="mr-3 w-6 h-6" />
                Start Neural Processing
              </Button>
              <Button variant="cyber" size="xl" asChild>
                <Link to="/contact">
                  <Shield className="mr-3 w-6 h-6" />
                  Contact Neural Team
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
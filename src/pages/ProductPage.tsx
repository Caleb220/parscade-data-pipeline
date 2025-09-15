import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, Zap, Users, BarChart3, Code, Lock } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const productFeatures = [
  {
    icon: Zap,
    title: 'Lightning Fast Processing',
    description: 'Process thousands of documents per minute with our optimized AI pipeline. Average processing time under 2 seconds per document.',
    details: [
      'Sub-2 second processing time',
      'Batch processing support',
      'Real-time status updates',
      'Auto-scaling infrastructure',
    ],
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SOC 2 Type II compliant with end-to-end encryption. Your data never leaves your control.',
    details: [
      'SOC 2 Type II certified',
      'End-to-end encryption',
      'Zero data retention policy',
      'Private cloud deployment',
    ],
  },
  {
    icon: Users,
    title: 'Human-in-the-Loop',
    description: 'Configure validation workflows with human reviewers for critical data points. Maintain accuracy while scaling.',
    details: [
      'Configurable confidence thresholds',
      'Review queue management',
      'Reviewer assignment rules',
      'Audit trail tracking',
    ],
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Monitor parsing accuracy, processing volumes, and data quality trends with comprehensive dashboards.',
    details: [
      'Real-time accuracy metrics',
      'Processing volume analytics',
      'Error rate monitoring',
      'Custom reporting',
    ],
  },
  {
    icon: Code,
    title: 'Developer Friendly',
    description: 'RESTful APIs, webhooks, and SDKs in multiple languages. Integrate in minutes, not weeks.',
    details: [
      'RESTful API endpoints',
      'Real-time webhooks',
      'Python, JavaScript, Go SDKs',
      'Interactive API documentation',
    ],
  },
  {
    icon: Lock,
    title: 'Multi-Tenant Architecture',
    description: 'Isolated processing environments with role-based access control and custom branding options.',
    details: [
      'Tenant isolation',
      'Role-based permissions',
      'Custom branding',
      'Usage monitoring',
    ],
  },
];

const codeExamples = [
  {
    language: 'curl',
    title: 'Upload Document',
    code: `curl -X POST https://api.parscade.com/v1/parse \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -F "file=@invoice.pdf" \\
  -F "schema=invoice"`,
  },
  {
    language: 'javascript',
    title: 'Process with JavaScript',
    code: `import { Parscade } from '@parscade/sdk';

const client = new Parscade('YOUR_API_KEY');

const result = await client.parse({
  file: documentFile,
  schema: 'invoice',
  confidence: 0.95
});

console.log(result.data);`,
  },
  {
    language: 'python',
    title: 'Python Integration',
    code: `from parscade import Client

client = Client('YOUR_API_KEY')

result = client.parse(
    file='invoice.pdf',
    schema='invoice',
    confidence=0.95
)

print(result.data)`,
  },
];

const faq = [
  {
    question: 'What document formats do you support?',
    answer: 'We support PDF, PNG, JPEG, TIFF, and most common image formats. We also handle scanned documents, handwritten text, and multi-page documents.',
  },
  {
    question: 'How accurate is the data extraction?',
    answer: 'Our AI models achieve 95%+ accuracy on standard documents like invoices, receipts, and forms. Accuracy increases with custom training on your specific document types.',
  },
  {
    question: 'Can I customize the data schema?',
    answer: 'Yes, you can define custom schemas for any document type. Use our schema builder or define schemas programmatically via our API.',
  },
  {
    question: 'How does human-in-the-loop validation work?',
    answer: 'Set confidence thresholds per field. When extraction confidence falls below your threshold, documents are queued for human review before delivery.',
  },
  {
    question: 'What about data privacy and security?',
    answer: 'We are SOC 2 Type II compliant with zero data retention. Documents are processed in-memory and deleted immediately. We offer private cloud deployment for enterprise customers.',
  },
];

export default function ProductPage() {
  const [activeCodeExample, setActiveCodeExample] = React.useState(0);

  return (
    <>
      <Helmet>
        <title>Product - AI Document Parsing Platform | Parscade</title>
        <meta 
          name="description" 
          content="Explore Parscade's AI document parsing platform. Lightning-fast processing, enterprise security, human-in-the-loop validation, and developer-friendly APIs." 
        />
        <meta name="keywords" content="AI document parsing, enterprise document processing, API integration, human validation, data extraction" />
        <link rel="canonical" href="https://parscade.com/product" />
        
        <meta property="og:title" content="Product - AI Document Parsing Platform | Parscade" />
        <meta property="og:description" content="Explore Parscade's AI document parsing platform. Lightning-fast processing, enterprise security, human-in-the-loop validation, and developer-friendly APIs." />
        <meta property="og:url" content="https://parscade.com/product" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container-section">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Enterprise-grade{' '}
              <span className="bg-gradient-to-r from-primary-500 to-secondary-600 bg-clip-text text-transparent">
                document parsing
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              Scale your document processing with AI that understands context, validates accuracy, and integrates seamlessly with your existing systems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg">
                View Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="container-section">
          <SectionHeader
            subtitle="Product Features"
            title="Built for enterprise scale"
            description="Everything you need to process documents at scale, from startups to Fortune 500 companies."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
            {productFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <Card hover className="h-full">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                        <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-24 bg-slate-50">
        <div className="container-section">
          <SectionHeader
            subtitle="Developer Experience"
            title="Integrate in minutes"
            description="Start parsing documents with just a few lines of code. We support all major programming languages."
          />
          
          <div className="mt-16">
            {/* Language Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {codeExamples.map((example, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCodeExample(index)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 ${
                    activeCodeExample === index
                      ? 'bg-primary-500 text-white'
                      : 'bg-white text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {example.title}
                </button>
              ))}
            </div>
            
            {/* Code Block */}
            <motion.div
              className="max-w-4xl mx-auto"
              key={activeCodeExample}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-slate-900 rounded-xl p-6 overflow-x-auto">
                <pre className="text-slate-300 text-sm leading-relaxed">
                  <code>{codeExamples[activeCodeExample].code}</code>
                </pre>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container-section">
          <SectionHeader
            subtitle="FAQ"
            title="Frequently asked questions"
            description="Get answers to common questions about our document parsing platform."
          />
          
          <div className="max-w-4xl mx-auto mt-16">
            <div className="space-y-8">
              {faq.map((item, index) => (
                <motion.div
                  key={index}
                  className="border-b border-slate-200 pb-8 last:border-b-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: '-100px' }}
                >
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">
                    {item.question}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {item.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-500 to-secondary-600">
        <div className="container-section">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Start processing documents in minutes. No setup required, no credit card needed for the free tier.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="bg-white text-primary-600 hover:bg-slate-50">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Book a Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
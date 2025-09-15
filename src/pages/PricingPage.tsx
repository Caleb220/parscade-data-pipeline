import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Check, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { SectionHeader } from '@/components/ui/SectionHeader';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for trying out Parscade',
    features: [
      { name: '100 documents/month', included: true },
      { name: 'Standard document types', included: true },
      { name: 'API access', included: true },
      { name: 'Email support', included: true },
      { name: 'Custom schemas', included: false },
      { name: 'Human validation', included: false },
      { name: 'Webhooks', included: false },
      { name: 'Advanced analytics', included: false },
    ],
    cta: 'Start Free',
    popular: false,
  },
  {
    name: 'Startup',
    price: '$29',
    period: '/month',
    description: 'For growing businesses',
    features: [
      { name: '1,000 documents/month', included: true },
      { name: 'All document types', included: true },
      { name: 'Custom schemas', included: true },
      { name: 'API & webhooks', included: true },
      { name: 'Human validation', included: true },
      { name: 'Email & chat support', included: true },
      { name: 'Basic analytics', included: true },
      { name: 'SLA guarantee', included: false },
    ],
    cta: 'Start Trial',
    popular: true,
  },
  {
    name: 'Pro',
    price: '$99',
    period: '/month',
    description: 'For high-volume processing',
    features: [
      { name: '10,000 documents/month', included: true },
      { name: 'All document types', included: true },
      { name: 'Unlimited custom schemas', included: true },
      { name: 'Advanced workflows', included: true },
      { name: 'Priority human validation', included: true },
      { name: 'Advanced analytics', included: true },
      { name: 'Phone & email support', included: true },
      { name: '99.9% SLA guarantee', included: true },
    ],
    cta: 'Start Trial',
    popular: false,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations',
    features: [
      { name: 'Unlimited documents', included: true },
      { name: 'Private cloud deployment', included: true },
      { name: 'Custom integrations', included: true },
      { name: 'Dedicated support team', included: true },
      { name: 'Custom SLA', included: true },
      { name: 'On-premise options', included: true },
      { name: 'Training & onboarding', included: true },
      { name: 'Custom contract terms', included: true },
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

const comparisonFeatures = [
  {
    category: 'Usage Limits',
    features: [
      { name: 'Documents per month', free: '100', startup: '1,000', pro: '10,000', enterprise: 'Unlimited' },
      { name: 'API calls per day', free: '1,000', startup: '10,000', pro: '100,000', enterprise: 'Unlimited' },
      { name: 'Concurrent processing', free: '1', startup: '5', pro: '20', enterprise: 'Unlimited' },
    ],
  },
  {
    category: 'Features',
    features: [
      { name: 'Document types', free: 'Standard', startup: 'All', pro: 'All', enterprise: 'All + Custom' },
      { name: 'Custom schemas', free: '✗', startup: '✓', pro: '✓', enterprise: '✓' },
      { name: 'Human validation', free: '✗', startup: '✓', pro: '✓', enterprise: '✓' },
      { name: 'Webhooks', free: '✗', startup: '✓', pro: '✓', enterprise: '✓' },
      { name: 'Advanced analytics', free: '✗', startup: 'Basic', pro: '✓', enterprise: '✓' },
    ],
  },
  {
    category: 'Support & SLA',
    features: [
      { name: 'Support channels', free: 'Email', startup: 'Email + Chat', pro: 'Phone + Email', enterprise: 'Dedicated team' },
      { name: 'Response time', free: '48h', startup: '24h', pro: '4h', enterprise: '1h' },
      { name: 'Uptime SLA', free: 'Best effort', startup: '99%', pro: '99.9%', enterprise: 'Custom' },
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <Helmet>
        <title>Pricing - Choose Your Plan | Parscade</title>
        <meta 
          name="description" 
          content="Choose the perfect plan for your document parsing needs. From free tier to enterprise solutions. Start with 100 free documents per month." 
        />
        <meta name="keywords" content="parscade pricing, document parsing plans, API pricing, enterprise document processing" />
        <link rel="canonical" href="https://parscade.com/pricing" />
        
        <meta property="og:title" content="Pricing - Choose Your Plan | Parscade" />
        <meta property="og:description" content="Choose the perfect plan for your document parsing needs. From free tier to enterprise solutions." />
        <meta property="og:url" content="https://parscade.com/pricing" />
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
              Simple, transparent{' '}
              <span className="bg-gradient-to-r from-primary-500 to-secondary-600 bg-clip-text text-transparent">
                pricing
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Start for free and scale as you grow. No hidden fees, no surprises. Cancel anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-white">
        <div className="container-section">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary-500 to-secondary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <Card 
                  className={`h-full ${plan.popular ? 'border-primary-200 shadow-lg' : ''}`}
                  hover={!plan.popular}
                >
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                      <span className="text-slate-500">{plan.period}</span>
                    </div>
                    <p className="text-slate-600">{plan.description}</p>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          {feature.included ? (
                            <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          ) : (
                            <X className="w-5 h-5 text-slate-300 mr-3 flex-shrink-0" />
                          )}
                          <span className={feature.included ? 'text-slate-700' : 'text-slate-400'}>
                            {feature.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button
                      variant={plan.popular ? 'primary' : 'outline'}
                      size="lg"
                      className="w-full"
                    >
                      {plan.cta}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-slate-50">
        <div className="container-section">
          <SectionHeader
            subtitle="Compare Plans"
            title="Detailed feature comparison"
            description="See exactly what's included in each plan to make the best choice for your needs."
          />
          
          <div className="mt-16 overflow-x-auto">
            <div className="min-w-[800px]">
              {comparisonFeatures.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  className="mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true, margin: '-100px' }}
                >
                  <h3 className="text-xl font-semibold text-slate-900 mb-6">
                    {category.category}
                  </h3>
                  
                  <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
                    <div className="grid grid-cols-5 gap-4 p-4 bg-slate-50 border-b border-slate-200">
                      <div className="font-semibold text-slate-900">Feature</div>
                      <div className="font-semibold text-slate-900 text-center">Free</div>
                      <div className="font-semibold text-slate-900 text-center">Startup</div>
                      <div className="font-semibold text-slate-900 text-center">Pro</div>
                      <div className="font-semibold text-slate-900 text-center">Enterprise</div>
                    </div>
                    
                    {category.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="grid grid-cols-5 gap-4 p-4 border-b border-slate-100 last:border-b-0"
                      >
                        <div className="text-slate-700">{feature.name}</div>
                        <div className="text-center text-slate-600">{feature.free}</div>
                        <div className="text-center text-slate-600">{feature.startup}</div>
                        <div className="text-center text-slate-600">{feature.pro}</div>
                        <div className="text-center text-slate-600">{feature.enterprise}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container-section">
          <SectionHeader
            subtitle="Pricing FAQ"
            title="Common questions"
            description="Get answers to frequently asked questions about our pricing and plans."
          />
          
          <div className="max-w-4xl mx-auto mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: 'Can I change plans anytime?',
                  answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.',
                },
                {
                  question: 'What happens if I exceed my limits?',
                  answer: 'We\'ll notify you when you approach your limits. You can upgrade or purchase additional credits.',
                },
                {
                  question: 'Do you offer annual discounts?',
                  answer: 'Yes, save 20% when you pay annually. Contact sales for enterprise pricing.',
                },
                {
                  question: 'Is there a setup fee?',
                  answer: 'No setup fees for any plan. Enterprise customers get free onboarding support.',
                },
                {
                  question: 'Can I cancel anytime?',
                  answer: 'Yes, cancel anytime with no penalties. Your plan remains active until the end of the billing period.',
                },
                {
                  question: 'Do you offer refunds?',
                  answer: 'We offer a 14-day money-back guarantee for all paid plans. No questions asked.',
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: '-100px' }}
                >
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {faq.answer}
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
              Ready to start parsing?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join thousands of developers and businesses who trust Parscade for their document processing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="bg-white text-primary-600 hover:bg-slate-50">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
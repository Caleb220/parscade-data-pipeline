import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { env } from '@/lib/utils';

interface FormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'hello@parscade.com',
    href: 'mailto:hello@parscade.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'San Francisco, CA',
    href: null,
  },
];

const subjects = [
  'General Inquiry',
  'Technical Support',
  'Sales Question',
  'Partnership',
  'Security Question',
  'Other',
];

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      if (env.FORMSPREE_ID) {
        // Use Formspree if available
        const response = await fetch(`https://formspree.io/f/${env.FORMSPREE_ID}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setIsSubmitted(true);
        } else {
          throw new Error('Failed to submit form');
        }
      } else {
        // Fallback to mailto
        const subject = `${formData.subject} - ${formData.name} from ${formData.company}`;
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`;
        const mailtoUrl = `mailto:hello@parscade.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        window.location.href = mailtoUrl;
        setIsSubmitted(true);
      }
    } catch (err) {
      setError('There was an error sending your message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <>
        <Helmet>
          <title>Thank You - Message Sent | Parscade</title>
        </Helmet>
        
        <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
          <motion.div
            className="max-w-md w-full text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent className="py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h1 className="text-2xl font-bold text-slate-900 mb-4">Thank you!</h1>
                <p className="text-slate-600 mb-6">
                  Your message has been sent successfully. We'll get back to you within 24 hours.
                </p>
                <Button variant="primary" onClick={() => setIsSubmitted(false)}>
                  Send Another Message
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Contact Us - Get in Touch | Parscade</title>
        <meta 
          name="description" 
          content="Get in touch with the Parscade team. Contact us for technical support, sales questions, partnerships, or general inquiries." 
        />
        <meta name="keywords" content="contact parscade, customer support, sales inquiry, technical support, partnership" />
        <link rel="canonical" href="https://parscade.com/contact" />
        
        <meta property="og:title" content="Contact Us - Get in Touch | Parscade" />
        <meta property="og:description" content="Get in touch with the Parscade team for support, sales, or partnerships." />
        <meta property="og:url" content="https://parscade.com/contact" />
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
              Get in{' '}
              <span className="bg-gradient-to-r from-primary-500 to-secondary-600 bg-clip-text text-transparent">
                touch
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed">
              Have questions about Parscade? Need technical support? Want to discuss a partnership? 
              We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="py-24 bg-white">
        <div className="container-section">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={info.title} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">{info.title}</h3>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-slate-600 hover:text-primary-600 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-slate-600">{info.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-slate-50 rounded-lg">
                  <h3 className="font-semibold text-slate-900 mb-2">Response Time</h3>
                  <p className="text-slate-600 text-sm">
                    We typically respond to all inquiries within 24 hours during business days.
                    For urgent technical issues, please include "URGENT" in your subject line.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Send us a message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                            placeholder="Your full name"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                            placeholder="your.email@company.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                            Company
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                            placeholder="Your company name"
                          />
                        </div>

                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                            Subject *
                          </label>
                          <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                          >
                            <option value="">Select a subject</option>
                            {subjects.map((subject) => (
                              <option key={subject} value={subject}>
                                {subject}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                          placeholder="Tell us about your project, question, or how we can help..."
                        />
                      </div>

                      {error && (
                        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                          <p className="text-red-700 text-sm">{error}</p>
                        </div>
                      )}

                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        loading={isSubmitting}
                        className="w-full md:w-auto"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="container-section">
          <SectionHeader
            subtitle="FAQ"
            title="Common questions"
            description="Quick answers to frequently asked questions about getting in touch with us."
          />
          
          <div className="max-w-4xl mx-auto mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: 'How quickly do you respond?',
                  answer: 'We typically respond to all inquiries within 24 hours during business days (Mon-Fri, 9 AM - 6 PM PST).',
                },
                {
                  question: 'Do you offer phone support?',
                  answer: 'Phone support is available for Pro and Enterprise customers. Free and Startup plan users can reach us via email and chat.',
                },
                {
                  question: 'Can I schedule a demo?',
                  answer: 'Yes! Select "Sales Question" as your subject and mention demo scheduling in your message. We\'ll send you a calendar link.',
                },
                {
                  question: 'How do I report a security issue?',
                  answer: 'For security vulnerabilities, please email security@parscade.com directly. We take security reports seriously and respond immediately.',
                },
                {
                  question: 'Do you have a status page?',
                  answer: 'Yes, you can check our system status and subscribe to incident notifications at status.parscade.com.',
                },
                {
                  question: 'Can I visit your office?',
                  answer: 'We operate remotely but our team is based in San Francisco. For in-person meetings, please contact us to arrange a visit.',
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
    </>
  );
}
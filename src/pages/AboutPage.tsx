import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Users, Target, Zap, Globe } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card, CardContent } from '@/components/ui/Card';

const values = [
  {
    icon: Users,
    title: 'Customer First',
    description: 'Every decision we make starts with how it impacts our customers. We build tools that solve real problems and make developers\' lives easier.',
  },
  {
    icon: Target,
    title: 'Accuracy Matters',
    description: 'Data quality is non-negotiable. We obsess over accuracy and provide transparency through confidence scores and validation workflows.',
  },
  {
    icon: Zap,
    title: 'Speed & Simplicity',
    description: 'Complex problems deserve simple solutions. We make document parsing fast, reliable, and easy to integrate into any workflow.',
  },
  {
    icon: Globe,
    title: 'Security & Privacy',
    description: 'Trust is earned through transparency. We maintain the highest security standards and give you complete control over your data.',
  },
];

const timeline = [
  {
    year: '2023',
    title: 'Founded',
    description: 'Started with a simple vision: make document parsing accessible to every developer.',
  },
  {
    year: '2024',
    title: 'Beta Launch',
    description: 'Launched private beta with 50 companies processing over 100K documents monthly.',
  },
  {
    year: '2024',
    title: 'SOC 2 Certified',
    description: 'Achieved SOC 2 Type II certification, establishing enterprise-grade security practices.',
  },
  {
    year: '2025',
    title: 'Public Launch',
    description: 'Officially launched Parscade to the public with support for 20+ document types.',
  },
];

const team = [
  {
    name: 'Alex Chen',
    role: 'CEO & Co-founder',
    bio: 'Former ML engineer at Google. Built document processing systems for Gmail and Drive.',
    image: '/team/alex-chen.jpg',
  },
  {
    name: 'Sarah Rodriguez',
    role: 'CTO & Co-founder',
    bio: 'Previously led engineering at DocuSign. Expert in scalable document processing architectures.',
    image: '/team/sarah-rodriguez.jpg',
  },
  {
    name: 'Marcus Johnson',
    role: 'Head of AI',
    bio: 'PhD in Computer Vision from Stanford. Published researcher in document understanding and OCR.',
    image: '/team/marcus-johnson.jpg',
  },
  {
    name: 'Emily Zhang',
    role: 'Head of Security',
    bio: 'Former security architect at Stripe. Specialist in data protection and compliance frameworks.',
    image: '/team/emily-zhang.jpg',
  },
];

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About - Our Mission & Team | Parscade</title>
        <meta 
          name="description" 
          content="Learn about Parscade's mission to make document parsing accessible to every developer. Meet our team and discover our values of accuracy, simplicity, and security." 
        />
        <meta name="keywords" content="about parscade, company mission, team, document parsing company, AI startup" />
        <link rel="canonical" href="https://parscade.com/about" />
        
        <meta property="og:title" content="About - Our Mission & Team | Parscade" />
        <meta property="og:description" content="Learn about Parscade's mission to make document parsing accessible to every developer." />
        <meta property="og:url" content="https://parscade.com/about" />
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
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Making document parsing{' '}
              <span className="bg-gradient-to-r from-primary-500 to-secondary-600 bg-clip-text text-transparent">
                accessible to everyone
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              We believe that extracting structured data from documents shouldn't require a team of ML engineers. 
              Our mission is to make AI-powered document processing simple, accurate, and available to every developer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="container-section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Every day, businesses process millions of documents manually—invoices, contracts, forms, 
                and reports that contain valuable structured data locked away in PDFs and images.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                We're building the infrastructure to unlock this data at scale. Our AI-powered platform 
                transforms any document into clean, structured data that integrates seamlessly with your 
                existing systems.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We envision a world where document processing is automated, accurate, and accessible—
                freeing teams to focus on what matters most: building great products.
              </p>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="aspect-square bg-gradient-to-br from-primary-500 to-secondary-600 rounded-2xl flex items-center justify-center">
                <div className="w-32 h-32 bg-white/20 rounded-xl flex items-center justify-center">
                  <Zap className="w-16 h-16 text-white" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="container-section">
          <SectionHeader
            subtitle="Our Values"
            title="What drives us forward"
            description="These principles guide every decision we make and every feature we build."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <Card hover className="h-full">
                  <CardContent>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <value.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-3">{value.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="container-section">
          <SectionHeader
            subtitle="Our Journey"
            title="Building the future of document processing"
            description="From idea to platform, here's how we've grown to serve thousands of developers worldwide."
          />
          
          <div className="max-w-4xl mx-auto mt-16">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 transform md:-translate-x-px"></div>
              
              <div className="space-y-12">
                {timeline.map((event, index) => (
                  <motion.div
                    key={event.year}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, margin: '-100px' }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-gradient-to-r from-primary-500 to-secondary-600 rounded-full transform md:-translate-x-1/2"></div>
                    
                    {/* Content */}
                    <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                      <Card>
                        <CardContent>
                          <div className="flex items-center space-x-3 mb-3">
                            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
                              {event.year}
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold text-slate-900 mb-2">{event.title}</h3>
                          <p className="text-slate-600">{event.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-slate-50">
        <div className="container-section">
          <SectionHeader
            subtitle="Our Team"
            title="Meet the people behind Parscade"
            description="We're a team of engineers, researchers, and builders passionate about making AI accessible to developers."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <Card hover className="text-center h-full">
                  <CardContent>
                    <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">{member.name}</h3>
                    <p className="text-primary-600 text-sm font-medium mb-3">{member.role}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
              Want to join our mission?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              We're always looking for talented people who share our passion for making document processing simple and accessible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:careers@parscade.com"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-slate-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-600"
              >
                Join Our Team
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-600"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
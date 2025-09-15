import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Server, CheckCircle, Award } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

const securityFeatures = [
  {
    icon: Lock,
    title: 'End-to-End Encryption',
    description: 'All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption.',
    details: [
      'TLS 1.3 for data in transit',
      'AES-256 encryption at rest',
      'Perfect Forward Secrecy',
      'Regular security audits',
    ],
  },
  {
    icon: Server,
    title: 'Zero Data Retention',
    description: 'Documents are processed in-memory and immediately deleted. No storage, no retention.',
    details: [
      'In-memory processing only',
      'Immediate deletion after processing',
      'No document storage',
      'Configurable retention policies',
    ],
  },
  {
    icon: Eye,
    title: 'Complete Audit Trail',
    description: 'Every action is logged and monitored with comprehensive audit trails for compliance.',
    details: [
      'Detailed access logs',
      'API usage tracking',
      'User activity monitoring',
      'Compliance reporting',
    ],
  },
  {
    icon: Shield,
    title: 'SOC 2 Type II Certified',
    description: 'Independently audited and certified for security, availability, and confidentiality.',
    details: [
      'Annual SOC 2 Type II audits',
      'Security best practices',
      'Incident response procedures',
      'Risk management framework',
    ],
  },
];

const certifications = [
  {
    name: 'SOC 2 Type II',
    description: 'Security, availability, and confidentiality controls',
    icon: Award,
    status: 'Certified',
  },
  {
    name: 'GDPR Compliant',
    description: 'European data protection and privacy regulations',
    icon: Shield,
    status: 'Compliant',
  },
  {
    name: 'CCPA Compliant',
    description: 'California Consumer Privacy Act compliance',
    icon: Eye,
    status: 'Compliant',
  },
  {
    name: 'HIPAA Ready',
    description: 'Healthcare data protection standards',
    icon: Lock,
    status: 'Available',
  },
];

const securityPractices = [
  'Multi-factor authentication (MFA) for all team members',
  'Regular penetration testing by third-party security firms',
  'Automated vulnerability scanning and patching',
  'Incident response team available 24/7',
  'Employee security training and background checks',
  'Secure development lifecycle (SDLC) practices',
  'Infrastructure as Code (IaC) with security scanning',
  'Regular security reviews and threat modeling',
];

export default function SecurityPage() {
  return (
    <>
      <Helmet>
        <title>Security & Compliance - Enterprise Data Protection | Parscade</title>
        <meta 
          name="description" 
          content="Learn about Parscade's enterprise-grade security measures, compliance certifications, and data protection policies. SOC 2 Type II certified with zero data retention." 
        />
        <meta name="keywords" content="parscade security, data protection, SOC 2, GDPR, HIPAA, compliance, encryption" />
        <link rel="canonical" href="https://parscade.com/security" />
        
        <meta property="og:title" content="Security & Compliance - Enterprise Data Protection | Parscade" />
        <meta property="og:description" content="Learn about Parscade's enterprise-grade security measures, compliance certifications, and data protection policies." />
        <meta property="og:url" content="https://parscade.com/security" />
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
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Security & Compliance{' '}
              <span className="bg-gradient-to-r from-primary-500 to-secondary-600 bg-clip-text text-transparent">
                First
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Your data security is our top priority. We maintain the highest standards of security and compliance to protect your sensitive documents and information.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center justify-center space-x-2 bg-white rounded-lg p-3 shadow-sm">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="font-medium text-slate-700">SOC 2 Type II</span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-white rounded-lg p-3 shadow-sm">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="font-medium text-slate-700">GDPR Ready</span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-white rounded-lg p-3 shadow-sm">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="font-medium text-slate-700">Zero Retention</span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-white rounded-lg p-3 shadow-sm">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="font-medium text-slate-700">End-to-End Encrypted</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-24 bg-white">
        <div className="container-section">
          <SectionHeader
            subtitle="Security Features"
            title="Built-in protection at every layer"
            description="From data transmission to processing and deletion, every aspect of our platform is designed with security in mind."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
            {securityFeatures.map((feature, index) => (
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
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
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

      {/* Certifications */}
      <section className="py-24 bg-slate-50">
        <div className="container-section">
          <SectionHeader
            subtitle="Certifications"
            title="Independently verified compliance"
            description="We maintain industry-leading certifications and regularly undergo third-party security audits."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <Card hover className="text-center h-full">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <cert.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{cert.name}</h3>
                    <p className="text-slate-600 text-sm mb-4">{cert.description}</p>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      cert.status === 'Certified' || cert.status === 'Compliant'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {cert.status}
                    </span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Practices */}
      <section className="py-24 bg-white">
        <div className="container-section">
          <SectionHeader
            subtitle="Security Practices"
            title="Comprehensive security measures"
            description="Our security program encompasses people, processes, and technology to ensure the highest level of protection."
          />
          
          <div className="max-w-4xl mx-auto mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {securityPractices.map((practice, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: '-100px' }}
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{practice}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Data Processing */}
      <section className="py-24 bg-slate-50">
        <div className="container-section">
          <SectionHeader
            subtitle="Data Processing"
            title="How we handle your documents"
            description="Understand exactly how your documents are processed and protected throughout the entire pipeline."
          />
          
          <div className="max-w-5xl mx-auto mt-16">
            <div className="relative">
              {/* Processing Flow */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  {
                    step: '1',
                    title: 'Upload',
                    description: 'Document uploaded via encrypted TLS 1.3 connection',
                    details: ['TLS 1.3 encryption', 'API key authentication', 'Request validation'],
                  },
                  {
                    step: '2',
                    title: 'Process',
                    description: 'In-memory processing with no persistent storage',
                    details: ['RAM-only processing', 'No disk writes', 'Isolated containers'],
                  },
                  {
                    step: '3',
                    title: 'Extract',
                    description: 'AI extracts data with confidence scoring',
                    details: ['Confidence scoring', 'Structured output', 'Quality validation'],
                  },
                  {
                    step: '4',
                    title: 'Deliver',
                    description: 'Results delivered and document immediately deleted',
                    details: ['Secure delivery', 'Immediate deletion', 'Audit logging'],
                  },
                ].map((phase, index) => (
                  <motion.div
                    key={phase.step}
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, margin: '-100px' }}
                  >
                    <Card>
                      <CardContent className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-white font-bold">{phase.step}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">{phase.title}</h3>
                        <p className="text-slate-600 text-sm mb-4">{phase.description}</p>
                        <ul className="space-y-1">
                          {phase.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-center justify-center text-xs text-slate-500">
                              <div className="w-1 h-1 bg-primary-500 rounded-full mr-2" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                    
                    {/* Arrow */}
                    {index < 3 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                        <div className="w-8 h-px bg-slate-300"></div>
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 border-r border-b border-slate-300 rotate-[-45deg]"></div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Security Team */}
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
              Questions about security?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Our security team is here to help. Contact us for security questionnaires, compliance discussions, or vulnerability reports.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:security@parscade.com"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-slate-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-600"
              >
                Contact Security Team
              </a>
              <a
                href="/legal/privacy"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-600"
              >
                Privacy Policy
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
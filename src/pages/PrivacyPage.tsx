import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function PrivacyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Data Protection | Parscade</title>
        <meta 
          name="description" 
          content="Read Parscade's privacy policy to understand how we collect, use, and protect your personal information and data." 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://parscade.com/legal/privacy" />
      </Helmet>

      <div className="min-h-screen bg-slate-50 py-24">
        <div className="container-section">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-xl shadow-sm p-8 lg:p-12">
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
                <p className="text-slate-600">
                  Last updated: March 15, 2024
                </p>
              </div>

              <div className="prose prose-slate max-w-none">
                <p className="text-lg text-slate-700 leading-relaxed mb-8">
                  At Parscade, we take your privacy seriously. This Privacy Policy explains how we collect, 
                  use, disclose, and safeguard your information when you use our document parsing services.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Information We Collect</h2>
                
                <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Personal Information</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  We collect personal information you voluntarily provide when you:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                  <li>Create an account with us</li>
                  <li>Use our services</li>
                  <li>Contact us for support</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Participate in surveys or feedback</li>
                </ul>

                <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Document Data</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  When you upload documents for processing, we temporarily process this data to extract 
                  the requested information. Important points about document processing:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                  <li>Documents are processed in-memory only</li>
                  <li>No documents are stored on our servers after processing</li>
                  <li>Processing typically completes within seconds</li>
                  <li>All document data is immediately deleted after extraction</li>
                </ul>

                <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Usage Information</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  We automatically collect certain information about your use of our services:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                  <li>API usage statistics and performance metrics</li>
                  <li>Error logs and debugging information</li>
                  <li>Access timestamps and IP addresses</li>
                  <li>Device and browser information</li>
                </ul>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">How We Use Your Information</h2>
                
                <p className="text-slate-700 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                  <li>Provide and maintain our document parsing services</li>
                  <li>Process your documents and return extracted data</li>
                  <li>Improve our AI models and service quality</li>
                  <li>Provide customer support and respond to inquiries</li>
                  <li>Send service-related notifications and updates</li>
                  <li>Comply with legal obligations and protect our rights</li>
                </ul>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Data Sharing and Disclosure</h2>
                
                <p className="text-slate-700 leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information. We may share information only in these circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                  <li><strong>Service Providers:</strong> Trusted third parties who assist in operating our services</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect rights and safety</li>
                  <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                  <li><strong>Consent:</strong> When you explicitly authorize us to share your information</li>
                </ul>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Data Security</h2>
                
                <p className="text-slate-700 leading-relaxed mb-4">
                  We implement comprehensive security measures to protect your information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                  <li>End-to-end encryption for all data transmission</li>
                  <li>SOC 2 Type II certified security practices</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Access controls and employee training</li>
                  <li>Incident response and monitoring systems</li>
                </ul>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Data Retention</h2>
                
                <p className="text-slate-700 leading-relaxed mb-4">
                  Our data retention practices:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                  <li><strong>Document Content:</strong> Immediately deleted after processing (zero retention)</li>
                  <li><strong>Account Information:</strong> Retained while your account is active</li>
                  <li><strong>Usage Logs:</strong> Retained for 90 days for service optimization</li>
                  <li><strong>Support Records:</strong> Retained for 2 years to improve service quality</li>
                </ul>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Your Rights and Choices</h2>
                
                <p className="text-slate-700 leading-relaxed mb-4">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                  <li><strong>Access:</strong> Request copies of your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                  <li><strong>Objection:</strong> Object to certain processing of your information</li>
                </ul>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">International Data Transfers</h2>
                
                <p className="text-slate-700 leading-relaxed mb-4">
                  Our services are hosted in the United States. If you access our services from outside the US, 
                  your information may be transferred to, stored, and processed in the US. We ensure appropriate 
                  safeguards are in place for international data transfers in compliance with applicable laws.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Children's Privacy</h2>
                
                <p className="text-slate-700 leading-relaxed mb-4">
                  Our services are not intended for children under 13. We do not knowingly collect personal 
                  information from children under 13. If you believe we have inadvertently collected such 
                  information, please contact us immediately.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Changes to This Policy</h2>
                
                <p className="text-slate-700 leading-relaxed mb-4">
                  We may update this Privacy Policy from time to time. We will notify you of any material 
                  changes by posting the new policy on our website and updating the "Last updated" date. 
                  Your continued use of our services after changes become effective constitutes acceptance 
                  of the revised policy.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Contact Us</h2>
                
                <p className="text-slate-700 leading-relaxed mb-4">
                  If you have questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <p className="text-slate-700 mb-2">
                    <strong>Email:</strong> privacy@parscade.com
                  </p>
                  <p className="text-slate-700 mb-2">
                    <strong>Address:</strong> Parscade, Inc.<br />
                    123 Privacy Street<br />
                    San Francisco, CA 94102
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
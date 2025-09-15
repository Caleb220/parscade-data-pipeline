import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function TermsPage() {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Legal Agreement | Parscade</title>
        <meta 
          name="description" 
          content="Read Parscade's terms of service to understand the legal agreement for using our document parsing platform and API services." 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://parscade.com/legal/terms" />
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
                <h1 className="text-4xl font-bold text-slate-900 mb-4">Terms of Service</h1>
                <p className="text-slate-600">
                  Last updated: March 15, 2024
                </p>
              </div>

              <div className="prose prose-slate max-w-none">
                <p className="text-lg text-slate-700 leading-relaxed mb-8">
                  These Terms of Service ("Terms") govern your use of Parscade's document parsing platform 
                  and services ("Service") operated by Parscade, Inc. ("we", "us", or "our").
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Acceptance of Terms</h2>
                
                <p className="text-slate-700 leading-relaxed mb-4">
                  By accessing or using our Service, you agree to be bound by these Terms. If you disagree 
                  with any part of these Terms, then you may not access the Service. These Terms apply to 
                  all visitors, users, and others who access or use the Service.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Description of Service</h2>
                
                <p className="text-slate-700 leading-relaxed mb-4">
                  Parscade provides AI-powered document parsing and data extraction services through our 
                  web platform and API. Our Service allows you to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                  <li>Upload and process various document formats</li>
                  <li>Extract structured data from unstructured documents</li>
                  <li>Configure custom data schemas and validation rules</li>
                  <li>Integrate document processing into your applications via API</li>
                  <li>Monitor processing accuracy and performance metrics</li>
                </ul>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">User Accounts</h2>
                
                <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Account Registration</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  To use certain features of the Service, you must create an account. You agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                  <li>Provide accurate, current, and complete information during registration</li>
                  <li>Maintain and update your account information</li>
                  <li>Keep your password secure and confidential</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                  <li>Accept responsibility for all activities under your account</li>
                </ul>

                <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Account Termination</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  You may terminate your account at any time. We reserve the right to suspend or terminate 
                  your account if you violate these Terms or engage in activities harmful to our Service or other users.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Acceptable Use</h2>
                
                <p className="text-slate-700 leading-relaxed mb-4">
                  You agree to use our Service only for lawful purposes and in accordance with these Terms. 
                  You agree not to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                  <li>Upload documents containing illegal, harmful, or offensive content</li>
                  <li>Process documents without proper authorization or legal rights</li>
                  <li>Attempt to reverse engineer, decompile, or hack our Service</li>
                  <li>Exceed rate limits or abuse our API endpoints</li>
                  <li>Use our Service to process personal data without consent</li>
                  <li>Interfere with or disrupt the Service or servers</li>
                  <li>Violate any applicable laws or regulations</li>
                </ul>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Data Processing and Privacy</h2>
                
                <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Document Processing</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  When you upload documents for processing:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                  <li>Documents are processed in-memory and immediately deleted</li>
                  <li>We do not store or retain document content after processing</li>
                  <li>Extracted data is returned to you and may be cached briefly for performance</li>
                  <li>You retain all rights and ownership of your documents and extracted data</li>
                </ul>

                <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Data Responsibility</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  You are responsible for ensuring that:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                  <li>You have the legal right to process all uploaded documents</li>
                  <li>You comply with applicable data protection laws (GDPR, CCPA, etc.)</li>
                  <li>You obtain necessary consents for personal data processing</li>
                  <li>You implement appropriate security measures for extracted data</li>
                </ul>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">API Usage and Rate Limits</h2>
                
                <p className="text-slate-700 leading-relaxed mb-4">
                  API usage is subject to the following terms:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                  <li>Rate limits apply based on your subscription plan</li>
                  <li>API keys must be kept secure and not shared publicly</li>
                  <li>We may monitor API usage for abuse and optimization</li>
                  <li>Excessive usage may result in temporary restrictions</li>
                  <li>We reserve the right to modify rate limits with reasonable notice</li>
                </ul>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Billing and Payments</h2>
                
                <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Subscription Plans</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  We offer various subscription plans with different features and usage limits. 
                  By subscribing to a paid plan, you agree to pay all charges associated with your plan.
                </p>

                <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Payment Terms</h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                  <li>Payments are charged in advance on a monthly or annual basis</li>
                  <li>All payments are non-refundable except as required by law</li>
                  <li>We may change pricing with 30 days' notice</li>
                  <li>Failure to pay may result in account suspension</li>
                  <li>You are responsible for all applicable taxes</li>
                </ul>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Intellectual Property</h2>
                
                <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Our Rights</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  The Service and its original content, features, and functionality are owned by Parscade, Inc. 
                  and are protected by international copyright, trademark, patent, trade secret, and other 
                  intellectual property laws.
                </p>

                <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Your Rights</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  You retain all rights to your documents and extracted data. By using our Service, you grant 
                  us a limited license to process your documents solely for the purpose of providing our services.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Service Availability</h2>
                
                <p className="text-slate-700 leading-relaxed mb-4">
                  We strive to maintain high availability but cannot guarantee uninterrupted service. 
                  We may perform maintenance, updates, or modifications that temporarily affect service availability. 
                  We are not liable for any downtime or service interruptions.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Disclaimers</h2>
                
                <p className="text-slate-700 leading-relaxed mb-4">
                  THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND. 
                  WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES 
                  OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>
                
                <p className="text-slate-700 leading-relaxed mb-4">
                  While we strive for accuracy, we do not guarantee that document parsing results will be 
                  100% accurate or error-free. You should verify extracted data for critical applications.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Limitation of Liability</h2>
                
                <p className="text-slate-700 leading-relaxed mb-4">
                  IN NO EVENT SHALL PARSCADE, INC., ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, 
                  OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE 
                  DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER 
                  INTANGIBLE LOSSES, RESULTING FROM YOUR USE OF THE SERVICE.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Indemnification</h2>
                
                <p className="text-slate-700 leading-relaxed mb-4">
                  You agree to indemnify and hold harmless Parscade, Inc. and its affiliates from any claims, 
                  damages, or expenses arising from your use of the Service, violation of these Terms, or 
                  infringement of any rights of another party.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Governing Law</h2>
                
                <p className="text-slate-700 leading-relaxed mb-4">
                  These Terms are governed by and construed in accordance with the laws of the State of California, 
                  without regard to its conflict of law provisions. Any disputes arising from these Terms or the 
                  Service shall be resolved in the federal or state courts of California.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Changes to Terms</h2>
                
                <p className="text-slate-700 leading-relaxed mb-4">
                  We reserve the right to modify these Terms at any time. We will provide notice of material 
                  changes by posting the updated Terms on our website and updating the "Last updated" date. 
                  Your continued use of the Service after changes become effective constitutes acceptance of the new Terms.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Contact Information</h2>
                
                <p className="text-slate-700 leading-relaxed mb-4">
                  If you have questions about these Terms, please contact us:
                </p>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <p className="text-slate-700 mb-2">
                    <strong>Email:</strong> legal@parscade.com
                  </p>
                  <p className="text-slate-700 mb-2">
                    <strong>Address:</strong> Parscade, Inc.<br />
                    123 Legal Street<br />
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
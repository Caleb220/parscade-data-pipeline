import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Copy, Check, Terminal, Code2, Play } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const codeExamples = {
  curl: {
    upload: `curl -X POST https://api.parscade.com/v1/parse \\
  -H "Authorization: Bearer pk_live_..." \\
  -H "Content-Type: multipart/form-data" \\
  -F "file=@invoice.pdf" \\
  -F "schema=invoice"`,
    response: `{
  "id": "parse_abc123",
  "status": "completed",
  "data": {
    "invoice_number": "INV-2024-001",
    "date": "2024-03-15",
    "amount": 1250.00,
    "vendor": "Acme Corp",
    "line_items": [
      {
        "description": "Web Development",
        "quantity": 1,
        "price": 1250.00
      }
    ]
  },
  "confidence": 0.98,
  "processing_time": 1.2
}`,
  },
  javascript: {
    upload: `import { Parscade } from '@parscade/sdk';

const client = new Parscade('pk_live_...');
const documentFile = new File([], 'invoice.pdf');

// Parse a document
const parseResult = await client.parse({
  file: documentFile,
  schema: 'invoice',
  confidence: 0.95
});

console.log('Parsed data:', parseResult.data);

// Set up webhook listener
client.onWebhook('parse.completed', (data) => {
  console.log('Document parsed:', data);
});`,
    response: `{
  id: "parse_abc123",
  status: "completed",
  data: {
    invoice_number: "INV-2024-001",
    date: "2024-03-15",
    amount: 1250.00,
    vendor: "Acme Corp",
    line_items: [
      {
        description: "Web Development",
        quantity: 1,
        price: 1250.00
      }
    ]
  },
  confidence: 0.98,
  processing_time: 1.2
}`,
  },
  python: {
    upload: `from parscade import Client

client = Client('pk_live_...')

# Parse a document
parse_result = client.parse(
    file='invoice.pdf',
    schema='invoice',
    confidence=0.95
)

print(f"Parsed data: {parse_result.data}")

# Batch processing
batch_results = client.parse_batch([
    'invoice1.pdf',
    'invoice2.pdf',
    'invoice3.pdf'
], schema='invoice')

for item in batch_results:
    print(f"Invoice {item.data['invoice_number']}: ${item.data['amount']}")`,
    response: `{
  'id': 'parse_abc123',
  'status': 'completed',
  'data': {
    'invoice_number': 'INV-2024-001',
    'date': '2024-03-15',
    'amount': 1250.00,
    'vendor': 'Acme Corp',
    'line_items': [
      {
        'description': 'Web Development',
        'quantity': 1,
        'price': 1250.00
      }
    ]
  },
  'confidence': 0.98,
  'processing_time': 1.2
}`,
  },
};

const quickLinks = [
  { title: 'Authentication', href: '#authentication' },
  { title: 'Upload Document', href: '#upload' },
  { title: 'Check Status', href: '#status' },
  { title: 'Get Results', href: '#results' },
  { title: 'Webhooks', href: '#webhooks' },
  { title: 'Error Handling', href: '#errors' },
];

export default function DocsPage() {
  const [activeLanguage, setActiveLanguage] = useState<keyof typeof codeExamples>('curl');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <>
      <Helmet>
        <title>Getting Started - Documentation | Parscade</title>
        <meta 
          name="description" 
          content="Get started with Parscade in minutes. Complete API documentation with code examples in cURL, JavaScript, and Python." 
        />
        <meta name="keywords" content="parscade documentation, API docs, document parsing API, getting started guide" />
        <link rel="canonical" href="https://parscade.com/docs/getting-started" />
        
        <meta property="og:title" content="Getting Started - Documentation | Parscade" />
        <meta property="og:description" content="Get started with Parscade in minutes. Complete API documentation with code examples." />
        <meta property="og:url" content="https://parscade.com/docs/getting-started" />
      </Helmet>

      <div className="min-h-screen bg-slate-50">
        {/* Hero Section */}
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="container-section">
            <motion.div
              className="max-w-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center space-x-2 text-sm text-slate-500 mb-4">
                <span>Documentation</span>
                <span>/</span>
                <span className="text-primary-600">Getting Started</span>
              </div>
              
              <h1 className="text-4xl font-bold text-slate-900 mb-4">
                Getting Started with Parscade
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed">
                Start parsing documents in minutes with our simple API. No complex setup required.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="container-section py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-3">Quick Links</h3>
                  <ul className="space-y-2">
                    {quickLinks.map((link) => (
                      <li key={link.title}>
                        <a
                          href={link.href}
                          className="text-slate-600 hover:text-primary-600 transition-colors text-sm"
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 mb-3">Language</h3>
                  <div className="space-y-2">
                    {Object.keys(codeExamples).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => setActiveLanguage(lang as keyof typeof codeExamples)}
                        className={`block w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                          activeLanguage === lang
                            ? 'bg-primary-50 text-primary-700 border border-primary-200'
                            : 'text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        {lang === 'curl' ? 'cURL' : lang === 'javascript' ? 'JavaScript' : 'Python'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-12">
              {/* Authentication */}
              <section id="authentication">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Authentication</h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    All API requests require authentication using your API key. Include it in the Authorization header
                    as a Bearer token.
                  </p>
                  
                  <Card>
                    <CardContent className="p-0">
                      <div className="bg-slate-900 text-slate-300 p-4 rounded-t-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Authentication Header</span>
                          <button
                            onClick={() => copyToClipboard('Authorization: Bearer pk_live_...', 'auth')}
                            className="p-1 hover:bg-slate-700 rounded transition-colors"
                          >
                            {copiedCode === 'auth' ? (
                              <Check className="w-4 h-4 text-green-400" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                        <code className="text-sm">Authorization: Bearer pk_live_...</code>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                    <p className="text-amber-800 text-sm">
                      <strong>Note:</strong> Keep your API keys secure and never expose them in client-side code.
                      Use environment variables or secure key management systems.
                    </p>
                  </div>
                </motion.div>
              </section>

              {/* Upload Document */}
              <section id="upload">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Upload & Parse Document</h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Upload a document and specify a schema to extract structured data. The API will process
                    the document and return the extracted data along with confidence scores.
                  </p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center text-lg">
                          <Terminal className="w-5 h-5 mr-2" />
                          Request
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-0">
                        <div className="bg-slate-900 text-slate-300 p-4 rounded-b-lg">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium">
                              {activeLanguage === 'curl' ? 'cURL' : 
                               activeLanguage === 'javascript' ? 'JavaScript' : 'Python'}
                            </span>
                            <button
                              onClick={() => copyToClipboard(codeExamples[activeLanguage].upload, 'upload')}
                              className="p-1 hover:bg-slate-700 rounded transition-colors"
                            >
                              {copiedCode === 'upload' ? (
                                <Check className="w-4 h-4 text-green-400" />
                              ) : (
                                <Copy className="w-4 h-4" />
                              )}
                            </button>
                          </div>
                          <pre className="text-sm overflow-x-auto">
                            <code>{codeExamples[activeLanguage].upload}</code>
                          </pre>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center text-lg">
                          <Code2 className="w-5 h-5 mr-2" />
                          Response
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-0">
                        <div className="bg-slate-900 text-slate-300 p-4 rounded-b-lg">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium">JSON Response</span>
                            <button
                              onClick={() => copyToClipboard(codeExamples[activeLanguage].response, 'response')}
                              className="p-1 hover:bg-slate-700 rounded transition-colors"
                            >
                              {copiedCode === 'response' ? (
                                <Check className="w-4 h-4 text-green-400" />
                              ) : (
                                <Copy className="w-4 h-4" />
                              )}
                            </button>
                          </div>
                          <pre className="text-sm overflow-x-auto">
                            <code>{codeExamples[activeLanguage].response}</code>
                          </pre>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              </section>

              {/* Parameters */}
              <section>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Request Parameters</h2>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full bg-white border border-slate-200 rounded-lg">
                      <thead className="bg-slate-50">
                        <tr>
                          <th className="px-4 py-3 text-left font-semibold text-slate-900">Parameter</th>
                          <th className="px-4 py-3 text-left font-semibold text-slate-900">Type</th>
                          <th className="px-4 py-3 text-left font-semibold text-slate-900">Required</th>
                          <th className="px-4 py-3 text-left font-semibold text-slate-900">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t border-slate-200">
                          <td className="px-4 py-3 font-mono text-sm text-slate-700">file</td>
                          <td className="px-4 py-3 text-slate-600">file</td>
                          <td className="px-4 py-3">
                            <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded">Required</span>
                          </td>
                          <td className="px-4 py-3 text-slate-600">Document file to parse (PDF, PNG, JPEG, TIFF)</td>
                        </tr>
                        <tr className="border-t border-slate-200">
                          <td className="px-4 py-3 font-mono text-sm text-slate-700">schema</td>
                          <td className="px-4 py-3 text-slate-600">string</td>
                          <td className="px-4 py-3">
                            <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded">Required</span>
                          </td>
                          <td className="px-4 py-3 text-slate-600">Schema name (e.g., 'invoice', 'receipt', 'form')</td>
                        </tr>
                        <tr className="border-t border-slate-200">
                          <td className="px-4 py-3 font-mono text-sm text-slate-700">confidence</td>
                          <td className="px-4 py-3 text-slate-600">float</td>
                          <td className="px-4 py-3">
                            <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">Optional</span>
                          </td>
                          <td className="px-4 py-3 text-slate-600">Minimum confidence threshold (0.0-1.0, default: 0.8)</td>
                        </tr>
                        <tr className="border-t border-slate-200">
                          <td className="px-4 py-3 font-mono text-sm text-slate-700">webhook_url</td>
                          <td className="px-4 py-3 text-slate-600">string</td>
                          <td className="px-4 py-3">
                            <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">Optional</span>
                          </td>
                          <td className="px-4 py-3 text-slate-600">URL to receive processing completion notifications</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              </section>

              {/* Next Steps */}
              <section>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Next Steps</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card hover>
                      <CardHeader>
                        <CardTitle>Custom Schemas</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-600 mb-4">
                          Learn how to create custom schemas for your specific document types.
                        </p>
                        <Button variant="outline" size="sm">
                          View Guide
                        </Button>
                      </CardContent>
                    </Card>

                    <Card hover>
                      <CardHeader>
                        <CardTitle>Webhook Setup</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-600 mb-4">
                          Configure webhooks to receive real-time processing notifications.
                        </p>
                        <Button variant="outline" size="sm">
                          Configure Webhooks
                        </Button>
                      </CardContent>
                    </Card>

                    <Card hover>
                      <CardHeader>
                        <CardTitle>SDKs & Libraries</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-600 mb-4">
                          Download official SDKs for Python, JavaScript, and other languages.
                        </p>
                        <Button variant="outline" size="sm">
                          Download SDKs
                        </Button>
                      </CardContent>
                    </Card>

                    <Card hover>
                      <CardHeader>
                        <CardTitle>API Reference</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-600 mb-4">
                          Complete API documentation with all endpoints and parameters.
                        </p>
                        <Button variant="outline" size="sm">
                          API Reference
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';

const footerNavigation = {
  product: [
    { name: 'Features', href: '/product' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Security', href: '/security' },
    { name: 'Integrations', href: '/product#integrations' },
  ],
  resources: [
    { name: 'Documentation', href: '/docs/getting-started' },
    { name: 'API Reference', href: '/docs/api' },
    { name: 'Blog', href: '/blog' },
    { name: 'Support', href: '/contact' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'Partners', href: '/partners' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/legal/privacy' },
    { name: 'Terms of Service', href: '/legal/terms' },
    { name: 'Cookie Policy', href: '/legal/cookies' },
    { name: 'GDPR', href: '/legal/gdpr' },
  ],
};

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/parscade',
    icon: Github,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/parscade',
    icon: Twitter,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/parscade',
    icon: Linkedin,
  },
  {
    name: 'Email',
    href: 'mailto:hello@parscade.com',
    icon: Mail,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300" role="contentinfo">
      <div className="container-section py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <Logo variant="full" size="md" className="brightness-0 invert mb-4" />
            <p className="text-slate-400 leading-relaxed mb-6">
              Transform unstructured documents into clean, actionable data with AI-powered parsing and validation.
            </p>
            
            {/* Social links */}
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded"
                  aria-label={item.name}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation sections */}
          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-3">
                {footerNavigation.product.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                {footerNavigation.resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                {footerNavigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-3">
                {footerNavigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <p className="text-slate-400 text-sm">
              © {currentYear} Parscade, Inc. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-4 text-sm text-slate-400">
              <span>Made with ❤️ for developers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
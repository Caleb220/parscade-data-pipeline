import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Page Not Found - Parscade</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Parscade home or explore our documentation." />
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* 404 Illustration */}
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary-500 to-secondary-600 rounded-full flex items-center justify-center mb-6">
                <Search className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-6xl font-bold text-slate-900 mb-4">404</h1>
              <h2 className="text-2xl font-semibold text-slate-700 mb-2">Page not found</h2>
              <p className="text-slate-600 leading-relaxed">
                The page you're looking for doesn't exist or has been moved.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button variant="primary" size="lg" asChild className="w-full">
                <Link to="/">
                  <Home className="w-4 h-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
              
              <Button variant="outline" size="md" asChild className="w-full">
                <Link to="/docs/getting-started">
                  <Search className="w-4 h-4 mr-2" />
                  Browse Documentation
                </Link>
              </Button>
              
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center text-slate-600 hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 rounded"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go back
              </button>
            </div>

            {/* Helpful Links */}
            <div className="mt-8 pt-8 border-t border-slate-200">
              <p className="text-sm text-slate-500 mb-4">Looking for something specific?</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Link to="/product" className="text-primary-600 hover:underline">
                  Product
                </Link>
                <Link to="/pricing" className="text-primary-600 hover:underline">
                  Pricing
                </Link>
                <Link to="/docs/getting-started" className="text-primary-600 hover:underline">
                  Documentation
                </Link>
                <Link to="/contact" className="text-primary-600 hover:underline">
                  Contact
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
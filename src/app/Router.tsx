import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from './ErrorBoundary';
import { Layout } from './Layout';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

// Lazy load pages for code splitting
const HomePage = React.lazy(() => import('@/pages/HomePage'));
const ProductPage = React.lazy(() => import('@/pages/ProductPage'));
const PricingPage = React.lazy(() => import('@/pages/PricingPage'));
const DocsPage = React.lazy(() => import('@/pages/DocsPage'));
const SecurityPage = React.lazy(() => import('@/pages/SecurityPage'));
const AboutPage = React.lazy(() => import('@/pages/AboutPage'));
const ContactPage = React.lazy(() => import('@/pages/ContactPage'));
const BlogPage = React.lazy(() => import('@/pages/BlogPage'));
const PrivacyPage = React.lazy(() => import('@/pages/PrivacyPage'));
const TermsPage = React.lazy(() => import('@/pages/TermsPage'));
const NotFoundPage = React.lazy(() => import('@/pages/NotFoundPage'));

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/docs/getting-started" element={<DocsPage />} />
      <Route path="/security" element={<SecurityPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/legal/privacy" element={<PrivacyPage />} />
      <Route path="/legal/terms" element={<TermsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export function Router() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <Layout>
            <Suspense fallback={<LoadingSpinner />}>
              <ErrorBoundary>
                <AppRoutes />
              </ErrorBoundary>
            </Suspense>
          </Layout>
        </ErrorBoundary>
      </BrowserRouter>
    </HelmetProvider>
  );
}
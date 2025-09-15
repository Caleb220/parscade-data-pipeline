import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Zap } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { Button } from '@/components/ui/Button';
import { useUIStore } from '@/store/ui';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Product', href: '/product' },
  { name: 'Pricing', href: '/pricing' },
  { 
    name: 'Resources', 
    href: '#',
    dropdown: [
      { name: 'Documentation', href: '/docs/getting-started', icon: '📚' },
      { name: 'Security', href: '/security', icon: '🛡️' },
      { name: 'Blog', href: '/blog', icon: '📝' },
    ]
  },
  { name: 'About', href: '/about' },
];

export function Header() {
  const location = useLocation();
  const { isMobileMenuOpen, setMobileMenuOpen } = useUIStore();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActivePath = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.header
      className={cn(
        'fixed left-0 right-0 z-[100] transition-all duration-300',
        scrolled 
          ? 'bg-white border-b border-gray-200 shadow-lg' 
          : 'bg-white',
        'top-12' // Leave space for announcement bar
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 group" aria-label="Parscade home">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative flex items-center"
            >
              <Logo 
                variant="full" 
                size="md" 
                className="group-hover:scale-105 transition-all duration-300 brightness-100 contrast-100" 
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" role="navigation">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={cn(
                        'flex items-center space-x-2 text-gray-700 hover:text-primary-600 font-medium transition-all duration-300',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-electric focus-visible:ring-offset-2 focus-visible:ring-offset-dark-950 rounded-lg px-3 py-2',
                        'hover:bg-gray-100'
                      )}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={cn(
                        'w-4 h-4 transition-transform duration-200',
                        activeDropdown === item.name && 'rotate-180'
                      )} />
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-200 py-2 overflow-hidden"
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-gray-100 transition-all duration-200"
                            >
                              <span className="text-lg">{dropdownItem.icon}</span>
                              <span className="font-medium">{dropdownItem.name}</span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={cn(
                      'text-gray-700 hover:text-primary-600 font-medium transition-all duration-300 px-3 py-2 rounded-lg',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-electric focus-visible:ring-offset-2 focus-visible:ring-offset-dark-950',
                      'hover:bg-gray-100',
                      isActivePath(item.href) && 'text-primary-600 bg-gray-100'
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 rounded-lg px-3 py-2"
            >
              Contact
            </Link>
            <Button variant="electric" size="md">
              Start now
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 rounded-lg"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden border-t border-gray-200 bg-white"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6 space-y-2" role="navigation">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <div className="text-gray-900 font-semibold py-3 text-lg">{item.name}</div>
                      <div className="pl-4 space-y-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="flex items-center space-x-3 text-gray-700 hover:text-primary-600 py-2 transition-colors duration-200"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <span>{dropdownItem.icon}</span>
                            <span>{dropdownItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={cn(
                        'block text-gray-700 hover:text-primary-600 font-semibold py-3 text-lg transition-colors duration-200',
                        isActivePath(item.href) && 'text-primary-600'
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-6 space-y-4 border-t border-gray-200">
                <Link
                  to="/contact"
                  className="block text-gray-700 hover:text-primary-600 font-semibold py-2 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Button variant="electric" size="md" className="w-full">
                  Start now
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useUIStore } from '@/store/ui';

export function AnnouncementBar() {
  const { isAnnouncementDismissed, dismissAnnouncement } = useUIStore();

  if (isAnnouncementDismissed) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white fixed top-0 left-0 right-0 z-[101]"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container-section">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-2 flex-1 justify-center">
              <span className="text-sm font-medium">
                🎉 New: Multi-language document parsing now available!
              </span>
              <Link
                to="/product"
                className="flex items-center space-x-1 text-sm font-semibold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-600 rounded"
              >
                <span>Learn more</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            
            <button
              onClick={dismissAnnouncement}
              className="absolute right-4 text-white/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-600 rounded"
              aria-label="Dismiss announcement"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
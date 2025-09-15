import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function LoadingSpinner({ size = 'md', className }: LoadingSpinnerProps) {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <motion.div
        className={cn(
          'border-4 border-slate-200 border-t-primary-500 rounded-full',
          sizes[size],
          className
        )}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear',
        }}
        aria-label="Loading..."
      />
    </div>
  );
}
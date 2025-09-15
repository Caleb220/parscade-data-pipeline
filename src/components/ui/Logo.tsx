import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LogoProps {
  variant?: 'mark' | 'full';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Logo({ variant = 'full', size = 'md', className }: LogoProps) {
  const sizes = {
    sm: variant === 'mark' ? 'h-6 w-6' : 'h-6',
    md: variant === 'mark' ? 'h-8 w-8' : 'h-8',
    lg: variant === 'mark' ? 'h-12 w-12' : 'h-12',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-3xl',
  };

  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  if (variant === 'full') {
    return (
      <motion.div 
        className={cn('flex items-center group', className)}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        {/* Icon */}
        <div className={cn(
          'relative rounded-xl flex items-center justify-center mr-3 shadow-lg group-hover:shadow-xl transition-all duration-300',
          'bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600',
          'group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-purple-700',
          iconSizes[size]
        )}>
          {/* Subtle inner glow */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent opacity-50" />
          
          {/* Letter P */}
          <span className={cn(
            'relative font-black text-white tracking-tight',
            size === 'sm' ? 'text-sm' : size === 'md' ? 'text-lg' : 'text-2xl'
          )}>
            P
          </span>
        </div>
        
        {/* Text */}
        <div className="flex flex-col">
          <span className={cn(
            'font-bold tracking-tight leading-none',
            'bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent',
            'group-hover:from-slate-900 group-hover:to-slate-700 transition-all duration-300',
            textSizes[size]
          )}>
            Parscade
          </span>
          {size === 'lg' && (
            <span className="text-xs text-slate-500 font-medium tracking-wide uppercase mt-0.5">
              Document AI
            </span>
          )}
        </div>
      </motion.div>
    );
  }

  // Mark only version
  return (
    <motion.div 
      className={cn(
        'relative rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300',
        'bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600',
        'hover:from-blue-600 hover:via-purple-600 hover:to-purple-700',
        'group cursor-pointer',
        iconSizes[size],
        className
      )}
      whileHover={{ scale: 1.05, rotate: 2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {/* Subtle inner glow */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent opacity-50" />
      
      {/* Letter P */}
      <span className={cn(
        'relative font-black text-white tracking-tight',
        size === 'sm' ? 'text-sm' : size === 'md' ? 'text-lg' : 'text-2xl'
      )}>
        P
      </span>
      
      {/* Hover effect ring */}
      <div className="absolute inset-0 rounded-xl ring-2 ring-blue-400/0 group-hover:ring-blue-400/30 transition-all duration-300" />
    </motion.div>
  );
}
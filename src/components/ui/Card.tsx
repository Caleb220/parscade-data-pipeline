import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ 
  children, 
  className, 
  hover = false
}: CardProps) {
  const cardVariants = {
    initial: { y: 0, boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)' },
    hover: { y: -4, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)' },
  };

  return (
    <motion.div
      className={cn(
        'bg-white border border-gray-200 rounded-xl p-6',
        hover && 'cursor-pointer',
        'transition-all duration-300',
        className
      )}
      variants={hover ? cardVariants : undefined}
      initial="initial"
      whileHover={hover ? 'hover' : undefined}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return (
    <div className={cn('mb-6', className)}>
      {children}
    </div>
  );
}

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function CardTitle({ children, className }: CardTitleProps) {
  return (
    <h3 className={cn(
      'text-xl font-semibold text-gray-900 mb-2', 
      className
    )}>
      {children}
    </h3>
  );
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CardContent({ children, className }: CardContentProps) {
  return (
    <div className={cn('text-gray-600 leading-relaxed', className)}>
      {children}
    </div>
  );
}
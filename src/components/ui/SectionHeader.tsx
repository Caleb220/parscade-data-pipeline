import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  electric?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  description,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      className={cn(
        'max-w-4xl',
        centered && 'mx-auto text-center',
        className
      )}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: '-100px' }}
    >
      {subtitle && (
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            {subtitle}
          </span>
        </motion.div>
      )}
      
      <motion.h2 
        className={cn(
          'text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-gray-900'
        )}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>
      
      {description && (
        <motion.p 
          className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
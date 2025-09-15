import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
  children: React.ReactNode;
  asChild?: boolean;
}

const Slot = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode }
>(({ children, ...props }, ref) => {
  if (React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...props,
      ...children.props,
      ref,
    } as any);
  }
  return <span {...props} ref={ref as any}>{children}</span>;
});
Slot.displayName = 'Slot';

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled,
  className,
  children,
  asChild = false,
  ...props
}: ButtonProps) {
  const variants = {
    primary: 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:from-primary-700 hover:to-secondary-700 shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 shadow-sm',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white',
    ghost: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm font-medium',
    md: 'px-6 py-3 text-base font-semibold',
    lg: 'px-8 py-4 text-lg font-bold',
    xl: 'px-12 py-6 text-xl font-bold',
  };

  const Comp = asChild ? Slot : 'button';

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      <Comp
        className={cn(
          'inline-flex items-center justify-center rounded-lg transition-all duration-200',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
          variants[variant],
          sizes[size],
          className
        )}
        disabled={disabled || loading}
        aria-disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <motion.div
            className="mr-3 h-5 w-5 border-2 border-current border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            aria-hidden="true"
          />
        )}
        {children}
      </Comp>
    </motion.div>
  );
}
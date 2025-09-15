import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Button } from '../ui/Button';

describe('Button', () => {
  it('renders with children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('handles click events', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    
    render(<Button onClick={handleClick}>Click me</Button>);
    
    await user.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('shows loading state', () => {
    render(<Button loading>Loading button</Button>);
    
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('aria-disabled', 'true');
  });

  it('applies correct variant styles', () => {
    const { rerender } = render(<Button variant="primary">Primary</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-gradient-to-r');
    
    rerender(<Button variant="outline">Outline</Button>);
    expect(screen.getByRole('button')).toHaveClass('border-2');
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled button</Button>);
    
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('aria-disabled', 'true');
  });

  it('has proper focus styles for accessibility', () => {
    render(<Button>Focus test</Button>);
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass('focus-visible:outline-none');
    expect(button).toHaveClass('focus-visible:ring-2');
  });
});
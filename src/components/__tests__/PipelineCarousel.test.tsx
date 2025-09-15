import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { PipelineCarousel } from '../PipelineCarousel';

// Mock the UI store
vi.mock('@/store/ui', () => ({
  useUIStore: () => ({
    pipelineStep: 0,
    setPipelineStep: vi.fn(),
    isPipelinePlaying: true,
    setPipelinePlaying: vi.fn(),
    reducedMotion: false,
  }),
}));

// Mock embla carousel
vi.mock('embla-carousel-react', () => ({
  default: () => [vi.fn(), null],
}));

describe('PipelineCarousel', () => {
  it('renders all pipeline steps', () => {
    render(<PipelineCarousel />);
    
    expect(screen.getByText('Ingest')).toBeInTheDocument();
    expect(screen.getByText('Extract')).toBeInTheDocument();
    expect(screen.getByText('Validate')).toBeInTheDocument();
    expect(screen.getByText('Deliver')).toBeInTheDocument();
  });

  it('renders navigation dots', () => {
    render(<PipelineCarousel />);
    
    const dots = screen.getAllByRole('button');
    expect(dots).toHaveLength(4);
    
    // Check first dot has accessible label
    expect(dots[0]).toHaveAttribute('aria-label', 'Go to Ingest step');
  });

  it('shows progress bar', () => {
    render(<PipelineCarousel />);
    
    // Progress bar container
    expect(screen.getByRole('presentation', { hidden: true })).toBeInTheDocument();
  });

  it('has proper ARIA labels for accessibility', () => {
    render(<PipelineCarousel />);
    
    const buttons = screen.getAllByRole('button');
    buttons.forEach((button, index) => {
      const steps = ['Ingest', 'Extract', 'Validate', 'Deliver'];
      expect(button).toHaveAttribute('aria-label', `Go to ${steps[index]} step`);
    });
  });

  it('handles keyboard navigation', async () => {
    const user = userEvent.setup();
    render(<PipelineCarousel />);
    
    const firstDot = screen.getByLabelText('Go to Ingest step');
    await user.click(firstDot);
    
    // Should focus the button
    expect(firstDot).toHaveFocus();
  });
});
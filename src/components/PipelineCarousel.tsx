import React, { useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { FileText, Database, CheckCircle, Send, Zap, Brain, Shield, Rocket } from 'lucide-react';
import { useUIStore } from '@/store/ui';
import { cn } from '@/lib/utils';

interface PipelineStep {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  features: string[];
}

const pipelineSteps: PipelineStep[] = [
  {
    id: 'batch',
    title: 'Batch',
    subtitle: 'Process Multiple Documents',
    description: 'Upload and process thousands of documents simultaneously with intelligent queuing and parallel processing.',
    icon: FileText,
    gradient: 'from-primary-500 to-primary-600',
    features: ['Bulk upload', 'Parallel processing', 'Queue management', 'Progress tracking'],
  },
  {
    id: 'sync',
    title: 'Sync',
    subtitle: 'Real-time Processing',
    description: 'Process documents instantly with real-time API calls for immediate data extraction and validation.',
    icon: Database,
    gradient: 'from-secondary-500 to-secondary-600',
    features: ['Instant processing', 'Real-time API', 'Live validation', 'Immediate results'],
  },
  {
    id: 'stream',
    title: 'Stream',
    subtitle: 'Continuous Data Flow',
    description: 'Set up continuous document streams with webhooks and automated workflows for seamless integration.',
    icon: Send,
    gradient: 'from-accent-teal to-accent-emerald',
    features: ['Webhook integration', 'Auto workflows', 'Stream processing', 'Event triggers'],
  },
  {
    id: 'model',
    title: 'Model',
    subtitle: 'Custom AI Training',
    description: 'Train custom models on your specific document types for maximum accuracy and specialized extraction.',
    icon: CheckCircle,
    gradient: 'from-accent-amber to-accent-orange',
    features: ['Custom training', 'Domain-specific', 'High accuracy', 'Specialized models'],
  },
];

export function PipelineCarousel() {
  const { 
    pipelineStep, 
    setPipelineStep, 
    isPipelinePlaying, 
    setPipelinePlaying,
    reducedMotion 
  } = useUIStore();

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    skipSnaps: false,
    duration: reducedMotion ? 0 : 30,
  });

  const autoplayRef = useRef<NodeJS.Timeout>();

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) {
        emblaApi.scrollTo(index);
        setPipelineStep(index);
      }
    },
    [emblaApi, setPipelineStep]
  );

  const startAutoplay = useCallback(() => {
    if (reducedMotion) return;
    
    setPipelinePlaying(true);
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    
    autoplayRef.current = setInterval(() => {
      const nextStep = (pipelineStep + 1) % pipelineSteps.length;
      scrollTo(nextStep);
    }, 4000); // Faster transitions
  }, [pipelineStep, scrollTo, setPipelinePlaying, reducedMotion]);

  const stopAutoplay = useCallback(() => {
    setPipelinePlaying(false);
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = undefined;
    }
  }, [setPipelinePlaying]);

  useEffect(() => {
    if (!reducedMotion) {
      startAutoplay();
    }
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay, reducedMotion]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setPipelineStep(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi, setPipelineStep]);

  return (
    <div className="w-full" data-testid="pipeline-carousel">
      {/* Main Carousel */}
      <div
        ref={emblaRef}
        className="overflow-hidden rounded-2xl bg-white shadow-xl border border-gray-200"
        onMouseEnter={stopAutoplay}
        onMouseLeave={startAutoplay}
      >
        <div className="flex">
          {pipelineSteps.map((step, index) => (
            <div key={step.id} className="flex-[0_0_100%] min-w-0">
              <PipelineSlide step={step} index={index} isActive={index === pipelineStep} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation System */}
      <div className="mt-12 space-y-8">
        {/* Step Indicators */}
        <div className="flex justify-center space-x-4">
          {pipelineSteps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => scrollTo(index)}
              className={cn(
                'px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
                index === pipelineStep
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              )}
              aria-label={`Go to ${step.title} step`}
            >
              {step.title}
            </button>
          ))}
        </div>

        {/* Progress Visualization */}
        <div className="relative">
          {/* Background track */}
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
              style={{ width: `${((pipelineStep + 1) / pipelineSteps.length) * 100}%` }}
              transition={{ duration: reducedMotion ? 0 : 0.5, ease: 'easeInOut' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

interface PipelineSlideProps {
  step: PipelineStep;
  index: number;
  isActive: boolean;
}

function PipelineSlide({ step, index, isActive }: PipelineSlideProps) {
  const { reducedMotion } = useUIStore();

  return (
    <div className="relative min-h-[400px] bg-white overflow-hidden">
      {/* Content */}
      <div className="relative z-10 p-8 h-full flex flex-col lg:flex-row items-center gap-8">
        {/* Icon section */}
        <motion.div
          className="flex-shrink-0"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0.6 }}
          transition={{ duration: reducedMotion ? 0 : 0.5, ease: 'easeOut' }}
        >
          <div className={cn(
            'relative w-24 h-24 rounded-2xl bg-gradient-to-br shadow-lg flex items-center justify-center',
            step.gradient
          )}>
            <step.icon className="w-12 h-12 text-white" />
          </div>
        </motion.div>

        {/* Content section */}
        <motion.div
          className="flex-grow text-center lg:text-left"
          initial={{ x: 20, opacity: 0 }}
          animate={isActive ? { x: 0, opacity: 1 } : { x: 20, opacity: 0.6 }}
          transition={{ duration: reducedMotion ? 0 : 0.5, delay: reducedMotion ? 0 : 0.1 }}
        >
          {/* Title */}
          <h3 className="text-3xl font-bold mb-3 text-gray-900">
              {step.title}
          </h3>
          
          {/* Subtitle */}
          <h4 className="text-lg text-primary-600 font-medium mb-4">
            {step.subtitle}
          </h4>
          
          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-6">
            {step.description}
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-3">
            {step.features.map((feature, featureIndex) => (
              <motion.div
                key={featureIndex}
                className="flex items-center space-x-2"
                initial={{ opacity: 0, x: -10 }}
                animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0.6, x: -10 }}
                transition={{ 
                  delay: reducedMotion ? 0 : 0.2 + featureIndex * 0.05,
                  duration: reducedMotion ? 0 : 0.3 
                }}
              >
                <div className="w-2 h-2 bg-primary-500 rounded-full" />
                <span className="text-gray-600 text-sm">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
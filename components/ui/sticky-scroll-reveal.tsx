'use client';

import React, { useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
  motion as m,
} from 'motion/react';
import { cn } from '@/utils';
import Image from 'next/image';
import { Typography } from './typography';
import { MotionWrapper } from '../hoc/motion-wrapper';

type StickyScrollProps = {
  mainTitle: string;
  mainDescription: string;
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
    image?: string; // Add image property for each content item
  }[];
  contentClassName?: string;
  position?: 'left' | 'right';
};

export const StickyScrollUnused = ({
  mainTitle,
  mainDescription,
  content,
  contentClassName,
  position,
}: StickyScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);

  const { scrollYProgress } = useScroll({
    container: containerRef,
    offset:
      position === 'left'
        ? ['end end', 'start end']
        : ['start start', 'end start'],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const breakpoints = content.map((_, i) => i / cardLength);
    const closest = breakpoints.reduce(
      (acc, bp, i) =>
        Math.abs(latest - bp) < Math.abs(latest - breakpoints[acc]) ? i : acc,
      0,
    );
    setActiveCard(closest);
  });

  return (
    <MotionWrapper variant="slideUp" className="w-full">
      <div className="container mx-auto px-4 relative min-h-[120vh]">
        <motion.div
          ref={containerRef}
          className={cn(
            'relative scrollbar-none w-full justify-center py-10 overflow-y-auto rounded-md flex',
            position === 'left' ? 'flex-row-reverse' : 'flex-row',
          )}
        >
          <div
            className={cn(
              'flex flex-col flex-1',
              position === 'left' ? 'items-end' : 'items-start',
            )}
          >
            {/* Fixed Title & Description */}
            <div
              className={cn(
                'pb-1 relative',
                position === 'left' ? 'items-end ml-28' : 'items-start',
              )}
            >
              <h1 className="text-4xl font-bold">{mainTitle}</h1>
              <Typography variant="paragraph" className="mt-4 text-lg">
                {mainDescription}
              </Typography>
            </div>

            {/* Left Scrollable Cards */}
            <div className="relative ">
              <div className="">
                {content.map((item, index) => (
                  <motion.div key={index} className="my-28">
                    <motion.h2
                      animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                      className="text-2xl font-semibold"
                    >
                      {item.title}
                    </motion.h2>
                    <motion.p
                      animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                      className="mt-5 max-w-sm text-slate-400"
                    >
                      {item.description}
                    </motion.p>
                  </motion.div>
                ))}
                <div className="h-40" />
              </div>
            </div>
          </div>

          {/* Sticky Preview Panel */}
          <div
            style={{}}
            className={cn(
              'h-80 top-0 rounded-2xl bg-white shadow-lg lg:block flex-1 hidden', // removed sticky from here
              position === 'left' ? 'w-60' : 'w-80',
              contentClassName,
            )}
          >
            <div className="relative top-0 h-80 overflow-hidden rounded-lg ">
              {' '}
              <m.div
                key={activeCard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                {content[activeCard].content ?? null}
              </m.div>
              {/* Animated image that changes with activeCard */}
              <AnimatePresence mode="wait">
                <m.div
                  key={content[activeCard].image || 'default-image'}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full flex items-start justify-center pointer-events-none"
                >
                  <Image
                    width={221}
                    height={203}
                    src={
                      content[activeCard].image ||
                      '/assets/images/circleoflines.png'
                    }
                    alt="sticky-preview"
                    className="object-contain h-40 w-auto mt-2"
                  />
                </m.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </MotionWrapper>
  );
};

'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Typography } from '../ui/typography';
import { MotionWrapper } from '../hoc/motion-wrapper';
import { useInView } from 'react-intersection-observer';
import { BadgeCheck } from 'lucide-react';
import { cn } from '@/utils';

const colorVariants = [
  'bg-yellow-100',
  'bg-blue-100',
  'bg-orange-100',
  'bg-green-100',
  'bg-pink-100',
  'bg-purple-100',
  'bg-red-100',
  'bg-teal-100',
  'bg-indigo-100',
  'bg-lime-100',
];

const ModulesLifecycle = ({
  lifecycle: { steps, title },
  moduleShortTitle = 'HRM',
}: {
  lifecycle: _IModulesLIfecycle;
  moduleShortTitle?: string; // Optional prop for module title
}) => {
  const assignedColors = steps.map(
    (_, idx) => colorVariants[idx % colorVariants.length],
  );

  const stepWidth = 300;
  const stepHeight = 60;
  const centerX = 300;
  const totalWidth = 600;

  const getDynamicHeight = () => {
    if (typeof window !== 'undefined' && window.innerWidth <= 640) {
      return 120 + steps.length * (stepHeight + 24);
    }
    return 150 + Math.ceil(steps.length * 70);
  };

  const totalHeight = getDynamicHeight();

  const getStepPosition = (index: number) => {
    if (typeof window !== 'undefined' && window.innerWidth <= 640) {
      return {
        x: centerX - stepWidth / 2,
        y: 60 + index * (stepHeight + 24),
        rotation: 0,
      };
    }
    const totalSteps = steps.length;
    const mid = Math.floor(totalSteps / 2);
    const horizontalStep = 180;
    const verticalStep = 90;
    let x, y;

    if (index <= mid) {
      x = 60 + index * horizontalStep;
      y = 60 + index * verticalStep;
    } else {
      x = 60 + (totalSteps - index - 1) * horizontalStep;
      y = 60 + index * verticalStep;
    }

    return { x, y, rotation: 0 };
  };

  const getArrowPath = (fromIndex: number, toIndex: number) => {
    const from = getStepPosition(fromIndex);
    const to = getStepPosition(toIndex);
    const startX = from.x + stepWidth / 2;
    const startY = from.y + stepHeight / 2;
    const endX = to.x + stepWidth / 2;
    const endY = to.y + stepHeight / 2;

    const segmentFrom = Math.floor((fromIndex / steps.length) * 4);
    const segmentTo = Math.floor((toIndex / steps.length) * 4);

    if (segmentFrom !== segmentTo) {
      const controlX = segmentFrom % 2 === 0 ? endX : startX;
      const controlY = segmentFrom % 2 === 0 ? startY : endY;
      return `M${startX},${startY} Q${controlX},${controlY} ${endX},${endY}`;
    } else {
      return `M${startX},${startY} L${endX},${endY}`;
    }
  };

  const [containerRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
    // rootMargin: "-50px",
  });

  return (
    <MotionWrapper variant="fadeIn">
      <div ref={containerRef} className="container relative">
        <MotionWrapper>
          <Typography variant="title">How {title} Works</Typography>
        </MotionWrapper>

        <MotionWrapper>
          <div
            className="relative flex-1"
            style={{
              width: totalWidth,
              height: totalHeight,
              minHeight: '400px',
              marginBottom: '2rem',
            }}
          >
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {steps.map((_, idx) => {
                const isMobile =
                  typeof window !== 'undefined' && window.innerWidth <= 640;
                if (!isMobile && idx === steps.length - 1) return null;
                const nextIdx = (idx + 1) % steps.length;
                const path = getArrowPath(idx, nextIdx);
                return (
                  <motion.path
                    key={idx}
                    d={path}
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ delay: idx * 0.2, duration: 0.8 }}
                    className="text-gray-400"
                  />
                );
              })}
            </svg>
            {steps.map((step, idx) => {
              const { x, y, rotation } = getStepPosition(idx);
              // Make the middle step wider
              const totalSteps = steps.length;
              const mid = Math.floor(totalSteps / 2);
              const isMiddle = idx === mid;
              const thisStepWidth = isMiddle ? stepWidth + 150 : stepWidth;
              return (
                <motion.div
                  key={idx}
                  className={`absolute rounded-lg px-4 py-2 text-base font-semibold shadow-md flex items-center justify-center ${assignedColors[idx]} z-10`}
                  style={{
                    left: x,
                    top: y,
                    width: thisStepWidth,
                    height: stepHeight,
                    transform: `rotate(${rotation}deg)`,
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                  }
                  transition={{ delay: idx * 0.15 }}
                >
                  <div className="flex items-center gap-2">
                    <span>{step.title}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </MotionWrapper>

        <MotionWrapper>
          <div
            className={cn(
              'flex items-center absolute gap-4 ',
              moduleShortTitle.length > 4
                ? 'bottom-10 right-[18%]'
                : 'bottom-2 right-[22%]',
            )}
          >
            <Typography
              variant="subtitle"
              className={cn(
                '',
                moduleShortTitle.length > 4 ? 'w-[300px]' : ' w-[250px]',
              )}
            >
              InnoX <span className="uppercase">{moduleShortTitle}</span>{' '}
              supports the full <span className="lowercase">{title}</span>!
            </Typography>
            <BadgeCheck className="h-20 w-20 fill-[#FF5200] text-white" />
          </div>
        </MotionWrapper>
      </div>
    </MotionWrapper>
  );
};

export default ModulesLifecycle;

import { cn } from '@/utils';
import { AnimatePresence, motion } from 'motion/react';

import { Dispatch, FC, ReactNode, SetStateAction } from 'react';

interface _IHoveredEffect {
  hoveredIndex: number | null;
  idx: number;
  setHoveredIndex: Dispatch<SetStateAction<number | null>>;
  children: ReactNode;
  className?: string;
}
export const HoverEffect: FC<_IHoveredEffect> = ({
  idx,
  children,
  hoveredIndex,
  setHoveredIndex,
  className,
}) => {
  return (
    <div
      key={idx}
      className={cn('relative group  block p-2 h-full w-full', className)}
      onMouseEnter={() => setHoveredIndex(idx)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <AnimatePresence>
        {hoveredIndex === idx && (
          <motion.span
            className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.15 },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 },
            }}
          />
        )}
      </AnimatePresence>
      {children}
    </div>
  );
};

'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils';

const labelVariants = cva(
  'font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
  {
    variants: {
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base',
      },
      color: {
        default: 'text-neutral-700 dark:text-neutral-200',
        muted: 'text-gray-400 dark:text-gray-500',
        danger: 'text-red-600 dark:text-red-400',
      },
    },
    defaultVariants: {
      size: 'md',
      color: 'default',
    },
  },
);

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> &
  VariantProps<typeof labelVariants>;

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, size, color, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(labelVariants({ size, color }), className)}
      {...props}
    />
  ),
);
Label.displayName = 'Label';

export { Label };

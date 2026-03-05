import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium shadow ring-offset-background transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-primary-foreground shadow-md hover:bg-primary/70 aria-selected:bg-primary/90 aria-selected:text-white',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90 aria-selected:bg-destructive/80 aria-selected:text-white',
        outline:
          'border border-input hover:bg-primary hover:text-primary-foreground aria-selected:bg-primary aria-selected:text-primary-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-selected:bg-secondary/90 aria-selected:text-white',
        ghost:
          'shadow-none hover:bg-accent hover:text-accent-foreground aria-selected:bg-accent aria-selected:text-accent-foreground',
        link: 'text-primary underline-offset-4 shadow-none hover:underline aria-selected:text-primary aria-selected:underline',
        gradient:
          'bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] aria-selected:from-blue-600 aria-selected:to-blue-800 aria-selected:text-white',
      },
      size: {
        default: 'h-8 px-4 py-2',
        sm: 'h-8 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-8 w-8 p-0',
      },
      shadow: {
        default: '',
        md: 'shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
      shadow: 'default',
    },
  },
);
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  as?: React.ElementType;
  textContent?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = 'hover:-translate-y-0.5',
      variant,
      shadow,
      textContent,
      size,
      children,
      href,
      as: Tag = 'button',
      ...props
    },
    ref,
  ) => {
    return (
      <Tag
        ref={ref}
        href={href || undefined}
        className={cn(
          buttonVariants({ variant, size, shadow }),
          className, // <-- merge custom className here
        )}
        {...props}
      >
        {textContent || children}
      </Tag>
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };

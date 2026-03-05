import * as React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils';
import { JSX } from 'react';

// Variants and Colors
export type _TTypographyVariants =
  | 'title'
  | 'subtitle'
  | 'section'
  | 'subheading'
  | 'paragraph'
  | 'span'
  | 'strong'
  | 'em'
  | 'blockquote';

export type TypographyColors =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success'
  | 'warning'
  | 'muted';

// Mapping variants to HTML tags
const variantToElement: Record<
  _TTypographyVariants,
  keyof JSX.IntrinsicElements
> = {
  title: 'h1',
  subtitle: 'h2',
  section: 'h3',
  subheading: 'h4',
  paragraph: 'p',
  span: 'span',
  strong: 'strong',
  em: 'em',
  blockquote: 'blockquote',
};

// Styles
const typographyVariants = cva('', {
  variants: {
    variant: {
      title:
        'scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-6xl text-center',
      subtitle:
        'scroll-m-20 pb-2 text-3xl font-semibold tracking-tight leading-tight',
      section: 'scroll-m-20 text-2xl font-semibold tracking-tight',
      subheading: 'scroll-m-20 text-3xl font-semibold tracking-tight',
      paragraph: 'text-base font-normal leading-7',
      span: 'text-sm font-normal',
      strong: 'font-bold',
      em: 'italic',
      blockquote: 'text-lg italic border-l-4 pl-4',
    },
    color: {
      default: 'text-neutral-700 dark:text-neutral-200',
      primary: 'text-blue-600 dark:text-blue-400',
      secondary: 'text-gray-600 dark:text-gray-300',
      danger: 'text-red-600 dark:text-red-400',
      success: 'text-green-600 dark:text-green-400',
      warning: 'text-yellow-600 dark:text-yellow-400',
      muted: 'text-gray-400 dark:text-gray-300',
    },
  },
  defaultVariants: {
    variant: 'paragraph',
    color: 'default',
  },
});

// Props with inferred element type
interface TypographyProps<T extends _TTypographyVariants = 'paragraph'>
  extends React.HTMLAttributes<(typeof variantToElement)[T]> {
  variant?: _TTypographyVariants;
  color?: TypographyColors;
  as?: T;
}

// ForwardRef with generic element type
const Typography = React.forwardRef(
  <T extends _TTypographyVariants = 'paragraph'>(
    {
      className,
      variant = 'paragraph',
      color = 'default',
      as,
      ...props
    }: TypographyProps<T>,
    ref: React.ForwardedRef<(typeof variantToElement)[T]>,
  ) => {
    const Component = (as ||
      variantToElement[variant] ||
      'p') as React.ElementType;
    return (
      <Component
        ref={ref}
        className={cn(typographyVariants({ variant, color }), className)}
        {...props}
      />
    );
  },
);

Typography.displayName = 'Typography';

export { Typography, typographyVariants };

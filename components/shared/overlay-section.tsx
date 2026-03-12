import React from 'react';
import { cn } from '@/utils';
import { Typography } from '../ui/typography';
import Link from 'next/link';

type OverlaySectionProps = {
  imageSrc: string;
  heading: string;
  subheading: string;
  linkText: string;
  href?: string;
  className?: string;
  contentClassName?: string;
  subheadingClassName?: string;
  direction?: 'left' | 'right';
};

export const OverlaySection = ({
  imageSrc,
  heading,
  subheading,
  linkText,
  href,
  className,
  contentClassName,
  subheadingClassName,
  direction = 'right',
}: OverlaySectionProps) => {
  return (
    <section
      className={cn(
        'relative flex w-full flex-col lg:flex-row items-center justify-between overflow-hidden bg-cover bg-center h-[400px] lg:h-[500px]',
        className,
      )}
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay Content */}
      <div
        className={cn(
          'absolute inset-0 w-full h-full lg:inset-y-0 flex items-center',
          direction === 'left'
            ? 'bg-linear-to-r from-black via-black/70 to-transparent  lg:left-0 justify-start'
            : 'bg-linear-to-r from-transparent via-black/70 to-black lg:right-0 justify-end',
        )}
      >
        <div
          className={cn(
            'text-white container relative flex flex-col',
            direction === 'left' ? 'items-start' : 'items-end',
          )}
        >
          <div
            className={cn(
              'items-start',
              direction === 'left' ? 'max-w-[500px]' : 'max-w-[350px]',
              contentClassName,
            )}
          >
            <h1 className="m-0 p-0 font-semibold text-white text-left text-5xl">
              {heading}
            </h1>
            <Typography
              variant="paragraph"
              className={cn('my-12 text-white', subheadingClassName)}
            >
              {subheading}
            </Typography>
            {href && (
              <Link
                href={href}
                prefetch={false}
                className="rounded-full bg-orange-500 px-6 py-3 text-white font-semibold hover:bg-orange-600 transition"
              >
                {linkText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

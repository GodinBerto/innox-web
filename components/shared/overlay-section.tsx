import React from 'react';
import { cn } from '@/utils';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

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
  eyebrow?: string;
  icon?: React.ElementType;
  featureTags?: string[];
};

const toToken = (value: string) =>
  `#${value.toUpperCase().replace(/[^A-Z0-9]+/g, '_')}`;

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
  eyebrow,
  icon: Icon,
  featureTags = [],
}: OverlaySectionProps) => {
  const isLeft = direction === 'left';
  const tags =
    featureTags.length > 0
      ? featureTags
      : ['Workflow Visibility', 'Task Automation', 'Performance Tracking'];
  const primaryTag = tags[0];
  const secondaryTag = tags[1] || tags[0];
  const tertiaryTag = tags[2] || tags[1] || tags[0];

  return (
    <section
      className={cn(
        'relative isolate w-full overflow-hidden rounded-2xl border border-border bg-background',
        'h-[520px] sm:h-[560px] lg:h-[470px]',
        className,
      )}
    >
      <div
        className={cn(
          'pointer-events-none absolute inset-y-0 w-full lg:w-[52%] -z-10',
          isLeft ? 'right-0' : 'left-0',
        )}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 grayscale contrast-125"
          style={{ backgroundImage: `url(${imageSrc})` }}
        />
        <div className="absolute inset-0 bg-black/30 dark:bg-black/45" />
      </div>

      <div className="grid h-full grid-cols-1 lg:grid-cols-2">
        <div
          className={cn(
            'relative z-20 flex flex-col justify-between bg-white p-6 text-black dark:bg-black dark:text-white sm:p-8 lg:p-10',
            isLeft ? 'lg:order-1' : 'lg:order-2',
            contentClassName,
          )}
        >
          <div>
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-black/15 bg-black/[0.03] px-3 py-2 dark:border-white/15 dark:bg-white/[0.04]">
              {Icon && <Icon className="h-4 w-4 text-[#EF6411]" />}
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/70 dark:text-white/80">
                {eyebrow || 'InnoX Module'}
              </span>
            </div>
            <h2 className="max-w-[560px] text-4xl font-bold leading-[1.02] sm:text-5xl lg:text-6xl">
              {heading}
            </h2>
            <p
              className={cn(
                'mt-6 max-w-[560px] text-sm leading-6 text-black/70 dark:text-white/70 sm:text-base sm:leading-7',
                subheadingClassName,
              )}
            >
              {subheading}
            </p>
          </div>

          {href && (
            <div>
              <Link
                href={href}
                prefetch={false}
                className="inline-flex items-center gap-2 rounded-md border border-[#EF6411]/60 bg-[#EF6411] px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-[#0A1A35] transition hover:bg-[#f0782e]"
              >
                {linkText}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}
        </div>

        <div
          className={cn(
            'relative z-20 hidden lg:block',
            isLeft ? 'lg:order-2' : 'lg:order-1',
          )}
        >
          <div
            className={cn(
              'absolute inset-y-0 w-px bg-white/10',
              isLeft ? 'left-0' : 'right-0',
            )}
          />

          <div
            className={cn(
              'absolute top-8 h-28 w-2 rounded-sm bg-[#EF6411]',
              isLeft ? 'left-8' : 'right-8',
            )}
          />

          <div
            className={cn(
              'absolute top-12 w-[220px] rounded-xl border border-white/14 bg-[#181b1f]/95 p-4 shadow-[0_12px_30px_rgba(0,0,0,0.45)]',
              isLeft ? 'right-10' : 'left-10',
            )}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.13em] text-white/65">
              {toToken(eyebrow || 'InnoX')}
            </p>
            <p className="mt-8 text-right text-sm font-semibold text-white">
              + {secondaryTag}
            </p>
          </div>

          <div
            className={cn(
              'absolute bottom-7 w-[250px] rounded-xl border border-white/14 bg-[#181b1f]/95 p-4 shadow-[0_12px_30px_rgba(0,0,0,0.45)]',
              isLeft ? 'left-10' : 'right-10',
            )}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.13em] text-white/65">
              {toToken(primaryTag)}
            </p>
            <p className="mt-14 text-right text-sm font-semibold text-white">
              + {tertiaryTag}
            </p>
          </div>

          <div
            className={cn(
              'absolute top-1/2 w-[160px] -translate-y-1/2 rounded-xl border border-white/14 bg-[#181b1f]/95 p-3 shadow-[0_12px_30px_rgba(0,0,0,0.45)]',
              isLeft ? 'right-0' : 'left-0',
            )}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-white/65">
              {toToken('Core')}
            </p>
            <p className="mt-6 text-right text-xs font-semibold text-white">
              + InnoX
            </p>
          </div>

          <div
            className={cn(
              'absolute h-24 w-24 rounded-full border border-[#EF6411]/45',
              isLeft ? 'left-4 top-3' : 'right-4 top-3',
            )}
          />

          <div
            className={cn(
              'absolute bottom-8 h-20 w-20 border border-[#EF6411]/35',
              isLeft ? 'right-4' : 'left-4',
            )}
          />

          <div
            className={cn(
              'absolute top-28 h-16 w-16 border border-[#11356D]/55',
              isLeft ? 'left-1/2' : 'right-1/2',
            )}
          />
        </div>
      </div>

      {!href && (
        <div
          className={cn(
            'absolute bottom-6 z-20',
            isLeft
              ? 'left-6 sm:left-8 lg:left-10'
              : 'right-6 sm:right-8 lg:right-10',
          )}
        >
          <p className="text-sm font-semibold text-black/70 dark:text-white/80">
            {linkText}
          </p>
        </div>
      )}
    </section>
  );
};

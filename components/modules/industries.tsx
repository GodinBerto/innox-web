'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ModulePageContent } from '@/types/sanity/schema';
import { urlForImage } from '@/lib/sanity/sanity.image';

type IndustryData = ModulePageContent['industry'];
type IndustryItem = NonNullable<
  NonNullable<IndustryData>['industryItems']
>[number];

// function toPascalCase(value: string) {
//   return value
//     .replace(/^lucide-/, '')
//     .replace(/[^a-zA-Z0-9]+/g, ' ')
//     .split(' ')
//     .filter(Boolean)
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join('');
// }

// function getIconComponent(iconName?: string): LucideIcon {
//   const key = toPascalCase(iconName || 'Building2');
//   const iconMap = Icons as unknown as Record<string, LucideIcon>;
//   return iconMap[key] || Building2;
// }

function splitHeadline(title?: string) {
  const words = title?.trim().split(/\s+/).filter(Boolean) ?? [];

  if (words.length <= 2) {
    return {
      lead: '',
      accent: words.join(' '),
    };
  }

  return {
    lead: words.slice(0, -2).join(' '),
    accent: words.slice(-2).join(' '),
  };
}

export default function IndustrySection({
  data,
}: {
  data?: ModulePageContent['industry'];
}) {
  const items = useMemo(
    () =>
      (data?.industryItems ?? []).filter((item): item is IndustryItem =>
        Boolean(item?.title || item?.description || item?.image),
      ),
    [data?.industryItems],
  );

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (activeIndex > Math.max(items.length - 1, 0)) {
      setActiveIndex(0);
    }
  }, [activeIndex, items.length]);

  useEffect(() => {
    if (items.length <= 1) return;

    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % items.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [items.length]);

  const currentItem = items[activeIndex] ?? items[0];

  if (!items.length) return null;

  const featuredImage =
    currentItem?.image &&
    urlForImage(currentItem.image).width(1400).height(900).url();

  const { lead, accent } = splitHeadline(data?.mainTitle);

  const stats = [
    {
      value: `${items.length}+`,
      label: 'Industry Profiles',
    },
    {
      value: `${items.filter((item) => item.description?.trim()).length}+`,
      label: 'Detailed Briefs',
    },
    {
      value: `${items.filter((item) => item.image).length}+`,
      label: 'Visual Snapshots',
    },
  ];

  return (
    <section className="mx-auto container px-4 py-12 sm:px-6 md:py-16">
      <div className="sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
          <div className="space-y-6">
            <p className="inline-flex rounded-full border border-slate-200 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-600 dark:border-slate-800 dark:bg-slate-950/40 dark:text-slate-300">
              Industries
            </p>

            <div className="space-y-4">
              <h2 className="max-w-xl text-3xl font-semibold leading-tight text-slate-900 dark:text-slate-50 sm:text-4xl lg:text-[2.65rem]">
                {lead ? `${lead} ` : ''}
                <span className="text-orange-500">{accent}</span>
              </h2>

              {data?.mainnDescription && (
                <p className="max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
                  {data.mainnDescription}
                </p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0B63BC]"
              >
                Book a demo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-3 border-t border-slate-200 pt-6 dark:border-slate-800">
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <p className="text-2xl font-semibold text-slate-900 dark:text-slate-50 sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="text-xs leading-5 text-slate-500 dark:text-slate-400 sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900">
            <div className="aspect-16/10">
              <AnimatePresence mode="wait">
                <motion.img
                  key={`featured-${activeIndex}`}
                  src={featuredImage || ''}
                  alt={
                    currentItem?.title || data?.mainTitle || 'Industry feature'
                  }
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="h-full w-full object-cover"
                />
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 border-t border-slate-200 pt-8 dark:border-slate-800 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
              Industry Spotlight
            </p>

            <AnimatePresence mode="wait">
              <motion.h3
                key={`title-${activeIndex}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="text-2xl font-semibold leading-tight text-slate-900 dark:text-slate-50 sm:text-3xl"
              >
                {currentItem?.title || 'Industry overview'}
              </motion.h3>
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.p
              key={`description-${activeIndex}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base"
            >
              {currentItem?.description ||
                data?.mainnDescription ||
                'Explore the industry cards below to see how this module adapts to different operational environments.'}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
          {items.map((item, idx) => {
            // const Icon = getIconComponent(item.iconName);
            const logoSrc =
              item.image &&
              urlForImage(item.image).width(400).height(220).url();
            const isActive = idx === activeIndex;

            return (
              <button
                key={item._key || `${item.title}-${idx}`}
                style={
                  logoSrc ? { backgroundImage: `url("${logoSrc}")` } : undefined
                }
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-pressed={isActive}
                className={`relative min-h-36 overflow-hidden rounded-2xl border bg-cover bg-center bg-no-repeat text-left transition-colors ${
                  isActive
                    ? 'border-orange-500 bg-slate-50 dark:border-[#4EA3FF] dark:bg-slate-900/80'
                    : 'border-slate-200 bg-white hover:border-slate-300 dark:border-slate-800 dark:bg-slate-950/80 dark:hover:border-slate-700'
                }`}
              >
                <div className="absolute inset-0 rounded-2xl bg-black/50 dark:bg-slate-950/65" />
                <div className="relative mt-3 flex h-30 items-end gap-2 p-3">
                  {/* <Icon className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" /> */}
                  <span className="text-sm font-medium leading-6 text-slate-100">
                    {item.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
